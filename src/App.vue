<template>
  <div id="app">
    <Header></Header>
    <transition name="page">

      <router-view></router-view>
    </transition>
    <Footer></Footer>  

  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  

}
</script>

<style>

body {
  text-align: center;
  background-color: gainsboro;
  margin: 0;
  font-family: 'Black Han Sans', sans-serif;
  color: rgb(35, 35, 87);
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
.page-enter-active {
  transition: opacity .5s;
}
.page-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
