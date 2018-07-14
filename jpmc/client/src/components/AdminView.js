import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import axios from 'axios';
import MockTest from './MockTest';
import Messaging from './Messaging';
import AddGrades from './AddGrades';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class AdminView extends Component {

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
            <SubMenu key="sub1" title={<span><span>Outreach</span></span>}>
             <Menu.Item key="1"> <Link to = "/admin/sendmsg">Messaging</Link></Menu.Item>
              <Menu.Item key="2"><Link to = "">Sub Menu 1</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><span>Grades</span></span>}>
              <Menu.Item key="5"><Link to = "/admin/addgrades">Add Grades</Link></Menu.Item>
              <Menu.Item key="6"><Link to = "">Sub Menu 2</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><span>Menu 3</span></span>}>
              <Menu.Item key="5"><Link to = "">Sub Menu 3</Link></Menu.Item>
              <Menu.Item key="6"><Link to = "">Sub Menu 3</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span><span>Menu 4</span></span>}>
              <Menu.Item key="9"><Link to = "">Sub Menu 4</Link></Menu.Item>
              <Menu.Item key="10"><Link to = "">Sub Menu 4</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}><h1>Youth4Jobs</h1></Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Switch>
                <Route path="/admin/sendmsg" render = {() => <Messaging/>}/>
                <Route path="/admin/addgrades" render = {() => <AddGrades/>}/>
                <Route path="" />
                <Route path="" />
                <Route path="" />
                <Route path="" />
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

export default AdminView;
