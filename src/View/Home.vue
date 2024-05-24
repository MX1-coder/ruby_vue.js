<template>
  <div>
    <ImageSlider />
    <OurProduct />
    <StayInTouch />
    <OurGem />
    <UniqueCollection />
    <FormStayInTouch />
    <FollowUs />
 
  </div>
</template>

<script>
import ImageSlider from "../components/ImageSlider.vue";
import OurProduct from "../components/ourProduct.vue";
import StayInTouch from "../components/StayInTouch.vue";
import OurGem from "../components/OurGem.vue";
import UniqueCollection from "../components/UniqueCollection.vue";
import FormStayInTouch from "../components/FormStayInTouch.vue";
import FollowUs from "../components/FollowUs.vue";


export default {
  name: "Home",
  components: {
    ImageSlider,
    OurProduct,
    StayInTouch,
    OurGem,
    UniqueCollection,
    FormStayInTouch,
    FollowUs,
    
  },
};
</script>

<style>
/* Add your global styles here */
ul {
  list-style-type: none;
  padding: 0;
}
li {
  list-style-type: none;
}
</style>
