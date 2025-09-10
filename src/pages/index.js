// src/pages/index.js
import * as React from "react"
import Layout from "../components/layout"
import Navigation from "../components/Navigation"
import SocialLinks from "../components/SocialLinks"
import About from "../components/About"
import Education from "../components/Education"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import HeroSection from "../components/HeroSection"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div style={{
      backgroundColor: '#0f172a',
      color: '#94a3b8',
      fontFamily: '"Inter", sans-serif',
      position: 'relative'
    }}>
      
      {/* Hero Section - 全屏固定 */}
      <HeroSection />
      
      {/* 主要内容区域 - 在 Hero Section 下方 */}
      <div style={{
        marginTop: '100vh', // 给 Hero Section 留出空间
        minHeight: '100vh',
        position: 'relative',
        zIndex: 10,
        backgroundColor: '#0f172a' // 确保背景色一致
      }}>
        
        {/* 外层容器 - 响应式最大宽度 */}
        <div style={{
          maxWidth: '100%',
          margin: '0 auto',
          minHeight: '100vh',
          paddingLeft: 'clamp(1rem, 5vw, 4rem)', // 响应式左边距
          paddingRight: 'clamp(1rem, 5vw, 4rem)' // 响应式右边距
        }}>
          
          {/* 内容容器 - 限制最大宽度 */}
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            
            {/* 主容器 - Flexbox 布局 */}
            <div className="main-layout">
              
              {/* 左侧固定头部区域 38% 宽度 - 在移动端隐藏 */}
              <header className="sidebar">
                
                {/* 头部内容和导航 */}
                <Navigation />
                
                {/* 底部社交媒体链接 */}
                <SocialLinks />
                
              </header>
              
              {/* 右侧主内容区域 62% 宽度 - 在移动端占据全宽 */}
              <main className="main-content">
                
                {/* 各个内容区域 */}
                <About />
                <Education />
                <Skills />
                <Projects />
                
              </main>
            </div>
          </div>
        </div>
      </div>

      {/* 响应式样式 */}
      <style jsx>{`
        .main-layout {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          min-height: 100vh;
        }

        .sidebar {
          position: sticky;
          top: 0;
          display: flex;
          max-height: 100vh;
          width: 38%;
          flex-direction: column;
          justify-content: space-between;
          padding-top: 6rem;
          padding-bottom: 6rem;
          padding-left: 1rem;
          padding-right: 2rem;
        }

        .main-content {
          padding-top: 6rem;
          width: 62%;
          padding-left: 2rem;
          padding-right: 1rem;
          padding-bottom: 6rem;
        }

        /* 移动端响应式设计 */
        @media (max-width: 768px) {
          .main-layout {
            flex-direction: column;
            gap: 0;
          }

          .sidebar {
            display: none; /* 在小屏设备上完全隐藏左侧导航 */
          }

          .main-content {
            width: 100%;
            padding-left: 0;
            padding-right: 0;
            padding-top: 2rem; /* 减少顶部 padding */
            padding-bottom: 2rem;
          }
        }

        /* 平板端响应式设计 */
        @media (max-width: 1024px) and (min-width: 769px) {
          .sidebar {
            width: 35%;
            padding-left: 0.5rem;
            padding-right: 1rem;
          }

          .main-content {
            width: 65%;
            padding-left: 1rem;
            padding-right: 0.5rem;
          }
        }

        /* 超小屏设备优化 */
        @media (max-width: 480px) {
          .main-content {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  </Layout>
)

export const Head = () => <Seo title="李元基 - 全栈开发者" />

export default IndexPage