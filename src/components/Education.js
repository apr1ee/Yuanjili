// src/components/Education.js
import React from "react"

const Education = () => {
  const educationData = [
    {
      institution: "Monash University",
      degree: "Master of Science - Information Technology",
      period: "2024.07 - 2026.03",
      location: "Melbourne, Australia",
      status: "在读",
      type: "研究生"
    },
    {
      institution: "Victoria University", 
      degree: "Information Technology - Bachelor of Science",
      period: "2023.06 - 2024.06",
      location: "Melbourne, Australia",
      status: "已毕业",
      type: "本科",
      experiences: [
        "担任 esvote 开发负责人",
        "esvote 项目获得学期优秀设计并展出"
      ]
    },
    {
      institution: "河南大学",
      degree: "计算机科学与技术 - 本科",
      period: "2020.09 - 2023.06", 
      location: "河南, 中国",
      status: "已毕业",
      type: "本科",
      experiences: [
        "担任班长，院学生会办公室成员",
        "第十二届蓝桥杯 C/C++ 程序设计大赛 - 大学 B 组 省级二等奖"
      ]
    }
  ]

  return (
    <section id="education" style={{
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
          Education
        </h2>
      </div>

      {/* 教育内容 */}
      <div>
        <p style={{ 
          marginBottom: '2rem', 
          lineHeight: '1.6',
          color: '#94a3b8'
        }}>
          我的学术背景跨越了中国和澳大利亚的教育体系，专注于计算机科学与信息技术领域：
        </p>

        {/* 教育经历列表 */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {educationData.map((education, index) => (
            <EducationCard key={education.institution + education.period} education={education} index={index} />
          ))}
        </div>

        {/* 补充说明 */}
        <div style={{
          marginTop: '3rem',
          padding: '1.5rem',
          backgroundColor: 'rgba(30, 41, 59, 0.5)',
          borderRadius: '0.5rem',
          border: '1px solid rgba(148, 163, 184, 0.1)'
        }}>
          <p style={{
            fontSize: '0.875rem',
            lineHeight: '1.5',
            color: '#cbd5e1',
            margin: 0
          }}>
            🎓 通过跨文化的学习经历，我不仅掌握了扎实的技术基础，还培养了国际化视野和跨文化沟通能力。
            这些经历让我能够在多元化的团队中有效协作，适应不同的工作环境。
          </p>
        </div>
      </div>
    </section>
  )
}

// 教育卡片组件
const EducationCard = ({ education, index }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case '在读':
        return '#22c55e' // green
      case '已毕业':
        return '#3b82f6' // blue
      default:
        return '#64748b' // gray
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case '研究生':
        return 'rgba(168, 85, 247, 0.1)' // purple background
      case '本科':
        return 'rgba(59, 130, 246, 0.1)' // blue background
      default:
        return 'rgba(148, 163, 184, 0.1)' // gray background
    }
  }

  const getTypeTextColor = (type) => {
    switch (type) {
      case '研究生':
        return '#c084fc' // purple text
      case '本科':
        return '#60a5fa' // blue text
      default:
        return '#94a3b8' // gray text
    }
  }

  return (
    <div 
      style={{
        position: 'relative',
        padding: '2rem',
        borderRadius: '0.5rem',
        backgroundColor: 'rgba(30, 41, 59, 0.3)',
        border: '1px solid rgba(148, 163, 184, 0.1)',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.5)'
        e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.2)'
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.3)'
        e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.1)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* 时间线点 */}
      <div style={{
        position: 'absolute',
        left: '-6px',
        top: '2rem',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: getStatusColor(education.status),
        border: '3px solid #0f172a',
        zIndex: 10
      }} />
      
      {/* 时间线连接线 */}
      {index !== 2 && (
        <div style={{
          position: 'absolute',
          left: '-1px',
          top: '3rem',
          width: '2px',
          height: 'calc(100% + 2rem)',
          backgroundColor: 'rgba(148, 163, 184, 0.2)',
          zIndex: 5
        }} />
      )}

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {/* 学校和学位信息 */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ flex: 1 }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '0.5rem',
              flexWrap: 'wrap'
            }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#e2e8f0',
                margin: 0,
                lineHeight: '1.2'
              }}>
                {education.institution}
              </h3>
              
              {/* 学位类型标签 */}
              <span style={{
                fontSize: '0.75rem',
                fontWeight: '500',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                backgroundColor: getTypeColor(education.type),
                color: getTypeTextColor(education.type),
                lineHeight: '1.25'
              }}>
                {education.type}
              </span>

              {/* 状态标签 */}
              <span style={{
                fontSize: '0.75rem',
                fontWeight: '500',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                backgroundColor: `${getStatusColor(education.status)}20`,
                color: getStatusColor(education.status),
                lineHeight: '1.25'
              }}>
                {education.status}
              </span>
            </div>
            
            <p style={{
              fontSize: '1rem',
              fontWeight: '500',
              color: '#cbd5e1',
              margin: 0,
              marginBottom: '0.5rem'
            }}>
              {education.degree}
            </p>
          </div>
        </div>

        {/* 时间和地点信息 */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          fontSize: '0.875rem',
          color: '#94a3b8'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <CalendarIcon />
            <span>{education.period}</span>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <LocationIcon />
            <span>{education.location}</span>
          </div>
        </div>

        {/* 校园经历和获奖 */}
        {education.experiences && education.experiences.length > 0 && (
          <div style={{
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: 'rgba(51, 65, 85, 0.3)',
            borderRadius: '0.375rem',
            border: '1px solid rgba(148, 163, 184, 0.1)'
          }}>
            <h4 style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              color: '#e2e8f0',
              margin: 0,
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <AchievementIcon />
              校园经历与获奖
            </h4>
            
            <ul style={{
              margin: 0,
              paddingLeft: '1rem',
              listStyleType: 'disc'
            }}>
              {education.experiences.map((experience, expIndex) => (
                <li key={expIndex} style={{
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  color: '#cbd5e1',
                  marginBottom: expIndex < education.experiences.length - 1 ? '0.5rem' : 0
                }}>
                  {experience}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

// SVG 图标组件
const CalendarIcon = () => (
  <svg 
    width="14" 
    height="14" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{ color: '#64748b' }}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const LocationIcon = () => (
  <svg 
    width="14" 
    height="14" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{ color: '#64748b' }}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const AchievementIcon = () => (
  <svg 
    width="14" 
    height="14" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    style={{ color: '#fbbf24' }}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

export default Education