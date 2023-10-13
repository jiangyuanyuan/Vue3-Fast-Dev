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
import store from "@/utils/store";
import {useRouter} from 'vue-router'
const { $t } = getCurrentInstance().proxy;
const $router = useRouter()

const username = ref('');
const password = ref('');


const toLogin = async () => {
    const data = await login({
        account: username.value,
        password: password.value
    })
    store.local.set('tally_token', data.authorization)
    store.local.set('tally_name', data.name)
    $router.push({ path:'/home'})
    console.log(data)

}


</script>
<style></style>

