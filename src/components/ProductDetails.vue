<template>
  <div class="product-detail">
    <div class="mainProductBox">
      <div class="image-Box">
        <img :src="proImg" alt="productImg" class="imgIn" />
      </div>
      <div class="poduct-dscptn">
        <div class="prod-inner-box">
          <h1>THIN WOODEN FRAME</h1>
          <p>$1235</p>
          <hr />
          <div class="size">
            <p>size</p>
            <p>D27cmx H10cm</p>
          </div>
          <hr />
          <div class="size">
            <button class="sizeBtn">D16cmx H3cm</button>
            <button class="sizeBtn">D16cmx H3cm</button>
            <button class="sizeBtn">D16cmx H3cm</button>
          </div>
          <hr />
          <div class="size">
            <p>Color</p>
            <p>White</p>
          </div>
          <hr />
          <div>
            <img :src="ddImg" alt="productImg" />
          </div>
          <hr />
          <div class="flex gap-4">
            <img :src="glob" alt="productImg" />
            <p>Worlwide shipping available</p>
          </div>
          <hr />
          <div class="flex justify-between">
            <div class="flex gap-4 border p-1 items-center">
              <button>+</button>
              <p>0</p>
              <button>+</button>
            </div>
            <button class="AddBag">ADD TO BAG</button>
          </div>
          <hr />
          <p class="pro-info">
            Fine wooden frame with a golden edge. Includes a passe-partout.
            <br />Elegantly designed to be used as a free-standing or wall
            hanging decoration, this box frame can hold a landscape or portrait
            image.<br />
            Made in Italy.
          </p>
        </div>
      </div>
    </div>
    <div class="belowBox">
      <button class="DropDownBox">
        <p>Shipping and returns</p>
        <img :src="arrow" alt="arrow">
      </button>
    </div>
    <StyleWithUs />
    <ReviewSection />
  </div>
</template>

<script>
import StyleWithUs from "../components/StylewithUs.vue";
import ReviewSection from "../components/ReviewSection.vue";
import proImg from "../assets/Images/ProImg.png";
import ddImg from "../assets/Images/ddddddd.png";
import glob from "../assets/Images/glob.png";
import arrow from "../assets/Images/expand.png"

export default {
  name: "ProductDetails",
  // props: ["id"],
  components: {
    StyleWithUs,
    ReviewSection,
  },
  data() {
    return {
      proImg,
      ddImg,
      glob,
      arrow
    };
  },
};
</script>

<style scoped>
.product-detail {
  padding: 2rem;
}
.mainProductBox {
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  justify-content: space-between;
}

.image-Box {
  width: 55%;
  background: #e7e7e7;
  display: flex;
  justify-content: center;
}

.poduct-dscptn {
  width: 40%;
  padding-left: 1rem;
  padding-right: 1rem;
}
.prod-inner-box {
  background-color: #ffff;
  height: 100%;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  gap: 10px;
}
.size {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
}
button.sizeBtn {
  border: 1px solid #c9c4c4;
  padding: 0.5rem;
}
button.AddBag {
  background: black;
  color: white;
  padding: 0.8rem 2.5rem;
}
p.pro-info {
  font-size: 15px;
  font-weight: 500;
}
img.imgIn {
  width: 406px;
  height: 287px;
}
.belowBox {
  display: flex;
  justify-content: end;
  padding: 1rem;
}

button.DropDownBox {
width: 38.5%;
    background: #ffff;
    padding: 1.5rem;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media (max-width: 930px){
.image-Box{
  width: 35%;

}
.poduct-dscptn{
  width: 65%;
}
}
@media (max-width: 728px){
  .mainProductBox{
    gap: 10px;
  }
.image-Box{
  width: 100%;

}
.poduct-dscptn{
  width: 100%;
  padding: 0;
}
button.DropDownBox{
  width: 100%;
          width: 100%;
        padding: 1rem;
        font-size: 17px;
}
.belowBox{
  padding: 1rem 0rem;
}
.boxGap{
  gap: 10px;
}
}
</style>
