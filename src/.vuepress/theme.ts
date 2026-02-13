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

  iconAssets: "fontawesome-with-brands",
  logo: "/logo.png",

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
  markdown: {
    align: true,
    figure: true,
    imgLazyload: true,
    imgSize: true,
    tasklist: true,
    hint: true,
    alert: true,
    tabs: true,
    codeTabs: true, 
    math: true, 
    // mermaid: true,
    // flowchart: true,
  },

  plugins: {
    seo: true,
    sitemap: true,
    
    readingTime: {
      wordPerMinute: 150,
    },

    slimsearch: {
      indexContent: true,
    },

    comment: {
      provider: "Giscus",
      repo: "Redem-cat/Survive-SYSU-SECE-Manual",
      repoId: "R_kgDOPQRJWw",
      category: "General",
      categoryId: "DIC_kwDOPQRJW84CyEYS",
      mapping: "pathname",
    },
  },
});