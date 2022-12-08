import React from 'react'
import { HomeOutlined, DatabaseOutlined, GoldFilled } from '@ant-design/icons'
import managementName from '../../asset/img/management-name.png'
import { useNavigate } from 'react-router-dom'
import style from './style.module.scss'
function HeaderContent () {
  const navigate = useNavigate()
  const jump = (path: string) => {
    navigate(path)
  }
  return (
    <div className={style.headerComponent}>
      <div className='box' onClick={() => jump('/')}>
        <HomeOutlined />
        <span>首页</span>
      </div>
      <div className='box' onClick={() => jump('/data')}>
        <DatabaseOutlined />
        <span>主数据</span>
      </div>
      <div className='box' onClick={() => jump('/area-management')}>
        <GoldFilled />
        <span>辖区管理</span>
      </div>
      <div className='box' onClick={() => jump('/sell-management')}>
        <img src={managementName} alt='销讯通管理系统' />
      </div>
    </div>
  )
}

export default HeaderContent
