<script setup>
const props = defineProps({
  transactions: Array,
  required: true,
})
</script>

<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions"
      :key="transaction.id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
      Cash <span>${{ transaction.amount }}</span>
      <button class="delete-btn">x</button>
    </li>
  </ul>
</template>

<style scoped></style>
