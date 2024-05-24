
<template>
  <div class="my-12">
    <div class="background">
      <img :src="imageUrl" />
      <div class="innerbox">
        <h1>Stay in touch</h1>

        <p>
          Ruby is a store of luxurious home decoration and gifts. We are
          passionate about doing our part to make life better. We provide
          high-quality merchandise, great value, and exceptional customer
          service. We connect people with products and services in new and
          unexpected ways. We do our part to create dream homes for all.
        </p>
        <div class="flex items-center flex-col justify-center gap-[10px]">
          <input placeholder="Enter your email ">
          <button>SUBMIT</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgImage from "../assets/Images/photo_back.png";

export default {
  name: "StayInToch",
  data() {
    return {
      imageUrl: bgImage,
    };
  },
};
</script>


<style scoped>
.background {
  /* background-image: url("@/assets/Images/photo_back.png"); */
  width: 100%;
  /* height: 718px; */
  background: cover;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.innerbox {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(72 65 65 / 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10%;
}
h1 {
  color: #f6f1ec;
  font-size: 42px;
  line-height: 42px;
}
p {
  text-align: center;
    color: #f6f1ec;
    font-size: 15px;
    font-weight: 500;
    width: 37%;
    line-height: 27px;
    font-size: 17px;
}
img{
  width: 100%;
  height: 100%;
}
button{
  background: #fff;
    padding: 0.5rem 7rem;
    color: #302E2D;
    font-size: 24px;
}
input{
  background: none;
    border-bottom: 1px solid #FFFF;
   
    width: 100%;
}
input::placeholder{
 color: #ffff;
}

@media only screen and (max-width:1126px){
 .innerbox{
  gap:2%
 }
 p{
  width: 77%;
 }

}
@media only screen and (max-width: 767px){
.background{
  height: 500px;
}
p{
  width: 95%;
}
p {
    text-align: center;
    color: #f6f1ec;
    font-weight: 500;
   width: 95%;
    line-height: 24px;
    font-size: 15px;
}
h1{
  font-size: 30px;
}
button{
  font-size: 20px;
}
}
</style>
