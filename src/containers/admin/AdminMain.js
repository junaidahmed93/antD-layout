import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import '../../App.css';
import {
  BrowserRouter as Router, Route, Link,
} from 'react-router-dom';

const {
  Header, Content, Footer, Sider,
} = Layout;
const { SubMenu } = Menu;

// const IconFont = Icon.createFromIconfontCN({
//   scriptUrl: 'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
// });

const PandaSvg = () => (
  <svg viewBox="0 0 1024 1024" width="10px" height="10px" fill="red">
    <path d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z" fill="#6B676E" p-id="1143" />
    <path d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z" fill="#FFEBD2" p-id="1144" />
    <path d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z" fill="#E9D7C3" p-id="1145" />
    <path d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z" fill="#FFFFFF" p-id="1146" />
    <path d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z" fill="#6B676E" p-id="1147" />
    <path d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z" fill="#464655" p-id="1148" />
    <path d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z" fill="#464655" p-id="1149" />
    <path d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z" fill="#464655" p-id="1150" />
  </svg>
);

const PandaIcon = props => (
  <Icon component={PandaSvg} {...props} />
);

class AdminMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.screenHeight = 0;
  }

  componentDidMount() {
    this.screenHeight = window.innerHeight / 2;
  }

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  }

  render() {
    const { routes } = this.props;
    return (

      <Layout style={{ height: "100vh" }}>
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
            <Menu.Item key="1">
              <Icon type="dashboard" theme="twoTone" />
              <span className="nav-text">
                <Link to="/dashboard"> Dashboard </Link>
              </span>
            </Menu.Item>
            <Menu.Item key="6">
                <Icon type="dashboard" theme="twoTone" />
                <span className="nav-text">
                  <Link to="/bookings"> Bookings </Link>
                </span>
            </Menu.Item>
            <Menu.Item key="7">
                <Icon type="user" />
                <span className="nav-text">
                  <Link to="/staff">Staff</Link>
                </span>
            </Menu.Item>
           
            <Menu.Item key="9">
              <Link to="/bookings">
                {/* <Icon type="user" /> */}
                <Icon type="smile" theme="twoTone" />
                <span className="nav-text">
                  Reports
              </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="11">
              <Link to="/bookings">
                <Icon type="user" />
                <span className="nav-text">
                  Settings
              </span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={(
                <div>
                  <Icon type="team" />
                  <span>
                    Hotel Management
                  </span>
                </div>
              )}
            >
              <Menu.Item key="2">
                List
              </Menu.Item>
              <Menu.Item key="3">
                Hotel staff
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={(
                <div>
                  <Icon type="team" />
                  <span>
                    Staff  Management
                  </span>
                </div>
              )}
            >
              <Menu.Item key="4">
                <Icon type="user" />
                OPS porter
              </Menu.Item>
              <Menu.Item key="5">
                Driporter
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200, height: '100vh' }}>

          <Content style={{ margin: '84px 16px 0', overflow: 'initial' }}>
            <div style={{
              padding: 0, background: '#fff', textAlign: 'center',
            }}
            >
              {routes.map(prop => <Route path={prop.path} component={prop.component} />)}
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

export default AdminMain;
