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
/* ... your styles stay the same */

/* Add styles for your link if needed */
.router-link {
  color: #3498db;
  text-decoration: none;
}

.router-link:hover {
  text-decoration: underline;
}
</style>
