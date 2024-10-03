<template>
  <div>
<nav CLASS="BAR">
  <h1>APPOINTMENT MANAGEMENT SYSTEM</h1>
</nav>

  <div class="names">
    
    <form @submit.prevent="bookAppointment" class="Name">
      <div class="small">
        <label for="full-name">Full Name</label>
        <input type="text" id="full-name" v-model="fullName" placeholder="Full Name" required />
      </div>
      <div class="small">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" placeholder="Email" required />
      </div>
      <div class="small">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" v-model="phone" placeholder="Phone Number" required />
      </div>
      <div class="small">
        <label for="appointment-time">Appointment Time</label>
        <input type="time" id="appointment-time" v-model="appointmentTime" required />
      </div>
      <div>
        <select class="dep" v-model="department" required>
          <option disabled value="">Select Department</option>
          <option>Neurology</option>
          <option>Orthopedics</option>
          <option>Dentistry</option>
          <option>Cardiology</option>
          <option>Gastroenterology</option>
        </select>
      </div>
      <button @click.prevent="bookAppointment">Book Appointment</button>
    </form>
  </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const fullName = ref('');
    const email = ref('');
    const phone = ref('');
    const appointmentTime = ref('');
    const department = ref('');
    const router = useRouter();

    const bookAppointment = () => {
      
      const appointment = {
        fullName: fullName.value,
        email: email.value,
        phone: phone.value,
        appointmentTime: appointmentTime.value,
        department: department.value,
      };

      
      fullName.value = '';
      email.value = '';
      phone.value = '';
      appointmentTime.value = '';
      department.value = '';

      
      router.push({ path: '/view', query: appointment });
    };

    return {
      fullName,
      email,
      phone,
      appointmentTime,
      department,
      bookAppointment,
    };
  },
};
</script>

<style>

.BAR h1{
  padding:20px;
}
.names {
  background-image: url('/public/images/hospital.jpg');
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.Name {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
  background: white;
  max-width: 500px;
  width: 100%;
}
.small {
  padding: 10px;
}
.small input {
  padding: 10px;
  width: 250px;
}
.small label {
  padding: 10px;
  margin-right: 40px;
}
.dep {
  padding: 10px;
  width: 200px;
  text-align: center;
  margin: 10px;
}
button {
  width: 200px;
}
</style>
