import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import '../../App.css';
import {
  BrowserRouter as Router, Route, Link, Switch
} from 'react-router-dom';
import DashboardContainer from './DashboardContainer';
import BookingContainer from './BookingContainer';
const {
  Header, Content, Footer, Sider,
} = Layout;
const { SubMenu } = Menu;

class HotelMain extends Component {
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
    const { routes, match, location } = this.props;
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
            <Menu.Item key="1" onClick={() => { this.props.history.push('/dashboard') }}>
              <Icon type="user" />
              <span className="nav-text">
                {/* <Link to="/dashboard"> Hotel Dashboard </Link> */}
                Hotel Dashboard
              </span>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={(
                <span>
                  <Icon type="team" />
                  <span>
                    Hotel Users
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
            <Menu.Item key="2">
              <Icon type="user" />
              <span className="nav-text">
                <Link to="/about"> About </Link>
              </span>
            </Menu.Item>

            <Menu.Item key="3">
              <Link to="/bookings">
                <Icon type="user" />
                <span className="nav-text">
                  Hotel Booking
              </span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200, height: '100vh' }}>

          <Content style={{ margin: '84px 16px 0', overflow: 'initial' }}>
            <div style={{
              padding: 24, background: '#fff', textAlign: 'center', minHeight: 360,
            }}
            >  VD VD
              {console.log(routes)}
              <Switch >
                {/* <Route
                exact
                path={location.pathname}
                component={DashboardContainer}
              />
              <Route                
                path='/bookings'
                component={BookingContainer}
              /> */}
                {/* <Route
                path={`${match.path}faqs`}
                component={Faq}
              /> */}
                {routes.map(prop => {
                  return <Route path={prop.path} exact={prop.exact} component={prop.component} />
                })}
              </Switch>
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

export default HotelMain;
