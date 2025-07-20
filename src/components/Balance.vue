<script setup>
const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <h1 id="balance">${{ total }}</h1>
</template>

<style scoped></style>
