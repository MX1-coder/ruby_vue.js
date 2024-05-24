<template>
  <div class="px-4 flex flex-col justify-center">
    <p class="ourp">Style this with</p>
    <ul class="py-2 boxGap sm:px-2">
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
      <div class="p-4">
        <img :src="arrowImg" alt="arrowImg" class="imagArrow" />
      </div>
    </ul>
  </div>
</template>
<script>
import card1 from "../assets/Images/pngaaa 2.png";
import card2 from "../assets/Images/02_product_fruitstar_d7936d83-fb58-4b7a-9abd-91cc15e7c613-removebg-preview 1.png";
import card3 from "../assets/Images/MalachiteMarbleVanityTray_large-removebg-preview 1.png";
import card4 from "../assets/Images/pngwing 1.png";
import arrowImg from "../assets/Images/slider.png";

export default {
  name: "StyleWithUs",
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
      arrowImg,
    };
  },
};
</script>

<style scoped>
.boxGap {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
}
.bgCardImga {
  background-color: #e7e7e7;
  width: 285px;
  height: 285px;

  /* width: 100%;
  max-width: 347px; */
}
.ourp {
  font-size: 36px;
}
@media (max-width: 1296px) {
  .imagArrow {
    display: none;
  }
}
@media (max-width: 945px){
.bgCardImga {
    background-color: #e7e7e7;
    width: 279px;
    height: 285px;}
}
@media (max-width: 498px) {
  .ourp {
    font-size: 28px;
  }
  .boxGap {
    justify-content: center;
  }
}
</style>
