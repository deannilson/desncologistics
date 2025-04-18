<template>
  <div>
    <div :key="n.id" v-for="(n, i) in list" class="flex p-4 bb">
      <div>
        <img
          :src="n.image"
          class="aspect-[4/3] object-cover object-center ba w-20"
        />
      </div>
      <div class="px-3 flex-1 text-sm">
        <h6 class="mb-1 font-medium opacity-90">{{ n.name }}</h6>
        <h6 class="font-black mb-1">{{ USD.format(n.price * n.quantity) }}</h6>
        <div class="flex ba w-24 font-medium rounded">
          <button
            @click="n.quantity--"
            :disabled="n.quantity <= 1"
            class="w-8 h-8 place-center pb-1 text-3xl"
          >
            -
          </button>
          <div class="w-8 h-8 place-center text-xs">{{ n.quantity }}</div>
          <button
            @click="n.quantity++"
            class="w-8 h-8 place-center pb-1 text-2xl"
          >
            +
          </button>
        </div>
      </div>
      <i @click="DEL(n.id)" class="far fa-trash-alt p-3 cursor-pointer" />
    </div>
    <div class="p-4">
      <div class="flex text-base font-medium pb-3 justify-between">
        <span>Total:</span>
        <span class="font-black">
          {{ USD.format(total) }}
        </span>
      </div>
      <nuxt-link to="/checkout" class="btn-primary">Checkout</nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = useCart();
const list = ref([...items.value]);
const total = computed(() =>
  list.value.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
);
function DEL(id: any) {
  const elts = [...list.value];
  list.value = elts.filter((el) => el.id != id);
}
const item_str = computed(() => JSON.stringify(list.value));
watch(item_str, (val) => {
  localStorage.cart = val;
  items.value = list.value;
});
</script>

<style scoped></style>
