<template>
  <div class="relative mb-2">
    <label class="block text-sm">
      {{ label }}
    </label>
    <select v-model="value" :required="required" class="h-10 input-control">
      <option v-for="(n, i) in items" :key="i">{{ n }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: String,
  label: String,
  items: Array,
  required: Boolean,
});
const emit = defineEmits(["update:modelValue"]);
const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>
