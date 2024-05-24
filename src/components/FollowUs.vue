<template>
  <div> 
    <h1 class="pt-16 pb-10 sm:py-4">Follow us</h1>
    <div class="flex items-center  justify-center ">
      <div v-for="(img, index) in FollowImg" :key="index">
        <img :src="img" alt="bottomimg" />
        
      </div>
    </div>
  </div>
</template>


<script>
import img1 from "../assets/Images/1img.png";
import img2 from "../assets/Images/2img.png";
import img3 from "../assets/Images/3img.png";
import img4 from "../assets/Images/4img.png";
import img5 from "../assets/Images/5img.png";
import img6 from "../assets/Images/6img.png";

export default {
  name: "Header",
  data() {
    return {
      FollowImg: [img1, img2, img3, img4, img5, img6],
    };
  },
};
</script>


<style scoped>
.header-box {
  color: #f6f1ec;
  background-color: #000000;
  padding: 1rem;
}
h1{
  font-size: 42px;
  text-align: center;
  
}
@media (max-width:526px){
h1{
  font-size: 30px;
}

}
</style>
