import React from 'react'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import type { RangePickerProps } from 'antd/es/date-picker'
import style from './style.module.scss'
import { Form, Input, Select, DatePicker, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
const FormItem = Form.Item
interface DataType {
  key: React.Key
  name: string
  age: string
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: '指定渠道编码',
    dataIndex: 'name'
  },
  {
    title: '指定渠道名称',
    dataIndex: 'age'
  },
  {
    title: '所在省',
    dataIndex: 'address'
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: 'BJ000090',
    age: '宁波九州通药业有限公司',
    address: '浙江省'
  },
  {
    key: '2',
    name: 'BJ000192',
    age: '国药控股精华有限公司',
    address: '浙江省'
  },
  {
    key: '3',
    name: 'BJ000283',
    age: '老百姓药业有限公司',
    address: '浙江省'
  }
]
function CustomerInfo () {
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
    <div className={style.customerInfo}>
      <div className='left'>
        <div className='left-box'>
          <FormItem
            label='协议客户'
            name='note'
            rules={[{ required: true }]}
            className='customer'
          >
            <Select mode='tags' placeholder='选择客户'>
              <Select.Option value='demo'>选择客户</Select.Option>
            </Select>
          </FormItem>
          <FormItem label='购进指标'>
            <Select defaultValue='money'>
              <Select.Option value='money'>金额</Select.Option>
              <Select.Option value='number'>数量</Select.Option>
            </Select>
          </FormItem>
          <FormItem label='销售区域'>
            <Select mode='tags' placeholder='选择区域'>
              <Select.Option value='demo'>全国</Select.Option>
            </Select>
          </FormItem>
          <FormItem label='购进渠道'>
            <Select defaultValue='demo'>
              <Select.Option value='demo'>请选择渠道</Select.Option>
            </Select>
          </FormItem>
        </div>
        <div className='right-box'>
          <p>上海正也医药有限公司</p>
          <Form.Item className='money'>
            <Input placeholder='请输入金额/数量' />
          </Form.Item>
          <FormItem className='region'>
            <Select allowClear defaultValue='demo'>
              <Select.Option value='demo'>全国</Select.Option>
            </Select>
          </FormItem>
          <FormItem className='channel'>
            <Select mode='tags' placeholder='请选择渠道'>
              <Select.Option value='demo'>请选择渠道</Select.Option>
            </Select>
          </FormItem>
        </div>
      </div>
      <div className='right'>
        <FormItem label='协议状态' className='agreement-status'>
          <Select defaultValue='demo'>
            <Select.Option value='demo'>正常</Select.Option>
          </Select>
        </FormItem>
        <div className='box'>
          <div className='left-box'>
            <FormItem label='纯销指标' className='sell'>
              <Select defaultValue='money'>
                <Select.Option value='money'>金额</Select.Option>
                <Select.Option value='number'>数量</Select.Option>
              </Select>
            </FormItem>
          </div>
          <div className='right-box'>
            <Form.Item className='money'>
              <Input placeholder='请输入金额/数量' />
            </Form.Item>
          </div>
        </div>

        <Form.Item label='签订时间' className='date'>
          <DatePicker
            suffixIcon=''
            format={dateFormat}
            disabledDate={disabledDate}
            disabledTime={disabledDateTime}
            defaultValue={dayjs('2020/02/01 18:25', dateFormat)}
          />
        </Form.Item>
      </div>
      <div className='bottom'>
        <Table
          pagination={false}
          columns={columns}
          dataSource={data}
          size='small'
        />
      </div>
    </div>
  )
}

export default CustomerInfo
