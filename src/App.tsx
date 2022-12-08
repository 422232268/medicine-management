import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Layout, Menu, MenuProps } from 'antd'
import items from './router'
import Auth from './pages/Auth/index'
import Home from './pages/Home/index'
import Main from './pages/Main/index'
import User from './pages/User/index'
import NotFound from './pages/NotFound/index'
import style from './style.module.scss'
import Logo from './components/Logo/index'
import HeaderComponent from './components/HeaderComponent/index'

const { Header, Content, Footer, Sider } = Layout
const App: React.FC = () => {
  const navigate = useNavigate()
  const onClick: MenuProps['onClick'] = e => {
    const path = e.key
    navigate(path)
  }
  return (
    <Layout hasSider className={style.app}>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          background: '#2a3238'
        }}
      >
        <Logo />
        <Menu
          onClick={onClick}
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['4']}
          items={items}
        />
      </Sider>
      <Layout className='site-layout' style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: '#2a3238' }}>
          <HeaderComponent />
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
            minWidth: '1400px',
            background: '#f5f5f5'
          }}
        >
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Home />}></Route>
            <Route path='/main' element={<Main />}></Route>
            <Route path='/auth' element={<Auth />}></Route>
            <Route path='/user' element={<User />}></Route>
          </Routes>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  )
}

export default App
