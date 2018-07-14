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
import { Input, Radio, Checkbox, Button } from 'antd';
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

const { Header, Content, Footer, Sider } = Layout;

export default class MockTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sector: this.props.userinfo.sector,
    }
  }

    render() {
      return (
        <h1>HI from mock test</h1>
      )
    }
  
}

