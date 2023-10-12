<template>
    <div>
        {{ $t("login.login") }}
    </div>
</template>
<script setup>
import { getCurrentInstance } from "vue";
const { $t } = getCurrentInstance().proxy;


</script>
<style>
</style>

