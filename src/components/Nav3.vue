
<template>
  <div class="main-container">
    <div class="header">
      <router-link to="/" class="sided"><h1>APPOINTMENT MANAGEMENT SYSTEM</h1></router-link>
      <nav class="auth-links">
        <router-link to="/login" class="link">Login</router-link>
        <router-link to="/registration" class="link">Register</router-link>
      </nav>
    </div>
    <div class="content-container">
      <div class="sidebar">
        <nav>
          <router-link to="/dashboard" class="side">Dashboard</router-link>
          
          <router-link to="/profile" class="side">Profile</router-link>
          <router-link to="/history" class="side">Medical History</router-link>
          <router-link to="/prescriptions" class="side">Prescriptions</router-link>
          <router-link to="/payments" class="side">Payment</router-link>
          <router-link to="/notification" class="side">Notification</router-link>
          <router-link to="/contact" class="side">Support/Contact Us</router-link>
        </nav>
      </div>
      <div class="main-content">
        <Home/>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Home from './Home.vue';
</script>

<style>
.main-container {
  background-image: url('/public/images/hospital.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: white;
  padding: 27px;
  flex: 1;
}

.auth-links {
  float: right;
}

.link {
  font-size: 20px;
  padding: 10px;
  text-decoration: none;
  color: #007bff;
}

.link:hover {
  text-decoration: underline;
}

.content-container {
  display: flex;
  flex: 1; 
}

.sidebar {
  display: flex;
  flex-direction: column;
  background: white;
  width: 200px;
  height: 100vh;
  padding:15px; 
}

.side {
  padding: 8px;
  text-decoration: none;
  font-size: 20px;
  color: #007bff;
  display: flex;
}

.side:hover {
  text-decoration: underline;
}

.main-content {
  flex: 1; 
  padding: 20px; 
}
.sided{
  text-decoration: none;
  color: #007bff;
}
</style>
