<script setup lang="ts">
import type { UserComplete } from '@/interfaces/user.interface';
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';

const store = useUserStore();

const users = ref<UserComplete[]>();

const listUsers = async () => {
  const rest = await fetch('http://localhost:3000/api/v1/users', {
    headers: {
      Authorization: `Bearer ${store.user.token}`,
    },
  });

  const data = await rest.json();

  users.value = data.users;
};

listUsers();
</script>

<template>
  <div class="container">
    <h2 class="title">Users</h2>
    <div class="table card">
      <div class="table__header">
        <div class="table__opt">
          <input type="text" placeholder="Search..." />
        </div>
        <div class="table__buttons">
          <button class="button button__blue">Agregar</button>
        </div>
      </div>
      <div class="table__content">
        <div class="table__data">
          <div class="table__element">Fecha Creacion</div>
          <div class="table__element">Nombre de Usuario</div>
          <div class="table__element">Correo</div>
          <div v-for="user in users" :key="user.userId" class="table__row">
            <div class="table__element">
              {{ new Date(user.created_at).toDateString() }}
            </div>
            <div class="table__element">{{ user.username }}</div>
            <div class="table__element">{{ user.email }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
