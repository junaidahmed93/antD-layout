import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
    title: 'Service Area',
    dataIndex: 'service-area',
    key: 'service-area',
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
// {
//     title: 'Customer',
//     dataIndex: 'customer',
//     key: 'customer',
// },
{
    title: 'Profile',
    key: 'profile',
    render: (text, record) => (
        <span>
            <a href="javascript:;">Profile</a>
        </span>
    ),
}];

const data = [{

    name: 'John Brown',
    key: '1',
    age: 32,
    address: 'New York No. 1 Lake Park',
    'service-area': 'Bahrain',
    batchId: '11',
    flightNo: 'EA 123',
    // customer: 'TAHIR KHAN',
    tags: ['nice', 'developer'],
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'New York No. 1 Lake Park',
    'service-area': 'Dubai',
    batchId: '41',
    flightNo: 'EA 123',
    // customer: 'TAHIR KHAN',
    tags: ['loser'],
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'New York No. 1 Lake Park',
    'service-area': 'Karachi',
    batchId: '51',
    flightNo: 'EA 123',
    // customer: 'TAHIR KHAN',
    tags: ['cool', 'teacher'],
}];

class StaffContainer extends React.Component {
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

export default withRouter(StaffContainer);
