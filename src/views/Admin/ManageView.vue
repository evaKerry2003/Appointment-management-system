<template>
  <div>
    <div class="contain5">
      <div class="dear">
        <h1>APPOINTMENT SYSTEM</h1>
      </div>

      <div class="dear1">
        <p class="dears1">
          Total Appointment<br>
          150
        </p>
        <p class="dears2">
          Completed Appointment<br>
          120
        </p>
        <p class="dears3">
          Canceled Appointment<br>
          30
        </p>
      </div>

    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

.contain5 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.dear1 {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  text-align: center;
}
.dear {
  display: flex;
  justify-content: center;
}



.dears1, .dears2, .dears3 {
  background: white;
  padding: 80px;
  margin: 10px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .dears1, .dears2, .dears3 {
    padding: 40px;
  }
}

</style>