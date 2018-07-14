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
      sector: 'Retail',
      level: 1,
      levelone: false,
      count_one: 0,
      corr_one: 0,
      count_two: 0,
      corr_two: 0,
      count_three: 0,
      corr_three: 0,
      done: [],
      curr_q: '',
    }
  }

  componentDidMount() {
    this.getQuestionsBySectorLevel();
  }

  change = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  getQuestionsBySectorLevel = () => {
    var question;
    axios.post('http://localhost:4000/api/jpmc/getQuestionsBySectorLevel', this.state)
    .then(res => question = res.data)
    .then(question => this.setState({curr_q: question, answer: '', done: this.state.done.concat(question.no)}))
  }

  /*save = () => {
    if()
  }*/

  /*getQuestionByLevel = () => {
    var curr_level = this.state.level;
    if(this.state.sectorQs)
    for(var i = 0 ; i < this.state.sectorQs.length; i++) {
      if(this.state.sectorQs[i].level === curr_level && this.state.done.indexOf(this.state.sectorQs[i].no) === -1)
      {
        this.setState({curr_q: this.state.sectorQs[i]});
        break;
      }
    }
  }*/

  checkQuestion = () => {
    if(this.state.curr_q.correct === parseInt(this.state.answer))
    {
      if(this.state.level === 1) this.setState({corr_one: this.state.corr_one+1});
    }
    this.next();
  }

  next = () => {
    if(this.state.level === 1) this.setState({count_one: this.state.count_one+1});
    if(this.state.corr_one < 4) this.getQuestionsBySectorLevel();
    else{
      var grade;
      if(this.state.count_one < 15) grade = "A";
      else if(this.state.count_one < 20) grade = "B";
      else grade = "C";
      this.setState({levelone: true, grade: grade}); 
    }
  }

  render() {
    
    if(this.state.levelone) 
      return (
        <div>
          <h1>Level 1 done</h1>
          <h2>Grade{this.state.grade}</h2>
        </div>
      );
    else return (
    <div>
              <h1>Level {this.state.level}</h1>
             {this.state.curr_q && <div>
              <div class="tabt">
              <p>{this.state.curr_q.text}</p>
              </div>
              <div class="tabcontents">
              <br/>
              <br/>
              <div onChange = {(e) => this.change(e)}>
                <RadioGroup name="answer">
                  <p>{this.state.curr_q.correct}</p>
                  <Radio value="1">{this.state.curr_q.options[0]}</Radio><br/>
                  <Radio value="2">{this.state.curr_q.options[0]}</Radio><br/>
                  <Radio value="3">{this.state.curr_q.options[0]}</Radio><br/>
                  <Radio value="4">{this.state.curr_q.options[0]}</Radio><br/>
                </RadioGroup>
              </div>
              <br/>
              <br/>
              </div>
              <button type="submit" onClick = {this.checkQuestion}>Save</button>
              </div>}
    </div>
        
    )
  
}

}