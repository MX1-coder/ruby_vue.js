<template>
  <div class="p-8">
    <div class="sortBox">
      <div>
        <p>Sort by</p>
      </div>
      <div>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          @click="toggle"
        >
          Dropdown button
          <svg
            class="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <!-- Dropdown menu -->
        <div
          :id="toggleClass"
          class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Dashboard</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Settings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Earnings</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >Sign out</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="filtersidebar w-[20%]">
        <div class="flex justify-between items-center p-6">
          <h1>Filter by</h1>
          <p>clear</p>
        </div>
        <div >
          <h1 class="font-bold" >Category</h1>
          <div>
            <ul v-for="(item, index) in Categories" :key="index" > 
               <router-link :to="{ name: 'ProductDetails', params: { id: index } }">
              <li class="catergoriesList">
                <input type="checkbox" class="" />
                <label>{{ item }}</label>
              </li>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
      <div class="CardBox w-[80%]">
        <ul class="px-1 boxGap sm:px-2">
          <!-- <li v-for="(card, index) in CardItem" :key="index">{{ item }}</li> -->
          <li v-for="(card, index) in carddata" :key="index" >
            <div class="flex items-center justify-center bgCardImga">
              <div class="flex items-center justify-center">
                <img :src="card.image" alt="cardImg" />
              </div>
            </div>
            <div>
              <p class="title">
                {{ card.title }}
              </p>
              <p class="price">
                {{ card.price }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import card1 from "../assets/Images/pngaaa 2.png";
import card2 from "../assets/Images/02_product_fruitstar_d7936d83-fb58-4b7a-9abd-91cc15e7c613-removebg-preview 1.png";
import card3 from "../assets/Images/MalachiteMarbleVanityTray_large-removebg-preview 1.png";
import card4 from "../assets/Images/pngwing 1.png";

export default {
  name: "Categories",
  data() {
    return {
      toggleClass: "hidedropdown",
      carddata: [
        {
          image: card1,
          title: "Golden vase",
          price: "$250",
        },
        {
          image: card2,
          title: "Emerald tray",
          price: "$250",
        },
        {
          image: card3,
          title: "Pearl vase",
          price: "$250",
        },
        {
          image: card4,
          title: "Set of paintings",
          price: "$250",
        },
        {
          image: card1,
          title: "Golden vase",
          price: "$250",
        },
        {
          image: card2,
          title: "Emerald tray",
          price: "$250",
        },
        {
          image: card3,
          title: "Pearl vase",
          price: "$250",
        },
        {
          image: card4,
          title: "Set of paintings",
          price: "$250",
        },
        {
          image: card1,
          title: "Golden vase",
          price: "$250",
        },
        {
          image: card2,
          title: "Emerald tray",
          price: "$250",
        },
        {
          image: card3,
          title: "Pearl vase",
          price: "$250",
        },
        {
          image: card4,
          title: "Set of paintings",
          price: "$250",
        },
      ],
      Categories: [
        "Artificial",
        "flower",
        "Wall",
        "painting",
        "Wall ",
        "decor ",
        "Sculpture",
        "Vase",
        "Table",
        "decor",
        "Gifts",
      ],
    };
  },
  methods: {
    toggle() {
      this.toggleClass = "block";
    },
  },
};
</script>

<style scoped>
#hidedropdown {
  display: none;
}
#block {
  display: block;
}
.sortBox {
  display: flex;
  align-items: self-start;
  justify-content: end;
  gap: 12px;
  padding: 2rem;
}
.bgCardImga {
  background-color: #e7e7e7;
  height: 398px;

  /* width: 100%;
  max-width: 347px; */
}
.boxGap {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 25px;
}
 .catergoriesList{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: 0.5rem 0rem;
}
</style>