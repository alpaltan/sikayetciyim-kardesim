<script setup lang="ts" >
import SikayetListeleme from "../components/SikayetMainBox.vue"
</script>

<template>
  <div class="MainDiv">
    <div>
      <img src="../assets/yalnizdegilsiniz.svg" alt="" style="height: 250px; position: relative;">
    </div>
    <div class="TwoBox">
      <div class="LeftSideDiv">
        <SikayetListeleme />
      </div>
      <div class="RightSideDiv">

      </div>
    </div>
  </div>
</template>

<style scoped>
.MainDiv {
  background-image: url("../assets/grad.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.TwoBox {
  width: 100%;
  height: max-content;
  display: flex;
}

.LeftSideDiv {
  width: 80%;
  height: 100%;
  padding-left: 10%;
  padding-right: 4%;
  border-right: 1px solid white;
}

.RightSideDiv {
  width: 20%;
  height: 100%;
  color: white
}
</style>