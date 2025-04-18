<template>
  <Title>Contact Us</Title>
  <Breadcrum title="Contact Us" :links="[{ name: 'Contact us', path: '' }]" />
  <section class="px-4">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
        <div class="md:col-span-2 bg-secondary py-6">
          <Heading class="p-8 pb-0" title="Get In Touch With Us" />
          <div class="flex py-6 px-8 bb">
            <i class="icon-box fas fa-map-marker-alt" />
            <div class="text-lg pl-4">
              <div class="font-bold">Address</div>
              <div class="font-mediun opacity-80">
                <div v-html="APP_ADDRESS" />
              </div>
            </div>
          </div>
          <div v-if="APP_PHONE" class="flex py-6 px-8 bb">
            <i class="icon-box fas fa-phone" />
            <div class="text-lg pl-4">
              <div class="font-bold">Call Us</div>
              <div class="font-mediun opacity-80">{{ APP_PHONE }}</div>
            </div>
          </div>
          <div class="flex py-6 px-8 bb">
            <i class="icon-box fas fa-envelope" />
            <div class="text-lg pl-4">
              <div class="font-bold">Email Us</div>
              <div class="font-mediun opacity-80">
                {{ APP_EMAIL }}
              </div>
            </div>
          </div>

          <div class="flex py-6 px-8">
            <i
              class="fas fa-clock w-16 h-16 place-center text-white bg-error text-4xl rounded"
            />
            <div class="text-lg pl-4">
              <div class="font-bold">Working Hours</div>
              <div class="font-mediun opacity-80">Mon-Sat: 8am - 5pm</div>
            </div>
          </div>
        </div>
        <form
          @submit.prevent="submit"
          class="md:col-span-3 grid grid-cols-1 gap-4 py-14"
        >
          <Heading title="SEND US AN EMAIL" />
          <div>
            <label class="mb-1 font-medium block">Full Name:</label>
            <input required v-model="data.name" class="ba block p-3 w-full" />
          </div>
          <div class="grid grid-cols-2 gap-8">
            <div>
              <label class="mb-1 block font-medium">Email Address:</label>
              <input
                type="email"
                v-model="data.email"
                class="ba block p-3 w-full"
                required
              />
            </div>
            <div>
              <label class="mb-1 block font-medium">Phone Number:</label>
              <input
                type="tel"
                v-model="data.phone"
                required
                class="ba block p-3 w-full"
              />
            </div>
          </div>
          <div>
            <label class="mb-1 block font-medium">Message:</label>
            <textarea
              rows="4"
              required
              v-model="data.message"
              class="ba block p-3 w-full"
            />
          </div>
          <div>
            <Alert
              v-model="error"
              error
              msg="An error occured. Please try again later"
            />
            <Alert
              v-model="success"
              success
              msg="Thanks for sending your message. We will get to you soon."
            />
            <Submit value="Send Message" class="w-56" :loading="loading" />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const loading = ref(false);
const success = ref(false);
const error = ref(false);
const data = ref({
  to: APP_EMAIL,
  subject: "Contact Us",
  name: "",
  email: "",
  phone: "",
  message: "",
});
async function submit() {
  const body = { ...data.value, to: APP_EMAIL };
  loading.value = true;
  try {
    await $fetch(APP_API, { method: "POST", body });
    data.value.name = "";
    data.value.email = "";
    data.value.phone = "";
    data.value.message = "";
    success.value = true;
  } catch (err) {
    error.value = true;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped></style>
