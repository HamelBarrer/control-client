<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const store = useUserStore();
const router = useRouter();

const logout = () => {
  localStorage.clear();
  store.$reset();
  router.push({ name: 'login' });
};
</script>

<template>
  <header class="header">
    <div class="header__content">
      <div class="header__opt">
        <span class="opt__name">{{ store.user.email }}</span>
      </div>
      <nav class="header__nav">
        <ul class="nav__list">
          <li class="nav__item">
            <button class="nav__link" @click="logout">Cerrar Sesion</button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  grid-area: header;
  background-color: #fff;
}

.header__content {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}
</style>
