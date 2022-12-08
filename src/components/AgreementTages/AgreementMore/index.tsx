import { Button, Input } from 'antd'
import style from './style.module.scss'
const { TextArea } = Input
interface IProps {
  activeKey: string
  remove?: (key: string) => void
}
const AgreementMore = (props: IProps) => {
  return (
    <div className={style.agreementMore}>
      <div className='title'>协议内容：</div>
      <div className='remove'>
        <Button
          className='del-button'
          onClick={() => props?.remove && props.remove(props.activeKey)}
        >
          删除
        </Button>
      </div>
      <div className='text'>
        <TextArea
          rows={4}
          maxLength={6}
          autoSize={{ minRows: 5, maxRows: 10 }}
        />
      </div>
    </div>
  )
}

export default AgreementMore
