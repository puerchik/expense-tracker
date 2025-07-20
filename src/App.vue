<script setup>
import { computed, ref } from 'vue'

import AddTransaction from './components/AddTransaction.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionList from './components/TransactionList.vue'
import TitleBar from './components/TitleBar.vue'
import Balance from './components/Balance.vue'

const transactions = ref([
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 },
])

const income = computed(() => {
  return +transactions.value
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, c) => acc + c.amount, 0)
})

const expenses = computed(() => {
  return -transactions.value
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, c) => acc + c.amount, 0)
})
</script>

<template>
  <div class="container">
    <title-bar></title-bar>
    <balance></balance>
    <income-expenses :income :expenses></income-expenses>
    <transaction-list :transactions></transaction-list>
    <add-transaction></add-transaction>
  </div>
</template>

<style scoped></style>
