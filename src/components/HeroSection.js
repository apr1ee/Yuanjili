// src/components/HeroSection.js
import React, { useState, useEffect } from "react"

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 计算透明度和变换，在滚动 100vh 时完全消失
  const opacity = Math.max(0, 1 - scrollY / window.innerHeight)
  const translateY = scrollY * 0.5 // 视差效果

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      backgroundColor: '#0f172a',
      zIndex: 1,
      opacity: opacity,
      transform: `translateY(${translateY}px)`,
      pointerEvents: opacity > 0 ? 'auto' : 'none',
      transition: 'opacity 0.1s ease-out'
    }}>
      {/* 背景装饰元素 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
        `,
        opacity: 0.6
      }} />

      {/* 左侧社交链接 */}
      <div style={{
        position: 'absolute',
        left: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        zIndex: 10
      }}>
        {[
          { name: 'GitHub', href: 'https://github.com/apr1ee', icon: <GitHubIcon /> },
          { name: 'Email', href: 'mailto:leeapr0528@gmail.com', icon: <EmailIcon /> },
          { name: 'LinkedIn', href: '#', icon: <LinkedInIcon /> }
        ].map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#94a3b8',
              transition: 'all 0.3s ease',
              transform: 'scale(1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#20b2aa'
              e.target.style.transform = 'scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#94a3b8'
              e.target.style.transform = 'scale(1)'
            }}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* 主要内容区域 */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: '0 2rem',
        textAlign: 'left',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div>
          {/* 问候语 */}
          <p style={{
            fontSize: '1rem',
            color: '#20b2aa',
            fontWeight: '400',
            marginBottom: '1.5rem',
            fontFamily: 'Monaco, "Courier New", monospace',
            animation: 'fadeInUp 1s ease-out'
          }}>
            Hi, my name is
          </p>

          {/* 主标题 */}
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            fontWeight: '700',
            color: '#e2e8f0',
            lineHeight: '1.1',
            marginBottom: '1rem',
            animation: 'fadeInUp 1s ease-out 0.2s both'
          }}>
            李元基.
          </h1>

          {/* 副标题 */}
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontWeight: '600',
            color: '#64748b',
            lineHeight: '1.1',
            marginBottom: '2rem',
            animation: 'fadeInUp 1s ease-out 0.4s both'
          }}>
            I build possibilities for dreams.
          </h2>

          {/* 描述 */}
          <p style={{
            fontSize: '1.125rem',
            color: '#94a3b8',
            lineHeight: '1.6',
            maxWidth: '600px',
            marginBottom: '3rem',
            animation: 'fadeInUp 1s ease-out 0.6s both'
          }}>
            我是一名全栈开发者，专注于创建创新的数字体验。目前在{' '}
            <span style={{ color: '#20b2aa', fontWeight: '500' }}>
              蒙纳士大学
            </span>{' '}
            攻读信息技术硕士学位，致力于构建可访问、用户友好的产品。
          </p>

          {/* CTA 按钮 */}
          <button
            onClick={scrollToContent}
            style={{
              padding: '1rem 2rem',
              backgroundColor: 'transparent',
              border: '2px solid #20b2aa',
              borderRadius: '4px',
              color: '#20b2aa',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'Monaco, "Courier New", monospace',
              animation: 'fadeInUp 1s ease-out 0.8s both'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(32, 178, 170, 0.1)'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            查看我的作品
          </button>
        </div>
      </div>

      {/* 右侧装饰文字 */}
      <div style={{
        position: 'absolute',
        right: '2rem',
        bottom: '2rem',
        transform: 'rotate(90deg)',
        transformOrigin: 'center',
        fontSize: '0.75rem',
        color: '#64748b',
        fontFamily: 'Monaco, "Courier New", monospace',
        letterSpacing: '0.1em'
      }}>
        leeapr0528@gmail.com
      </div>

      {/* 滚动指示器 */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        animation: 'bounce 2s infinite'
      }}>
        <div style={{
          width: '1px',
          height: '3rem',
          backgroundColor: '#64748b'
        }} />
        <ScrollDownIcon />
      </div>

      {/* CSS 动画 */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
      `}</style>
    </div>
  )
}

// SVG 图标组件
const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const ScrollDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2">
    <polyline points="7,13 12,18 17,13"/>
    <polyline points="7,6 12,11 17,6"/>
  </svg>
)

export default HeroSection