<template>
  <button
    @click="menu = !menu"
    class="border text-error border-error hover:bg-error/5 font-bold text-sm w-full px-6 h-8"
  >
    Create update
  </button>
  <div
    v-if="menu"
    class="fixed z-50 inset-0 bg-black/50 overflow-hidden overflow-y-auto"
  >
    <div class="sm bg-white">
      <div class="h-14 bb flex items-center pl-4">
        <div class="text-xl font-black pr-3 flex-1">Create an Update</div>
        <div class="place-center p-5 cursor-pointer" @click="menu = false">
          <i class="fas fa-times text-2xl" />
        </div>
      </div>
      <div class="p-6">
        <form class="xs" ref="form" @submit.prevent="submit">
          <div class="text-xs mb-2 font-bold opacity-90">
            Please add the status and current location of this shipment.
          </div>
          <!-- <Picker
            v-model="post.status"
            required
            label="Status"
            :items="statuses"
          /> -->
          <Textfield v-model="post.status" required label="Status" />
          <Textfield v-model="post.city" required label="City" />
          <Picker
            v-model="post.country"
            required
            label="Country"
            :items="countries"
          />
          <Textfield
            v-model="post.date"
            required
            type="datetime-local"
            label="Date & time"
            class="mb-4"
          />
          <Alert
            v-model="error"
            error
            msg="An error occured. Please try again later!"
          />
          <Submit value="Add Update" :loading="loading" />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { doc, setDoc } from "firebase/firestore";
const props = defineProps(["item"]);
const menu = ref(false);
const { $db } = useNuxtApp();
const statuses = [
  "Shipment left origin country",
  "Shipment arrived departure country",
  "Shipment arrives at Customs Inspection post",
  "Shipment Handed to post office",
  "On Hold",
  "In Process",
  "In Transit",
  "Shipment loaded onto delivery Van",
  "Out for delivery",
  "Delivered",
];
const post = ref({
  status: "",
  country: "",
  city: "",
  date: "",
});
const loading = ref(false);
const error = ref(false);

async function submit() {
  loading.value = true;
  const new_post = {
    ...props.item,
    updates: [post.value, ...props.item.updates],
  };
  try {
    await setDoc(doc($db, "trackings", props.item.id), new_post);
    menu.value = false;
    post.value = {
      status: "",
      country: "",
      city: "",
      date: "",
    };
  } catch (err) {
    error.value = true;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped></style>
