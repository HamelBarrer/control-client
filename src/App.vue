<script setup lang="ts">
import { RouterView } from 'vue-router';
import Aside from './components/navegation/Aside.vue';
import Header from './components/navegation/Header.vue';
import { useUserStore } from './stores/user';

const store = useUserStore();

store.initState();
</script>

<template>
  <div class="wrapper">
    <Header />
    <Aside />
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
