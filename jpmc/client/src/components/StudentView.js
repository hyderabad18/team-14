import React, { Component } from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import axios from 'axios';
import MockTest from './MockTest';
import CareerGraphs from './CareerGraphs';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class StudentView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openKeys: [],
    };
  }

  rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  

  render() {
    let that = this;
    /*if(!this.props.user)
      return <Redirect to = "/login"/>*/
    return (
      <Router>
        <Layout style = {{height: '100vh'}}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <div className="logo" />
          <Menu
            theme = "dark"
            mode="inline"
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
          >
            <SubMenu key="sub1" title={<span><span>Tests</span></span>}>
             <Menu.Item key="1"> <Link to = "/student/mocktest">Mock Test</Link></Menu.Item>
              <Menu.Item key="2">Practice Test</Menu.Item>
            </SubMenu>
            <Menu.Item key="sub2"> <Link to = "/student/careergraphs">Career Graphs</Link></Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>&nbsp;&nbsp;<Button type = "primary" disabled = "true">Edit profile</Button><img style = {{float: 'right', height: '8vh'}} src = "http://www.youth4jobs.org/images/youth4jobs-logo.png"/></Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Switch>
                <Route path="/student/mocktest" render = {() => <MockTest/>}/>
                <Route path="/student/careergraphs" component = {CareerGraphs}/>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
          </Footer>
        </Layout>
        </Layout>
      </Router>
    );
  }
}

export default StudentView;
