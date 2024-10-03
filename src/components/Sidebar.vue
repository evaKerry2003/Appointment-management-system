<template>
  <div>
    <div>
      <nav class="sides">
        <RouterLink to="/dashboard">Dashboard</RouterLink>
        <RouterLink to="/book">Book Appointment</RouterLink>
        <RouterLink to="/view">View Appointment</RouterLink>
        <RouterLink to="/cancel">Cancel Appointment</RouterLink>
        <RouterLink to="/profile"> Profile</RouterLink>
        <RouterLink to="history">Medical History</RouterLink>
        <RouterLink to="/prescriptions">Prescriptions</RouterLink>
        <RouterLink to="/payments">Payment</RouterLink>
        <RouterLink to="notification">Notification</RouterLink>
        <RouterLink to="support">Support/Contact Us</RouterLink>
      </nav>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.sides{
  display:flex;
  flex-direction: column;
  background:white;
  width:200px;
  height: 80vh;
  
}
</style>