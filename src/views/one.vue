<template>
    <div>我是第一个页面</div>
    <button @click="toggle">跳转</button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const toggle = () => {
    router.push('/two')
}
</script>
<style scoped></style>
