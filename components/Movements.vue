<template>
  <button
    @click="menu = !menu"
    class="border text-error hover:bg-error/5 font-bold text-sm w-full px-12 h-8"
  >
    Shipment Updates
  </button>
  <div
    v-if="menu"
    class="fixed inset-0 bg-black/50 overflow-hidden overflow-y-auto"
  >
    <div class="sm bg-white min-h-screen">
      <div class="h-14 bb flex items-center pl-4">
        <div class="text-xl font-black pr-3 flex-1">Shipment Updates</div>
        <div class="place-center p-5 cursor-pointer" @click="menu = false">
          <i class="fas fa-times text-2xl" />
        </div>
      </div>
      <div class="px-6 py-2 bb bg-secondary">
        <Update :item="item" />
      </div>
      <div>
        <div
          v-for="n in item.updates.sort(sort_date)"
          class="py-3 bb flex px-3"
        >
          <div class="px-3 text-sm flex-1">
            <div class="opacity-80 text-xs mb-1">
              {{ get_day(n.date) }} {{ get_datetime(n.date) }} (Local time)
            </div>
            <h4 class="font-bold">{{ n.status }}</h4>
            <h5>{{ n.city }}, {{ n.country }}</h5>
          </div>
          <div class="place-center p-3 cursor-pointer" @click="DEL(n)">
            <i class="fal fa-trash-alt text-xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { doc, setDoc } from "firebase/firestore";
const props = defineProps(["item"]);
const menu = ref(false);
const { $db } = useNuxtApp();
watch(menu, fixedBody);
async function DEL(itm: any) {
  if (!confirm("Are you sure you want to remove update?")) return;
  const post = {
    ...props.item,
    updates: [...props.item.updates].filter(
      (elt) => JSON.stringify(itm) != JSON.stringify(elt)
    ),
  };
  try {
    await setDoc(doc($db, "trackings", props.item.id), post);
  } catch (error: any) {
    alert(get_err(error.code));
  }
}
</script>

<style scoped></style>
