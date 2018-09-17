import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Divider, Tag } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
},
{
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
},  
{
  title: 'Booking Ref',
  dataIndex: 'bookingRef',
  key: 'bookingRef',
},
{
  title: 'Batch Id',
  dataIndex: 'batchId',
  key: 'batchId',
},
{
  title: 'Flight No',
  dataIndex: 'flightNo',
  key: 'flightNo',
},
{
  title: 'Customer',
  dataIndex: 'customer',
  key: 'customer',
},
  , {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  bookingRef: 'DXB000000010',
  batchId: '285',
  flightNo: 'EA 123',
  customer: 'TAHIR KHAN',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'New York No. 1 Lake Park',
  bookingRef: 'DXB000000010',
  batchId: '285',
  flightNo: 'EA 123',
  customer: 'TAHIR KHAN',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'New York No. 1 Lake Park',
  bookingRef: 'DXB000000010',
  batchId: '285',
  flightNo: 'EA 123',
  customer: 'TAHIR KHAN',
  tags: ['cool', 'teacher'],
}];

class BookingContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table columns={columns} dataSource={data} />
    );
  }
}

export default BookingContainer;
