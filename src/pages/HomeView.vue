<script setup lang="ts" >
import SikayetListeleme from "../components/SikayetMainBox.vue"
</script>

<template>
  <div class="WideFoto">

  </div>
  <div class="MainDiv">
    <div class="LeftSideDiv">
      <SikayetListeleme />
    </div>
    <div class="RightSideDiv">

    </div>
  </div>
</template>

<style scoped>
.WideFoto {
  width: 100%;
  height: 250px;
  background-color: #c67575;
  background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg%27%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23ffffff' fill-opacity='0.22'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

}

.MainDiv {
  width: 100%;
  height: max-content;
  display: flex;
}

.LeftSideDiv {
  width: 80%;
  height: 100%;
  padding-left: 10%;
  padding-right: 4%;
  border-right: 1px solid black;
}

.RightSideDiv {
  width: 20%;
  height: 100%;

}
</style>