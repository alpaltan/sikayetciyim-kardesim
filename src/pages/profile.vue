<template>
    <div>
        <div class="container">
            <div class="profilBilgileri">
                <br>
                <div class="content">
                    <h2>Profil Bilgileri</h2>
                    <img class="logo" src="Logo.png" alt="">
                    <div class="isim">Ad Soyad: {{ Ad }}</div>
                    <div class="content-detail">
                        <br>
                        Mail Adres: {{ mail }}
                        <br><br>
                        Telefon Numarası: {{ telefon }}
                        <br><br>
                        Musteri ID: {{ id }}
                        <br><br>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
import Kullanicilar from "../db/veriler.json"
import { ref } from "vue";
let Ad = ref(Kullanicilar.musteriler[0].adi_soyadi);
let mail = ref(Kullanicilar.musteriler[0].email);
let telefon = ref(Kullanicilar.musteriler[0].telefon);
let id = ref(Kullanicilar.musteriler[0].musteri_id);
</script>

<style scoped>
.container {
    width: 80%;

    background-color: rgb(130, 14, 14);
    margin: auto;
    margin-top: 6%;
}

.isim {
    margin-top: 6px;
}

.profilBilgileri {
    margin-left: 2%;
    margin-top: 6%;
    color: white;
    padding: 4%;

}

.logo {
    height: 50px;
    width: auto;
}

.content {
    width: 26%;
    background-color: rgb(203, 68, 68);
    padding: 2%;
    text-align: left;
    border-radius: 20px;
    display: inline-block;
}

.content-detail {
    display: inline-block;
}

.ilgiliSikayetler {
    display: inline-block;

}
</style>