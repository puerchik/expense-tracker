<script setup>
import AddTransaction from './components/AddTransaction.vue'
import Balance from './components/Balance.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TitleBar from './components/TitleBar.vue'
import TransactionList from './components/TransactionList.vue'
</script>

<template>
  <div class="container">
    <title-bar></title-bar>
    <balance></balance>
    <income-expenses></income-expenses>
    <transaction-list></transaction-list>
    <add-transaction></add-transaction>
  </div>
</template>

<style scoped></style>
