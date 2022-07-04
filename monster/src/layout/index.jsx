import { defineComponent, ref, h } from 'vue'
import { RouterLink } from 'vue-router'
import { NIcon } from 'naive-ui'
import { BookOutline as BookIcon } from '@vicons/ionicons5'
import './index.scss'


function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: () => <RouterLink to="home">首页</RouterLink>,
    key: '1',
    icon: renderIcon(BookIcon),
  },
  {
    label: '前端',
    key: '2',
    icon: renderIcon(BookIcon),
    children: [
      {
        label: () => <RouterLink to="ahead">Vue3</RouterLink>,
        key: '2-1',
      },
    ],
  },
  {
    label: () => <RouterLink to="regular">正则</RouterLink>,
    key: '3',
    icon: renderIcon(BookIcon),
  },
]

export default defineComponent({

  setup() {
    return () => {
      return (
        <n-layout position="absolute">
          <n-layout-header bordered>
            <div className="logo"></div>
            <div className="search">
              <n-input autofocus round placeholder="search value" />
            </div>
            <div></div>
          </n-layout-header>
          <n-layout
            has-sider
            position="absolute"
            style="top: 64px; bottom: 64px"
          >
            <n-layout-sider bordered show-trigger collapse-mode="width">
              <n-menu options={menuOptions} accordion default-value="1" />
            </n-layout-sider>
            <n-layout content-style="padding: 24px;">
              <router-view></router-view>
            </n-layout>
          </n-layout>
          <n-layout-footer
            bordered
            position="absolute"
            style="height: 40px;"
          ></n-layout-footer>
        </n-layout>
      )
    }
  },
})
