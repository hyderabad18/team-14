import React, { Component } from 'react';
import { Button, Table, Row, Col, Input, Select, Icon, InputNumber, Radio, Popconfirm, Form } from 'antd';
import axios from 'axios';
const RadioGroup = Radio.Group;

const Option = Select.Option;

export default class AddGrades extends Component {

	state = ({
		corpList: [],
	})

  componentDidMount() {
    this.getCorporates();
  }

	getCorporates() {
    var corpList;
		axios.get('http://localhost:4000/api/jpmc/getcorps')
    .then(res => corpList = res.data)
    .then(corpList => this.setState({corpList}))
	}

	render() {
		return (
        <EditableTable info = {this.state}/>
			)
	}
}

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  getInput = () => {
    return (
      <InputNumber min = {1} max = {3}/>
    );
  };

  render() {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      ...restProps
    } = this.props;
    return (
      <EditableContext.Consumer>
        {(form) => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [{
                      required: true,
                      message: `Please Input ${title}!`,
                    }],
                    initialValue: record[dataIndex],
                  })(this.getInput())}
                </FormItem>
              ) : restProps.children}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    const data = [];
  	for (let i = this.props.info.start_rn; i <= this.props.info.end_rn; i++) {
  	  data.push({
  	    key: i.toString(),
  	    student_id: i,
  	    
  	  });
  }
    this.state = { data, editingKey: '' };
    this.columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        width: '20%',
        editable: false,
      },
      {
        title: 'Grade',
        dataIndex: 'grade',
        width: '20%',
        editable: true,
      },      
      {
        title: 'Add',
        dataIndex: 'operation',
        render: (text, record) => {
          const editable = this.isEditing(record);
          return (
            <div>
              {editable ? (
                <span>
                  <EditableContext.Consumer>
                    {form => (
                      <a
                        href="javascript:;"
                        onClick={() => this.save(form, record.key)}
                        style={{ marginRight: 8 }}
                      >
                        Save
                      </a>
                    )}
                  </EditableContext.Consumer>
                	<a onClick={() => this.cancel(record.key)}>Cancel</a>
                </span>
              ) : (
                <a onClick={() => this.edit(record.key)}>Edit</a>
              )}
            </div>
          );
        },
      },
    ];
  }

  isEditing = (record) => {
    return record.key === this.state.editingKey;
  };

  edit(key) {
    this.setState({ editingKey: key });
  }

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ data: newData, editingKey: '' });
      } /*else {
        newData.push(data);
        this.setState({ data: newData, editingKey: '' });
      }*/
    });
  }

  cancel = () => {
    this.setState({ editingKey: '' });
  };

  saveMarks = () => {
  	this.state.data.map(corp => {
  		var mymarks = corp;
  		mymarks.class_id = this.props.info.selected_class;
  		mymarks.subject_id = this.props.info.selected_subject;
  		mymarks.faculty_id = this.props.info.faculty;
  		axios.post('http://localhost:4000/api/results/addmarks', mymarks)
  		.then(console.log("saved "+mymarks.student_id));
  	})
  }

  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };

    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: 'number',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });

    return (
    	<div>
    		<Button type = "primary" onClick = {this.saveMarks}>Save Marks</Button>
	      	<Table
	        components={components}
	        bordered
	        dataSource={this.props.info.corpList}
	        columns={columns}
	        rowClassName="editable-row"
	      />
	     </div>
    );
  }
}