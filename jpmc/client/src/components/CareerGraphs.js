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

export default class CareerGraphs extends Component {

  render() {
    return (
      <div>
        <img src = "https://res.cloudinary.com/vellichor/image/upload/v1531619141/image1.png"/>
      </div>
    )
  }
  
}

