<template>
  <div class="container2">
    <div class="container3">
      <h1>GoodWill Hospital</h1>
      <nav class="types">
        <RouterLink to="/login" class="type">Login</RouterLink>
        <RouterLink to="/registration" class="type">Registration</RouterLink>
      </nav>
    </div>
    <div class="mains">
      <p>Welcome to GoodWill Hospital, where your health and well-being are our top priority. <br>
        We offer a wide range of medical services, from emergency care to specialized treatments,<br> 
        all delivered by our dedicated healthcare professionals. Explore our website to learn more<br> 
        about our services, meet our staff, and find valuable health resources. Together, let's <br>
        achieve your health goals!<br>
        <button>Book an appointment now</button></p>
        
    
    </div>
    <RouterView/>
  </div>
</template>
<style>
.container2{
  background-image: url(/public/images/hospital.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height:100vh;
  display:flex;
  flex-direction: column;
}
.mains p{
  align-items: center;
  justify-content: center;
  text-align: center;
  margin:150px;
  font-size: 15px;
  font-weight:bold ;
}
.mains button{
 margin:20px;
 width:200px
}
.types{
float:right;

}
.type{
  padding:10px;
  font-size: 20px;
  text-decoration: none;
  color:black;
  padding-top:0px;
}
.type:hover{
  color:aliceblue;
}
</style>