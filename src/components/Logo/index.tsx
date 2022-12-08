import logo from '../../asset/img/m-logo.png'
import style from './style.module.scss'
function Logo () {
  return (
    <div className={style.logo}>
      <img src={logo} width='168' alt='上海正也医药公司' />
      <p className='title'>上海正也医药公司</p>
    </div>
  )
}

export default Logo
