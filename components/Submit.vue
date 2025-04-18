<template>
  <button type="submit" class="w-full btn h-12">
    <img v-if="loading" src="/loading-alt.gif" width="32" />
    <span v-else>{{ value }}</span>
  </button>
</template>

<script setup lang="ts">
defineProps({
  value: String,
  loading: Boolean,
});
</script>
