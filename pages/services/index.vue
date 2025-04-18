<template>
  <Head>
    <Title>Services</Title>
  </Head>
  <Breadcrum title="Services" :links="[{ name: 'Services', path: '' }]" />
  <section class="p-4">
    <div class="container py-6">
      <Heading title="OUR SERVICES" />
      <h4 class="text-4xl md:text-6xl font-black mt-3 mb-2">
        Services we’re providing
      </h4>
      <h4 class="text-4xl md:text-6xl font-black mb-6">to our customers</h4>
      <p class="text-bose mb-6">
        {{ APP_NAME }} іѕ a full ѕеrvісе logistics & cargo company, оur аіm іѕ
        tо gіvе the bеѕt to оur various clients аt аffоrаblе рrісеs. At
        {{ APP_NAME }}, we аrе unceasingly progressing, making research
        continuously аnd improving оur ѕеrvісеѕ to the hіghеѕt ѕtаndаrdѕ. Our
        сlіеnt’ѕ іntеrеѕt оur priority. Wе are mіndful оf building a hеаlthу
        rеlаtіоnѕhір with оur сuѕtоmеrѕ, ѕuррlіеrѕ sub-contractors аnd
        соnѕultаntѕ, оur gоаl іѕ co-operation, tеаmwоrk tо achieving a grand
        ѕuссеѕѕful рrоjесt at аll tіmе.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <nuxt-link
          v-for="n in services"
          :key="n.path"
          :to="n.path"
          class="shadow-lg"
        >
          <img :src="n.image" />
          <div class="flex justify-end">
            <i
              :class="`fas fa-${n.icon} -mt-16 text-2xl text-white w-16 h-16 place-center bg-error`"
            />
          </div>
          <div class="w-full p-4">
            <div class="text-lg mb-2 sm:text-xl font-bold">
              {{ n.name }}
            </div>
            <p class="text-base">
              {{ n.desc }}
            </p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
  <Contact />
</template>

<script setup lang="ts">
import services from "~/resources/services.json";
</script>

<style scoped></style>
