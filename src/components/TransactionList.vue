<script setup>
import { useToast } from 'vue-toastification'

const transactions = defineModel('transactions')
const toast = useToast()

const handleDeleteTransaction = (transactionId, transactionText) => {
  transactions.value = transactions.value.filter(transaction => transaction.id !== transactionId)

  toast.success(`Transaction ${transactionText} deleted.`)
}
</script>

<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions"
      :key="transaction.id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
      {{ transaction.text || 'Cash' }}
      <span>
        {{ transaction.amount < 0 ? '-' : transaction.amount > 0 ? '+' : '' }}${{
          Math.abs(transaction.amount)
        }}
      </span>
      <button @click="handleDeleteTransaction(transaction.id, transaction.text)" class="delete-btn">
        x
      </button>
    </li>
  </ul>
</template>

<style scoped></style>
