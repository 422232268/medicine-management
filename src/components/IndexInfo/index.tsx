import React from 'react'
import { Button } from 'antd'

interface IIndexInfo {
  label: string
  money: string
}
const data: IIndexInfo[] = [
  {
    label: '购进总指标(万元)',
    money: '152.65'
  },
  {
    label: '指标按季度分解(万元)',
    money: '【Q1】￥12.5 , 【Q2】￥12.5 , 【Q3】￥12.5 , 【Q4】￥12.5'
  },
  {
    label: '纯销总指标(万元)',
    money: '￥152.65'
  }
]
function IndexInfo () {
  return (
    <div style={{ height: '38px', lineHeight: '38px' }}>
      <Button type='primary'>添加产品</Button>
      {data.map(item => {
        return (
          <span style={{ margin: '0 26px', color: '#6c6c6c' }} key={item.label}>
            <span>{item.label}</span>
            <span style={{ margin: '0 10px' }}>：</span>
            <span style={{ fontWeight: 700, color: '#696969' }}>
              ￥{item.money}
            </span>
          </span>
        )
      })}
    </div>
  )
}

export default IndexInfo
