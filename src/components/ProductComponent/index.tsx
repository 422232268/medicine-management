import React from 'react'
import style from './style.module.scss'
import { Form, Select, DatePicker, Button } from 'antd'
import type { RangePickerProps } from 'antd/es/date-picker'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
const FormItem = Form.Item
function ProductCompnent () {
  dayjs.extend(customParseFormat)

  const range = (start: number, end: number) => {
    const result = []
    for (let i = start; i < end; i++) {
      result.push(i)
    }
    return result
  }
  // eslint-disable-next-line arrow-body-style
  const disabledDate: RangePickerProps['disabledDate'] = current => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day')
  }

  const disabledDateTime = () => ({
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56]
  })
  const dateFormat = 'YYYY-MM-DD HH:mm'
  return (
    <div className={style.productComponent}>
      <FormItem label='产品' className='product'>
        <Select mode='tags' placeholder='选择产品'>
          <Select.Option value='demo'>全国</Select.Option>
        </Select>
      </FormItem>
      <span className='product-info'>
        <span className='product-name'>美复胶丸</span>
        <span className='product-number'>24粒/盒</span>
      </span>

      <Form.Item label='签订时间' className='date'>
        <DatePicker
          format={dateFormat}
          disabledDate={disabledDate}
          disabledTime={disabledDateTime}
          defaultValue={dayjs('2020/02/01 18:25', dateFormat)}
        />
      </Form.Item>
      <Button className='delete'>删除</Button>
    </div>
  )
}

export default ProductCompnent
