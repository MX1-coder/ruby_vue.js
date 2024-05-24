<template>
  <div class="flex items-center flex-row justify-center py-4 px-4">
    <div class="flex items-center flex-row justify-center  sm:flex-col stayTochBox">
    <div>
        <h1 class="hd">
            Stay in touch
        </h1>
        <p>
            Sign up for emails packed <br> with finds and inspiration
        </p>
    </div>
    <div>
        <div class="flex items-center flex-col justify-center gap-[21px]">
          <input placeholder="Enter your email ">
          <button>SUBMIT</button>
        </div>
    </div>
  </div>
   </div>
</template>


<script>
export default {
  name: "stayintoch",
  //   data() {
  //     return {
  //       img: fallImfg,
  //     };
  //   },
};
</script>


<style scoped>
input{
  background: none;
    border-bottom: 1px solid #A0A0A0;
   
    width: 100%;
}
input::placeholder{
color: #A0A0A0;
}
.stayTochBox{
    border: 1px solid #C4C4C4;
      padding: 2rem 4rem;
      gap: 52px;
}
h1{
    font-size: 42px;
}
p{
    font-size: 18px;
}
button{
  background: #000000;
    padding: 0.5rem 7rem;
    color: #F6F1EC;
    font-size: 24px;
}
.hd{
  font-size: 42px;
}
@media (max-width:526px){
.stayTochBox {
    border: 1px solid #C4C4C4;
    padding: 1rem 1rem;
    gap: 20px;
}
.hd{
  font-size: 32px;
}
button{
  font-size: 16px;
}
p{
  font-size: 17px;
}

}
</style>
