import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Table, Divider, Tag } from 'antd';

const columns = [{
  title: 'Customer Name',
  dataIndex: 'cust-name',
  key: 'cust-name',
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
];

const data = [{

  'cust-name': 'John Brown',
  key: '1',
  age: 32,
  address: 'New York No. 1 Lake Park',
  bookingRef: 'DXB000000010',
  batchId: '285',
  flightNo: 'EA 123',
  customer: 'TAHIR KHAN',
}, {
  key: '2',
  'cust-name': 'Jim Green',
  age: 42,
  address: 'New York No. 1 Lake Park',
  bookingRef: 'DXB000000010',
  batchId: '285',
  flightNo: 'EA 123',
  customer: 'TAHIR KHAN',
}, {
  key: '3',
  'cust-name': 'Joe Black',
  age: 32,
  address: 'New York No. 1 Lake Park',
  bookingRef: 'DXB000000010',
  batchId: '285',
  flightNo: 'EA 123',
  customer: 'TAHIR KHAN',
}];

class BookingContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('this.props booking container', this.props);
    return (
      <Table columns={columns} dataSource={data} />
    );
  }
}

export default withRouter(BookingContainer);
