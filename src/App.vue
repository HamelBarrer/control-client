<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useUserStore } from './stores/user';

const store = useUserStore();

store.initState();
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
