<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue"
</script>

<template>
  <div class="body-conatiner">
    <div>
      <Navbar/>
    </div>
    <main>
      <RouterView/>
    </main>
  </div>
</template>

<style scoped>
.body-conatiner {
  display: flex;
  gap: 30px;
}
</style>
