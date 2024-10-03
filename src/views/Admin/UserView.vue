<template>
  <div>
    <h2>Upcoming Appointments</h2>
    <div>
      <table>
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>Client Name</th>
            <th>Date & Time</th>
            <th>Status</th>
            <th>Assigned Staff</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>12/10/2024, 10:00 AM</td>
            <td>Confirmed</td>
            <td>Jane Smith</td>
            <td><button>Cancel</button></td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appointments: []
    }
  },
  mounted() {
   
    this.getAppointments();
  },
  methods: {
    getAppointments() {
     
    }
  }
}
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border: 1px solid black;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

button {
  padding: 5px 10px;
  cursor: pointer;
  background-color: #ff5c5c;
  border: none;
  color: white;
  border-radius: 5px;
}

button:hover {
  background-color: #ff1c1c;
}
</style>
