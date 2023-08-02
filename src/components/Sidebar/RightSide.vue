<template>
  <div :class="{'hidden': getPath === 'history' || getPath == 'manage'}" class="flex flex-col justify-between text-start w-5/12 border-l-2 border-gray-100">
    <div class="px-6 py-12">
      <div>
      <h2 class="text-2xl font-bold mb-8">Order Information</h2>
      <InputBar @change="handleChange" class="mb-8" :value="data.customerName" placeholder="Input Customer Name" />
      <h2 class="text-xl">Order Detail</h2>
      <div class="space-y-2 py-2">
        <div v-for="(x, index) in data.cart" :key="index">
          <OrderCard 
            :name="x.name"
            :price="x.itemPrice"
            :available="x.available"
            :sold="x.sold"
            :total="x.total"
            :id="index"
          />
        </div>
      </div>
    </div>
    </div>
    <div class="fixed bg-white bottom-0 right-0 w-[24%] p-8">
      <PaymentSummary 
        :total="data.calTotal" 
        :subtotal="data.calSub"
        :tax="data.calTax"
      />
    </div>
  </div>
</template>

<script>
import InputBar from '../Input/InputBar.vue'
import OrderCard from '../Card/OrderCard.vue'
import PaymentSummary from '../Card/PaymentSummary.vue'
import {useDataStore} from '../../store/DataStore'

export default {
    components: {
        InputBar,
        OrderCard,
        PaymentSummary
    },
    setup() {
      const data = useDataStore()
      const handleChange = (e) => data.customerName = e.target.value

      const href = window.location.href;
      const path = href.split('/');
      const pathLength = path.length;
      const getPath = path[pathLength - 1];

      return {data, handleChange, getPath}
    }
}
</script>

<style>

</style>