import React from 'react';
import { Form, Input, Button } from 'antd';

export const ToDoForm = (props) => {
  const { onSubmit } = props;
  const [form] = Form.useForm();
  const onFinish = (values) => {
    if (onSubmit) {
      onSubmit(values.name);
    }
    form.resetFields();
  }

  return (
    <Form className="d-flex justify-content-evenly col-12"  form={form} onFinish={onFinish}>
      <Form.Item name="name" className="todo-form-input col-9">
        <Input placeholder={'New todo'} />
      </Form.Item>
      <Form.Item className="todo-form-actions">
        <Button htmlType="submit" className="btn-success">Add</Button>
      </Form.Item>
    </Form>
  )
}
