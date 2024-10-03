<template>
  <div class="mainss">
    <div class="stem">
      <h1>APPOINTMENT MANAGEMENT SYSTEM</h1>
      
    </div>
    <RouterView/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.mainss{
  background-image: url(/public/images/hospital.jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
.stem{
background-color: white;
padding:27px
}
.links{
  float:right; 
}
.link{
  font-size: 20px;
  padding:10px;
  text-decoration: none;
  color: #007bff;
}
.link:hover{
  text-decoration: underline;
}
/* .link:focus{
  outline: 2px solid #0056b3;
} */
</style>