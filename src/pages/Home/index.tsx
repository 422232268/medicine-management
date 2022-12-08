import { Form } from 'antd'
import NavigationComponent from '../../components/NavigationComponent/index'
import DividerComponent from '../../components/DividerComponent'
import CustomerInfo from '../../components/CustomerInfo/index'
import IndexInfo from '../../components/IndexInfo/index'
import ProductComponent from '../../components/ProductComponent/index'
import AgreementDetail from '../../components/AgreementDetail/index'
import AgreementTages from '../../components/AgreementTages/index'
import SaveComponent from '../../components/SaveComponent/index'
import style from './style.module.scss'
function Home () {
  return (
    <div className={style.home}>
      <Form>
        <NavigationComponent />
        <div className='home-box'>
          <DividerComponent DividerTitle='主体协议' DividerNumber={1} />
          <CustomerInfo />
          <DividerComponent DividerTitle='产品政策' DividerNumber={2} />
          <IndexInfo />
          <ProductComponent />
          <AgreementDetail />
          <DividerComponent DividerTitle='补充政策' DividerNumber={3} />
          <AgreementTages />
        </div>
        <SaveComponent />
      </Form>
    </div>
  )
}

export default Home
