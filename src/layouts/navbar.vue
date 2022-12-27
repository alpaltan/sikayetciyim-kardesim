<template>
    <div>
        <nav class="navbar navbar-light navbar-expand-lg  ">
            <div class="container">
                <div class="col-2">
                    <a class="navbar-brand" href="/home">
                        <img style="height: 60px;" src="../assets/sikayetciyimkardesim.png" alt="">
                    </a>
                </div>
                <div class="col-2">
                </div>
                <div class="col-2">
                </div>
                <div class="nav-item">
                    <a class="nav-link" href="/sikayetler">Sikayetler</a>
                </div>
                <div class="nav-item">
                    <a class="nav-link" href="/profile">Profil</a>
                </div>
                <div class="nav-item Giris">
                    <img src="../assets/giris.svg" alt="girislogo">
                    <a class="nav-link" href="/login">Giris Yap</a>
                </div>
            </div>
        </nav>
        <router-view />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.navbar {
    height: auto;
    font-family: roboto-bold;
    min-height: 60px;
    width: 100%;
}

.Giris {
    display: flex;
}
</style>