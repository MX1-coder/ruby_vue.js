<template>
  <div class="px-4 pb-10 flex flex-col justify-center">
    <p class="ourp">Reviews</p>
    <ul class="py-2 sm:px-2 boxGap">
      <li v-for="(card, index) in CardItem" :key="index" class="bgCardImga">
        <div class="reviewBox">
          <div class="stars">
            <img :src="myImage" alt="Description" />
            <img :src="myImage" alt="Description" />
            <img :src="myImage" alt="Description" />
            <img :src="myImage" alt="Description" />
            <img :src="myImage" alt="Description" />
          </div>

          <p class="price">
            {{ card.title }}
          </p>
          <p class="price">
            {{ card.description }}
          </p>
        </div>
        <p class="title">
          {{ card.name }}
        </p>
      </li>
    </ul>
  </div>
</template>
<script>

import myImage from "../assets/Images/star.png";

export default {
  name: "ReviewSection ",
  data() {
    return {
      CardItem: [
        {
          title: "Fabulous frame!",
          description:
            "Excellent! Absolutely love my frame, it looks amazing and is such good quality. It arrived promptly and communication was fabulous!",
          name: "Julie M, London, UK",
        },
        {
          title: "Fabulous frame!",
          description:
            "Excellent! Absolutely love my frame, it looks amazing and is such good quality. It arrived promptly and communication was fabulous!",
          name: "Julie M, London, UK",
        },
        {
          title: "Fabulous frame!",
          description:
            "Excellent! Absolutely love my frame, it looks amazing and is such good quality. It arrived promptly and communication was fabulous!",
          name: "Julie M, London, UK",
        },
        {
          title: "Fabulous frame!",
          description:
            "Excellent! Absolutely love my frame, it looks amazing and is such good quality. It arrived promptly and communication was fabulous!",
          name: "Julie M, London, UK",
        },
      ],
      myImage,
    };
  },
};
</script>

<style scoped>
.boxGap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
}
.bgCardImga {
  width: 285px;
  height: 225px;
  background-color: #ffff;
  padding: 1rem;
    display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* width: 100%;
  max-width: 347px; */
}
.ourp {
  font-size: 36px;
}
.stars {
  display: flex;
  gap: 7px;
}
.reviewBox {
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.price {
  font-size: 14px;
  font-weight:400 ;

}
.title {
  font-size: 12px;
}
@media (max-width: 728px){

.boxGap{
  gap: 10px;
}
}
@media (max-width:498px){

.ourp {
  font-size: 28px;
  
}
}
</style>
