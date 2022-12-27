<template>
    <div class="Sidebar">
        <router-link id="Router" to="#" v-for="(item, index) in Sikayet" :key="index">
            <a class="SikayetBaslik" href="#">-- {{ item.SikayetBasligi }}</a>
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { Sikayet } from "../db/sikayetler"
import { RouterLink } from "vue-router";

</script>

<style scoped>
.SikayetBaslik {
    display: flex;
    justify-items: center;
    text-decoration: none;
    color: black;
    font-size: larger;
    font-family: roboto-regular;
}

#Router {
    margin-top: 5%;
    text-decoration: none;
    font-family: roboto-bold;
}

.Sidebar {
    width: 20%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding-left: 4%;
    padding-top: 5%;
    border-right: 1px solid black;
}
</style>