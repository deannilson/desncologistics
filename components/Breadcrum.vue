<template>
  <section
    class="bg-zinc-100 bg-cover bg-center"
    style="background-image: url('/img/slide-02.jpg')"
  >
    <div class="p-4 bg-black/50 text-white">
      <div class="container py-16">
        <h1 class="text-4xl sm:text-5xl font-bold mb-6">
          {{ title }}
        </h1>
        <div class="flex">
          <div class="bg-error flex items-center">
            <nuxt-link to="/" class="p-3 block"> Home </nuxt-link>
            <div
              v-for="(n, i) in props.links"
              :key="i"
              class="flex items-center"
            >
              <i class="fas fa-chevron-right text-xs -mb-1" />
              <nuxt-link :to="n.path" class="p-3 block">
                {{ n.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props: any = defineProps({
  title: String,
  links: Array,
});
</script>

<style scoped></style>
