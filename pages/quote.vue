<template>
  <Title>Request a Quote</Title>
  <Breadcrum
    title="Request a Quote"
    :links="[{ name: 'Request a Quote', path: '' }]"
  />
  <form @submit.prevent="submit" ref="form" class="px-4 py-8 bg-secondary">
    <div class="container">
      <Heading title="TOTAL DELIVERY COST" />
      <h4 class="text-2xl md:text-4xl font-black mt-3 mb-2">
        Find out the approximate cost
      </h4>
      <h4 class="text-2xl md:text-4xl font-black mb-8">
        of delivery of your shipments
      </h4>

      <div class="p-12 shadow-lg bg-white">
        <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 mb-4">
          <div>
            <label class="mb-1 font-medium block">Name:</label>
            <input
              required
              class="ba block p-3 w-full"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label class="mb-1 block font-medium">Email address:</label>
            <input
              required
              class="ba block p-3 w-full"
              placeholder="Company Email"
            />
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-4 mb-4">
          <div>
            <label class="mb-1 font-medium block">Origin:</label>
            <input
              required
              class="ba block p-3 w-full"
              placeholder="City and country"
            />
          </div>
          <div>
            <label class="mb-1 block font-medium">Departure:</label>
            <input
              required
              class="ba block p-3 w-full"
              placeholder="City and country"
            />
          </div>
          <div>
            <label class="mb-1 block font-medium">Freight type:</label>
            <select required class="ba block p-3 w-full">
              <option value=""></option>
              <option>Air Freight</option>
              <option>Ocean Freight</option>
              <option>Road Freight</option>
              <option>Rail Freight</option>
              <option></option>
            </select>
          </div>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 sm:gap-4">
          <div class="">
            <label class="mb-1 block font-medium">Length:</label>
            <input
              type="number"
              class="ba block p-3 w-full"
              placeholder="Inches"
            />
          </div>
          <div class="">
            <label class="mb-1 block font-medium">Width:</label>
            <input
              type="number"
              class="ba block p-3 w-full"
              placeholder="Inches"
            />
          </div>
          <div class="">
            <label class="mb-1 block font-medium">Height:</label>
            <input
              type="number"
              class="ba block p-3 w-full"
              placeholder="Inches"
            />
          </div>
          <div class="">
            <label class="mb-1 block font-medium">Weight:</label>
            <input
              type="number"
              class="ba block p-3 w-full"
              placeholder="llbs"
            />
          </div>
        </div>
        <div class="pt-3">
          <Alert
            v-model="error"
            error
            msg="An error occured. Please try again later"
          />
          <Alert
            v-model="success"
            success
            msg="Thanks for sending your quote. We will get to you soon."
          />
          <Submit value="Submit" class="w-56 mt-4" :loading="loading" />
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
const loading = ref(false);
const success = ref(false);
const error = ref(false);
const form: any = ref(null);
async function submit() {
  loading.value = true;
  try {
    await delay();
    form.value.reset();
    success.value = true;
  } catch (err) {
    error.value = true;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped></style>
