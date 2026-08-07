import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/", 
  lang: "zh-CN",
  title: "中山大学本科生自救指南(电通版)",
  description: "中山大学电子与通信工程自救指南，包含课程笔记、项目经验、实用教程。",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content: "中山大学, 自救指南, 电子与通信, EE , CS 学习笔记, 教程",
      },
    ],
    [
      "meta",
      {
        name: "author",
        content: "Redem-cat",
      },
    ],
    [
      "meta",
      {
        name: "msvalidate.01",
        content: "C7743D5A582AD3C2416DE004E768778B",
      },
    ],
    [
      "link",
      {
        rel: "preload",
        as: "image",
        href: "/logo.webp",
        type: "image/webp",
        fetchpriority: "high",
      },
    ],
  ],

  bundler: viteBundler(),
  
  theme, 

  shouldPrefetch: false,
  pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],
});