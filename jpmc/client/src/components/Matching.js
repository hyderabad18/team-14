import React, { Component } from 'react';
import { Button, Table, Row, Col, Input, Select, Icon, InputNumber, Popconfirm, Form } from 'antd';
import axios from 'axios';

const Option = Select.Option;
var studentOptions;

export default class Matching extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	componentDidMount() {
		var studentList;
		axios.get('http://localhost:4000/api/jpmc/getstudents')
		.then(res => studentList = res.data)
    	.then(studentList => studentOptions = studentList.map(student => <Option value = {student.email_id}>{student.name}</Option>))
    	.then(studentList => this.setState({studentList: studentList}))
	}

	changeStudent = (value) => {
		this.setState({email_id: value}, this.getMatches());
	}

	getMatches = () => {
		axios.post('http://localhost:4000/api/jpmc/getmatches', this.state)
		.then(res => {this.setState({matches: res.data, gotMatches: true})});
	}

	render() {
		const corpsColumns  = [
		{
		title: 'Name',
		dataIndex: 'name',
		width: '50%',
		},
		{
		title: 'City',
		dataIndex: 'city',
		width: '50%',
		}]
		return(
			<div>
				<Select onChange = {this.changeStudent} showSearch optionFilterProp="children" filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} defaultValue="Student" style={{ width: 120 }}>
					{studentOptions}
				</Select>
				{this.state.gotMatches && <Table dataSource = {this.state.matches} columns = {corpsColumns}/>}
			</div>
		)
	}
}