import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  // 1. 首页
  { 
    text: "首页", 
    icon: "house",  // FA图标: house
    link: "/" 
  },

  // 2. 校园生活
  {
    text: "开启指南",
    icon: "mug-hot", // FA图标: mug-hot (表示生活/喝茶) 或 use "compass"
    link: "/schools/SECE/0.main.md",
  },

  // 3. 学业攻略
  {
    text: "课程攻略",
    icon: "book-open", // FA图标: book-open
    prefix: "/courses/SECE/",
    children: [
      {
        text: "大一 (Freshman)",
        icon: "1", // 或者用 "child"
        link: "freshman/",
      },
      {
        text: "大二 (Sophomore)",
        icon: "2", // 或者用 "rocket"
        link: "sophomore/",
      },
      {
        text: "大三 (Junior)",
        icon: "3", // 或者用 "user-graduate"
        link: "junior/",
      },
      {
      text: "大四 (Senior)",
      icon: "4",
      link: "senior/",
      },
    ],
  },

  // 4. 实用资源 (指向你新建的 resources/1.main.md)
  {
    text: "资源汇总",
    icon: "toolbox", // FA图标: toolbox
    link: "/resources/", 
  },

  // 5. 关于项目
  {
    text: "关于项目",
    icon: "circle-info", // FA图标: circle-info
    children: [
      { 
        text: "常见问题 (FAQ)", 
        icon: "circle-question", 
        link: "/schools/SECE/15.不为人知的小技巧.md" 
      },
      { 
        text: "学院官网", 
        icon: "school", 
        link: "https://sece.sysu.edu.cn/" 
      },
      { 
        text: "GitHub 仓库", 
        icon: "fa-brands fa-github", 
        link: "https://github.com/Redem-cat/Survive-SYSU-SECE-Manual" 
      },
    ],
  },
]);