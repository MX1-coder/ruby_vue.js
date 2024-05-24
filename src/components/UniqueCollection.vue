<template>
  <div class="flex items-center flex-col justify-center fall">
    <div>
      <p class="hdng">Unique fall collection 2021</p>

    </div>
    <div>
      
      <p>
        From statement side tables to stylish cabinets and luxurious sofas,
        discover <br> the curation of styles and designers for this fall.
      </p>
      <img :src="img" alt="fall">
    </div>
  </div>
</template>


<script>
import fallImfg from "../assets/Images/fall.png";

export default {
  name: "UniqueCollection",
  data() {
    return {
      img: fallImfg,
    };
  },
};
</script>


<style scoped>
 h1{
  text-align: center;
  font-size: 42px;
  line-height: 58px;
}
p{
  text-align: center;
  font-size: 18px;
  padding: 2rem;
}
.fall{
gap: 50px;
padding-top: 15%;

}
.hdng{
  font-size: 42px;
}
@media (max-width:1016px){
.fall{
gap: 1px;
padding-top: 205px;

}

}
@media (max-width:700px){

.hdng{
  font-size: 30px;
}
p{
  padding: 1rem;
}
}

</style>
