import React from 'react'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import style from './style.module.scss'
import { Form, Input, Select, DatePicker } from 'antd'

const FormItem = Form.Item
function AgreementDetail () {
  dayjs.extend(customParseFormat)
  const dateFormat = 'YYYY-MM-DD HH:mm'
  return (
    <div className={style.agreementDetail}>
      <div className='box'>
        <div className='sub-box'>
          <div className='title'>协议价（元）</div>
          <div className='container'>
            <FormItem className='money'>
              <Input disabled size='small' placeholder='请输入' />
            </FormItem>
          </div>
        </div>
        <div className='sub-box'>
          <div className='title'>票折（元）</div>
          <div className='container'>
            <FormItem className='money'>
              <Input disabled size='small' placeholder='请输入' />
            </FormItem>
          </div>
        </div>
        <div className='sub-box'>
          <div className='title'>购进指标量（大单位）</div>
          <div className='container'>
            <FormItem className='money'>
              <Input disabled size='small' placeholder='请输入' />
            </FormItem>
          </div>
        </div>
        <div className='sub-box'>
          <div className='title'>购进指标量（小单位）</div>
          <div className='container'>
            <FormItem className='money'>
              <Input disabled size='small' placeholder='请输入' />
            </FormItem>
          </div>
        </div>
        <div className='sub-box'>
          <div className='title'>购进指金额（万元）</div>
          <div className='container'>
            <FormItem className='money'>
              <Input disabled size='small' placeholder='请输入' />
            </FormItem>
          </div>
        </div>
        <div className='sub-box'>
          <div className='title'>纯销量指标（小单位）</div>
          <div className='container'>
            <FormItem className='money'>
              <Input disabled size='small' placeholder='请输入' />
            </FormItem>
          </div>
        </div>
        <div className='sub-box'>
          <div className='title'>纯销量金额（万元）</div>
          <div className='container'>
            <FormItem className='money'>
              <Input disabled size='small' placeholder='请输入' />
            </FormItem>
          </div>
        </div>
      </div>
      <div className='box'>
        <div className='sub-box'>
          <div className='title'>分销奖励</div>
          <div className='container'>
            <FormItem className='money'>
              <Input disabled size='small' placeholder='请输入' />
            </FormItem>
          </div>
        </div>
        <div className='sub-box'>
          <div className='title'>费用科目</div>
          <div className='container'>
            <FormItem className='money'>
              <Select size='small' defaultValue='money'>
                <Select.Option value='money'>单选项1</Select.Option>
                <Select.Option value='number'>数量</Select.Option>
              </Select>
            </FormItem>
          </div>
        </div>
        <div className='sub-box'>
          <div className='title'>零售配送</div>
          <div className='container'>
            <FormItem className='money'>
              <Input disabled size='small' placeholder='请输入' />
            </FormItem>
          </div>
        </div>
        <div className='sub-box'>
          <div className='title'>费用科目</div>
          <div className='container'>
            <FormItem className='money'>
              <Select mode='multiple' size='small' defaultValue='money'>
                <Select.Option value='money'>多选项1</Select.Option>
                <Select.Option value='number'>数量</Select.Option>
              </Select>
            </FormItem>
          </div>
        </div>
        <div className='sub-box'>
          <div className='title'>医疗配送商</div>
          <div className='container'>
            <FormItem className='money'>
              <Input disabled size='small' placeholder='请输入' />
            </FormItem>
          </div>
        </div>
        <div className='sub-box'>
          <div className='title'>费用科目</div>
          <div className='container'>
            <FormItem className='money'>
              <Select mode='multiple' size='small' defaultValue='money'>
                <Select.Option value='money'>多选项1</Select.Option>
                <Select.Option value='number'>数量</Select.Option>
              </Select>
            </FormItem>
          </div>
        </div>
        <div className='sub-box'>
          <div className='title'>自定义7</div>
          <div className='container'>
            <DatePicker
              suffixIcon=''
              format={dateFormat}
              defaultValue={dayjs('2020/02/01 18:25', dateFormat)}
            />
          </div>
        </div>
        <div className='sub-box'>
          <div className='title'>自定义8</div>
          <div className='container'>
            <DatePicker
              suffixIcon=''
              format={dateFormat}
              defaultValue={dayjs('2020/02/01 18:25', dateFormat)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgreementDetail
