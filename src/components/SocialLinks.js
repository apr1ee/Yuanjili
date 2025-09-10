// src/components/SocialLinks.js
import React, { useState } from "react"
import { createPortal } from "react-dom"

const SocialLinks = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({ title: '', content: '' })
  const [copyMessage, setCopyMessage] = useState('')

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/apr1ee',
      external: true
    },
    { 
      name: 'Email', 
      content: 'leeapr0528@gmail.com',
      popup: true
    },
    { 
      name: 'Phone', 
      content: '+86-16621693508',
      popup: true
    },
    { 
      name: 'WeChat', 
      content: 'leeapr0528',
      popup: true
    },
    { 
      name: 'CV', 
      download: true,
      href: '/cv/李元基-简历.pdf'
    }
  ]

  const copyToClipboard = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopyMessage(`${label} 已复制到剪贴板`)
      setTimeout(() => setCopyMessage(''), 2000)
    } catch (err) {
      // 如果 clipboard API 不可用，使用 fallback 方法
      const textArea = document.createElement('textarea')
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopyMessage(`${label} 已复制到剪贴板`)
      setTimeout(() => setCopyMessage(''), 2000)
    }
  }

  const handlePopupClick = (social) => {
    setModalContent({
      title: social.name,
      content: social.content
    })
    setShowModal(true)
  }

  const handleCopyAndClose = () => {
    copyToClipboard(modalContent.content, modalContent.title)
    setShowModal(false)
  }

  const handleDownload = (href) => {
    const link = document.createElement('a')
    link.href = href
    link.download = '李元基-简历.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <ul style={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: '0.25rem',
        marginTop: '2rem',
        listStyle: 'none',
        padding: 0,
        flexWrap: 'wrap',
        gap: '1.25rem'
      }}>
        {socialLinks.map((social) => (
          <li key={social.name} style={{
            fontSize: '0.75rem'
          }}>
            {social.external ? (
              // 外部链接 (GitHub)
              <a 
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                style={{
                  display: 'block',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  transition: 'color 0.25s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
              >
                {social.name}
              </a>
            ) : social.download ? (
              // 下载链接 (CV)
              <button
                onClick={() => handleDownload(social.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  transition: 'color 0.25s ease',
                  padding: 0
                }}
                onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
              >
                {social.name}
              </button>
            ) : (
              // 弹窗链接 (Email, Phone, WeChat)
              <button
                onClick={() => handlePopupClick(social)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  transition: 'color 0.25s ease',
                  padding: 0
                }}
                onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
              >
                {social.name}
              </button>
            )}
          </li>
        ))}
      </ul>

      {/* 复制成功提示 - 使用 Portal */}
      {copyMessage && createPortal(
        <div style={{
          position: 'fixed',
          top: '2rem',
          right: '2rem',
          backgroundColor: '#22c55e',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          fontWeight: '500',
          boxShadow: '0 10px 25px rgba(34, 197, 94, 0.3)',
          zIndex: 100000,
          animation: 'slideIn 0.3s ease-out'
        }}>
          ✓ {copyMessage}
        </div>,
        document.body
      )}

      {/* 弹窗模态框 - 使用 Portal */}
      {showModal && typeof document !== 'undefined' && createPortal(
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100000,
          backdropFilter: 'blur(4px)'
        }}
        onClick={() => setShowModal(false)}
        >
          <div style={{
            backgroundColor: '#1e293b',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            borderRadius: '0.75rem',
            padding: '2rem',
            maxWidth: '400px',
            width: '90%',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            {/* 模态框头部 */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#e2e8f0',
                margin: 0
              }}>
                {modalContent.title}
              </h3>
              
              <button
                onClick={() => setShowModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  fontSize: '1.5rem',
                  padding: '0.25rem',
                  borderRadius: '0.25rem',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
              >
                ×
              </button>
            </div>

            {/* 内容区域 */}
            <div style={{
              padding: '1rem',
              backgroundColor: 'rgba(51, 65, 85, 0.5)',
              borderRadius: '0.5rem',
              border: '1px solid rgba(148, 163, 184, 0.1)',
              marginBottom: '1.5rem'
            }}>
              <p style={{
                fontSize: '1rem',
                color: '#cbd5e1',
                margin: 0,
                fontFamily: 'monospace',
                textAlign: 'center',
                wordBreak: 'break-all'
              }}>
                {modalContent.content}
              </p>
            </div>

            {/* 按钮区域 */}
            <div style={{
              display: 'flex',
              gap: '0.75rem',
              justifyContent: 'flex-end'
            }}>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(148, 163, 184, 0.3)',
                  borderRadius: '0.375rem',
                  color: '#94a3b8',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(148, 163, 184, 0.1)'
                  e.target.style.borderColor = 'rgba(148, 163, 184, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.borderColor = 'rgba(148, 163, 184, 0.3)'
                }}
              >
                取消
              </button>
              
              <button
                onClick={handleCopyAndClose}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#20b2aa',
                  border: 'none',
                  borderRadius: '0.375rem',
                  color: 'white',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#1a9b95'
                  e.target.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#20b2aa'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                复制到剪贴板
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* CSS 动画 */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}

export default SocialLinks