<template>
  <div id="app">
    <ContentList></ContentList>
    <Header></Header>
  </div>
</template>

<script>
import ContentList from "./components/ContentList.vue";
import Header from "./components/Header.vue";

export default {
  name: 'App',
  components: {
    ContentList,
    Header,
  },
  

}
</script>

<style>

body {
  text-align: center;
  background-color: gainsboro;
  margin: 0;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
