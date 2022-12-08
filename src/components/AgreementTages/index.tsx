import React, { useCallback, useRef, useState, useEffect } from 'react'
import { Button, Tabs } from 'antd'
import style from './style.module.scss'
import AgreementMore from './AgreementMore/index'
const defaultPanes = new Array(2).fill(null).map((_, index) => {
  const id: string = String(index + 1)
  return {
    label: `补充协议${id}`,
    children: <AgreementMore activeKey={id} />,
    key: id
  }
})
function AgreementTages () {
  const [activeKey, setActiveKey] = useState(defaultPanes[0].key)
  const [items, setItems] = useState(defaultPanes)
  const newTabIndex = useRef(3)

  const onChange = (key: string) => {
    setActiveKey(key)
  }

  const add = () => {
    const newActiveKey = `${newTabIndex.current++}`
    console.log(newActiveKey)
    setItems([
      ...items,
      {
        label: `补充协议${newActiveKey || ''}`,
        children: (
          <AgreementMore
            activeKey={newActiveKey}
            remove={() => remove(newActiveKey)}
          />
        ),
        key: newActiveKey
      }
    ])
    console.log(newActiveKey)
    setActiveKey(newActiveKey)
  }

  const remove = useCallback(
    (targetKey: string) => {
      const targetIndex = items.findIndex(pane => pane.key === targetKey)
      const newPanes = items.filter(pane => pane.key !== targetKey)
      setActiveKey(activeKey)
      if (newPanes.length && targetKey === activeKey) {
        const { key } =
          newPanes[
            targetIndex === newPanes.length ? targetIndex - 1 : targetIndex
          ]
        setActiveKey(key)
      }
      setItems(newPanes)
    },
    [activeKey, items]
  )

  return (
    <div className={style.agreementTages}>
      <div className='add'>
        <Button type='primary' onClick={add}>
          新增
        </Button>
      </div>

      <Tabs
        type='card'
        // size='small'
        onChange={onChange}
        activeKey={activeKey}
        items={items}
      />
    </div>
  )
}

export default AgreementTages
