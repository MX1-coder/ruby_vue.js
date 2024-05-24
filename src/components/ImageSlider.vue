<template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="(slide, index) in slides" :key="index">
      <div class="carousel__item"  :style="{ backgroundImage: 'url(' + bgImg+ ')' }">
        <!-- <img src="" alt="Slide Image"> -->
        <div class="overlay">
          <h2>{{ slide.title }}</h2>
          <p>{{ slide.description }}</p>
          <div class="shopNow">
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
import bgImg from "../assets/Images/bgSlider image.png"

export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      slides: [
        {
          //   image: require('@/assets/slide1.jpg'),
          title: "RUBY HOME&GIFTS",
          description: "Limited Edition",
        },
        {
          //   image: require('@/assets/slide2.jpg'),
          title: "RUBY HOME&GIFTS 2",
          description: "Limited Edition",
        },
        {
          //   image: require('@/assets/slide3.jpg'),
          title: "RUBY HOME&GIFTS 3",
          description: "Limited Edition",
        },
        // Add more slides as needed
      ],
      bgImg
    };
  },
});
</script>

<style scoped>
/* Add your custom CSS styles here */
.carousel__item {
  position: relative;
  width: 100%;
  height:700px; 
  overflow: hidden;
  background-image: url("@/assets/Images/");
  background: #78646440;
}

.carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  padding: 20px;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap:5px;
  background: #78646440;
}

.overlay h2 {
  font-size: 2em;
}

.overlay p {
  font-size: 1.2em;
}
h2 {
  font-size: 74px;
  line-height: 68px;
}
.shopNow{

    padding: 0.5rem 2.2rem;
    background: #fff;
    color: #857065;
;
}
</style>
