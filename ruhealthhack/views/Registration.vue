<template>
    <div class="registration-container">
      <h1>Registration</h1>
      <form @submit.prevent="submitRegistration">
        <div>
          <label for="firstName">First Name:</label>
          <input id="firstName" class="registration-input" type="text" required>
        </div>
        <div>
          <label for="lastName">Last Name:</label>
          <input id="lastName" class="registration-input" type="text" required>
        </div>
        <div>
          <label for="username">Username:</label>
          <input id="username" class="registration-input" type="text" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input id="email" class="registration-input" type="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input id="password" class="registration-input" type="password" required>
        </div>
        <div>
          <label for="password">Enter Password again:</label>
          <input id="passwordagain" class="registration-input" type="password" required>
        </div>
        <button type="submit" class="registration-button">Register</button>
      </form>
      <p>Already have an account? <router-link to="/login">Log in here</router-link>.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeRegistration',
    methods: {
      submitRegistration() {
        // Logic to handle registration
        console.log('Registration form submitted');
      }
    }
  }
  </script>
  
  <style scoped>
  @import '/stylesheets/RegistrationStyles.css';
  </style>
  