<template>
  <div id="app">
    <Navbar />
    <Header />
    <router-view />
    <MainFooter />
  </div>
</template>

<script>
import Navbar from "./components/NavBar.vue";
import Header from "./components/Header.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Header,
    MainFooter,
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
body{
  background-color: #F6F1EC;
}
</style>
