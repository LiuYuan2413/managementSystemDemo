<template>
    <a-menu>
        <a-menu-item>
            <icon-font type="icon-shouye" @click="tttt" style="margin-right: 20px;" />
            <icon-font type="icon-nm_1422" style="margin-right: 20px;" />
            <icon-font type="icon-shoucangshuqian" />
        </a-menu-item>
    </a-menu>
    <a-menu mode="vertical" theme="light" @select="handleMenuSelect" style="height: calc(100% - 48px);">
        <!-- 遍历菜单列表 -->
        <template v-for="item in menuList" :key="item.path">
            <!-- 普通菜单项 -->
            <a-menu-item v-if="!item.meta?.hidden && (!item.children || item.children.length === 0)" :key="item.path">
                <Icon :icon="item.meta?.icon" />
                <span>{{ item.meta?.title }}</span>
            </a-menu-item>

            <!-- 有子菜单时渲染为 a-sub-menu -->
            <a-sub-menu v-else :key="item.path + '_submenu'" v-if="!item?.meta.hidden">
                <template #title>
                    <Icon :icon="item.meta?.icon" />
                    <span>{{ item.meta?.title }}</span>
                </template>

                <!-- 递归渲染子菜单 -->
                <template v-for="subItem in item.children" :key="subItem.path">
                    <!-- 子菜单项 -->
                    <a-menu-item v-if="!subItem.meta?.hidden && (!subItem.children || subItem.children.length === 0)"
                        :key="subItem.path">
                        <Icon :icon="subItem.meta?.icon" />
                        <span>{{ subItem.meta?.title }}</span>
                    </a-menu-item>

                    <!-- 递归处理嵌套子菜单 -->
                    <a-sub-menu v-else :key="subItem.path + '_submenu'" v-if="!subItem.meta?.hidden">
                        <template #title>
                            <Icon :icon="subItem.meta?.icon" />
                            <span>{{ subItem.meta?.title }}</span>
                        </template>

                        <!-- 递归调用嵌套子菜单 -->
                        <template v-for="nestedItem in subItem.children" :key="nestedItem.path">
                            <a-menu-item
                                v-if="!nestedItem.meta?.hidden && (!nestedItem.children || nestedItem.children.length === 0)"
                                :key="nestedItem.path">
                                <Icon :icon="nestedItem.meta?.icon" />
                                <span>{{ nestedItem.meta?.title }}</span>
                            </a-menu-item>
                        </template>
                    </a-sub-menu>
                </template>
            </a-sub-menu>
        </template>
    </a-menu>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'; // 导入 useRouter
import menuList from '../menuList';  // 传递的菜单数据
import { Icon } from '@/utils/icon'
import { createFromIconfontCN } from '@ant-design/icons-vue';
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/c/font_4685500_oa4yvyjle2.js',
});

// 获取 router 实例
const router = useRouter();

// 菜单选择时的跳转逻辑
const handleMenuSelect = ({ key }: any) => {
    router.push(key); // 跳转到点击的菜单路径
};
const tttt = () => {
    router.push('/')
}
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
