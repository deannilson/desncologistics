<template>
  <Title>Login</Title>
  <div class="p-8">
    <div class="xs">
      <form class="mb-8" @submit.prevent="signin">
        <h1 class="text-2xl font-black uppercase mb-4">Login</h1>
        <input
          required
          type="email"
          v-model="email"
          placeholder="Email Address"
          class="bg-secondary p-4 h-14 w-full text-lg border-l-8 pl-2 border-secondary focus:border-error outline-none mb-6"
        />
        <input
          required
          type="password"
          v-model="password"
          minlength="8"
          placeholder="Password"
          class="bg-secondary p-4 h-14 w-full text-lg border-l-8 pl-2 border-secondary focus:border-error outline-none mb-4"
        />
        <nuxt-link
          to="/forgot"
          class="text-base inline-block py-2 text-error hover:underline underline-offset-2 font-bold"
        >
          Forgot Password?
        </nuxt-link>
        <Alert v-model="error" error :msg="error_msg" />
        <Submit value="Login" :loading="loading" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
definePageMeta({ middleware: "guest" });
const email = ref("");
const password = ref("");
const loading = ref(false);
const error = ref(false);
const error_msg = ref("");
function signin() {
  loading.value = true;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(({ user }) => {
      useCookie("cpanelex_user").value = JSON.stringify({
        uid: user.uid,
        email: user.email,
      });
      email.value = "";
      password.value = "";
      loading.value = false;
      navigateTo({ path: "/extranet" });
    })
    .catch((err) => {
      error_msg.value = get_err(err.code);
      error.value = true;
      loading.value = false;
    });
}
</script>

<style scoped></style>
