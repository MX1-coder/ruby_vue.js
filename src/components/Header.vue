<script>
export default {
  name: "Header",
  data() {
    return {
      headerItems: ["Artificial flower", "Lighting","Rugs","Wall decoration","Gifts"],
    };
  },
};
</script>

<template>
  <ul class="flex items-center justify-around flex-wrap header-box">
    <li  v-for="item in headerItems" :key="item" >{{ item }}</li>
  </ul>
</template>

<style scoped>
.header-box {
    
    color:#F6F1EC;
    background-color: #000000;
    padding:  1rem;
}

</style>
