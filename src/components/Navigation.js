import React from "react"

const Navigation = () => {
  return (
    <div>
      {/* 主标题 */}
      <h1 style={{
        fontSize: '2.25rem',
        fontWeight: 'bold',
        letterSpacing: '-0.025em',
        color: '#e2e8f0',
        marginBottom: '0.75rem'
      }}>
        <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          李 元基 <apr1ee/>
        </a>
      </h1>
      
      {/* 副标题 */}
      <h2 style={{
        fontSize: '1.125rem',
        fontWeight: '500',
        letterSpacing: '-0.025em',
        color: '#e2e8f0',
        marginBottom: '1rem'
      }}>
        全栈工程师
      </h2>
      
      {/* 描述 */}
      <p style={{
        maxWidth: '20rem',
        lineHeight: '1.5',
        color: '#94a3b8'
      }}>
        向往乌托邦世界的白日梦想家
      </p>
      
      {/* 导航菜单 */}
      <nav style={{
        marginTop: '4rem'
      }}>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          width: 'max-content'
        }}>
          {[
            { name: 'About', href: '#about', chinese: '关于' },
            { name: 'Education', href:'#education', chinese:'教育经历'},
            { name: 'Skills', href: '#skills', chinese: '技术能力' },
            { name: 'Projects', href: '#projects', chinese: '项目' }
          ].map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingTop: '0.75rem',
                  paddingBottom: '0.75rem',
                  color: '#64748b',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#e2e8f0'
                  const indicator = e.target.querySelector('.nav-indicator')
                  if (indicator) {
                    indicator.style.width = '4rem'
                    indicator.style.backgroundColor = '#e2e8f0'
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#64748b'
                  const indicator = e.target.querySelector('.nav-indicator')
                  if (indicator) {
                    indicator.style.width = '2rem'
                    indicator.style.backgroundColor = '#475569'
                  }
                }}
              >
                {/* 指示器线条 */}
                <span 
                  className="nav-indicator"
                  style={{
                    marginRight: '1rem',
                    height: '1px',
                    width: '2rem',
                    backgroundColor: '#475569',
                    transition: 'all 0.25s ease'
                  }}
                />
                
                {/* 导航文字 */}
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navigation