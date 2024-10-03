
<template>
  <Nav3/>
  <div class="login-container">
    <form @submit.prevent="handleLogin" class="login-form">
      <h2>Login</h2>
      
      <label for="UserName">Username</label>
      <input id="UserName" type="text" v-model="username" placeholder="Username" required>
      
      <label for="Password">Password</label>
      <input id="Password" type="password" v-model="password" placeholder="Password" required>
      
      <RouterLink to="/"><button type="submit">Login</button></RouterLink>
    </form>
  </div>
</template>
<script setup>
import Nav3 from '@/components/Nav3.vue';
</script>
<script >
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    handleLogin() {
      // Simulate login validation (replace this with your actual logic)
      if (this.username && this.password) {
        alert('Login successful!');
        // Navigate to the home page
        this.router.push({ name: 'Home' }); // Ensure your route name is correct
      } else {
        alert('Please enter your username and password.');
      }
    }
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
}

.login-form h2 {
  text-align: center;
  color: #333;
}

.login-form label {
  margin-bottom: 5px;
  color: #555;
  display: block;
}

.login-form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s;
}

.login-form input:focus {
  border-color: #007bff;
  outline: none;
}

.login-form button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
}

.login-form button:hover {
  background-color: #0056b3;
}
</style>
