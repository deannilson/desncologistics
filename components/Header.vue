<template>
  <header id="top">
    <section class="hidden md:block">
      <div class="p-4 py-2 bg-primary">
        <div class="container flex items-center text-zinc-400">
          <div class="flex-1 gap-8 flex items-center">
            <div v-if="APP_PHONE" class="flex items-center py-1">
              <i class="fas fa-phone text-error w-6"></i>
              <div class="text-base">{{ APP_PHONE }}</div>
            </div>
            <div class="flex items-center py-1">
              <i class="fas fa-envelope text-error w-6"></i>
              <div class="text-base">{{ APP_EMAIL }}</div>
            </div>
            <div class="flex items-center py-1">
              <i class="fas fa-clock text-error w-6"></i>
              <div class="text-base">Mon-Sat: 8am - 5pm</div>
            </div>
          </div>
          <div class="flex items-center text-xs sm:text-sm">
            <nuxt-link class="link-text" to="/track">
              Track Shipment
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="p-4">
        <div class="container flex items-center justify-between">
          <nuxt-link to="/" class="flex items-center">
            <img src="/icon.png" width="60" />
            <h4 class="text-2xl" v-html="APP_LOGO" />
          </nuxt-link>
          <div class="flex items-center">
            <nuxt-link
              v-for="n in links"
              :key="n.path"
              :to="n.path"
              class="text-sm font-bold uppercase tracking-wider whitespace-nowrap px-3 hover:text-error"
              :class="{ 'text-error': $route.path.includes(n.path) }"
            >
              {{ n.name }}
            </nuxt-link>
            <nuxt-link
              to="/quote"
              class="text-sm font-bold uppercase tracking-wider whitespace-nowrap text-white p-4"
              :class="
                $route.path == '/quote'
                  ? 'bg-error'
                  : 'bg-error/90 hover:bg-error'
              "
            >
              Request Quote
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="md:hidden">
      <div class="p-4 flex items-center justify-between">
        <nuxt-link to="/" class="flex items-center font-bold">
          <img src="/icon.png" width="60" />
          <h4 class="text-xl" v-html="APP_LOGO" />
        </nuxt-link>
        <div
          @click="menu = true"
          class="text-white text-xl h-12 w-12 place-center cursor-pointer"
          :class="menu ? 'bg-error/90' : 'bg-error'"
        >
          <i class="fas fa-bars" />
        </div>
      </div>
      <div
        v-if="menu"
        class="px-6 fixed inset-0 z-10 bg-white overflow-hidden overflow-y-auto"
      >
        <div class="xs">
          <div @click="menu = false">
            <div class="py-4 flex items-center justify-between">
              <nuxt-link to="/" class="flex items-center font-bold -ml-2">
                <img src="/icon.png" width="60" />
                <h4 class="text-xl" v-html="APP_LOGO" />
              </nuxt-link>
              <div
                @click="menu = !menu"
                class="ba text-xl h-12 w-12 place-center cursor-pointer"
              >
                <i class="fas fa-times text-zinc-500" />
              </div>
            </div>
            <nuxt-link
              v-for="n in links_sm"
              :key="n.path"
              :to="n.path"
              class="text-base font-medium text-zinc-700 tracking-wider bb py-3 flex items-center justify-between"
            >
              <div
                :class="{
                  'text-error font-bold': $route.path.includes(n.path),
                }"
              >
                {{ n.name }}
              </div>
              <div class="ba text-xl h-8 w-8 place-center">
                <i class="fas fa-chevron-right text-sm text-zinc-500" />
              </div>
            </nuxt-link>
            <div class="py-8">
              <nuxt-link
                to="/quote"
                class="text-sm font-bold uppercase tracking-wider whitespace-nowrap text-white p-5 text-center block"
                :class="
                  $route.path == '/quote'
                    ? 'bg-error'
                    : 'bg-error/90 hover:bg-error'
                "
              >
                Request Quote
              </nuxt-link>
            </div>
          </div>
          <div class="pb-6 font-medium">
            <div v-if="APP_PHONE" class="flex items-center mb-3">
              <i
                class="fas fa-phone text-error w-10 h-10 bg-error/30 place-center mr-2"
              />
              <div class="text-lg">{{ APP_PHONE }}</div>
            </div>
            <div class="flex items-center mb-3">
              <i
                class="fas fa-envelope text-error w-10 h-10 bg-error/30 place-center mr-2"
              />
              <div class="text-lg">{{ APP_EMAIL }}</div>
            </div>
            <div class="flex items-center mb-3">
              <i
                class="fas fa-clock text-error w-10 h-10 bg-error/30 place-center mr-2"
              />
              <div class="text-lg">Mon-Sat: 8am - 5pm</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<script setup lang="ts">
const links_sm = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "FAQs",
    path: "/faqs",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Track & Trace",
    path: "/track",
  },

  {
    name: "Contact",
    path: "/contact",
  },
];
const links = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "FAQs",
    path: "/faqs",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Track",
    path: "/track",
  },

  {
    name: "Contact",
    path: "/contact",
  },
];
const menu = ref(false);
const route = useRoute();
watch(menu, fixedBody);
watch(
  () => route.fullPath,
  () => (menu.value = false)
);
</script>

<style lang="scss" scoped></style>
