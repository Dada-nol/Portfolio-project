<script setup>
  import Bodypage from './components/Bodypage.vue';
  import Footerpage from './components/Footerpage.vue';
  import Headerpage from './components/Headerpage.vue';
</script>

<template>

  <router-view></router-view>
  
  <section>
  <Headerpage/>
  </section>

  <section>
    <Bodypage/>
  </section>

  <section>
    <Footerpage/>
  </section>

</template>

<style scoped>
  
</style>
