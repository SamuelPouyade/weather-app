<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.username }} ({{ user.email }})</li>
    </ul>
  </div>
</template>

<script>
import apiService from '../services/apiService';

export default {
  data() {
    return {
      users: []
    };
  },
  async created() {
    try {
      const response = await apiService.getUsers();
      this.users = response.data;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>