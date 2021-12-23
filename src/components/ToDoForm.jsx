import React from 'react';
import { Form, Input, Button } from 'antd';

export const ToDoForm = (props) => {
  const { onSubmit } = props;

  const [form] = Form.useForm();
  function validate(toDo) {
    return toDo
      && toDo.title
      && toDo.description
      && toDo.description.length >= 3
      && toDo.title.length >= 3
      && toDo.title.substr(0, 1) === toDo.title.substr(0, 1).toUpperCase();
  }
  const onFinish = (values) => {
    if (onSubmit) {
      if (validate(values)) {
        onSubmit(values.title, values.description + "     " + GetCurrentTime());
      }
      else{
        alert("Validation falied")
      }
    }
    form.resetFields();
  }

  return (
    <Form className="todo-form" form={form} layout={'inline'} onFinish={onFinish}>
      <Form.Item name="title" className="todo-form-input">
        <Input placeholder={'New todo'} />
      </Form.Item>
      <Form.Item name="description" className="todo-form-input">
        <Input placeholder={'description'} />
      </Form.Item>
      <Form.Item className="todo-form-actions">
        <Button htmlType="submit" type="primary">Add</Button>
      </Form.Item>
    </Form>
  )
  function GetCurrentTime() {
    var current = new Date();
    var result = current.getDate() + '.' + (current.getMonth() + 1) + '.' + current.getFullYear() + " - " +
      current.getHours() + ':' + current.getMinutes();
    return result;
  }
}
