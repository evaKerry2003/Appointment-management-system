<template>
  <div class="sidebar1">
    <nav class="barnav">
      <p class="twoss"><i class='bx bxs-user'></i></p>
      <RouterLink to="/manage" class="oness">Manage Appointment</RouterLink>
      <RouterLink to="/users" class="oness">Manage Users</RouterLink>
      <RouterLink to="/report" class="oness">View Reports</RouterLink>
      <RouterLink to="/setting" class="oness">System setting</RouterLink>
    </nav>
    
    <RouterView/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.sidebar1 {
  display: flex;
  
}



.barnav {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: white;
  width: 250px;
  height: 96vh;
  position: sticky;
}

.oness {
  padding: 10px;
  text-decoration: none;
  color: black;
  font-size: 20px;
}
.oness:hover{
  background-color: beige;
}

.twoss i {
  font-size: 100px;
  padding: 10px;

}
</style>