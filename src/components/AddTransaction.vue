<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

import { saveTransactionsToLocalStorage } from '../utils/saveTransactionsToLocalStorage'

const transactions = defineModel('transactions')

const transactionText = ref('')
const transactionAmount = ref('')

const toast = useToast()

const handleFormSubmit = () => {
  function generateUniqueId() {
    return `id${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`
  }

  const transactionId = generateUniqueId()

  if (transactionText.value.trim() !== '' && transactionAmount.value !== '') {
    transactions.value.push({
      id: transactionId,
      text: transactionText.value,
      amount: Number(transactionAmount.value.toFixed(2)),
    })

    toast.success(`Transaction ${transactionText.value} added.`)

    saveTransactionsToLocalStorage(transactions.value)

    transactionText.value = ''
    transactionAmount.value = ''
  } else {
    toast.error('Both fields must be filled.')
  }
}
</script>

<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="handleFormSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input v-model="transactionText" type="text" id="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input v-model="transactionAmount" type="number" id="amount" placeholder="Enter amount..." />
    </div>
    <button type="submit" class="btn">Add transaction</button>
  </form>
</template>

<style scoped></style>
