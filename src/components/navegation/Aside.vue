<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <aside class="aside">
    <div class="aside__content">
      <div class="aside__title">
        <span class="title">Control</span>
      </div>
      <div class="aside__menu">
        <ul class="menu__list">
          <li class="menu__item">
            <RouterLink :to="{ name: 'home' }" class="menu__link">
              Inicio
            </RouterLink>
          </li>
          <li class="menu__item">
            <RouterLink :to="{ name: 'user' }" class="menu__link">
              Usuarios
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.aside {
  grid-area: aside;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 6%) 0px -9px 9px;
}

.aside__content {
  display: flex;
  flex-direction: column;
}

.aside__title {
  height: 3.5rem;
  border-bottom: 1px solid rgb(234, 237, 242);
}

.menu__link {
  display: flex;
  color: rgb(77, 105, 146);
  padding: 0.7rem;
}

.menu__link:hover {
  background-color: rgb(198, 197, 223);
}
</style>
