import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import { Layout, Menu, Icon, Carousel } from 'antd';
import CorpReg from './CorpReg';
import StudentReg from './StudentReg';
import LogIn from './LogIn';

const { Header, Content, Footer, Sider } = Layout;

class Home extends Component {
  render() {
    return (
      <Router>
      	<div>
	  	<Layout className="layout">
		    <Header>
		      <Menu
		        theme="dark"
		        mode="horizontal"
		        style={{ lineHeight: '64px' }}
		      >
		      	<Menu.Item key = "0"><img style = {{height: '8vh'}} src = "http://www.youth4jobs.org/images/youth4jobs-logo.png"/></Menu.Item>
		        <Menu.Item key="1"><Link to = "/corpreg">Corporate Registration</Link></Menu.Item>
		        <Menu.Item key="2"><Link to = "/studentreg">Student Registration</Link></Menu.Item>
		        <Menu.Item key="3"><Link to = "/login">Log In</Link></Menu.Item>
		        {/*<Menu.Item key="4"><input onclick={responsiveVoice.speak("Welcome to Youth For Jobs.")} type='button' value=' Play' /></Menu.Item>*/}

		      </Menu>
		    </Header>
		    <Content style={{ padding: '0', height: '100vh'}}>
		    	<Carousel autoplay>
				    <div><img style = {{height: '90vh', width: '100vw'}} src = "https://www.dasra.org/sites/default/files/styles/program_slider/public/Youth4jobs_V%203_Slider.jpg?itok=vAOmBT-Z"/></div>
				    <div><img style = {{height: '90vh', width: '100vw'}} src = "https://images.yourstory.com/2017/07/yourstory-youth4-jobs.jpg?auto=compress"/></div>
				    <div><img style = {{height: '90vh', width: '100vw'}} src = "https://images.yourstory.com/2017/12/Untitled-design-11-1.png?auto=compress"/></div>
				    <div><img style = {{height: '90vh', width: '100vw'}} src = "http://www.dailyexcelsior.com/wp-content/uploads/2017/12/Jammu-and-Kashmir-Handicapped-Association-jk-handicapped-welfare-Association-jammu-Protest-copy.jpg"/></div>
				 </Carousel>
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
