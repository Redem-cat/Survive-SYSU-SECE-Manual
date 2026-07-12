# Survive-SYSU-SECE-Manual
# 中山大学电子与通信工程学院本科自救指南——序



>各位同学们，在本书的开始，我不得不遗憾地告诉大家一个消息。
>国内绝大部分大学的本科教学，不是濒临崩溃，而是**早已崩溃**。
>在此，我无意争论是否复旦、中科大、或者清华、北大是否比我们崩溃的更少一些——
>这种争论是没有意义的。
>我只是看到了无数充满求知欲、激情、与年轻梦想的同学们，将要把自己的四年青春，充满希望与信任地交给大学来塑造。这使我心中**非常不安**。

>在当今流水线式的教育体制下，我们就像廉价的零件一样被生产出来。因为数量巨大，没人会对每一个人的教学质量负责。

>领导不会为你负责。对于一个争做世界一流大学的**研究型学校**，管好科研，管好实验室才是当务之急。相比之下，本科生教学显得**无利可图**。教授也不会为你负责。拉到足够的经费发表足够的论文，满足学院要求才是生存大计。要说管学生，也肯定先要管好自己实验室的硕士博士，而非那一百多人大课堂里的某个本科生。就算是科研任务不太重的一些任课教师，他们也不会为你负责——学不懂？那是因为你智力低，要么就是自己底下不用功。为什么跟你一个班上的某某某同学，人家就能懂？]

>诚然，就算是老师上课说孟加拉语，一个班上也非常有可能冒出一两个翻翻书看看图就能学到八九不离十的同学（或者根本就是以前学过）。真正在课堂上口传心授的教学，其质量是不会有人过问的。教学评估会考察实验报告格式是否合格，出勤率是否够，但是绝对不会考察上百人的班上到底**有几个听懂了**的。


