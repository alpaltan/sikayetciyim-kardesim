<template>

    <div class="Genel" v-for="(item, index) in Sikayet" :key="index">
        <div class="Header">
            <a href="#" style="font-size: larger;">{{ item.SikayetBasligi }}</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import Sikayet from '@/pages/sikayetler.vue';
</script>

<style scoped>
.Genel {
    width: 100%;
    height: 150px;
    border: 1px solid black;
    margin-top: 3%;
}

.Header {
    font-family: roboto-bold;
}
</style>