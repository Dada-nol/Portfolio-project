<script setup>
  import ContenuVue from './components/Contenu.vue';
  import Footerpage from './components/Footerpage.vue';
  import HeaderCard from './components/HeaderCard.vue';
</script>

<template>
  <router-view></router-view>
  <HeaderCard/>
  <ContenuVue/>
  <Footerpage/>
</template>

<style scoped>
  
</style>
