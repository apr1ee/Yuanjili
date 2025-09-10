# 介绍
hi 我是李元基，大多时候我会叫自己april。
这是一个个人网页(V1),基于gatsbay设计。
如果你想了解更多关于的我经历，这是个不错的开始。

# 项目结构
```plaintext
my-portfolio/
├── .cache/                  # Gatsby 构建缓存
├── node_modules/            # 项目依赖模块
├── public/                  # Gatsby 构建输出目录
├── src/                     # 源代码目录
│   ├── components/          # React 组件
│   │   ├── About.js         # 关于组件
│   │   ├── Education.js     # 教育经历组件
│   │   ├── Experience.js    # 工作经验组件
│   │   ├── HeroSection.js   # 首页头部展示区
│   │   ├── Navigation.js    # 导航栏组件
│   │   ├── Projects.js      # 项目展示组件
│   │   ├── Skills.js        # 技能展示组件
│   │   ├── SocialLinks.js   # 社交媒体链接组件
│   │   ├── layout.js        # 布局组件
│   │   ├── seo.js           # SEO 优化组件
│   │   ├── index.module.css # 局部样式文件
│   │   └── layout.css       # 布局样式文件
│   ├── images/              # 图片资源
│   │   ├── example.png      # 示例图片
│   │   └── gatsby-icon.png  # Gatsby 图标
│   ├── pages/               # 页面文件
│   │   ├── index.js         # 首页
│   │   ├── 404.js           # 404 页面
│   ├── styles/              # 全局样式
│   │   └── GlobalStyle.js   # 全局样式定义
│   └── templates/           # 页面模板
│       └── using-dsg.js     # DSG 示例页面模板
├── .gitignore               # Git 忽略配置
├── .prettierignore          # Prettier 忽略配置
├── .prettierrc              # Prettier 配置
├── gatsby-browser.js        # 浏览器端配置
├── gatsby-config.js         # Gatsby 配置
├── gatsby-node.js           # 构建时配置
├── gatsby-ssr.js            # 服务端渲染配置
├── LICENSE                  # 许可证
├── package.json             # 项目信息和依赖配置
└── package-lock.json        # 锁定依赖版本
```



# 依赖包
- npm install styled-components gatsby-plugin-styled-components
- npm install framer-motion  # 动画库
- npm install react-icons    # 图标库
- npm install @fontsource/inter 
- npm install gatsby-plugin-react-helmet react-helmet
- npm install gatsby-plugin-gatsby-cloud
