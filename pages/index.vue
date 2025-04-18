<template>
  <section
    class="bg-zinc-100 bg-cover bg-center"
    style="background-image: url('/img/slide-01.jpg')"
  >
    <div class="bg-black/50">
      <div class="p-4">
        <div class="container">
          <div class="h-[420px] py-12 flex items-center">
            <div class="w-full max-w-[540px]">
              <Heading title="Denco Logistics" />
              <h1 class="text-6xl font-black text-white mt-3 mb-12">
                Fast and Quick <br />
                Transport
              </h1>
              <form @submit.prevent="submit" class="flex gap-3">
                <div class="flex-1">
                  <input
                    required
                    v-model.number="code"
                    type="number"
                    min="1111111111"
                    max="9999999999"
                    placeholder="Tracking Number"
                    class="bg-white p-4 h-16 w-full text-xl border-l-8 pl-2 border-white focus:border-error outline-none"
                  />
                </div>
                <button class="h-16 px-6 btn">
                  <i class="fas fa-search text-xl" />
                  <span class="pl-2 hidden sm:inline-block">TRACK</span>
                </button>
              </form>
              <nuxt-link
                to="/faqs"
                class="text-sm uppercase inline-block py-3 text-white hover:underline underline-offset-2 font-medium tracking-wider"
              >
                Need Help?
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <img src="/img/bottom-bg.png" class="w-full" />
    </div>
  </section>
  <section class="p-4">
    <div class="container py-6">
      <Heading title="OUR SERVICES" />
      <h4 class="text-4xl md:text-6xl font-black mt-3 mb-2">
        Services we’re providing
      </h4>
      <h4 class="text-4xl md:text-6xl font-black mb-6">to our customers</h4>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-6"
      >
        <nuxt-link
          v-for="(n, i) in services"
          :key="n.path"
          :to="n.path"
          :style="`background-image:url('${n.image}')`"
          :class="{
            'col-span-2 sm:col-span-1 aspect-[2/1] sm:aspect-square': i == 6,
          }"
          class="flex rounded-xl overflow-hidden aspect-square bg-secondary bg-cover bg-center"
        >
          <div
            class="flex items-end bg-black/50 hover:bg-error/80 h-full w-full p-6"
          >
            <div class="text-white text-xl sm:text-2xl font-bold">
              {{ n.name }}
            </div>
          </div>
        </nuxt-link>
        <div class="p-4 sm:p-6 bg-zinc-100 rounded-xl flex flex-col col-span-2">
          <div class="flex-1">
            <h6
              class="text-xs uppercase tracking-wider font-medium text-zinc-700 mb-1 sm:mb-3"
            >
              Worldwide service
            </h6>
            <h4 class="text-2xl font-bold mb-4">
              Simplify your freight and logistics needs with a personal approch
            </h4>
          </div>
          <div>
            <nuxt-link
              to="/services"
              class="inline-block p-3 sm:p-4 text-sm text-center w-full uppercase rounded-md bg-error text-white font-bold"
            >
              Find your solution
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="p-4">
    <div class="container py-6">
      <Heading title="OUR SERVICES" />
      <h4 class="text-4xl md:text-6xl font-black mt-3 mb-2">Covering all</h4>
      <h4 class="text-4xl md:text-6xl font-black mb-6">logistics fields</h4>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div v-for="n in about" :key="n.icon">
          <div class="flex">
            <div class="pt-2">
              <i
                :class="`fas fa-${n.icon} text-white bg-error h-12 w-12 rounded-md place-center text-2xl`"
              />
            </div>
            <div class="pl-4 opacity-80">
              <h3 class="text-xl font-bold">{{ n.name }}</h3>
              <p class="text-base">
                {{ n.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="p-4 bg-[#232331] bg-cover bg-center"
    style="background-image: url('/lines-waves1.png')"
  >
    <div class="container py-6">
      <Heading title="WHY CHOOSE US" />
      <h4 class="text-4xl text-white md:text-6xl font-black mt-3 mb-2">
        We create opportunity
      </h4>
      <h4 class="text-4xl text-white md:text-6xl font-black mb-6">
        to reach potential
      </h4>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div
          v-for="n in why"
          :key="n.name"
          class="flex flex-col items-center p-6 bg-[#232331] border border-zinc-700/30"
        >
          <i :class="`fas fa-${n.icon} text-error text-4xl`" />
          <div
            class="text-sm md:text-base font-bold text-white mt-2 text-center"
          >
            {{ n.name }}
          </div>
        </div>
      </div>
    </div>
  </section>
  <section style="background-image: url('/icon-bg-dots.png')">
    <div class="p-4">
      <div class="container pt-6">
        <Heading title="CLIENT’S TESTIMONIALS" />
        <h4 class="text-4xl md:text-6xl font-black mt-3 mb-2">
          Here is some clients
        </h4>
        <h4 class="text-4xl md:text-6xl font-black mb-2">feedbacks</h4>
      </div>
    </div>
    <div class="overflow-x-auto pb-12 px-3">
      <div class="container grid gap-6 grid-cols-3 min-w-[900px]">
        <div
          v-for="n in testimonials"
          :key="n.name"
          class="p-6 text-base text-center shadow-lg rounded-xl border border-zinc-100 bg-white"
        >
          <div class="mb-3 place-center">
            <i
              class="fas fa-quote-right text-3xl text-error h-16 w-16 border rounded-full border-error/80 place-center"
            />
          </div>
          <div class="text-sm md:text-base">"{{ n.desc }}"</div>
          <div class="py-3 flex place-center">
            <div class="h-[2px] w-8 bg-error/80" />
            <div class="px-2">
              <i class="fas fa-quote-left text-base text-error/80" />
            </div>
            <div class="h-[2px] w-8 bg-error/80" />
          </div>
          <h3 class="font-black">{{ n.name }}</h3>
        </div>
      </div>
    </div>
  </section>
  <Contact />
  <section>
    <div class="p-4">
      <div class="container">
        <Heading title="OUR PARTNERS" />
        <h4 class="text-base font-black mt-2">
          We are incoperated with the following partners
        </h4>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import services from "~/resources/services.json";
const code = ref("");
function submit() {
  navigateTo({ path: `/track/${code.value}` });
}
const about = [
  {
    icon: "users",
    name: "Expert Staff",
    desc: "Our professional staff has extensive expertise in the logistics industry and is ready to provide a quick and detailed response to all your inquiries.",
  },
  {
    icon: "headset",
    name: "24/7 Customer Support",
    desc: "Whether your requirements are regional or international, New Standard Logistics offers a wide range of services tailored to meet your specific needs.",
  },
  {
    icon: "globe",
    name: "Global Network",
    desc: "We are dedicated to fulfilling all your needs—from the source to the final destination. Since our incorporation, we have proved to be a safe, reliable, quality-driven forwarder.",
  },
  {
    icon: "user-shield",
    name: "Safety and Reliability",
    desc: "As one of the world’s leading non-asset- based supply chain management companies, we design and implement industry-leading solutions in freight management and contract logistics.",
  },
];
const why = [
  { icon: "coins", name: "Optimized Cost", desc: "" },
  { icon: "clock", name: "Delivery on Time", desc: "" },
  { icon: "handshake", name: "Safety and Reliability", desc: "" },
  { icon: "globe", name: "Worldwide Shipping", desc: "" },
];
const testimonials = [
  {
    name: "Jake Shaw",
    desc: "Thank you for your great service. Impressive delivery and customer service, always responsive to our queries. Reliable and honest business. I will definitely return for more business. A big note of appreciation to Fred and Sylvia for their support",
  },
  {
    name: "Dr. Claire",
    desc: "We can never thank you enough for your time and attention to the details that made a success out of a very intense project. We got our container delivered to us on time with no damages to the very delicate items it contained. You guys are awesome.",
  },
  {
    name: "Jane & Lambert",
    desc: "I engaged the services of  Pet Transport at New Standard Logistics . The company allayed my fears and we had our dog transported safely and comfortably into our hands. I strongly recommend their services for any kind of shipment",
  },
];
</script>

<style scoped></style>
