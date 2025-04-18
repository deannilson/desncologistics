<template>
  <footer>
    <section class="p-4">
      <div class="grid gap-2 sm:gap-4 grid-cols-2 sm:grid-cols-4 container">
        <div
          :key="n"
          v-for="n in partners"
          class="p-2 bg-white flex items-center justify-center aspect-[5/2] border border-zinc-200"
        >
          <img :src="`/partners/${n}.png`" :alt="n" class="w-[80%]" />
        </div>
      </div>
    </section>
    <section class="bg-primary">
      <div class="p-4 text-zinc-200">
        <div
          class="container grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-4"
        >
          <div>
            <nuxt-link to="/" class="flex items-center font-bold">
              <img src="/icon.png" width="60" />
              <h4 class="text-xl" v-html="APP_LOGO" />
            </nuxt-link>

            <Dotted />
            <div class="text-sm">
              Join thousands of businesses making the right shipping decisions
              with our all-in-one intelligent freight platform. We help you
              transport freight faster, cheaper, safer, and easier, so you can
              stay focused on your business.
            </div>
            <div class="flex gap-6 text-base py-4">
              <i
                class="fab fa-facebook-f text-zinc-500 hover:text-error cursor-pointer"
              ></i>
              <i
                class="fab fa-linkedin-in text-zinc-500 hover:text-error cursor-pointer"
              ></i>
              <i
                class="fab fa-twitter text-zinc-500 hover:text-error cursor-pointer"
              ></i>
              <i
                class="fab fa-skype text-zinc-500 hover:text-error cursor-pointer"
              ></i>
            </div>
          </div>
          <div>
            <h4 class="font-bold text-xl">Main Services</h4>
            <Dotted />
            <nuxt-link
              v-for="n in services"
              :key="n.path"
              :to="n.path"
              class="flex py-1 link-text text-sm"
            >
              {{ n.name }}
            </nuxt-link>
          </div>
          <div>
            <h4 class="font-bold text-xl">Useful Links</h4>
            <Dotted />
            <nuxt-link
              v-for="n in links"
              :key="n.path"
              :to="n.path"
              class="flex py-1 link-text text-sm"
            >
              {{ n.name }}
            </nuxt-link>
          </div>
          <div>
            <h4 class="font-bold text-xl">Contacts</h4>
            <Dotted />
            <div v-if="APP_PHONE" class="flex py-1 mb-2">
              <i class="fas fa-phone-square w-8"></i>
              <div>
                <div class="text-xs text-zinc-500 font-medium">Call Us</div>
                <div class="text-base">{{ APP_PHONE }}</div>
              </div>
            </div>
            <div class="flex py-1 mb-2">
              <i class="fas fa-envelope-square w-8"></i>
              <div>
                <div class="text-xs text-zinc-500 font-medium">Email Us</div>
                <div class="text-base">{{ APP_EMAIL }}</div>
              </div>
            </div>
            <div class="flex py-1 mb-2">
              <i class="fas fa-map-marker-alt w-8"></i>
              <div>
                <div class="text-xs text-zinc-500 font-medium">Visit Us</div>
                <div class="text-base">
                  <div v-html="APP_ADDRESS" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border-t border-zinc-700" />
      <div class="p-4">
        <div
          class="text-xs sm:text-sm container text-center sm:text-left sm:flex items-center text-zinc-400"
        >
          <div class="flex-1 whitespace-nowrap">
            © 1996-{{ new Date().getFullYear() }} {{ APP_NAME }}
          </div>
          <div class="flex items-center">
            <nuxt-link class="link-text" to="/terms-of-service">
              Terms of Service
            </nuxt-link>
            <div class="br h-4 border-zinc-400 mx-3" />
            <nuxt-link class="link-text" to="/privacy-policy">
              Privacy Policy
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup>
const services = [
  {
    name: "Air Freight",
    path: "/services/air-freight",
  },
  {
    name: "Ocean Freight",
    path: "/services/ocean-freight",
  },
  {
    name: "Road Freight",
    path: "/services/road-freight",
  },
  {
    name: "Animal Transportation",
    path: "/services/animal-transportation",
  },
  {
    name: "Packaging & Storage",
    path: "/services/packing_storage",
  },
  {
    name: "Warehousing",
    path: "/services/warehousing",
  },
];
const links = [
  {
    name: "FAQs",
    path: "/faqs",
  },
  {
    name: "Get a Quote",
    path: "/quote",
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
    name: "About Us",
    path: "/about",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];
const partners = ["dhl", "fedex", "usps", "ups"];
</script>

<style lang="scss" scoped></style>
