import React, { Component } from 'react';
import { Layout, Menu, Icon, Button, Table } from 'antd';
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
    const data = [
  {
    "name": "Kshaunish Kumar",
    "credits": 8
  },
  {
    "name": "Subodh Singh",
    "credits": 10
  },
  {
    "name": "Pushpa Raj",
    "credits": 2
  },
  {
    "name": "Waheeda Jain",
    "credits": 5
  },
  {
    "name": "Dhanashri Singh",
    "credits": 9
  },
  {
    "name": "Smritiman Khan",
    "credits": 5
  },
  {
    "name": "Pallavini Ismail",
    "credits": 9
  },
  {
    "name": "Javed Jain",
    "credits": 10
  },
  {
    "name": "Sarvadaman Kumar",
    "credits": 1
  }]

  const columns = [{
    title: 'Name',
    dataIndex: 'name'
  }, 
  {
    title: 'Credits',
    dataIndex: 'credits'
  }]
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
                <Route exact path = "/student" render = {() => <div><h1 style = {{textAlign: 'center'}}>Leader Board </h1><br/><Table dataSource = {data} columns = {columns}/></div>}/>
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
