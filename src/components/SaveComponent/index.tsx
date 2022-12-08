import React from 'react'
import { Button } from 'antd'
import style from './style.module.scss'
function SaveComponent () {
  return (
    <div className={style.saveComponent}>
      <Button size='large' type='primary'>
        保存
      </Button>
    </div>
  )
}

export default SaveComponent
