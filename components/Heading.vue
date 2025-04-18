<template>
  <div class="flex items-center">
    <h2 class="text-base font-black text-error uppercase pr-2">{{ title }}</h2>
    <div class="border border-error w-12" />
  </div>
</template>

<script setup lang="ts">
defineProps({ title: String });
</script>

<style scoped></style>
