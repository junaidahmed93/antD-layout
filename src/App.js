import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './App.css';

const {
  Header, Content, Footer, Sider,
} = Layout;
const { SubMenu } = Menu.SubMenu;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  }

  render() {
    return (

      <Layout>
        <Header
          className="header-style"
          style={{
            background: 'white', position: 'fixed', zIndex: 1, width: '100%', borderBottom: '3px solid #DEDEDF',
          }}
        >
          <div className="logo" />
        </Header>
        <Sider
          className="side-menu"
          style={{
            background: 'white', overflow: 'auto', height: '100vh', marginTop: '63px', position: 'fixed', left: 0, border: '2px solid #DEDEDF',
          }}
        >

          <Menu theme="white" mode="inline" defaultSelectedKeys={['4']}>
            <SubMenu
              key="sub2"
              title={(
                <span>
                  <Icon type="team" />
                  <span>
Hotel Management
                  </span>
                </span>
)}
            >
              <Menu.Item key="6">
List
              </Menu.Item>
              <Menu.Item key="8">
Hotel staff
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">
Hotel Management
              </span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">
Staff Management
              </span>
            </Menu.Item>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">
Booking
              </span>
            </Menu.Item>

            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">
Customer
              </span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="bar-chart" />
              <span className="nav-text">
Reports
              </span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="cloud-o" />
              <span className="nav-text">
Configration
              </span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="cloud-o" />
              <span className="nav-text">
Notification Center
              </span>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={(
                <span>
                  <Icon type="team" />
                  <span>
Team
                  </span>
                </span>
)}
            >
              <Menu.Item key="6">
Team 1
              </Menu.Item>
              <Menu.Item key="8">
Team 2
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="7">
              <Icon type="team" />
              <span className="nav-text">
nav 7
              </span>
            </Menu.Item>
            <Menu.Item key="8">
              <Icon type="shop" />
              <span className="nav-text">
nav 8
              </span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>

          <Content style={{ margin: '84px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
          content
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>


    );
  }
}

export default App;
