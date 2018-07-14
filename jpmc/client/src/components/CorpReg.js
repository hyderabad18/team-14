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
import { Radio, Checkbox } from 'antd';
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
  }

  render() {

    const disabilityOptions = ['Speech', 'Vision', 'Locomotor', 'Intellectual'];
    const skillOptions = this.state.sectorSkills;
    /*const options = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange' },
    ];
    const optionsWithDisabled = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange', disabled: false },
    ];*/

    return (
      <Router>
        <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr/>

          <label for="text"><b>Name</b></label>
          <input type="text" onChange = {(e) => this.change(e)} placeholder="Enter Name" name="name" required/>
          
          <label for="text"><b>Email</b></label>
          <input type="text" onChange = {(e) => this.change(e)} placeholder="Email" name="email" required/>

          <label for="text"><b>Address</b></label>
          <input type="text" onChange = {(e) => this.change(e)} placeholder="Enter Address" name="address" required/>
          
          <label for="text"><b>State</b></label>
          <input type="text" onChange = {(e) => this.change(e)} placeholder="Enter State" name="state" required/>
          
          <label for="text"><b>City</b></label>
          <input type="text" onChange = {(e) => this.change(e)} placeholder="Enter City" name="city" required/>
          
          <label for="number"><b>Pincode</b></label>
          <input type="text" onChange = {(e) => this.change(e)} placeholder="Enter Pincode" name="pincode" required/>
          
          <label for="text"><b>Number of vacancies</b></label>
          <input type="text" onChange = {(e) => this.change(e)} placeholder="Enter Vacancies" name="vacancies" required/>
          
          
          <label for="text"><b>Disabilities</b></label><br/>
          <CheckboxGroup options={disabilityOptions} onChange={(e) => this.changeDCheckbox(e)} />

          
          <label for="text"><b>Skills</b></label><br/>
          {this.state.sectorSkills && <CheckboxGroup options={skillOptions} onChange={(e) => this.changeSCheckbox(e)} />}


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

          <div class="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button type="submit" class="signupbtn" onClick = {this.submit}>Sign Up</button>
          </div>
        </div>
      </Router>
    );
  }
}

export default CorpReg;
