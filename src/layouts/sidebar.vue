<template>
    <div class="Sidebar">
        <router-link id="Router" to="#" v-for="(item, index) in Sikayet" :key="index">
            <a @click="" class="SikayetBaslik">{{ item.SikayetBasligi }}</a>
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { Sikayet } from "../db/sikayetler"
import { RouterLink } from "vue-router";
</script>

<style scoped>
.SikayetBaslik {
    display: grid;
    justify-items: center;
    text-decoration: none;
    color: white;
    font-size: larger;
    border-bottom: 1px solid white;
    border-top: 1px solid white;
    font-family: poppins;
}

#Router {
    margin-top: 5%;
    text-decoration: none;
    font-family: roboto-bold;
}

.Sidebar {
    width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding-top: 10%;
    border-right: 1px solid white;
}
</style>