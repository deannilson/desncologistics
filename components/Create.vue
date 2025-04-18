<template>
  <button
    v-if="edit"
    @click="menu = !menu"
    :style="squared(38)"
    title="Edit shipment"
    class="hover:text-primary text-zinc-600 hover:bg-secondary"
  >
    <i class="fas fa-edit text-lg" />
  </button>
  <button
    v-else
    @click="menu = !menu"
    class="uppercase text-sm font-bold text-error hover:text-white hover:bg-error px-3 py-1 place-center border border-error"
  >
    <i class="fas fa-plus-circle text-xl mr-1" /> Create
  </button>
  <div
    v-if="menu"
    class="fixed inset-0 bg-black/50 overflow-hidden overflow-y-auto"
  >
    <div class="sm bg-white min-h-screen">
      <div class="h-14 bb flex items-center pl-4">
        <div class="text-xl font-black pr-3 flex-1">Create Shipment</div>
        <div class="place-center p-5 cursor-pointer" @click="menu = false">
          <i class="fas fa-times text-2xl" />
        </div>
      </div>
      <div class="p-6">
        <form class="xs" ref="form" @submit.prevent="submit">
          <Picker
            v-model="post.type"
            required
            label="Handled by"
            :items="types"
          />
          <section class="py-2">
            <h3 class="text-sm font-bold uppercase mb-1">Origin</h3>
            <Textfield
              v-model="post.sender.name"
              required
              label="Sender's Name"
            />
            <Textfield
              v-model="post.sender.city"
              required
              label="City of origin"
            />
            <Picker
              v-model="post.sender.country"
              required
              label="Country of origin"
              :items="countries"
            />
            <Textfield
              v-model="post.sender.departure"
              required
              type="datetime-local"
              label="Departure date & time"
            />
          </section>
          <section class="py-2">
            <h3 class="text-sm font-bold uppercase mb-1">Destination</h3>
            <Textfield
              v-model="post.receiver.name"
              required
              label="Receiver's Name"
            />
            <Textfield
              v-model="post.receiver.city"
              required
              label="City of receiver"
            />
            <Picker
              v-model="post.receiver.country"
              required
              label="Country of receiver"
              :items="countries"
            />
            <Textfield
              v-model="post.receiver.delivery"
              required
              type="datetime-local"
              label="Arrival date & time"
            />
          </section>
          <section class="py-2">
            <h3 class="text-sm font-bold uppercase mb-1">Product detail</h3>
            <Textfield
              v-model="post.details.product"
              required
              label="Product Name"
            />
            <div class="grid grid-cols-2 gap-4">
              <Textfield
                type="number"
                v-model="post.details.quantity"
                label="Quantity"
              />
              <Textfield v-model="post.details.weight" label="Weight (Kg)" />
            </div>
            <Textfield textarea v-model="post.details.desc" label="Comments" />
          </section>
          <Alert
            v-model="error"
            error
            msg="An error occured. Please try again later!"
          />
          <Alert v-model="success" success msg="Shipment created succefully!" />
          <Submit
            :value="edit ? 'Update shipment' : 'Create shipment'"
            :loading="loading"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { doc, setDoc } from "firebase/firestore";
const props = defineProps({ item: Object, edit: Boolean });
const { $db } = useNuxtApp();
const menu = ref(false);
watch(menu, fixedBody);
const post: any = ref(props.item);
const loading: any = ref(false);
const success = ref(false);
const error = ref(false);
const types = ["Air Freight", "Ocean Freight", "Road Freight", "Rail Freight"];
async function submit() {
  loading.value = true;
  if (!props.edit) {
    post.value.updates = [
      {
        status: "Recipient notified via email about delivery details",
        country: post.value.sender.country,
        city: post.value.sender.city,
        date: addMinutes(post.value.sender.departure, 38),
      },
      {
        status: "In process at terminal",
        country: post.value.sender.country,
        city: post.value.sender.city,
        date: addMinutes(post.value.sender.departure, 22),
      },
      {
        status: "Shipment information received",
        country: post.value.sender.country,
        city: post.value.sender.city,
        date: addMinutes(post.value.sender.departure, 7),
      },
      {
        status: "Shipment received at terminal",
        country: post.value.sender.country,
        city: post.value.sender.city,
        date: post.value.sender.departure,
      },
    ];
  }
  try {
    await setDoc(doc($db, "trackings", post.value.id), post.value);
    success.value = true;
    menu.value = false;
  } catch (err) {
    error.value = true;
  } finally {
    loading.value = false;
  }
}
function addMinutes(dt: string, mins: number) {
  const new_dt = new Date(`${dt}:00.000Z`);
  return new Date(new_dt.getTime() + mins * 60000)
    .toISOString()
    .split(":00.")[0];
}
</script>

<style scoped></style>
