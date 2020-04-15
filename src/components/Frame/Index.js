import React from 'react'
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Dropdown } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import logo from './logo.png';
import './frame.css'
import { adminRoutes } from '../../routes';
import { DownOutlined, GithubOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(route => route.isShow);


function index(props) {
  const popMenu = (<Menu>
    <Menu.Item key="noti">Notification</Menu.Item>
    <Menu.Item key="setting">Setting</Menu.Item>
    <Menu.Item key="log">Login</Menu.Item>
    <Menu.Item key="about">About</Menu.Item>
    </Menu>);

  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          {/* <img src={logo} alt="logo" style={{transform:'scale(1.0)'}}/> */}
          <h1 style={{color:'#CCFFFF', display: "inline"}}>MakeSL</h1>
          <GithubOutlined style={{ fontSize: '30px', color: '#CCFFFF', margin:"15px" }}/>
        </div>
        <Dropdown overlay={popMenu}>
          <div>
            <DownOutlined style={{ fontSize: '16px', color: '#CCFFFF', margin:"10px" }}/>
            <span style={{ fontSize: '16px', color: '#CCFFFF' }}>More</span>
          </div>
        </Dropdown>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {routes.map(route => {
              return (
                <Menu.Item key={route.path} onClick={p => props.history.push(p.key)}>
                  { route.title }
                </Menu.Item>)
            })}
          </Menu>
        </Sider>
        <Layout style={{ padding: '16px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 580,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default withRouter(index);
