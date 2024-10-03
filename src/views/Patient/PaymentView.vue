<template>
  <div>
    <Nav2/>
  <div class="forms">
    <h3>Payment Page</h3>
    <p>
      Complete Your Payment<br>
      Thank you for choosing HealthFirst Hospital!<br>
      To ensure you receive the best care, please complete your payment below.
    </p>
<hr>
<h3>Payment Information</h3>
<form>
<h4>1. Payment Method</h4>
<br>
Choose your preferred payment method:
<select>
  <option>Credit/Debit Card</option>
  <option >PayPal</option>
  <option >Insurance (If applicable)</option>
</select>
<br>


<h4>2. Card Details (if applicable)</h4>
<br>
<label for="Card number">Card number</label>
<input type="name"><br>
<label for="number">Expiraion date(DD/MM/YY)/ CVV:</label>
<input type="date">
<br>
<h4>3. Billing Information</h4>
<br>

<label for="Name on Card">Name of the card:</label>
<input type="name"><br>
<label for="Name on Card">Billing address:</label>
<br>
<label for="Name on Card">Street address:</label>
<input type="name">
<br>
<label for="Name on Card">Name of the card:</label>
<input type="name">
<br>
<label for="Name on Card">City:</label>
<input type="name">
<br>
<label for="Name on Card">State:</label>
<input type="name">
<br>
<label for="Name on Card">Zipcode:</label>
<input type="name">
<br>
<h4>4. Contact Information</h4>
<label for="email">Email Address:</label>
<input type="email"><br>
<label for="Phone number">Phone Number:</label>
<input type="name">
<br>
<button>Submit</button>
</form>
<br>
<h3>Security Information</h3>
Your payment is processed securely using 
industry-standard encryption to protect your
 information. We adhere to HIPAA regulations to
  ensure the privacy and confidentiality of your data.
<br>
<h3>Confirmation</h3>
After your payment is successfully processed, you 
will receive a confirmation email with your appointment
 details and receipt.
<hr>
<b>Need Assistance?</b>
If you encounter any issues or have questions regarding your payment,<br> please contact our billing department:
📞 (123) 456-7890
✉️ billing@healthfirsthospital.com
<hr>
<b>Privacy Policy</b>
For more information on how we handle your data, please review our Privacy Policy.

</div>

  </div>
</template>

<script setup>
import Nav2 from '@/components/Nav2.vue';

</script>

<style>
.forms{
  padding:40px;

}
.forms input{
  margin:10px;
  width:200px;
  text-align: center;
}

</style>