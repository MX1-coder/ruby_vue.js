<template>
  <div class="footerContainer">
    <div class="footerBox">
      <div class="flex flex-col justify-center">
        <h1 class="text-white pb-6 font-semibold">Contacts</h1>
        <ul v-for="(contact, index) in ContactsItem" :key="index">
          <li class="text-white">{{ contact }}</li>
        </ul>
      </div>
      <div class="flex flex-col justify-center">
        <h1 class="text-white pb-6 font-semibold">Information</h1>
        <ul v-for="(contact, index) in Information" :key="index">
          <li class="text-white">{{ contact }}</li>
        </ul>
      </div>
      <div class="flex flex-col justify-center">
        <h1 class="text-white pb-6 font-semibold">Menu</h1>
        <ul v-for="(contact, index) in Menu" :key="index">
          <li class="text-white">{{ contact }}</li>
        </ul>
      </div>
      <div class="flex flex-col justify-center">
        <h1 class="text-white pb-6 font-semibold">We are in social networks</h1>
        <ul v-for="(contact, index) in socialNetworks" :key="index">
          <li class="text-white">{{ contact }}</li>
        </ul>
      </div>
    </div>
    <div class="flex justify-between items-center px-10 py-4">
      <p class="text-white">Ruby | home decoration and gifts</p>
      <p class="text-white">All rights reserved © 2021</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {
      ContactsItem: [
        "+38 (067) 374 36 92",
        "info@rubydecor.com.ua",
        "Opening hours: Mon-Fri 10:00-19:00",
        "Sat 10: 00-18: 00; Sun - day off",
      ],
      Information: [
        "Vacancies",
        "Public offer agreement",
        "Terms of exchange & return of goods",
      ],
      Menu: ["About us", "Payment and delivery", "Store", "Contact us"],
      socialNetworks: ["Instagram", "Facebook", "Telegram", "Pinterest"],
    };
  },
};
</script>

<style scoped>
.footerBox {
  background-color: #302e2d;
  padding: 3rem 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f6f1ec;
  flex-wrap: wrap;
}
.footerContainer{
     background-color: #302e2d; 
}

@media only screen and (max-width: 996px) {

}
</style>
