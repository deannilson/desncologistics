<template>
  <Title>Extranet</Title>
  <section class="p-4 bt bg-[#fcfefc]">
    <div class="md sm:py-6">
      <div class="flex mb-4 -ml-2 items-center text-xs sm:text-sm">
        <nuxt-link to="/" class="p-2 block hover:text-error">
          <i class="fas fa-home mt-1" />
        </nuxt-link>
        <i class="fas fa-angle-right text-base text-error mt-1" />
        <span class="opacity-80 p-2">Extranet</span>
      </div>
      <div class="flex shadow ba p-4 mb-4">
        <div class="flex-1 flex items-center">
          <i
            :style="squared(65)"
            class="fas fa-user-circle text-4xl place-center bg-secondary"
          />
          <div class="pl-4">
            <div class="text-xl sm:text-2xl font-black">Welcome!</div>
            <div class="text-base sm:text-lg">{{ user?.email }}</div>
          </div>
        </div>
        <button
          @click="signout"
          :style="squared(55)"
          class="-mt-4 -mr-4 hover:text-error text-zinc-600"
        >
          <i
            :style="squared(46)"
            class="fas fa-sign-out-alt text-2xl place-center hover:bg-error/10"
          />
        </button>
      </div>
      <div class="py-3 flex">
        <h2 class="text-xl sm:text-2xl uppercase font-black flex-1">
          Shipments
        </h2>
        <Create :item="post" />
      </div>
      <section v-if="loading" class="place-center">
        <img src="/loading.gif" width="280" />
      </section>
      <section v-else-if="items.length">
        <div v-for="n in items" :key="n.id" class="ba mb-3">
          <div class="p-4">
            <div class="flex">
              <div class="flex-1 flex flex-col gap-2 text-sm">
                <div>
                  Tracking Code: <b>{{ n.id }}</b>
                </div>
                <div>
                  Customer: <b>{{ n.receiver.name }}</b>
                </div>
                <div>
                  Destination:
                  <b>{{ n.receiver.city }}, {{ n.receiver.country }}</b>
                </div>
                <div>
                  Status: <b>{{ get_update(n.updates).status }}</b>
                </div>
              </div>
              <div class="flex">
                <Create edit :item="n" />
                <button
                  :style="squared(38)"
                  title="Delete shipment"
                  @click="DEL(n.id)"
                  class="text-error hover:bg-secondary -mr-2"
                >
                  <i class="fas fa-trash-alt text-lg" />
                </button>
              </div>
            </div>
            <div class="pt-3">
              <Movements :item="n" />
            </div>
          </div>
        </div>
      </section>
      <section
        v-else-if="error"
        class="ba p-6 shadow-inner flex items-center text-center"
      >
        <i class="fas fa-exclamation-triangle text-error text-2xl" />
        <div class="text-base pl-4">
          An error occured. Please check your connection and try again later.
        </div>
      </section>
      <section v-else class="ba p-6 text-center shadow-inner">
        <i class="fas fa-exclamation-triangle text-error text-5xl" />
        <div class="text-sm sm:text-lg pt-3">
          No record can be found at this time.
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getAuth, signOut } from "firebase/auth";
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

definePageMeta({ middleware: "auth" });
const { $db } = useNuxtApp();
const loading: any = ref(true);
const error: any = ref(false);
const items: any = ref([]);
const auth = getAuth();
const user: any = useCookie("cpanelex_user");
const post = {
  id: Date.now().toString().slice(0, 10),
  type: "Air Freight",
  author: user.value.uid,
  sender: {
    name: "",
    city: "",
    country: "",
    date: "",
    departure: "",
  },
  receiver: {
    name: "",
    city: "",
    country: "",
    date: "",
    delivery: "",
  },
  details: {
    product: "",
    quantity: "",
    weight: "",
    desc: "",
  },
  updates: [],
};
const _pst = {
  type: "Air Freight",
  updates: [
    {
      city: "Paris",
      date: "2023-08-04T15:24",
      country: "France",
      status: "Delivered",
    },
    {
      date: "2023-08-04T11:17",
      city: "Paris",
      country: "France",
      status: "Out for delivery",
    },
    {
      date: "2023-08-03T20:12",
      country: "France",
      city: "Paris",
      status: "Shipment Handed to post office",
    },
    {
      country: "France",
      city: "Paris",
      date: "2023-08-03T20:12",
      status: "Shipment Handed to post office",
    },
    {
      status: "Shipment arrived departure country",
      city: "Paris",
      date: "2023-08-03T18:50",
      country: "France",
    },
    {
      status: "Shipment loaded onto delivery Van",
      country: "Belgium",
      city: "Brussels",
      date: "2023-08-03T16:21",
    },
    {
      status: "On Hold",
      country: "Belgium",
      date: "2023-08-03T13:51",
      city: "Brussels",
    },
    {
      date: "2023-08-03T12:47",
      status: "Shipment arrives at Customs Inspection post",
      country: "Belgium",
      city: "Brussels",
    },
    {
      date: "2023-08-03T10:45",
      city: "Brussels",
      country: "Belgium",
      status: "In Transit",
    },
    {
      country: "United States",
      city: "New York",
      status: "Shipment left origin country",
      date: "2023-08-02T21:54",
    },
    {
      city: "New York",
      date: "2023-08-02T12:16",
      country: "United States",
      status:
        "Recipient notified via email about delivery details and available device",
    },
    {
      status: "In process at terminal",
      country: "United States",
      date: "2023-08-02T12:00",
      city: "New York",
    },
    {
      city: "New York",
      country: "United States",
      date: "2023-08-02T11:45",
      status: "Shipment information received",
    },
    {
      city: "New York",
      country: "United States",
      date: "2023-08-02T11:38",
      status: "Shipment received at terminal",
    },
  ],
  receiver: {
    delivery: "2023-08-04T15:50",
    country: "France",
    name: "Jannette Monalisa",
    city: "Paris",
  },
  author: "wkKxq27U4BQwvNxewmlo65Y4ix82",
  id: "9191919191",
  details: {
    desc: "Parcel of documents",
    quantity: 1,
    product: "Documents",
    weight: "0.5",
  },
  sender: {
    city: "New York",
    country: "United States",
    departure: "2023-08-02T11:38",
    name: "John Doe",
  },
};
async function send() {
  try {
    await setDoc(doc($db, "trackings", _pst.id), _pst);
    alert("OK");
  } catch (err) {
    alert(err);
  }
}
onMounted(async () => {
  onSnapshot(collection($db, "trackings"), (docs) => {
    items.value = [];
    docs.forEach((doc) => {
      if (user.value.uid == doc.data().author)
        items.value.push({ ...doc.data(), id: doc.id });
    });
    loading.value = false;
  });
});
async function DEL(code: any) {
  try {
    if (confirm("Are you sure you want to delete shipment: " + code + "?"))
      await deleteDoc(doc($db, "trackings", code));
  } catch (error) {
    alert("An error occured. Please try again!");
  }
}
function signout() {
  if (!confirm("Are you sure you want to Sign Out")) return;
  signOut(auth)
    .then(() => {
      user.value = null;
      navigateTo({ path: "/" });
    })
    .catch(() => {
      alert("An error occured. Please try again later!");
    });
}
</script>

<style scoped></style>
