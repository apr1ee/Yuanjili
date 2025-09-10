// src/components/Projects.js
import React from "react"

const Projects = () => {
  const projects = [
    {
      title: "AUSLAN 学习辅助平台",
      description: "技术创新与社会影响并重的教育科技项目-一个面向澳大利亚聋哑儿童的手语学习平台，解决了课堂中手语翻译师短缺的实际问题。项目的核心亮点在于将机器学习与教育需求深度结合，我负责从零开始设计系统架构，训练手语识别模型，并构建了完整的前后端系统。",
      image: "/images/spotify-course.png", // 你需要添加对应的图片
      link: "https://github.com/your-username/spotify-course",
      external: true,
      technologies: ["React", "Node.js", "Express", "Spotify API"]
    },
    {
      title: "E&SVote - 安全电子投票系统",
      description: "系统采用 ElGamal 同态加密算法，实现了端到端的安全投票协议，确保在整个投票流程中既保护选民隐私又保证结果的可验证性",
      image: "/images/spotify-profile.png", // 你需要添加对应的图片
      link: "https://github.com/your-username/spotify-profile",
      external: true,
      stars: 695,
      technologies: ["React", "Express", "Spotify API", "Heroku"]
    },
    {
      title: "Parking Connect - 智能停车解决方案",
      description: "数据驱动的城市问题解决方案-基于对墨尔本交通现状的深入调研，这个项目提出了将停车与公共交通相结合的创新思路。我深入分析了墨尔本 CBD 的停车数据和公共交通网络，开发了一套智能推荐系统。",
      image: "/images/halcyon-theme.png", // 你需要添加对应的图片
      link: "https://github.com/your-username/halcyon-theme",
      external: true,
      installs: "100k+ Installs",
      technologies: ["VS Code", "Theme"]
    },
    {
      title: "日记青少年公益项目",
      description: "关注青少年心理健康的数字化公益平台这是一个专注于青少年心理健康支持的公益项目，通过数字化手段为青少年提供情感表达和心理健康管理工具。项目的核心理念是通过日记写作这一传统且有效的方式，结合现代技术手段，帮助青少年更好地认识和管理自己的情绪。",
      image: "/images/portfolio-v4.png", // 你需要添加对应的图片
      link: "https://github.com/your-username/portfolio-v4",
      external: true,
      stars: 8057,
      technologies: ["Gatsby", "Styled Components", "Netlify"]
    }
  ]

  return (
    <section id="projects" style={{
      marginBottom: '4rem',
      scrollMarginTop: '6rem'
    }}>
      {/* 区域标题 */}
      <div style={{
        position: 'sticky',
        top: '0',
        zIndex: 20,
        marginLeft: '-1.5rem',
        marginRight: '-1.5rem',
        marginBottom: '1rem',
        width: '100vw',
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        paddingTop: '1.25rem',
        paddingBottom: '1.25rem',
        backdropFilter: 'blur(8px)'
      }}>
        <h2 style={{
          fontSize: '0.875rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: '#e2e8f0'
        }}>
          Projects
        </h2>
      </div>

      {/* 项目内容 */}
      <div>
        <p style={{ 
          marginBottom: '2rem', 
          lineHeight: '1.6',
          color: '#94a3b8'
        }}>
          以下是我参与开发的一些项目，涵盖了从教程课程到开源工具的各种类型：
        </p>

        {/* 项目列表 */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* 更多项目提示 */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: '#64748b',
            marginBottom: '1rem'
          }}>
            想看更多项目？
          </p>
          <a 
            href="https://github.com/apr1ee" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              borderRadius: '0.5rem',
              color: '#e2e8f0',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'all 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(30, 41, 59, 0.8)'
              e.target.style.borderColor = 'rgba(148, 163, 184, 0.3)'
              e.target.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(30, 41, 59, 0.5)'
              e.target.style.borderColor = 'rgba(148, 163, 184, 0.2)'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            <span>访问 GitHub</span>
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

// 项目卡片组件
const ProjectCard = ({ project, index }) => {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        padding: '1.5rem',
        borderRadius: '0.5rem',
        backgroundColor: 'rgba(30, 41, 59, 0.3)',
        border: '1px solid rgba(148, 163, 184, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.5)'
        e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.2)'
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.3)'
        e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.1)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
      onClick={() => {
        if (project.external) {
          window.open(project.link, '_blank', 'noopener,noreferrer')
        }
      }}
    >
      {/* 项目图片 */}
      <div style={{
        width: '120px',
        height: '80px',
        flexShrink: 0,
        borderRadius: '0.375rem',
        overflow: 'hidden',
        backgroundColor: 'rgba(51, 65, 85, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* 临时占位符，你可以替换为真实图片 */}
        <div style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(71, 85, 105, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.75rem',
          color: '#94a3b8'
        }}>
          {project.title.substring(0, 2)}
        </div>
      </div>

      {/* 项目信息 */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>
        {/* 项目标题和链接 */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <h3 style={{
            fontSize: '1rem',
            fontWeight: '600',
            color: '#e2e8f0',
            margin: 0,
            lineHeight: '1.2'
          }}>
            {project.title}
          </h3>
          {project.external && <ExternalLinkIcon />}
        </div>

        {/* 项目描述 */}
        <p style={{
          fontSize: '0.875rem',
          lineHeight: '1.5',
          color: '#94a3b8',
          margin: 0,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {project.description}
        </p>

        {/* 项目统计和技术栈 */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* 技术栈标签 */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(20, 184, 166, 0.1)',
                  color: '#5eead4',
                  lineHeight: '1.25'
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* 统计信息 */}
          {(project.stars || project.installs) && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              fontSize: '0.75rem',
              color: '#64748b'
            }}>
              {project.stars && (
                <>
                  <StarIcon />
                  <span>{project.stars.toLocaleString()}</span>
                </>
              )}
              {project.installs && (
                <>
                  <DownloadIcon />
                  <span>{project.installs}</span>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// SVG 图标组件
const ExternalLinkIcon = () => (
  <svg 
    width="12" 
    height="12" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{ color: '#64748b' }}
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
)

const StarIcon = () => (
  <svg 
    width="12" 
    height="12" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    style={{ color: '#fbbf24' }}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const DownloadIcon = () => (
  <svg 
    width="12" 
    height="12" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{ color: '#64748b' }}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7,10 12,15 17,10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const AwardIcon = () => (
  <svg 
    width="12" 
    height="12" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    style={{ color: '#fbbf24' }}
  >
    <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1L21.59 10c.36-.41.58-.95.58-1.54c0-.58-.22-1.12-.58-1.54L19.43 6c.04-.34.07-.67.07-1c0-.33-.03-.65-.07-.97L21.59 3c.36-.41.58-.95.58-1.54C22.17.88 21.95.34 21.59-.07L19.43-1c.04-.32.07-.64.07-.97c0-.33-.03-.65-.07-.97L21.59-4c.36-.41.58-.95.58-1.54c0-.58-.22-1.12-.58-1.54l-2.16-.93c.04-.32.07-.64.07-.97c0-.33-.03-.65-.07-.97L21.59-12c.36-.41.58-.95.58-1.54c0-.59-.22-1.13-.58-1.54l-2.16-.93c.04-.33.07-.66.07-1c0-.33-.03-.65-.07-.97L21.59-20c.36-.41.58-.95.58-1.54c0-.58-.22-1.12-.58-1.54L19.43-24c.04-.32.07-.64.07-.97c0-.33-.03-.65-.07-.97L21.59-28c.36-.41.58-.95.58-1.54c0-.58-.22-1.12-.58-1.54l-2.16-.93z" />
  </svg>
)

export default Projects