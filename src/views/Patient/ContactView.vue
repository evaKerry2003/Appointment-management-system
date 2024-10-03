<template>
  <div>
    <Nav2 />
    <div class="formed">
      <img src="/public/images/stethoscope.jpg" class="picture">
      <p>We’re here to help you manage your appointments<br>
         effortlessly! Whether you have questions, need <br>support, or want
        to provide feedback, we’re just a message away.</p>
    </div>
    <div class="comb">
      <div class="comb1">
        <h3>Get in Touch</h3>
        Email Support
        For inquiries and support, please reach out to us at:
        ✉️ support@yourappointmentsystem.com
      </div>
      <div class="comb2">
        <h3>Phone Support</h3>
        Prefer to talk? Call us at:
        📞 (123) 456-7890
        Available: Mon-Fri, 9 AM - 5 PM (Your Time Zone)
      </div>
      <div class="comb3">
        <h3>Live Chat</h3>
        Need immediate assistance? Click the chat icon at the bottom right of your screen to connect with our support
        team!
      </div>
    </div>
    <div class="combs">
      <div class="combs1">
        <h3>Schedule a Consultation</h3>
        If you would like to discuss your needs in more detail, you can schedule a one-on-one consultation with our
        team.
        🗓️ Book a Consultation
      </div>
      <div class="combs2">
        Frequently Asked Questions
        Before reaching out, check our FAQs for quick answers to common queries:
        🔗 FAQs
      </div>
      <div class="combs3">
      Feedback
      Your feedback is invaluable to us! If you have suggestions for improvements or new features, please fill out our
      feedback form:
      📝 Feedback Form
</div>
</div>
<div>
<div class="combss">
  <div class="combss1">
      <h3>Follow Us</h3>
      Stay updated with the latest features and news:<br>
      <li> Facebook: [Your Facebook Link]</li>
     
      <li>Twitter: [Your Twitter Link]</li>
     <li>LinkedIn: [Your LinkedIn Link]</li> 
  </div>
  <div class="combss2">
<h3>If you prefer to visit us in person:</h3>
      🏢 Your Company Name
      123 Appointment Ave
      City,<br> State, <br>Zip Code
      Hours: Mon-Fri,
      <br> 9 AM - 5 PM
        </div>
</div>
</div>
    </div>
  
</template>

<script setup>
import Nav2 from '@/components/Nav2.vue';
</script>

<style>
.comb , .combs{
  padding: 20px;
  display: flex;

}
.combss{
  padding:20px;
  display:flex;
  align-items: center;
  justify-content: center;
}

.formed {
  display: flex;
}

.formed p {
  padding: 20px;
  font-size: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.picture {
  width: 500px;
  padding: 20px;
}

.comb1, .comb2, .comb3 {
  background: white;
  padding: 20px;
  border-radius: 20px;

  margin: 20px
}
.combs1, .combs2, .combs3 {
  background: white;
  padding: 20px;
  border-radius: 20px;

  margin: 20px
}
.combss1 , .combss2{
  padding:20px
}
</style>