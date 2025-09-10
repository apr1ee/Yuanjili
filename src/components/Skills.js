// scr/components/Skills
import React from "react"

const Skills = () => {
  const skillCategories = [
    {
      title: "前端技术",
      skills: [
        "JavaScript", "TypeScript", "React", "Vue.js", 
        "Next.js", "Gatsby", "HTML & CSS", "Tailwind CSS", "Styled Components"
      ]
    },
    {
      title: "后端技术", 
      skills: [
        "Node.js", "Express", "Python", "Django", 
        "PostgreSQL", "MongoDB", "Redis", "GraphQL"
      ]
    },
    {
      title: "开发工具",
      skills: [
        "Git", "Docker", "VS Code", "Webpack", 
        "Vite", "ESLint", "Prettier", "Figma"
      ]
    },
    {
      title: "云服务平台",
      skills: [
        "AWS", "Vercel", "Netlify", "Heroku", 
        "Firebase", "Supabase"
      ]
    }
  ]

  return (
    <section id="skills" style={{
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
          Skills
        </h2>
      </div>

      {/* 技能内容 */}
      <div>
        <p style={{ 
          marginBottom: '2rem', 
          lineHeight: '1.6',
          color: '#94a3b8'
        }}>
          这些是我在日常开发工作中使用的技术和工具：
        </p>

        {/* 技能分类 */}
        <div style={{
          display: 'grid',
          gap: '2rem'
        }}>
          {skillCategories.map((category, index) => (
            <div key={category.title}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#e2e8f0',
                marginBottom: '1rem'
              }}>
                {category.title}
              </h3>
              
              {/* 技能标签列表 */}
              <ul style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      borderRadius: '9999px', // rounded-full
                      backgroundColor: 'rgba(20, 184, 166, 0.1)', // bg-teal-400/10
                      paddingLeft: '0.75rem', // px-3
                      paddingRight: '0.75rem',
                      paddingTop: '0.25rem', // py-1
                      paddingBottom: '0.25rem',
                      fontSize: '0.75rem', // text-xs
                      fontWeight: '500',
                      lineHeight: '1.25', // leading-5
                      color: '#5eead4', // text-teal-300
                      transition: 'all 0.2s ease',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(20, 184, 166, 0.2)'
                      e.target.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(20, 184, 166, 0.1)'
                      e.target.style.transform = 'translateY(0)'
                    }}
                    >
                      {skill}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 补充说明 */}
        <div style={{
          marginTop: '2rem',
          padding: '1.5rem',
          backgroundColor: 'rgba(30, 41, 59, 0.5)', // bg-slate-800/50
          borderRadius: '0.5rem',
          border: '1px solid rgba(148, 163, 184, 0.1)'
        }}>
          <p style={{
            fontSize: '0.875rem',
            lineHeight: '1.5',
            color: '#cbd5e1', // text-slate-300
            margin: 0
          }}>
            💡 我对学习新技术充满热情，始终保持对行业最新趋势的关注。
            这个列表会随着我技能的增长而不断更新。
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills