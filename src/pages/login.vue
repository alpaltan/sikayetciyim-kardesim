<template>
    <div class="Deneme">
        <div class="Main">
            <form class="login">
                <img src="../assets/kilit.png" alt="kilit" class="mb-4" height="90">
                <h3 class="mb-3 font-weight-normal ">Giris Yap</h3>
                <input type="email" id="EmailInput" class="form-control" placeholder="Email" required autofocus>
                <input type="password" id="ParolaInput" class="form-control" placeholder="Parola" required>

                <label class="checkbox mb-4 mt-3">
                    <input type="checkbox">
                    Kullanici Sozlesmesini Okudum.
                </label>
                <button type="submit" class="btn btn-primary btn-lg btn-block">
                    Giris Yap
                </button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.Deneme {
    width: 100%;
    height: 100%;
    padding-top: 10%;
}

.Main {
    text-align: center;

}

.login {
    width: 100%;
    max-width: 370px;
    padding: 15px;
    margin: auto;
}

.login .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    font-size: 16px;
    padding: 10px;
}
</style>