<template>
    <div class="Genel" v-for="(item, index) in Sikayet" :key="index">
        <div class="HeaderDiv">
            <a href="#" class="Header">{{ item.SikayetBasligi }},</a>
            <a href="#" class="Label">{{ item.SirketAdi }},</a>
            <a href="#" class="Label">{{ item.Tarih }}</a>
            <a href="#" class="View">Görüntülenme Sayisi: {{ item.Goruntulenme }}</a>
        </div>
        <div class="MetinOzet">
            <p>
                {{ item.SikayetMetni }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Sikayet } from '../db/sikayetler';
</script>

<style scoped>
.Genel {
    width: 100%;
    height: 150px;
    border-left: 1px solid white;
    margin-top: 3%;
    padding-left: 3%;
    padding-top: 10px;
    padding-right: 3%;
    color: white;
}

.HeaderDiv {
    border-bottom: 1px solid white;
}

.Header {
    font-family: roboto-bold;
    text-decoration: none;
    font-size: 26px;
    color: #DD2D4A;
}

.View {
    position: relative;
    float: right;
    text-decoration: none;
    color: white;
}

.Label {
    font-size: 16px;
    text-decoration: none;
    padding-left: 6px;
    color: white;
    font-family: roboto-bold;
}

.MetinOzet {

    overflow: hidden;
}
</style>