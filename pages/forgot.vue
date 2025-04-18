<template>
  <Title>Forgot Password</Title>
  <div class="p-8">
    <div class="xs">
      <div v-if="success">
        <h1 class="text-2xl font-black uppercase mb-4">Check your email</h1>
        <div class="ba p-6">
          <div class="text-base mb-4 opacity-90">
            We've sent password reset instructions to:
          </div>
          <h4 class="text-xl font-bold mb-4">
            {{ email }}
          </h4>
          <div class="text-base mb-4 opacity-90">
            If the message doesn't arrive sson, check your spam folder or
            <div
              @click="success = false"
              class="inline-block text-info hover:underline cursor-pointer"
            >
              send the email again
            </div>
          </div>
        </div>
      </div>
      <form v-else class="mb-8" @submit.prevent="submit">
        <h1 class="text-2xl font-black uppercase mb-4">Forgot Password</h1>
        <div class="text-base mb-6 opacity-90">
          Enter your email address and we shall send you a link to reset your
          password.
        </div>
        <input
          required
          type="email"
          v-model="email"
          placeholder="Email Address"
          class="bg-secondary p-4 h-14 w-full text-lg border-l-8 pl-2 border-secondary focus:border-error outline-none mb-8"
        />
        <Alert v-model="error" error :msg="error_msg" />
        <Submit value="Reset password" :loading="loading" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
definePageMeta({ middleware: "guest" });
const email = ref("");
const success = ref(false);
const loading = ref(false);
const error = ref(false);
const error_msg = ref("");
function submit() {
  loading.value = true;
  const auth = getAuth();
  sendPasswordResetEmail(auth, email.value)
    .then(() => {
      loading.value = false;
      success.value = true;
    })
    .catch((err) => {
      error_msg.value = get_err(err.code);
      error.value = true;
      loading.value = false;
    });
}
</script>

<style scoped></style>
