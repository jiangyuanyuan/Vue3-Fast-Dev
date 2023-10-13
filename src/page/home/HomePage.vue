<template>
    <div>
        首页
    </div>
    <div>
        token: {{ store.token }}
    </div>
</template>
<script setup>
import { userStore } from "@/data/store/userStore"
const store = userStore()


</script>

<style></style>