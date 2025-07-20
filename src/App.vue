<script setup>
import { computed, onMounted, ref } from 'vue'

import AddTransaction from './components/AddTransaction.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionList from './components/TransactionList.vue'
import TitleBar from './components/TitleBar.vue'
import Balance from './components/Balance.vue'

import 'vue-toastification/dist/index.css'

const transactions = ref([
  { id: 1, text: 'Flower', amount: -20.11 },
  { id: 2, text: 'Salary', amount: 1500.33 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Startup', amount: 2000 },
])

const getTransactionsSum = arr => {
  return arr.reduce((acc, c) => acc + c.amount, 0).toFixed(2)
}

const income = computed(() => {
  return +getTransactionsSum(transactions.value.filter(transaction => transaction.amount > 0))
})

const expenses = computed(() => {
  return -getTransactionsSum(transactions.value.filter(transaction => transaction.amount < 0))
})

const total = computed(() => {
  return +getTransactionsSum(transactions.value)
})

onMounted(() => {
  if (!localStorage.getItem('transactions')) {
    localStorage.setItem('transactions', JSON.stringify(transactions.value))
  }

  transactions.value = JSON.parse(localStorage.getItem('transactions'))
})
</script>

<template>
  <div class="container">
    <title-bar></title-bar>
    <balance :total></balance>
    <income-expenses :income :expenses></income-expenses>
    <transaction-list v-model:transactions="transactions"></transaction-list>
    <add-transaction v-model:transactions="transactions"></add-transaction>
  </div>
</template>

<style scoped></style>
