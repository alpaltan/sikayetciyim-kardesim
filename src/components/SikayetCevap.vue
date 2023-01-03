<template>
    <div class="CevapMainDiv">
        <div class="Kutu">
            <button @click="" class="Kapat">Kapat</button>
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
</template>

<script setup lang="ts">
import { Sikayet } from "../db/sikayetler";
import { ref } from "vue";
import { vShow } from "vue";

let CevapYaz = () => {

}
let Kapat = () => {

}
</script>

<style scoped>
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