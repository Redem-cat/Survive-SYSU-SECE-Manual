import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar";
import { zhSidebar } from "./sidebar";

export default hopeTheme({
  hostname: "https://www.survive-sysu.online",

  author: {
    name: "Redem-cat",
    url: "https://github.com/Redem-cat",
    email: "1323746368@qq.com",
  },

  // 1. 优化：使用轻量图标库（你当前用的是完整库，可按需调整）
  iconAssets: "fontawesome-with-brands",
  logo: "/logo-nav.webp",
  logoDark: "/logo-nav.webp",

  repo: "Redem-cat/Survive-SYSU-SECE-Manual",
  docsDir: "src",
  docsBranch: "main",

  navbar: zhNavbar,
  sidebar: zhSidebar,

  sidebarSorter: ["filename", "order", "date", "readme"],

  copyright: "MIT Licensed | Copyright © 2026-present Redem-cat",
  displayFooter: true,
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 2. 核心优化：精简Markdown增强功能（只保留用到的，移除注释但未删除的功能）
  markdown: {
    align: true,
    figure: true,
    imgLazyload: true, // 图片懒加载（减少初始请求）
    imgSize: true,
    tasklist: true,
    hint: true,
    alert: true,
    tabs: true,
    codeTabs: true,
    math: true,
    // 已注释的功能直接删除，避免加载冗余代码
    // mermaid: true,
    // flowchart: true,
  },

  plugins: {
    // 3. 优化：SEO和站点地图仅生产环境启用（减少开发环境体积）
    seo: process.env.NODE_ENV === "production",
    sitemap: process.env.NODE_ENV === "production",
    
    // 4. 阅读时间功能保留（体积小，不影响）
    readingTime: {
      wordPerMinute: 150,
    },

    // 5. 关键优化：搜索功能精简（减少索引体积）
    slimsearch: {
      indexContent: true,
      // 新增：只索引核心内容，排除非必要字段
      fields: ["title", "content", "headers"],
    },

    // 6. 核心优化：评论功能延迟加载（非首屏必需）
    comment: {
      provider: "Giscus",
      repo: "Redem-cat/Survive-SYSU-SECE-Manual",
      repoId: "R_kgDOPQRJWw",
      category: "General",
      categoryId: "DIC_kwDOPQRJW84CyEYS",
      mapping: "pathname",
      // 新增：延迟加载评论组件（首屏加载完成后再加载）
      lazyLoad: true,
      // 新增：仅在生产环境启用（开发环境不加载）
      dev: false,
    },

    // 7. 新增：禁用所有未使用的插件（核心！减少未使用JS）
    // 移除不需要的插件，避免加载冗余代码
    mdEnhance: false, // 如果你没用到额外的md增强功能，直接禁用
    photoSwipe: false, // 相册功能（未使用）
    copyCode: {
      // 保留复制代码功能，但精简配置
      showInMobile: false, // 移动端不显示（减少体积）
      duration: 2000, // 缩短提示显示时间
    },
    // 禁用其他未使用的插件
    components: false,
    prismjs: false,
    git: false,
    feed: false,
    pwa: false,
  },
});