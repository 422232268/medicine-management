import React from 'react'
import { Breadcrumb } from 'antd'
import style from './style.module.scss'
function NavigationComponent () {
  return (
    <div className={style.navigationComponent}>
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href='void'>年度协议管理</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href='void'>二级商协议</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>新增二级商协议</Breadcrumb.Item>
      </Breadcrumb>
      <h2>新增二级商协议</h2>
    </div>
  )
}

export default NavigationComponent
