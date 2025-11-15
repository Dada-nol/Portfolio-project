<script setup>
import Bodypage from "./components/Bodypage.vue";
import Footerpage from "./components/Footerpage.vue";
import Formulaire from "./components/Formulaire.vue";
import Headerpage from "./components/Headerpage.vue";
import Services from "./components/Services.vue";
</script>

<template>
  <router-view></router-view>

  <Headerpage />

  <Bodypage />
  <Services></Services>
  <Formulaire></Formulaire>

  <Footerpage />
</template>

<style scoped></style>
