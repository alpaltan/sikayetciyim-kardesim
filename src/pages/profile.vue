<template>
    <div>
        <div class="container">
            <div class="profilBilgileri">
                <br>
                <div class="content">
                    <h2>Profil Bilgileri</h2>
                    <img class="logo" src="Logo.png" alt="">
                    <div class="isim">Profil İsmi</div>
                    <div class="content-detail">
                        <br>
                        mail: asdsd
                        <br><br>
                        telefon:asdsda
                        <br><br>
                        id:sadasd
                        <br><br>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">

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
    text-align: center;
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