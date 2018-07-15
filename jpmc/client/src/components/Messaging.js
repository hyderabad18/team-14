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

export default class Messaging extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
    }
  }

  componentDidMount() {
    var numbers;
    axios.get('http://localhost:4000/api/jpmc/getnumbers')
    .then(res => numbers = res.data)
    .then(numbers => this.setState({numbers}))
  }

  change = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  send = () => {
    for(var i = 0; i < this.state.numbers.length; i++) {
      axios.post('http://localhost:4000/api/jpmc/sendmsg', {phone: this.state.numbers[i].phone, msg: this.state.msg})
      .then(console.log('sent to', this.state.numbers[i]));
    }
  }

  render() {
    return (
      <div style = {{textAlign: 'center'}}>
        <Input type = "text" name = "msg" placeholder = "Enter message" onChange = {(e) => {this.change(e)}}/><br/><br/>
        <Button type = "primary" onClick = {this.send}>Send</Button>
      </div>
    )
  }
  
}

