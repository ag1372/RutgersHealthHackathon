<template>
    <div class="login-container">
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="credentials.username" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="credentials.password" required>
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
       <router-link to="/registration">Don't have an account? </router-link>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeLogin',
    data() {
      return {
        credentials: {
          username: '',
          password: ''
        }
      };
    },
    methods: {
      login() {
        // Handle login logic here
        console.log('Logging in with:', this.credentials);
        // You would replace the above console.log with actual login logic
      }
    }
  }
  </script>
  
  <style scoped>

@import './LoginStyles.css';
  </style>
  