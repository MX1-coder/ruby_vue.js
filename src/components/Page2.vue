<template>
  <div class="p-8">
    <div class="sortBox">
      <div>
        <p class=" sm:text-[18px] text-[26px]">Sort by</p>
      </div>
      <div class=" relative inner_box ">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="text-back font-medium border text-sm px-5 py-2.5 text-center flex justify-between items-center bg-white  border-black w-full"
          type="button"
          @click="toggle"
        >
          Newest
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

      
        <div
        :class="[toggleClass ? 'block' : 'hidedropdown', 'z-10 bg-white divide-y divide-gray-100 border shadow w-50 absolute w-full']"
          
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200 border border-black"
            aria-labelledby="dropdownDefaultButton"
          >
            <li
              v-for="(item, index) in dropDownItems"
              :key="index"
              class="block px-4 py-2 hover:bg-gray-100 text-black "
            >
              {{ item }}
            </li>
          </ul>
        </div>

      </div>
    </div>
    <div class="flex">
      <div class="filtersidebar w-[20%] md:w-[30%]">
        <div class="flex justify-between items-center pb-6 md:flex-col">
          <h1 class="text-[26px]">Filter by</h1>
          <p>clear</p>
        </div>
        <div>
          <h1 class="font-bold">Category</h1>
          <div>
            <ul v-for="(item, index) in Categories" :key="index">
              <li class="catergoriesList">
                <input type="checkbox" class="" />
                <label>{{ item }}</label>
              </li>
            </ul>
          </div>
          <div class="priceBox py-4">
            <p>Brand</p>
            <p>+</p>
          </div>
            <div  class="priceBox">
            <p>Price</p>
            <p>-</p>
          </div>
          <div>
            <div class="total">
              <p>$200</p>
              <p>$1000</p>
            </div>
          </div>
        </div>
      </div>
      <div class="CardBox w-[80%]">
        <ul class="px-1 boxGap sm:px-2">
          <!-- <li v-for="(card, index) in CardItem" :key="index">{{ item }}</li> -->
          <li v-for="(card, index) in carddata" :key="index">
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
    <div class="learnMore">
<button class="loadbtn">LODE MORE</button>
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
     toggleClass: false,
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
      dropDownItems: [
        "Relevance",
        "Best selling",
        "Highest price",
        "Lowest price",
      ],
    };
  },
  methods: {
    toggle() {
      this.toggleClass = !this.toggleClass;
    },
  },
};
</script>

<style scoped>
.hidedropdown {
  display: none;
}
.block {
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
    height: 302px;
    width: 302px;
}
.boxGap {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 25px;
}
.catergoriesList {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding: 0.5rem 0rem;
}
.filtersidebar{
  padding-right: 1rem;

}
.priceBox {
    width: 50%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
}
.total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0rem;
    border-bottom: 1px solid;}
    .learnMore {
    
    display: flex;
    justify-content: end;
    padding: 1rem 0rem;
}
button.loadbtn {
    background: #fff;
    width: 80%;
    padding: 1rem;
    border: 1px solid;
    font-size: 24px;
}
.inner_box{
  width: 310px;
}
@media (max-width: 1206px) {
  .boxGap{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 738px){
  .sortBox{
    padding: 1rem 0.5rem;
  }
  .inner_box{
  width: 210px;
}
}

@media (max-width: 604px){
.filtersidebar{
 display: none;
}
.CardBox {
    width: 100%;
}
button.loadbtn{
  width: 100%;
  padding: 0.5px;
  font-size: 20px;
}
}


</style>
