<template>
    <div v-show="CevapKutusu" class="CevapMainDiv">
        <div class="Kutu">
            <button @click="GosterGizle()" id="CevapButton" class="Kapat">Kapat</button>
            <form class="CevapForm">
                <label>SirketYetkilisi :</label>
                <input type="text" name="SirketYetkilisi" id="SirketYetkilisi">
                <label>Cevap Metni</label>
                <textarea name="CevapMetni" id="CevapMetni" cols="30" rows="10"></textarea>
                <br>
                <button type="submit">Cevabi Gonder</button>
            </form>
        </div>
    </div>
    <div class="MainSikayetler">
        <div class="Sidebar">
            <router-link id="Router" to="#" v-for="(item, index) in Sikayet" :key="index">
                <a @click="IndexOgren(index)" class="SikayetBaslik">{{ item.SikayetBasligi }}</a>
            </router-link>
        </div>
        <div class="SikayetGetir">
            <div class="main2">

                <div class="header">
                    <a style="font-size: 40px; color: #DD2D4A;">
                        {{ Sikayet[sikayetIndex].SikayetBasligi }},
                    </a>
                    <a>
                        {{ Sikayet[sikayetIndex].SirketAdi }},
                    </a>
                    <a>
                        {{ Sikayet[sikayetIndex].Tarih }},
                    </a>
                    <a>
                        Görüntülenme Sayisi: {{ Sikayet[sikayetIndex].Goruntulenme }}
                    </a>
                    <div v-show="!Sikayet[sikayetIndex].CevapDurumu" class="CevapVerButton">
                        <button @click="GosterGizle()" style="background-color: greenyellow;" id="CevapButton"
                            type="button">Cevap
                            Ver</button>
                    </div>
                </div>
                <div class="SikayetMetni">
                    <p style="margin-bottom: 4%;">
                        {{ Sikayet[sikayetIndex].SikayetMetni }}
                    </p>

                    <p v-show="Sikayet[sikayetIndex].CevapDurumu">
                        <center>
                            <h3 style="border-bottom: 1px solid white; color: white;">CEVAP</h3>
                        </center>
                        {{ Sikayet[sikayetIndex].SikayetCevabi }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup  lang="ts">
import { Sikayet } from "../db/sikayetler";
import { ref } from "vue";
import { vShow } from "vue";
import { RouterLink } from "vue-router";
import SikayetCevap from "../components/SikayetCevap.vue";
import fonksiyon from "../db/sikayet.js";
import fs from "fs";

let IndexOgren = (a: number) => {
    sikayetIndex.value = a;
    return sikayetIndex.value;
}
let CevapKutusu: boolean;
let sikayetIndex = ref(0);
let CevapYaz = () => {
}
const element = document.getElementById("CevapButton");
let GosterGizle = () => {
    CevapKutusu = !CevapKutusu;
}
element?.addEventListener("click", GosterGizle);

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

.MainSikayetler {
    background-image: url("../assets/grad.svg");
    display: flex;
    background-size: cover;
    color: white;
}

.CevapVerButton {
    position: relative;
    float: right;
    height: auto;
}

.header {
    border-bottom: 1px solid white;
    font-size: large;
}

.header a {
    font-family: roboto-bold;
}

.SikayetGetir {
    height: auto;
    width: 100%;
}

.main2 {
    padding: 40px;
}

.SikayetMetni {
    height: 500px;
    padding: 15px;
    border: 1px dotted white;
}

.CevapMainDiv {
    display: flex;
    align-items: center;
    justify-content: center;
}

.Kapat {
    position: absolute;
    top: 5px;
    right: 5px;
}

.Kutu {
    width: 650px;
    width: 750px;
    height: 450px;
    position: absolute;
    border: 1px solid white;
    top: 200px;
    background-color: brown;
    color: white;
    padding: 50px;

}

.CevapForm {
    display: flex;
    flex-direction: column;
}
</style>