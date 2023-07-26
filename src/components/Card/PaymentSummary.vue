<template>
    <div class="space-y-4">
        <h2 class="text-2xl font-bold">Payment Summary</h2>
        <div class="flex justify-between">
            <p>Subtotal</p>
            <p>${{subtotal}}</p>
        </div>
        <div class="flex justify-between">
            <p>Tax</p>
            <p>${{tax}}</p>
        </div>
        <hr>
        <div class="flex justify-between">
            <p>Total</p>
            <p>${{total}}</p>
        </div>
        <button class="w-full bg-black text-white text-lg py-2 font-bold rounded-md hover:bg-gray-700 duration-300">Order Now</button>
    </div>
</template>

<script>
import {useDataStore} from '../../store/DataStore';
export default {
    props: ['subtotal', 'tax', 'total'],
    setup() {
        const data = useDataStore();
        return {data}
    }
}
</script>