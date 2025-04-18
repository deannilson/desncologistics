<template>
  <section @click.stop v-if="width > 600" class="relative">
    <div @click="menu = !menu" class="btn-cart">
      <i class="far fa-shopping-cart" />
      <span class="badge-cart" v-text="total" />
    </div>
    <div
      v-if="menu"
      class="absolute w-[460px] right-0 top-12 ba shadow-xl bg-white z-10"
    >
      <section v-if="total > 0" class="cart-lg">
        <CartContent />
      </section>
      <section v-else class="p-6">
        <div class="py-24">
          <div class="text-center">
            <i class="far fa-shopping-cart text-6xl" />
            <div class="text-xl font-medium py-3">Your cart is empty</div>
          </div>
        </div>
        <nuxt-link
          to="/products"
          class="bg-primary h-12 place-center hover:bg-primary/90 text-base font-medium text-white"
        >
          Shop our products
        </nuxt-link>
      </section>
    </div>
  </section>
  <section @click.stop v-else>
    <div @click="menu = !menu" class="btn-cart">
      <i v-if="menu" class="far fa-times" />
      <i v-else class="far fa-shopping-cart" />
      <span class="badge-cart" v-text="total" v-if="!menu" />
    </div>
    <div
      v-if="menu"
      class="fixed left-0 right-0 bottom-0 top-20 bt bg-white z-10"
    >
      <section v-if="total > 0">
        <CartContent />
      </section>
      <section v-else class="flex flex-col p-6 h-full">
        <div class="flex-1 pt-32">
          <div class="text-center">
            <i class="far fa-shopping-cart text-6xl" />
            <div class="text-xl font-medium py-3">Your cart is empty</div>
          </div>
        </div>
        <nuxt-link
          to="/products"
          class="bg-primary h-12 place-center hover:bg-primary/90 text-base font-medium text-white"
        >
          Shop our products
        </nuxt-link>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
const menu = ref(false);
const route = useRoute();
const width = ref(innerWidth);
const items = useCart();
const total = computed(() =>
  items.value.reduce((acc: any, val: any) => acc + val.quantity, 0)
);
onMounted(() => {
  window.addEventListener("resize", () => {
    width.value = innerWidth;
  });
  document.body.addEventListener("click", () => {
    menu.value = false;
  });
});
watch(menu, fixedBody);
watch(
  () => route.fullPath,
  () => (menu.value = false)
);
</script>

<style scoped>
.cart-lg {
  height: auto;
  overflow: hidden;
  overflow-y: auto;
  max-height: calc(100vh - 130px);
}
</style>
