<template>
    <div class="bg">
        <form action="" method="post" class="SikayetMain">
            <h1>Sikayet Iletim
                <span>Bilgileriniz soz konusu firma ile paylasilmayacaktir.</span>
            </h1>
            <label>
                <span>Sikayet Edilen Firma</span>
                <input id="name" type="text" name="name" placeholder="Firma Adi" />
            </label>
            <label>
                <span>Sikayet Basligi :</span>
                <input id="sikayetbaslik" type="text" name="name" placeholder="Konu ya da Baslik" />
            </label>
            <label>
                <span>Email :</span>
                <input id="email" type="email" name="email" placeholder="Size ulasabilecegimiz bir email adresi" />
            </label>

            <label>
                <span>Sikayet :</span>
                <textarea id="sikayet" name="message" placeholder="Sikayetciyim Kardesim"></textarea>
            </label>
            <label>
                <span>Olayli Gun :</span>
                <input id="tarih" type="text" name="tarih" placeholder="Tarih" />
            </label>
            <label>
                <span> </span>
                <input type="button" class="button" value="Send" />
            </label>
        </form>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.bg {
    background-image: url("../assets/grad.svg");
    background-size: cover;
    height: 90vh;
}

.SikayetMain {
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;
    background: #D2E9FF;
    padding: 20px 20px 20px 20px;
    font: 12px Arial, Helvetica, sans-serif;
    color: #666;
}

.SikayetMain h1 {
    font: 24px "Trebuchet MS", Arial, Helvetica, sans-serif;
    padding: 10px 10px 10px 20px;
    display: block;
    background: #C0E1FF;
    border-bottom: 1px solid #B8DDFF;
    margin: -20px -20px 15px;
}

.SikayetMain h1>span {
    display: block;
    font-size: 11px;
}

.SikayetMain label>span {
    float: left;
    margin-top: 10px;
    color: #5E5E5E;
}

.SikayetMain label {
    display: block;
    margin: 0px 0px 5px;
}

.SikayetMain label>span {
    float: left;
    width: 20%;
    text-align: right;
    padding-right: 15px;
    margin-top: 10px;
    font-weight: bold;
}

.SikayetMain input[type="text"],
.SikayetMain input[type="email"],
.SikayetMain textarea,
.SikayetMain select {
    color: #888;
    width: 70%;
    padding: 0px 0px 0px 5px;
    border: 1px solid #C5E2FF;
    background: #FBFBFB;
    outline: 0;
    -webkit-box-shadow: inset 0px 1px 6px #ECF3F5;
    box-shadow: inset 0px 1px 6px #ECF3F5;
    font: 200 12px/25px Arial, Helvetica, sans-serif;
    height: 30px;
    line-height: 15px;
    margin: 2px 6px 16px 0px;
}

.SikayetMain textarea {
    height: 100px;
    padding: 5px 0px 0px 5px;
    width: 70%;
}

.SikayetMain select {
    background: #fbfbfb url('down-arrow.png') no-repeat right;
    background: #fbfbfb url('down-arrow.png') no-repeat right;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 0.01px;
    text-overflow: '';
    width: 70%;
}

.SikayetMain .button {
    padding: 10px 30px 10px 30px;
    background: #66C1E4;
    border: none;
    color: #FFF;
    box-shadow: 1px 1px 1px #4C6E91;
    -webkit-box-shadow: 1px 1px 1px #4C6E91;
    -moz-box-shadow: 1px 1px 1px #4C6E91;
    text-shadow: 1px 1px 1px #5079A3;

}

.SikayetMain .button:hover {
    background: #3EB1DD;
}
</style>