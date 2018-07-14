import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import CorpReg from './CorpReg';
import StudentReg from './StudentReg';
import LogIn from './LogIn';

const { Header, Content, Footer, Sider } = Layout;

class Home extends Component {
  render() {
    return (
      <Router>
      	<div>
      	<Route path = "/corpreg" component = {<CorpReg/>}/>
      	<Route path = "/StudentReg" component = {<StudentReg/>}/>
      	<Route path = "/login" component = {<LogIn/>}/>
	  	<Layout className="layout">
		    <Header>
		      <div className="logo" />
		      <Menu
		        theme="dark"
		        mode="horizontal"
		        style={{ lineHeight: '64px' }}
		      >
		        <Menu.Item key="1"><Link to = "/corpreg">Corporate Registration</Link></Menu.Item>
		        <Menu.Item key="2"><Link to = "/studentreg">Student Registration</Link></Menu.Item>
		        <Menu.Item key="3"><Link to = "/login">Log In</Link></Menu.Item>
		      </Menu>
		    </Header>
		    <Content style={{ padding: '0', height: '100vh'}}>
		    	<h1>Home page content</h1>
		    </Content>
		    <Footer style={{ textAlign: 'center' }}>
		      Youth4Jobs
		    </Footer>
	  	</Layout>
	  	</div>
      </Router>
    );
  }
}

export default Home;
