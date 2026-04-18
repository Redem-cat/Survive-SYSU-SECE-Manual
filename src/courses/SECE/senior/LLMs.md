---
icon: "brain"
title: 大模型
---

# 大语言模型

::: tip 课程简介与重要性
大语言模型是当前人工智能领域的前沿技术，包括VLM、GLM、多模态模型、RAG、Agent等。本页面将介绍大模型的基础知识和学习资源。
:::

::: info 学习难度与前置知识
- **难度等级**：⭐⭐⭐⭐⭐
- **前置知识**：深度学习、自然语言处理
- **学习建议**：按推荐顺序学习，从理论到实践
:::

## 1. 资源与学习链接

### 1.1 ZJU LLMs 基础教程

- **项目地址**：[Foundations-of-LLMs](https://github.com/ZJU-LLMs/Foundations-of-LLMs?tab=readme-ov-file)  
- 内容概述：
  - 大语言模型基础理论
  - Transformer 架构讲解
  - VLM、GLM 等模型基础

### 1.2 MiniMind

- **项目地址**：[MiniMind](https://github.com/jingyaogong/minimind)  
- 内容概述：
  - 轻量级 LLM 实现
  - 支持多种实验任务
  - 便于快速上手和理解 LLM 原理
  [MiniMind复现笔记](https://github.com/tomatoyuan/minimind-learn/tree/master?tab=readme-ov-file)

### 1.3 Qwen 系列示例

- **官方文档**：[Qwen GRPO 示例](https://docs.swanlab.cn/examples/qwen_grpo.html)  
- 内容概述：
  - Qwen 模型应用实例
  - 包括文本生成、问答、推理等任务
  - 提供可直接运行的案例

### 1.4 阿里云官方训练模型

- **官方文档**：[Qwen2.5-Coder 训练与部署](https://help.aliyun.com/zh/pai/use-cases/training-evaluation-compression-and-deployment-of-qwen2-5-coder-model)  
- 内容概述：
  - 模型训练流程
  - 性能评估方法
  - 模型压缩与部署策略

---

## 2. 推荐学习顺序

1. 从 **ZJU LLMs 基础教程** 开始，建立理论框架  
2. 再通过 **MiniMind** 实现轻量实验，加深理解  
3. 学习 **Qwen 示例**，掌握实战应用  
4. 最后阅读 **阿里云官方训练模型文档**，了解工业落地

---

## 3. 注意事项

- 文档中涉及的项目大多依赖 Python 环境，请提前安装相应依赖  
- 对于多模态模型与 RAG，建议先熟悉 Transformer 和 BERT / GPT 基础  
- RAG / Agent 模型涉及外部检索与知识库整合，可按需实验  

---
**注：对于CV/NLP算法感兴趣并且有一定工程能力的本科高年级同学（或者有相关经验的低年级同学）可以联系学院黄晓霞老师到平安实习，学校与平安有校企合作，来这里实习较为容易。建议实习至少三个月，半年以上更佳，实习时间长的话会有转正的机会。**

<!-- 
⚡ Tip: 在 VuePress Hope 主题中，`README.md` 会被渲染为目录首页，并自动生成 sidebar。如果在 senior 目录下创建了其他子页，也可以通过 `children: "structure"` 自动抓取。 -->
