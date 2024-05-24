<template>
  <ul class="flex items-center justify-around header-box-top flex-wrap font-semibold">
    <li v-for="item in headerItems" :key="item">{{ item }}</li>
  </ul>
</template>


<script>
export default {
  name: "OurGemHeader",
  data() {
    return {
      headerItems: [
        "Design secsion",
        "Wall painting",
        "Interior decoration",
        "Wall decoration",
        "Gift section",
      ],
    };
  },
};
</script>


<style scoped>
.header-box-top {
  width: 100%;
  color: #050505;
 
  padding: 1rem;
}
</style>
