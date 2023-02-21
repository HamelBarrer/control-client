<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../../stores/user';

const store = useUserStore();
const router = useRouter();

const account = ref('');
const password = ref('');

const handleSubmit = async () => {
  const res = await fetch('http://localhost:3000/api/v1/authentication/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      account: account.value,
      password: password.value,
    }),
  });
  const { user_id, username, email, jwt } = await res.json();

  store.login({
    userId: user_id,
    username,
    email,
    token: jwt,
  });

  router.push({ name: 'home' });
};
</script>

<template>
  <div class="max__content">
    <div class="card">
      <h3 class="card__title">Log in</h3>
      <div class="card__content">
        <form class="form" @submit.prevent="handleSubmit">
          <div class="form__group">
            <label class="form__label">Account:</label>
            <input class="form__input" type="text" v-model="account" />
          </div>
          <div class="form__group">
            <label class="form__label">Password:</label>
            <input class="form__input" type="password" v-model="password" />
          </div>
          <div class="form__buttons">
            <button class="button button__blue">Log in</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
