// src/components/About
import React from "react"

const About = () => {
  return (
    <section id="about" style={{
      marginBottom: '4rem',
      scrollMarginTop: '6rem'
    }}>
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
          About
        </h2>
      </div>
      
      <div>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          我是一名全栈开发者和计算机科学硕士研究生，热衷于创建创新的技术解决方案。我专注于将前端用户体验与后端系统架构相结合，构建既美观又高效的应用程序。从安全的电子投票系统到智能停车解决方案，我喜欢解决现实世界中的复杂问题。
        </p>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          目前，我正在{' '}
          <a href="https://www.monash.edu/" style={{
            fontWeight: '500',
            color: '#e2e8f0',
            textDecoration: 'none'
          }}>
            蒙纳士大学 (Monash University)
          </a>{' '}
          攻读信息技术硕士学位，专注于软件工程和系统设计。此前我曾在{' '}
          <a href="#" style={{
            fontWeight: '500',
            color: '#e2e8f0',
            textDecoration: 'none'
          }}>
            益信科技
          </a>{' '}
          担任软件开发实习生，参与敏捷开发流程并积累了丰富的团队协作经验。
        </p>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          我的技术兴趣涵盖了从算法竞赛编程到现代 Web 开发的广泛领域。我曾获得蓝桥杯程序设计大赛省级二等奖，也开发过获得学期优秀设计奖的安全投票系统。我相信技术应该服务于人，特别关注可访问性和用户体验设计。
        </p>
        <p style={{ lineHeight: '1.6' }}>
          除了编程之外，我喜欢探索墨尔本的咖啡文化，偶尔会尝试一些新的技术栈和开源项目。我也热衷于与同行开发者交流，分享学习心得和项目经验。
        </p>
      </div>
    </section>
  )
}

export default About