以上节选自知名的  [《上交生存手册》](https://survivesjtu.gitbook.io/survivesjtumanual/)  正文开篇内容。

正是受到它的启发，我决定在自己临近毕业之际，  
也为母校留下些什么。

## 写作动机

当我还在大一时，曾偶然读到这本手册，并深受震撼。  
彼时我深以为然，却并未真正将其中的思想付诸实践。  
直到大三结束，我才对大学生活形成较为清晰、完整的认识。

“懂得很多道理，却依旧过不好这一生”——  
现在回头看，这无疑是一件令人遗憾的事情。

令人更加唏嘘的是：  
即便过去将近二十年，这本手册中所描述的绝大多数问题，  
依然是你院本科学子生活的真实写照。

## 为什么需要这本指南

需要承认的是，《上交生存手册》毕竟成书较早，  
且是一份面向**全体本科生**的概括性文本。

而具体到 **电子与通信工程学院**  
（或其他以 EE 为主的工科学院），  
实际情况又存在明显差异。

此外，由于同学们在以下方面存在巨大不同：

- 志向与目标  
- 执行力与自律性  
- 家庭条件  
- 所处机遇与信息来源  

个体之间的大学体验，往往呈现出**极端分化**的状态。

即便身处信息极度发达的时代，  
仍有大量学生在追寻目标的过程中，  
因为**信息差**而走了太多弯路。

在当前愈发严峻的就业与升学环境下，  
如果本科阶段没有形成一套**自洽、可执行的学习与决策方法**，  
即便是 985 学生，  
毕业后也并不容易找到一条足够理想的出路。



## 本指南的定位

**信息差**是一件极其可怕的事情，  
尤其是在方向选择与具体实施层面。

本指南正是抱着一个非常克制、也非常现实的目标而存在：

> **尽可能消除本科阶段最基础的方法论层面的认知差距。**

如果你希望继续阅读这本《自救指南》，  
请前往指南主页：

👉 https://www.survive-sysu.online/

---

<div align="right">

**— Redem-cat**  
*2026· Shenzhen*

</div>

## 开发

文档本身采用 [VuePress](https://vuejs.press/zh/) 框架和 [VuePress Theme Hope](https://theme-hope.vuejs.press/zh/) 主题进行开发，上手难度低，使用简单，并采用 `pnpm` 进行构建。

**准备**

在进行开发之前，请确保本地的 nodejs 版本是 18.19 及以上：

```bash
$ node -v
v22.12.0
```

之后请启用 Corepack (Windows 系统需要管理员权限运行)：

```bash
corepack enable
```

如遇到框架相关的问题请自行浏览官方网站。

**安装依赖**

```bash
pnpm install
```

**本地运行**

```bash
pnpm docs:dev
```

**清空缓存运行**

```bash
pnpm docs:clean-dev
```

**构建后上传仓库部署**

```bash
pnpm docs:build
```

**Vercel 部署注意事项**

确保 pnpm-lock.yaml 与 package.json 一致。当在本地新增或更新依赖后，需要同步 lockfile：
```
pnpm install
git add pnpm-lock.yaml
git commit -m "Update pnpm-lock.yaml to match package.json"
git push
```

避免 Vercel CI 报错：
```
ERR_PNPM_OUTDATED_LOCKFILE
Cannot install with "frozen-lockfile" because pnpm-lock.yaml is not up to date
```

  **如果你实在不熟悉**github或者不想要进行太多代码的编辑，则**下载项目**，点击项目目录下**src文件夹**编辑里面的**Markdown**文件编辑后通过邮件、QQ等方式提交给我即可。


##  待办事项 (To-Do List)

我们正在努力将项目推广到更多学院，并丰富内容库：

### 🏛️ 学院适配
- [ ] 扩展支持：电信工程学院、海洋工程学院、系统院
- [ ] 扩展支持：计院、软院、网络安全学院等偏CS的学院

如果你来自以上的学院，欢迎分享你的笔记。
### 📚 资源建设
- [x] ~~更新公选课推荐资料~~ （已有相关总结文档，但它已不再更新）
- [x] ~~覆盖所有核心课程笔记~~ （每门课都写一个笔记麻烦并且没有必要，转为给每门课都分别推荐网课和总结笔记）
- [ ] 提供所有课程的参考教材

## Star History

<a href="https://www.star-history.com/?repos=Redem-cat%2FSurvive-SYSU-SECE-Manual&type=timeline&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=Redem-cat/Survive-SYSU-SECE-Manual&type=timeline&theme=dark&legend=top-left&sealed_token=-ms7TVyfE85S1rrJI9YjRG7Yql4Y2CvuumdzSnSRvxTflfnge_BOBsy2AhUEMdu-_F44ScJy0Q6p_CnnjE0Z4rAAb1-pjO6nPLKpUHxBHPySawdxZNjSAZYmb_qMrJnmEXyusAtQlI4ZF3y7_oqz2KEUQKMtYayDKdGWU7i-gxc9PpBSvKKGvIzQ3Zpn" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=Redem-cat/Survive-SYSU-SECE-Manual&type=timeline&legend=top-left&sealed_token=-ms7TVyfE85S1rrJI9YjRG7Yql4Y2CvuumdzSnSRvxTflfnge_BOBsy2AhUEMdu-_F44ScJy0Q6p_CnnjE0Z4rAAb1-pjO6nPLKpUHxBHPySawdxZNjSAZYmb_qMrJnmEXyusAtQlI4ZF3y7_oqz2KEUQKMtYayDKdGWU7i-gxc9PpBSvKKGvIzQ3Zpn" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=Redem-cat/Survive-SYSU-SECE-Manual&type=timeline&legend=top-left&sealed_token=-ms7TVyfE85S1rrJI9YjRG7Yql4Y2CvuumdzSnSRvxTflfnge_BOBsy2AhUEMdu-_F44ScJy0Q6p_CnnjE0Z4rAAb1-pjO6nPLKpUHxBHPySawdxZNjSAZYmb_qMrJnmEXyusAtQlI4ZF3y7_oqz2KEUQKMtYayDKdGWU7i-gxc9PpBSvKKGvIzQ3Zpn" />
 </picture>
</a>

## 贡献

1. fork 本仓库
2. 创建一个你自己的特色分支
3. 提交新修改
4. 向本仓库提交 PR
5. 等待 merge
