<template>
  <div class="space-y-4">
    <h2 class="text-2xl font-bold">Payment Summary</h2>
    <div class="flex justify-between">
      <p>Subtotal</p>
      <p>${{ subtotal }}</p>
    </div>
    <div class="flex justify-between">
      <p>Tax</p>
      <p>${{ tax }}</p>
    </div>
    <hr />
    <div class="flex justify-between">
      <p>Total</p>
      <p>${{ total }}</p>
    </div>
    <button
        :disabled="data.cart.length < 1"
        @click="handleClick"
        class="w-full bg-black text-white text-lg py-2 font-bold rounded-md hover:bg-gray-700 duration-300"
    >
      Order Now
    </button>
  </div>
</template>

<script>
import { useDataStore } from "../../store/DataStore";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

export default {
  props: ["subtotal", "tax", "total"],
  setup() {
    const data = useDataStore();
    const doc = new jsPDF()
    const today = new Date();

    const handleClick = async () => {
        const invoiceNumber = 'INV-001'
        const customerEmail = 'custsomer@ohio.com'

        const items = data.cart

        console.log(items)

        await Promise.all(items.map(async x => {
            await data.updateData(x.id, x.available, x.total, x.sold);
        })) //use promise to make sure we wait for all api to complete

        doc.setFontSize(18)
        doc.text('Invoice', 14, 22)

        doc.setFontSize(12)
        doc.setTextColor(150)
        doc.text(`Invoice Number: ${invoiceNumber}`, 14, 30)
        doc.text(`Invoice Date: ${today.toDateString()}`, 14, 37)

        doc.text(data.customerName, 150, 30)
        doc.text(customerEmail, 150, 37)

        doc.autoTable({
            startY: 60,
            head: [['Name', 'Quantity', 'Price', 'Total']],
            body: items.map(item => [item.name, item.total, item.price, item.price.toFixed(2), (item.quantity * item.price).toFixed(2)]),
            theme: 'striped',
            headStyles: {
                fillColor: [0, 0, 0],
                textColor: [255, 255, 255] 
            },
            styles: {
                fontSize: 12,
                cellPadding: 3,
                align: 'right'
            },
            columnStyles: {
                0: { align: 'left' },
                1: { align: 'left' },
                2: { align: 'right' },
                3: { align: 'right' },
                4: { align: 'right' }
            },
        })
        let subtotal = items.reduce((acc, item) => acc + (item.total * item.itemPrice), 0).toFixed(2)
        let afterTax = subtotal * 1.1
        let vat = subtotal * 10 / 100
        doc.text(`Subtotal: $${subtotal}`, 160, doc.lastAutoTable.finalY + 10)
        doc.text(`VAT 10%: $${vat}`, 160, doc.lastAutoTable.finalY + 20)
        doc.text(`Total: $${afterTax}`, 160, doc.lastAutoTable.finalY + 30)
        doc.save("invoice.pdf"); 
        location.reload()
    };

    return { data, handleClick};
  },
};
</script>
