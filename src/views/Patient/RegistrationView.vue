<template>
  <div class="main">
    <div>
      <form class="container" @submit.prevent="handleSubmit">
        <h2>Create Account</h2>
        
        <label for="firstName">First Name</label>
        <input id="firstName" type="text" v-model="firstName" placeholder="First Name" required>
        
        <label for="lastName">Last Name</label>
        <input id="lastName" type="text" v-model="lastName" placeholder="Last Name" required>
        
        <label for="username">Username</label>
        <input id="username" type="text" v-model="username" placeholder="Username" required>
        
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email" placeholder="Email" required>
        
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" placeholder="Password" required>
        
        <label for="repeatPassword">Repeat Password</label>
        <input id="repeatPassword" type="password" v-model="repeatPassword" placeholder="Repeat Password" required>
        
        <button type="submit">Submit</button>
        
        <p>Already have an account? <RouterLink to="/login">Login here</RouterLink></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      repeatPassword: ''
    };
  },
  methods: {
    handleSubmit() {
      if (this.password !== this.repeatPassword) {
        alert('Passwords do not match!');
        return;
      }
      
      
      console.log({
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        email: this.email,
        password: this.password
      });
      
   
      this.$router.push({ name: 'Login' });
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

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 400px;
}

h2 {
  text-align: center;
  color: #333;
}

.container input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s;
}

.container input:focus {
  border-color: #007bff;
  outline: none;
}

.container label {
  margin-bottom: 5px;
  color: #555;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>
