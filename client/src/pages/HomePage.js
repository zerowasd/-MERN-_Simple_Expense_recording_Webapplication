import React,{useState, useEffect} from 'react'
import {Modal,Form,Input,Select,message,Table} from 'antd'
import Layout from '../components/Layout/Layout'
import axios from 'axios';
import Spinner from './../components/Spinner'

/* eslint-disable react/no-array-index-key */

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading,setLoading] = useState(false);
  const [allTransaction, setAllTransaction] = useState([])

  //table data
  
  const columns = [
    {
      title:'Date',
      dataIndex:'date'
    },
    {
      title:'Amount',
      dataIndex:'amount'
    },
    {
      title:'Type',
      dataIndex:'type'
    },
    {
      title:'Category',
      dataIndex:'category'
    },
    {
      title:'Reference',
      dataIndex:'reference'
    },
    {
      title:'Actions',

    } 
  ]
  //get all transactions
  const getAllTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      setLoading(true);
      const res = await axios.post("/transactions/get-transaction", {
        userid: user._id,
      });
      setLoading(false);
      setAllTransaction(res.data);
      console.log(res.data);  
    } catch (error) {
      console.log(error);
      message.error("fetch issue with transaction");
    }
  }
  //use effect hook
  useEffect(() => {
    getAllTransactions();
  },[])
  //form handling
  const handleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      setLoading(true)
      await axios.post('/transactions/add-transaction', {...values, userid:user._id})
      setLoading(false)
      message.success('Transaction Added')
      setShowModal(false)
    } catch (error) {
      setLoading(false)
      message.error('failed to add transaction')
    }
  }
  return (
    <Layout>
      {
        loading && <Spinner />
      }
      <h1>Management-CRUD-div</h1>
      <div className="filter">
        <div>range filters</div>
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add New</button>
      </div>
      <div className="content">
      <Table columns={columns} dataSource={allTransaction}/>
      </div>
      <Modal title = "Add Transaction" 
      open={showModal}
      onCancel={() => setShowModal(false)}
      footer={false} 
      >
      <Form layout = "vertical" onFinish={handleSubmit}>
        <Form.Item label="Amount" name="amount">
            <Input type="text" />
        </Form.Item>
        <Form.Item label="type" name="type">
          <Select>
            <Select.Option value="income">Income</Select.Option>
            <Select.Option value="expense">Expense</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Category" name="category">
          <Select>
            <Select.Option value="salary">Salary</Select.Option>
            <Select.Option value="tip">Tip</Select.Option>
            <Select.Option value="Side Project">Side Project</Select.Option>
            <Select.Option value="food">Food</Select.Option>
            <Select.Option value="movie">Movie</Select.Option>
            <Select.Option value="medical">Medical</Select.Option>
            <Select.Option value="fees">Fees</Select.Option>
            <Select.Option value="tax">Tax</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Date" name="date">
          <Input type="date" />
        </Form.Item>
        <Form.Item label="Refrence" name="reference">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input type="text" />
        </Form.Item>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </Form>
      </Modal>
    </Layout>
  )
}

export default HomePage
