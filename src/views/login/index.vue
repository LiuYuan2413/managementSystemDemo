<template>
    <a-form>
        <a-form-item label="登录名" name="name">
            <a-input v-model:value="formState.name" placeholder="请输入登录名" />
        </a-form-item>
        <a-form-item label="密码" name="passwpord">
            <a-input v-model:value="formState.password" placeholder="请输入密码" />
        </a-form-item>
        <a-form-item>
            <a-button type="primary" @click="submit">登录</a-button>
        </a-form-item>
    </a-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const formState = reactive({
    name: '',
    password: ''
})
const submit = () => {
    router.push('/')
     // 在 localStorage 中存储 acctoken
     localStorage.setItem('acctoken', '123123');
}
</script>