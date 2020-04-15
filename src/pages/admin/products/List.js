import React from 'react';
import { Button, Card, Table, Popconfirm } from 'antd';

const breakfast = [{
  id: 1,
  name: 'Egg',
  price: 1.2,
  protein: 13.0,
  fat: 10.7,
  carbohydrate: 0.0
}, {
  id: 2,
  name: 'Milk',
  price: 1.0,
  protein: 6.0,
  fat: 4.5,
  carbohydrate: 0.0
}, {
  id: 3,
  name: 'Bread',
  price: 0.6,
  protein: 5.0,
  fat: 0.1,
  carbohydrate: 7.2
}];

const lunch = [{
  id: 1,
  name: 'Steak',
  price: 4.7,
  protein: 15.1,
  fat: 6.7,
  carbohydrate: 0.0
}, {
  id: 2,
  name: 'Potatos',
  price: 0.9,
  protein: 7.6,
  fat: 5.1,
  carbohydrate: 5.0
}]

const dinner = [{
  id: 1,
  name: 'Salat',
  price: 1.2,
  protein: 0,
  fat: 0.0,
  carbohydrate: 0.0
}, {
  id: 2,
  name: 'Pork',
  price: 2.5,
  protein: 9.1,
  fat: 6.2,
  carbohydrate: 0.0
}, {
  id: 3,
  name: 'banana',
  price: 1.1,
  protein: 3.8,
  fat: 0.3,
  carbohydrate: 0.0
}]

function List(props) {
  const columns = [{
    title: 'No',
    key: 'id',
    width: 80,
    align: 'center',
    render: (txt, record, index) => index + 1
  }, {
    title: 'Food',
    dataIndex: 'name'
  }, {
    title: 'Price (Euro)',
    dataIndex: 'price'
  },{
    title: 'Protein (g)',
    dataIndex: 'protein'
  },{
    title: 'Fat (g)',
    dataIndex: 'fat'
  },{
    title: 'Carbohydrate (g)',
    dataIndex: 'carbohydrate'
  },{
    title: 'Manipulate',
    render: (txt, record, index) => {
      return (<div>
        <Button type="primary" size="small">Modify</Button>
        <Popconfirm 
          title="confirm to delete?" 
          onCancel={() => console.log('Cancel deletion')} 
          onConfirm={() => {
            console.log('Confirm deletion');
            // api
          
          }
          }>
          <Button style={{ margin: "0 1rem"}} type="danger" size="small">Delete</Button>
        </Popconfirm>
        
      </div>)
    }
  }]
  return (
    <div>
      <Card title="Breakfast" extra={
        <Button type="primary" size="small" onClick={()=>props.history.push('/admin/products/edit')}>
          ADD
        </Button>
        }>
        <Table columns={columns} bordered dataSource={breakfast} pagination={ false }/>
      </Card>
      <Card title="Lunch" extra={
        <Button type="primary" size="small" onClick={()=>props.history.push('/admin/products/edit')}>
          ADD
        </Button>
        }>
        <Table columns={columns} bordered dataSource={lunch} pagination={ false }/>
      </Card>
      <Card title="Dinner" extra={
        <Button type="primary" size="small" onClick={()=>props.history.push('/admin/products/edit')}>
          ADD
        </Button>
        }>
        <Table columns={columns} bordered dataSource={dinner} pagination={ false }/>
      </Card>
    </div>
    
  )
}

export default List
