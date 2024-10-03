<template>
  <div class="container2">
   
    <div class="mains">
      <p>Welcome to GoodWill Hospital, where your health and well-being are our top priority. <br>
        We offer a wide range of medical services, from emergency care to specialized treatments,<br> 
        all delivered by our dedicated healthcare professionals. Explore our website to learn more<br> 
        about our services, meet our staff, and find valuable health resources. Together, let's <br>
        achieve your health goals!<br>
        <RouterLink to="/book"><button>Book an appointment now</button></RouterLink></p>
    </div>
    <RouterView/>
  </div>
</template>
<style>
.container2{
  
  height:100vh;
  display:flex;
  flex-direction: column;
}
.mains p{
  align-items: center;
  justify-content: center;
  text-align: center;
  margin:150px;
  font-size: 20px;
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


