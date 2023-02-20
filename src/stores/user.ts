import type { User } from '@/interfaces/user.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref<User>({
    userId: 0,
    username: '',
    email: '',
    token: '',
  });

  const initState = () => {
    const auth = localStorage.getItem('auth');

    if (!auth) {
      user.value.userId = 0;
      user.value.username = '';
      user.value.email = '';
      user.value.token = '';

      return;
    }

    const state = JSON.parse(auth as string) as User;

    user.value.userId = state.userId;
    user.value.username = state.username;
    user.value.email = state.email;
    user.value.token = state.token;
  };

  const login = (data: User) => {
    user.value.userId = data.userId;
    user.value.username = data.username;
    user.value.email = data.email;
    user.value.token = data.token;

    localStorage.setItem('auth', JSON.stringify(user.value));
  };

  return { user, initState, login };
});
