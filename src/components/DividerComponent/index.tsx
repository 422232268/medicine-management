import React from 'react'
import { Divider, Badge } from 'antd'
import style from './style.module.scss'
interface IProps {
  DividerTitle: string
  DividerNumber: number
}
function DividerComponent (props: IProps) {
  return (
    <div className={style.dividerComponent}>
      <Divider dashed>
        <Badge count={props.DividerNumber} />
        <span className='agreement'>{props.DividerTitle}</span>
      </Divider>
    </div>
  )
}

export default DividerComponent
