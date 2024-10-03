
<template>
  <div class="slap">
    
    
    <div class="LAP">
    <h1>Your Appointment Details</h1>
    <p><strong>Full Name:</strong> {{ appointment.fullName }}</p>
    <p><strong>Email:</strong> {{ appointment.email }}</p>
    <p><strong>Phone:</strong> {{ appointment.phone }}</p>
    <p><strong>Appointment Time:</strong> {{ appointment.appointmentTime }}</p>
    <p><strong>Department:</strong> {{ appointment.department }}</p>
    
    <button @click="cancelAppointment" class="cell">Cancel Appointment</button><br>
    <router-link to="/">Back to Booking</router-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const appointment = ref({});

    onMounted(() => {
      appointment.value = {
        fullName: route.query.fullName,
        email: route.query.email,
        phone: route.query.phone,
        appointmentTime: route.query.appointmentTime,
        department: route.query.department,
      };
    });

    const cancelAppointment = () => {
      
      appointment.value = {};
      router.push('/');
    };

    return {
      appointment,
      cancelAppointment,
    };
  },
};
</script>

<style>
.slap{
  background-image: url(/public/images/hospital.jpg);
  background-size: cover;
  height:100vh;
  padding: 10px;
}
.LAP{
  background-color: white;
  height:80vh;
  padding:20px;
  border-radius: 30px;
}
p {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
}
.cell button{
  margin-top: 20px;
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  margin:10px;
}
.cell button:hover {
  background-color: darkred;
}
</style>
