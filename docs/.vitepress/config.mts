import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "病毒吧",
  description: "病毒吧非官方wiki",
  vite: {
    plugins: [
      // add plugin directly as an object property
      AutoSidebar({ deletePrefix: 'index', ignoreIndexItem: true })
    ]
  },
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '成员', link: '/members/' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 virus-bar'
    },
    prev: '上一页',
    next: '下一页',
    darkModeSwitchLabel: '亮/暗模式',
    lightModeSwitchTitle: '调整为亮色模式',
    darkModeSwitchTitle: '调整为暗色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    socialLinks: [
      {
        icon: {
          svg: '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">\n' +
               '  <path d="M29.11 26.278c-0.72 0.087-2.804-3.296-2.804-3.296 0 1.959-1.009 4.515-3.191 6.362 1.052 0.325 3.428 1.198 2.863 2.151-0.457 0.772-7.844 0.493-9.977 0.252-2.133 0.24-9.52 0.519-9.977-0.252-0.565-0.953 1.807-1.826 2.861-2.151-2.182-1.846-3.191-4.403-3.191-6.362 0 0-2.083 3.384-2.804 3.296-0.335-0.041-0.776-1.853 0.584-6.231 0.641-2.064 1.375-3.78 2.509-6.611-0.191-7.306 2.828-13.435 10.016-13.435 7.109 0.001 10.197 6.008 10.017 13.435 1.132 2.826 1.869 4.553 2.509 6.611 1.361 4.379 0.92 6.191 0.584 6.231z"/>\n' +
               '</svg>'
        },
        link: 'https://pan.baidu.com/s/1_gRHfBSMNA7G1rv1bvGSXA?pwd=1234'
      }
    ]
  }
})
