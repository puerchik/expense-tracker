<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

import 'vue-toastification/dist/index.css'

const transactions = defineModel('transactions')

const transactionText = ref('')
const transactionAmount = ref('')

const toast = useToast()

const handleFormSubmit = () => {
  function generateUniqueId() {
    return `id${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`
  }

  const transactionId = generateUniqueId()

  if (transactionText.value !== '' && transactionAmount.value !== '') {
    transactions.value.push({
      id: transactionId,
      text: transactionText.value,
      amount: Number(transactionAmount.value.toFixed(2)),
    })

    transactionText.value = ''
    transactionAmount.value = ''

    toast.success('Transaction added.')
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
