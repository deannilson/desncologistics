<template>
  <div class="bb">
    <div @click="toggle = !toggle" class="flex py-4 cursor-pointer">
      <div class="flex-1 pr-3 text-base hover:text-error font-bold">
        {{ props.item.title }}
      </div>
      <i
        :class="`fas fa-chevron-${toggle ? 'up' : 'down'} text-lg text-error`"
      />
    </div>
    <div
      v-if="toggle"
      class="content pb-6 text-base opacity-90"
      v-html="props.item.desc"
    />
  </div>
</template>

<script setup lang="ts">
const props: any = defineProps({ item: Object });
const toggle = ref(false);
</script>

<style scoped></style>
