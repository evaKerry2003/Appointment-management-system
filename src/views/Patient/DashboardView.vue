 <template>
  <div class="board">
  <Nav2/>
  <div class="dash">
    <div class="dashs">
    <RouterLink to="/book" class="dashh"><h3>Book Appointment</h3></RouterLink>
  </div>
  <div class="dashs">
    <RouterLink to="view" class="dashh"><h3>View Appointment</h3></RouterLink>
  </div>
  <div class="dashs">
   <RouterLink to="cancel" class="dashh"><h3>Cancel Appointment</h3></RouterLink>
  </div>
</div>
</div>
  
</template>

<script setup>
import Nav2 from '@/components/Nav2.vue';


</script>

<style>
.board{
  background-image: url("/public/images/hospital.jpg");
  background-size: cover;
  height:100vh;
}
.dash{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.dashs{
  padding:50px;
  
}
.dashs h3{
  padding:70px;
  background: white;
  border-radius:10px ;
  text-align: center;
  transition: 0.3s;
  
}
.dashh{
  text-decoration: none;
  color:black
}
.dashh:hover{
  text-decoration: underline;
}
@media(max-width:768px) {
  .dashh{
    flex: 1 1 calc(50% - 20px);
  }
}
  @media (max-width: 480px) {
  .dashh {
    flex: 1 1 100%; 
  }
}
</style> 
