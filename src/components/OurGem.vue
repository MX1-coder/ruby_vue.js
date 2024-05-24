<template>
  <div class="flex items-center flex-col justify-center">
    <p class="ourp">Our Gems</p>

    <div class="w-full hdBox">
      <OurGemHead />
    </div>
    <ul class="boxGap sm:px-2">
      <!-- <li v-for="(card, index) in CardItem" :key="index">{{ item }}</li> -->
      <li v-for="(card, index) in CardItem" :key="index" class="mainLi">
        <div class="bgCardImga">
          <img :src="card.image" alt="cardImg" />
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
import card1 from "../assets/Images/category_1.png";
import card2 from "../assets/Images/category_2.png";
import card3 from "../assets/Images/category_3.png";
import card4 from "../assets/Images/category_4.png";
import card5 from "../assets/Images/category_5.png";
import card6 from "../assets/Images/category_6.png";
import OurGemHead from "./OurGemHead.vue";

export default {
  name: "ourProduct",
  components: {
    OurGemHead,
  },
  data() {
    return {
      CardItem: [
        {
          image: card1,
          title: "compositions",
          price: "$250",
        },
        {
          image: card2,
          title: "Nature prints",
          price: "$250",
        },
        {
          image: card3,
          title: "abstraction",
          price: "$250",
        },
        {
          image: card4,
          title: "geometry",
          price: "$250",
        },
        {
          image: card5,
          title: "watercolor",
          price: "$250",
        },
        {
          image: card6,
          title: "Print & poster",
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

  /* width: 100%;
  max-width: 347px; */
}
.boxGap {
  display: grid;
  grid-template-columns: auto auto;
  gap: 5%;
  padding-top: 38px;
}
.title {
  font-size: 22px;
  font-weight: 500;
}
.mainLi {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.hdBox {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
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
    gap: 1%;
    height: 100%;
  }
}
@media (max-width: 526px) {
  h1 {
    font-size: 30px;
  }
  .ourp {
    font-size: 34px;
    padding: 1rem;
  }
}
</style>
