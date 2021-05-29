<template>
  <div id="app">
    <Header/>
    <MainComp msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import MainComp from './components/MainComp.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    MainComp,
      Header
  }
}
</script>

<style>
  @import '~bootstrap/dist/css/bootstrap.css';
  @import './assets/style.css';

</style>
