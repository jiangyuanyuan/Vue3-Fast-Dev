<template>
    <div>
        首页
    </div>
</template>
<script setup>
import { pointList } from '@/data/api/user.js'
import { onMounted } from 'vue';

onMounted(() => {
    getPointList()
})
const getPointList = async()=>{
    const data = await pointList()
    console.log(data)
}

</script>

<style></style>