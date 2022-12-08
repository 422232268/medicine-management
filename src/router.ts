import React from 'react'
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
interface routers {
  name: string
  icon: any
  path: string
}
const routerList: routers[] = [
  {
    name: '功能1',
    icon: UserOutlined,
    path: '/'
  },
  {
    name: '功能2',
    icon: VideoCameraOutlined,
    path: '/auth'
  },
  {
    name: '功能3',
    icon: CloudOutlined,
    path: '/user'
  },
  {
    name: '功能3',
    icon: UploadOutlined,
    path: '/main'
  },
  {
    name: '功能4',
    icon: BarChartOutlined,
    path: '/4'
  },
  {
    name: '功能5',
    icon: AppstoreOutlined,
    path: '/5'
  },
  {
    name: '功能6',
    icon: TeamOutlined,
    path: '/6'
  },
  {
    name: '功能7',
    icon: ShopOutlined,
    path: '/7'
  }
]
const items: MenuProps['items'] = routerList.map(item => ({
  key: item.path,
  icon: React.createElement(item.icon),
  label: item.name
}))

export default items
