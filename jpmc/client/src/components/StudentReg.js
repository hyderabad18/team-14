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
import { Upload, Input, Radio, Checkbox, Button } from 'antd';
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

const { Header, Content, Footer, Sider } = Layout;

class StudentReg extends Component {

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

  handleUpload = (info) => {
    const formData = new FormData();
    formData.append("file", info.file);
    formData.append("upload_preset", "dnnhelm9");
    formData.append("api_key", "825526569227411");
    formData.append("timestamp", (Date.now() / 1000) | 0);

    axios.post("https://api.cloudinary.com/v1_1/codeinfuse/image/upload", formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    }).then(response => {
      const data = response.data;
      console.log(data);
      const fileURL = data.secure_url;
      this.setState({ resume_url: fileURL });
    })
  }

  submit = () => {
    axios.post('http://localhost:4000/api/jpmc/addstudent', this.state)
    .then(res => console.log(res))
    axios.post('http://localhost:4000/api/jpmc/adduser', {email_id: this.state.email, password: this.state.password, type: 'student'})
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

          <label for="number"><b>LinkedIn</b></label>
          <Input type="text" onChange = {(e) => this.change(e)} placeholder="Enter Pincode" name="linkedid" required/><br/>

          <label for="number"><b>Facebook ID</b></label>
          <Input type="text" onChange = {(e) => this.change(e)} placeholder="Enter Pincode" name="fbid" required/><br/>

          <label for="number"><b>WhatsApp Phone</b></label>
          <Input type="text" onChange = {(e) => this.change(e)} placeholder="Enter Pincode" name="wphoneno" required/><br/>

          <label for="number"><b>Calling Phone</b></label>
          <Input type="text" onChange = {(e) => this.change(e)} placeholder="Enter Pincode" name="cphoneno" required/><br/>
          
          {/*<Upload name = "file" customRequest = {this.handleUpload}>
            <Button>
              <Icon type="upload" /> Click to Upload
            </Button>
          </Upload>*/}
          
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
          <br/>
          <label for="text"><b>Skills</b></label><br/>
          {this.state.sectorSkills && <CheckboxGroup options={skillOptions} onChange={(e) => this.changeSCheckbox(e)} />}
          <br/>
          <Button type = "primary" disabled = "true">Upload</Button>
          <br/>
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

export default StudentReg;
