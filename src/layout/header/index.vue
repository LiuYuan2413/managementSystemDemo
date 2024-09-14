<template>
    <div>
        <div class="collapse-btn" @click="collapseNav">
            <div class="icon">
                <MenuUnfoldOutlined v-if="collapse" />
                <MenuFoldOutlined v-else />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from "vue";
const collapse = inject('collapse', ref(false)); // 通过 inject 获取提供的折叠状态
// 点击按钮切换折叠状态
const collapseNav = () => {
    collapse.value = !collapse.value;
};
</script>

<style scoped>
.collapse-btn {
    display: flex;
    align-items: center;
    /* 垂直居中 */
    height: 100%;
}

.icon {
    color: aliceblue;
    font-size: 24px;
    /* 调整图标大小 */
    line-height: 1;
}
</style>
