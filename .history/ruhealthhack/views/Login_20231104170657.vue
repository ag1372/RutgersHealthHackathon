<template>
    <div class="login-container">
      <h2>Login</h2>
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
        Don't have an account? <router-link to="/registration">Create one here</router-link>.
      </p>
    </div>
  </template>
  
  <script>
  // ... your script stays the same
  </script>
  
  <style scoped>
.login-container {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  background-color: #333;
  color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 4px;
  border: none;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
  .router-link {
    color: #3498db;
    text-decoration: none;
  }
  
  .router-link:hover {
    text-decoration: underline;
  }
  </style>
  