<template>
  <Title>FAQs</Title>
  <Breadcrum
    title="FAQs"
    :links="[{ name: 'Frequently Asked Questions', path: '' }]"
  />
  <section class="p-4">
    <div class="container py-6 grid grid-cols-1 gap-12 md:grid-cols-3">
      <div class="col-span-2">
        <div class="text-base">
          Do you have a question regarding tracking or delivery? Here you will
          find our answers to frequently asked questions.
        </div>
        <div v-for="(n, i) in questions" :key="i">
          <div v-if="n.heading" class="h2 text-2xl font-black py-6 bb">
            {{ n.heading }}
          </div>
          <Accordion v-else :item="n" />
        </div>
      </div>
      <div class="bg-primary rounded text-white p-12">
        <form @submit.prevent="submit">
          <div class="text-xl mb-3 font-bold">Ask a Question</div>
          <input
            required
            v-model="data.name"
            placeholder="Full Name"
            class="input-underline"
          />
          <input
            required
            v-model="data.email"
            placeholder="Email Address"
            type="email"
            class="input-underline"
          />
          <input
            required
            v-model="data.phone"
            placeholder="Phone Number"
            type="tel"
            class="input-underline"
          />
          <textarea
            required
            v-model="data.message"
            placeholder="Question"
            class="input-underline mb-8"
          />
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
            <Submit value="Send Question" :loading="loading" />
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
  name: "",
  email: "",
  phone: "",
  message: "",
});
const form: any = ref(null);
async function submit() {
  const body = { ...data.value, to: APP_EMAIL };
  loading.value = true;
  try {
    await fetch(APP_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    data.value = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
    success.value = true;
  } catch (err) {
    error.value = true;
  } finally {
    loading.value = false;
  }
}
const questions = [
  { heading: "Track & Trace" },
  {
    title: "What is a tracking number and where can I find it?",
    desc: "A tracking number or ID is a combination of numbers and possibly letters that uniquely identifies your shipment for national or international tracking. The ID length may vary from 10 to 39 characters.",
  },
  {
    title: "When will my tracking information appear?",
    desc: "Tracking events usually appear 24-48 hours after receiving the Track and Trace ID. In general, once the shipment has reached our facility, a tracking event will appear.",
  },
  {
    title: "Why is my tracking number/ID not working?",
    desc: "Please make sure you entered the correct tracking number in the correct format (explanations and examples of national and international tracking numbers are further up this site). If your tracking ID is not working, please contact your shipper or online shop.",
  },
  {
    title:
      "If I do not have my tracking number, is it still possible to track my shipment?",
    desc: "If you do not have a tracking number, we advise you to contact your shipper. However, if you have other shipping reference numbers, they may work using shipment tracking systems of the specific business unit in charge of the shipment.",
  },
  {
    title: "How can I track my shipment?",
    desc: "You can track your shipment using our website or one of our online portals. Usually your merchant or online shop sends you a link to track your shipment. ",
  },
  {
    title: "Why is my shipment status unchanged?",
    desc: "<p>For most shipments, we provide only milestone tracking which means it may take some time before a new tracking event is displayed. Your package continues to travel to its destination despite the time between the tracking events. Depending on the destination, it could also take time to arrive in the destination country due to the distance and transit time of the selected service.</p><p>Your shipment might also be delayed. Delivery delays can be caused by events beyond the control of us, e.g. weather events, local disruptions like public holidays, customs or strikes. In the event your shipment has not arrived within 10 days after the expected delivery time, kindly contact your merchant or online shop. The merchant or online shop as our contract partner can start an investigation for lost items.</p><p>Please also note that some packages only have limited tracking events in the country of origin and no tracking events in the destination country.</p>",
  },
  { heading: "Delivery" },
  {
    title: "Who will deliver my shipment?",
    desc: "We partner with 220 postal providers around the world, which deliver shipments on your behalf. ",
  },
  {
    title: "When will my shipment be delivered?",
    desc: "<p>Once your shipment has been handed over to us by the merchant or online shop, delivery is based on the service selected. The merchant or online shop usually indicates the delivery time on its website.</p><p>Please keep in mind that delivery times can vary depending on the product/service chosen and origin/destination relation; from 2-3 days for neighboring countries and up to 20 days for countries with long distances.</p><p>Depending on the product/service chosen &ndash; the shipment will normally be handed over to the respective local postal company in your country for final delivery to you.</p>",
  },
  {
    title: "Why has my shipment not been delivered yet?",
    desc: "<p>Please keep in mind that usual delivery times can vary depending on the product /service and origin/destination relation, from 2-3 days for neighboring countries and up to 20 days for countries with long distances. The merchant or online shop usually indicates the expected delivery time on its website.</p><p>If your shipment exceeds the expected delivery time, your shipment unfortunately is delayed. We sincerely apologize for any inconvenience a delay may cause. Delivery delays can be caused by e.g. weather events, customs or strikes. In case your shipment has not arrived within 10 days after the expected delivery time, please contact your merchant or online shop. The merchant or online shop, as our contract partner, can start an investigation for lost items.</p>",
  },
  {
    title: "Why has my shipment not been delivered yet?",
    desc: "<p>Please keep in mind that usual delivery times can vary depending on the product /service and origin/destination relation, from 2-3 days for neighboring countries and up to 20 days for countries with long distances. The merchant or online shop usually indicates the expected delivery time on its website.</p><p>If your shipment exceeds the expected delivery time, your shipment unfortunately is delayed. We sincerely apologize for any inconvenience a delay may cause. Delivery delays can be caused by e.g. weather events, customs or strikes. In case your shipment has not arrived within 10 days after the expected delivery time, please contact your merchant or online shop. The merchant or online shop, as our contract partner, can start an investigation for lost items.</p>",
  },
  {
    title: "Can you change my delivery address?",
    desc: "Unfortunately, it is not possible to change the address once the shipment has been dispatched.",
  },
  {
    title: "Can I change the delivery day or delivery time?",
    desc: "Unfortunately, it is not possible to change the delivery day or delivery time once the shipment has been dispatched.",
  },
  { heading: "Additional" },

  {
    title: "My shipment is damaged or the content is missing. What can I do?",
    desc: "<p>When your shipment is delivered by the local post, you should go to your local post office within 7 days to submit a damage report.</p><p>Please send the damage report to your merchant or online shop. Your merchant or online shop will then claim the damaged or lost parcel.</p><p>Please understand that only the merchant or online shop can file a claim as they are the contract partner.</p>",
  },
  {
    title: "My shipment is not delivered. What can I do?",
    desc: "<p>In case your shipment has not arrived within 10 days after the expected delivery time, please contact your merchant or online shop. The merchant or online shop as our contract partner can start an investigation for lost items.</p><p>Please keep in mind that delivery times can vary depending on the product/service and origin/destination relation, from 2-3 days for neighboring countries and up to 20 days for countries with long distances. The merchant or online shop usually indicates the expected delivery time on its website. Delays of up to 10 days are unfortunately possible due to e.g. weather incidents, customs or operational backlogs.</p>",
  },
  {
    title: "Why is customs holding my shipment?",
    desc: "Shipments must be custom cleared. Customs clearance processing times differ from country to country and cannot be influenced by us. For some countries, duties and taxes may be due. Customs may hold your shipment because they require more information. In this case, they will contact you.",
  },
  {
    title: "What are the duties and taxes?",
    desc: "Duties and taxes are consumption taxes. Customs duties are levied on certain goods purchased abroad. Value added taxes (VAT) are usually levied in the country where the purchased goods are consumed. Duties and taxes differ per country. Depending on country, duties and taxes are settled with the post office or the customs office. You can find more information about customs on the website of your local customs authority.",
  },
];
</script>

<style scoped></style>
