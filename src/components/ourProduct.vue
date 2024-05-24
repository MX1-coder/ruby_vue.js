<template>
  <div class="flex items-center flex-col justify-center">
    <p class="ourp">Our top products</p>

    <ul class=" boxGap sm:px-2">
      <!-- <li v-for="(card, index) in CardItem" :key="index">{{ item }}</li> -->
      <li v-for="(card, index) in CardItem" :key="index">
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
</template>

<script>
import card1 from "../assets/Images/pngaaa 2.png";
import card2 from "../assets/Images/02_product_fruitstar_d7936d83-fb58-4b7a-9abd-91cc15e7c613-removebg-preview 1.png";
import card3 from "../assets/Images/MalachiteMarbleVanityTray_large-removebg-preview 1.png";
import card4 from "../assets/Images/pngwing 1.png";

export default {
  name: "ourProduct",
  data() {
    return {
      CardItem: [
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
    };
  },
};
</script>

<style scoped>
.ourp {
  font-size: 42px;
  padding: 3rem;
}
.bgCardImga {
  background-color: #e7e7e7;
  width: 400px;
  height: 350px;

  /* width: 100%;
  max-width: 347px; */
}
.boxGap {
  display: grid;
  grid-template-columns: auto auto;
  gap: 25px;
}
.title {
  font-size: 22px;
  font-weight: 500;
}

@media only screen and (max-width: 767px) {
  .bgCardImga {
    background-color: #e7e7e7;
    width: 300px;
    height: 350px;
  }
  .boxGap {
    display: grid;
    grid-template-columns: auto;
    gap: 25px;
  }
}
</style>
