<template>
    <a-layout class="layout">
        <a-layout-header class="header">
            <topbar></topbar>
        </a-layout-header>
        <a-layout>
            <a-layout-sider width="200px" class="aside" :collapsed="collapse">
                <sidebar></sidebar>
            </a-layout-sider>
            <a-layout-content class="content">
                <router-view></router-view>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import sidebar from './sidebar/index.vue';
import topbar from './header/index.vue';
const collapse = ref<boolean>(false); // 控制 Sider 折叠状态
// 注入 collapse 状态，以便 header 组件可以访问并修改
provide('collapse', collapse);
</script>
<style scoped>
.layout {
    height: 100vh;
}

.header {
    display: flex;
    height: 60px;
    background-color: rgb(73, 115, 250);
}

.aside {
    height: 100%;
}

.content {
    padding: 20px;
}

:where(.css-dev-only-do-not-override-1dgrbo1).ant-layout .ant-layout-sider {
    background: none;
}
</style>
