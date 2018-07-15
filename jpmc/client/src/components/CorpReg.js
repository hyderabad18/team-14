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

class CorpReg extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
    var skillsList;
    axios.get('http://localhost:4000/api/jpmc/getskills')
    .then(res => skillsList = res.data)
    .then(skillsList => this.setState({skillsList}))
  }

  change = (e) => {
    this.setState({[e.target.name]: e.target.value}, this.getSectorSkills());
  }

  componentDidMount() {
    var skillsList;
    axios.get('http://localhost:4000/api/jpmc/getskills')
    .then(res => skillsList = res.data)
    .then(skillsList => this.setState({skillsList}))
  }

  getSectorSkills() {
    if(this.state.sector)
      for(var i = 0; i < this.state.skillsList.length; i++) {
        if(this.state.sector === this.state.skillsList[i].sector) {
          this.setState({sectorSkills: this.state.skillsList[i].skills});
          break;
        }
      }
  }

  changeDCheckbox = (values) => {
    this.setState({'disabilities': values});
  }

  changeSCheckbox = (values) => {
    this.setState({'skillset': values});
  }

  submit = () => {
    axios.post('http://localhost:4000/api/jpmc/addcorp', this.state)
    .then(res => console.log(res))
    axios.post('http://localhost:4000/api/jpmc/adduser', {email_id: this.state.email, password: this.state.password, type: 'corp'})
    .then(res => console.log(res))
  }

  render() {

    const disabilityOptions = ['Speech', 'Vision', 'Locomotor', 'Intellectual'];
    const skillOptions = this.state.sectorSkills;

    return (
      <Router>
      <div>
        <div style = {{textAlign: 'center', background: '#cca300'}}>
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
        </div>
        <div class="container" style = {{width: '40%', margin: '10px auto'}}>
          <hr/>

          <label for="text"><b>Name</b></label>
          <Input type="text" onChange = {(e) => this.change(e)} placeholder="Enter Name" name="name" required/><br/>
          
          <label for="text"><b>Email</b></label>
          <Input type="text" onChange = {(e) => this.change(e)} placeholder="Email" name="email" required/><br/>

          <label for="text"><b>Password</b></label>
          <Input type="password" onChange = {(e) => this.change(e)} placeholder="Password" name="password" required/><br/>

          <label for="text"><b>Address</b></label>
          <Input type="text" onChange = {(e) => this.change(e)} placeholder="Enter Address" name="address" required/><br/>
          
          <label for="text"><b>State</b></label>
          <Input type="text" onChange = {(e) => this.change(e)} placeholder="Enter State" name="state" required/><br/>
          
          <label for="text"><b>City</b></label>
          <Input type="text" onChange = {(e) => this.change(e)} placeholder="Enter City" name="city" required/><br/>
          
          <label for="number"><b>Pincode</b></label>
          <Input type="text" onChange = {(e) => this.change(e)} placeholder="Enter Pincode" name="pincode" required/><br/>
          
          <label for="text"><b>Number of vacancies</b></label>
          <Input type="text" onChange = {(e) => this.change(e)} placeholder="Enter Vacancies" name="vacancies" required/><br/>
          
          
          <label for="text"><b>Disabilities</b></label><br/>
          <CheckboxGroup options={disabilityOptions} onChange={(e) => this.changeDCheckbox(e)} />

          
          


          <div onChange={e => this.change(e)}>
          <label for="text"><b>Sector</b></label><br/>
          <RadioGroup name="sector">
            <Radio value="Retail">Retail</Radio>
            <Radio value="Manufacturing">Manufacturing</Radio>
            <Radio value="Hospitality">Hospitality</Radio>
            <Radio value="BPO">BPO</Radio>
            <Radio value="Banking">Banking</Radio>
          </RadioGroup>
          </div>

          <label for="text"><b>Skills</b></label><br/>
          {this.state.sectorSkills && <CheckboxGroup options={skillOptions} onChange={(e) => this.changeSCheckbox(e)} />}

          <div class="clearfix">
            <Button type = "primary" class="cancelbtn">Cancel</Button>&nbsp;&nbsp;
            <Button type = "primary" class="signupbtn" onClick = {this.submit}>Sign Up</Button>
          </div>
        </div>
        </div>
      </Router>
    );
  }
}

export default CorpReg;
