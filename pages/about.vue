<template>
  <Title>About Us</Title>
  <Breadcrum title="About Us" :links="[{ name: 'About us', path: '' }]" />
  <section class="px-4 py-12">
    <div class="container">
      <Dotted class="mx-auto" />
      <h4 class="text-4xl md:text-6xl font-black my-4 text-center">
        Everyone within our business <br />understands our mission
      </h4>
      <p class="text-center text-base text-sm-lg">
        It means we don’t just come to work to do a job, we come to work to make
        a difference.
      </p>
    </div>
  </section>
  <section
    class="bg-cover bg-center"
    style="background-image: url('/img/slide-02.jpg')"
  >
    <div class="p-4 sm:p-0 sm:px-4 sm:pb-20 bg-error/50 h-full">
      <div class="container">
        <div class="text-lg bg-black p-10 sm:p-16 max-w-[480px]">
          <p class="text-error font-bold mb-6">
            “To make the process of buying and managing shipping and logistics
            services simple, efficient, stress free and cost effective.”
          </p>
          <p class="text-white">
            We do this by providing a friendly, efficient and personalised
            service combined with innovative IT solutions that enable our
            customers to always be in control of their supply chains.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="p-4">
    <div class="container py-6">
      <Heading title="Our Values" />
      <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(n, i) in values" :key="i">
          <div class="text-xl font-black uppercase mb-2 bb pb-3">
            <span class="text-error">{{ i + 1 }}.</span> {{ n.title }}
          </div>
          <img :src="n.img" class="w-full" />
          <div class="py-3">
            <h3 class="text-base sm:text-lg mb-1 font-bold">
              {{ n.subtitle }}
            </h3>
            <p class="text-sm font-medium opacity-90">{{ n.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="p-4 bg-secondary">
    <div class="container py-6">
      <Heading title="PEOPLE" />
      <h4 class="text-2xl md:text-4xl font-black mt-3 mb-6">MEET OUR TEAM</h4>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="n in team" :key="n.img" class="text-center">
          <img
            :src="n.img"
            class="w-32 sm:w-72 h-32 sm:h-72 object-cover object-center rounded-full mx-auto"
          />
          <div class="p-3">
            <h3 class="text-base sm:text-lg mb-1 font-bold">{{ n.name }}</h3>
            <h6 class="text-xs font-medium text-error">{{ n.pos }}</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="p-4">
    <div class="container py-6">
      <Heading title="LOGISTIC IN NUMBERS" />
      <h4 class="text-2xl md:text-2xl font-black mt-3 mb-6">
        LOGISTIC IN NUMBERS
      </h4>
      <div class="grid md:grid-cols-3 gap-12">
        <div>
          <img
            class="w-full"
            src="https://transpacific-lines.web.app/img/Depositphotos_102982556_original-580x350.jpg"
          />
        </div>
        <div class="text-xs uppercase font-medium col-span-2">
          <div v-for="(n, i) in stats" :key="i" class="mb-6">
            <div
              :style="`width:${n.per}`"
              :class="`flex justify-between mb-1 opacity-80`"
            >
              <span>{{ n.name }}</span> <span>{{ n.per }}</span>
            </div>
            <div class="rounded-full bg-secondary">
              <div
                :style="`width:${n.per}`"
                :class="`rounded-full h-2 bg-error`"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Contact />
</template>

<script setup lang="ts">
const values = [
  {
    title: "HISTORY",
    subtitle: `${APP_NAME} is a global supplier of transport solutions.`,
    desc: "We meet customer demands through the planning, control, and implementation of the effective movement and storage of related information, goods and services from origin to destination.",
    img: "https://transpacific-lines.web.app/img/history/01.jpg",
  },
  {
    title: "MISSION",
    subtitle:
      "We strive in Transport quality and safety to enhance your business.",
    desc: "We continuously set goals to increase customer satisfaction. The information we gather measures our high level of relationships with our customers and spotlights areas where we need to focus more attention",
    img: "https://transpacific-lines.web.app/img/history/02.jpg",
  },
  {
    title: "VISION",
    subtitle:
      "Our expert staff offer only customer-oriented logistic solutions.",
    desc: "We have the consultants who can help simplify the complexity of those regulations and provide procedures to keep your company in compliance. No matter the origin or destination of your goods, we help you gain the knowledge to perform the due diligence necessary to ensure your shipments meet international regulations.",
    img: "https://transpacific-lines.web.app/img/history/03.jpg",
  },
];
const stats = [
  { name: "SEA DELIVERY", per: "84%" },
  { name: "GROUND DELIVERY", per: "81%" },
  { name: "AIR DELIVERY", per: "94%" },
  { name: "OTHER DELIVERY", per: "61%" },
];
const team = [
  {
    name: "RICHARD HILL",
    pos: "MANAGER",
    img: "https://transpacific-lines.web.app/img/richard.jpg",
  },
  {
    name: "ALEXANDER RICHIEZ",
    pos: "CHIEF OPERATIONS OFFICER",
    img: "https://transpacific-lines.web.app/img/alexander.jpg",
  },
  {
    name: "DYLAN TAYLOR",
    pos: "CHIEF TECHNICAL OFFICER",
    img: "https://transpacific-lines.web.app/img/taylor.jpg",
  },
  {
    name: "DANNY WATSON",
    pos: "Warehouse manager",
    img: "https://transpacific-lines.web.app/img/danny.jpg",
  },
];
</script>

<style scoped></style>
