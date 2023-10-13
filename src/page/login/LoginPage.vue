<template>
    <van-cell-group inset>
        <van-field v-model="username" :name="$t('login.login')" :label="$t('login.login')" :placeholder="$t('login.login')"
            :rules="[{ required: true, message: $t('login.login') }]" />
        <van-field v-model="password" type="password" :name="$t('login.login')" :label="$t('login.login')"
            :placeholder="$t('login.login')" :rules="[{ required: true, message: $t('login.login') }]" />
    </van-cell-group>
    <div @click="toLogin">
        {{ $t("login.login") }}
    </div>
</template>
<script setup>
import { getCurrentInstance } from "vue";
import { login } from '@/data/api/user.js'
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import { userStore } from "@/data/store/userStore"
const { $t } = getCurrentInstance().proxy;
const $router = useRouter()
const store = userStore()

const username = ref('');
const password = ref('');


const toLogin = async () => {
    const parms = {
        account: username.value,
        password: password.value
    }
    console.log(parms)
    const { data } = await login(parms)
    console.log(data)
    store.setToken(data.authorization)
    $router.push({ path:'/home'})


}


</script>
<style></style>

