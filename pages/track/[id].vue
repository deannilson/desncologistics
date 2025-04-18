<template>
  <Title>Tracking Code: {{ route.params.id }}</Title>
  <section class="p-4 bt bg-[#fcfefc]">
    <div class="md sm:py-6">
      <div class="flex mb-6 -ml-2 items-center text-xs sm:text-sm">
        <nuxt-link to="/" class="p-2 block hover:text-error">
          <i class="fas fa-home mt-1" />
        </nuxt-link>
        <i class="fas fa-angle-right text-base text-error mt-1" />
        <nuxt-link
          to="/track"
          class="p-2 block hover:text-error hover:underline font-bold"
        >
          Track
        </nuxt-link>
        <i class="fas fa-angle-right text-base text-error mt-1" />
        <span class="opacity-80 p-2">Tracking Code: {{ route.params.id }}</span>
      </div>
      <section v-if="loading" class="place-center">
        <img src="/loading.gif" width="280" />
      </section>
      <section v-else-if="item">
        <div class="text-4xl text-center mb-4">Track: {{ item?.type }}</div>
        <!--     <div class="flex flex-col items-center mb-4">
         <div>
            <div class="flex">
              <img src="/barcode.png" />
              <img src="/barcode.png" />
              <img src="/barcode.png" />
            </div>

            <div class="text-center font-mono tracking-widest">
              {{ route.params.id }}
            </div>
          </div>
        </div> -->
        <section
          class="border-l-4 border-b-8 border-error bg-error/10 font-medium p-4"
        >
          <div class="font-black text-lg sm:text-2xl uppercase mb-2 text-error">
            {{ get_update(item.updates).status }}
          </div>
          <div class="opacity-80 text-xs mb-1">
            {{ get_datetime(get_update(item.updates).date) }} (Local time)
            {{ get_update(item.updates).city }},
            {{ get_update(item.updates).country }}
          </div>
        </section>
        <section class="py-4">
          <h2 class="py-2 bb text-xl font-bold">Shipment Information</h2>
          <div>
            <div class="grid grid-cols-2 p-2 text-sm gap-x-4">
              <div class="font-medium">Tracking Code:</div>
              <div>{{ route.params.id }}</div>
            </div>
            <div class="grid grid-cols-2 p-2 text-sm gap-x-4 bg-secondary">
              <div class="font-medium">Status:</div>
              <div>{{ get_status(item.updates) }}</div>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-2 p-2 text-sm gap-x-4">
              <div class="font-medium">Sender's name:</div>
              <div>{{ item.sender.name }}</div>
            </div>
            <div class="grid grid-cols-2 p-2 text-sm gap-x-4 bg-secondary">
              <div class="font-medium">Receiver's name:</div>
              <div>{{ item.receiver.name }}</div>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-2 p-2 text-sm gap-x-4">
              <div class="font-medium">Origin:</div>
              <div>{{ item.sender.city }}, {{ item.sender.country }}</div>
            </div>
            <div class="grid grid-cols-2 p-2 text-sm gap-x-4 bg-secondary">
              <div class="font-medium">Destination:</div>
              <div>{{ item.receiver.city }}, {{ item.receiver.country }}</div>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-2 p-2 text-sm gap-x-4">
              <div class="font-medium">Departure:</div>
              <div>{{ get_datetime(item.sender.departure) }}</div>
            </div>
            <div class="grid grid-cols-2 p-2 text-sm gap-x-4 bg-secondary">
              <div class="font-medium">Expected Delivery:</div>
              <div>{{ get_datetime(item.receiver.delivery) }}</div>
            </div>
          </div>
        </section>
        <section class="py-4">
          <h2 class="py-2 bb text-xl font-bold">Package Details</h2>
          <div>
            <div class="grid grid-cols-2 p-2 text-sm gap-x-4">
              <div class="font-medium">Product:</div>
              <div>{{ item.details.product }}</div>
            </div>
            <div class="grid grid-cols-2 p-2 text-sm gap-x-4 bg-secondary">
              <div class="font-medium">Total Pieces:</div>
              <div>{{ item.details.quantity }}</div>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-2 p-2 text-sm gap-x-4">
              <div class="font-medium">Weight (kg):</div>
              <div>{{ item.details.weight }}</div>
            </div>
            <div class="grid grid-cols-2 p-2 text-sm gap-x-4 bg-secondary">
              <div class="font-medium">Desciption:</div>
              <div>{{ item.details.desc }}</div>
            </div>
          </div>
        </section>
        <section class="py-4">
          <h2 class="py-2 bb text-xl font-bold">Shipment History</h2>
          <div v-for="n in item.updates.sort(sort_date)" class="py-3 bb">
            <div class="hidden sm:grid grid-cols-5">
              <div class="text-sm col-span-2 pr-3">
                <div class="opacity-70">{{ get_day(n.date) }}</div>
                <div class="text-base font-bold">{{ get_date(n.date) }}</div>
                <div class="opacity-70">
                  {{ get_time(n.date) }} (Local time)
                </div>
              </div>
              <div class="col-span-3">
                <h4 class="font-medium mb-1">{{ n.status }}</h4>
                <h5 class="">{{ n.city }}, {{ n.country }}</h5>
              </div>
            </div>
            <div class="sm:hidden text-sm">
              <div class="opacity-80 text-xs mb-1">
                {{ get_day(n.date) }} {{ get_datetime(n.date) }} (Local time)
              </div>
              <h4 class="font-bold">{{ n.status }}</h4>
              <h5>{{ n.city }}, {{ n.country }}</h5>
            </div>
          </div>
        </section>
      </section>
      <section
        v-else-if="error"
        class="ba p-6 my-6 flex items-center text-center"
      >
        <i class="fas fa-exclamation-triangle text-error text-2xl" />
        <div class="text-base pl-4">
          An error occured. Please check your connection and try again later.
        </div>
      </section>
      <section v-else class="ba p-6 text-center my-6">
        <i class="fas fa-exclamation-triangle text-error text-5xl" />
        <div class="text-sm sm:text-lg pt-3">
          No record of this tracking number can be found at this time, please
          check the number and try again later. For further assistance, please
          contact
          <nuxt-link to="/contact" class="font-bold underline"
            >Customer Service</nuxt-link
          >.
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { doc, getDoc } from "firebase/firestore";
const route: any = useRoute();
const { $db } = useNuxtApp();
const loading: any = ref(true);
const error: any = ref(false);
const item: any = ref(null);
onMounted(async () => {
  try {
    const docSnap = await getDoc(doc($db, "trackings", route.params.id));
    if (docSnap.exists()) {
      item.value = docSnap.data();
    }
  } catch (error: any) {
    alert(get_err(error.code));
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped></style>
