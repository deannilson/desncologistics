<template>
  <div class="relative mb-2">
    <label class="block text-sm">
      {{ label }}
    </label>
    <input
      v-if="!textarea"
      v-model="value"
      :type="type"
      :required="required"
      class="h-10 input-control"
    />
    <textarea
      v-else
      rows="2"
      v-model="value"
      :required="required"
      class="input-control pt-2 resize-none"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: String,
  label: String,
  type: String,
  required: Boolean,
  textarea: Boolean,
});
const emit = defineEmits(["update:modelValue"]);
const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>
