<template>
  <Title>{{ item.name }}</Title>
  <Breadcrum
    :title="item.name"
    :links="[
      { name: 'Services', path: '/services' },
      { name: item.name, path: '' },
    ]"
  />
  <section class="px-4 pt-8">
    <div class="container grid grid-cols-1 sm:grid-cols-2 gap-12">
      <div>
        <Heading :title="item.name" />
        <div class="text-lg sm:text-xl font-bold mt-6">
          {{ item.desc }}
        </div>
        <div class="content mt-6">
          <div v-html="item.long" />
        </div>
      </div>
      <div><img :src="item.image" /></div>
    </div>
  </section>
  <section class="px-4 pt-8">
    <div class="container">
      <!-- <Dotted /> -->
      <Heading title="WHAT WE PROVIDE FOR CLIENTS" />
      <h4 class="text-4xl md:text-6xl font-black mt-3 mb-2">We Can Ship</h4>
      <h4 class="text-4xl md:text-6xl font-black mb-8">Anything</h4>
      <div class="text-lg sm:text-xl mb-6 opacity-90 font-bold">
        Here are some industries we help get their items around:
      </div>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols4 gap-4 opacity-90"
      >
        <div
          v-for="n in everything"
          :key="n"
          class="flex items-center text-sm sm:text-base font-medium"
        >
          <i class="fas fa-check-circle text-error text-xl w-8" />
          {{ n }}
        </div>
      </div>
    </div>
  </section>
  <Contact />
</template>

<script setup lang="ts">
import services from "~/resources/services.json";
const route = useRoute();
const item: any = computed(() => services.find((el) => el.path == route.path));
const everything = [
  "Palletized Goods",
  "Boxed Goods Non-Palletized",
  "Any Non-Perishable Boxed Goods",
  "Any Parcel Shipment",
  "Appliances & Electronics",
  "Furniture & Constructions",
  "Medical Freight",
  "Agricultural Products",
  "Cars and Equipment",
  "Anything Legal",
  "Pets & Livestock",
  "Fruits and Beverages",
  "Retail and Consumer Goods",
  "Frozen & Refrigerated Goods",
];
</script>

<style scoped></style>
