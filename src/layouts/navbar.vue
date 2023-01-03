<template>
    <div>
        <nav class="navbar navbar-light navbar-expand-lg  ">
            <div class="container">
                <div class="col-2">
                    <a class="navbar-brand" href="/home">
                        <img style="height: 60px; border-radius: 5px;" src="../assets/sikayetciyimkardesim.png" alt="">
                    </a>
                </div>
                <div class="col-2">
                </div>
                <div class="nav-item">
                    <a class="nav-link" href="/sikayet-yaz">Sikayet Yaz</a>
                </div>
                <div class="nav-item">
                    <a class="nav-link" href="/sikayetler">Sikayetler</a>
                </div>
                <div class="nav-item">
                    <a class="nav-link" href="/profile">Profil</a>
                </div>
                <div class="nav-item Giris">
                    <a class="nav-link" href="#">Giris Yap</a>
                    <div class="GirisList">
                        <a href="/musteri-giris">Musteri</a>
                        <a href="/firma-giris">Firma</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <router-view />
</template>

<script setup lang="ts">

</script>

<style scoped>
.navbar {
    height: auto;
    min-height: 60px;
    width: 100%;
    background-image: url("../assets/Meteor.svg");
    background-size: contain;
}

.navbar a {
    font-family: roboto-bold;
    font-size: 21px;
    color: white;
}

.Giris {
    flex-direction: column;
    display: block;
}

.GirisList {
    position: absolute;
    display: none;
    flex-direction: column;
    text-align: justify;
    border-radius: 5px;
    background-image: url("../assets/Sprinkle.svg");
}

.GirisList a {
    text-decoration: none;
    width: 110px;
    overflow: hidden;
    color: white;
    padding: 10px;
    border: 1px solid white;
}

.Giris:hover .GirisList {
    display: inline-flex;
}
</style>