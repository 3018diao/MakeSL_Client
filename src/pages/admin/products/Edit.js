import React from 'react';
import { Button, Form, Card, Input } from 'antd';

function Edit() {
  return (
    <Card title='Food Edit'>
      <Form>
        <Form.Item>
          <Input placeholder="Please input food name"/>
        </Form.Item>
        <Form.Item>
          <Button type="primary">
            Save
          </Button>
        </Form.Item>
      </Form>

    </Card>
  )
}

export default Edit
