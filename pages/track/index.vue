<template>
  <Title>Track & Trace</Title>
  <Breadcrum
    title="Track & Trace"
    :links="[{ name: 'Track & Trace', path: '' }]"
  />

  <section class="p-4 pb-16 bb">
    <div class="container pt-6 pb-16">
      <div class="sm">
        <div class="text-center text-lg sm:text-xl mb-3 opacity-80">
          Enter your tracking number or reference number.
        </div>
        <form @submit.prevent="submit">
          <input
            required
            type="number"
            v-model="code"
            min="1111111111"
            max="9999999999"
            placeholder="Tracking Number"
            class="bg-secondary p-4 h-16 w-full text-lg border-l-8 pl-2 border-secondary focus:border-error outline-none"
          />
          <nuxt-link
            to="/faqs"
            class="text-sm uppercase inline-block py-2 text-error hover:underline underline-offset-2 font-bold tracking-wider"
          >
            Need Help?
          </nuxt-link>
          <div class="flex justify-end">
            <button class="h-16 px-12 btn">
              <i class="fas fa-search text-xl" />
              <span class="pl-2 tracking-widest">TRACK</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <Contact />
</template>

<script setup lang="ts">
const code = ref("");
function submit() {
  navigateTo({ path: `/track/${code.value}` });
}
</script>

<style scoped></style>
