import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const app = createApp(App)

import router from './router'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css';
import * as antIcons from '@ant-design/icons-vue'

// 注册组件
Object.keys(antIcons).forEach((key) => {
  app.component(key, antIcons[key as keyof typeof antIcons])
})

app.use(Antd)
app.use(router)
app.mount('#app')
