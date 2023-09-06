import React from 'react';
import './HN.css';
import {  Table, Button, Input } from 'antd';
import { useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons'

const { Column, ColumnGroup } = Table;


function HN() {
  const [dataSource, setDatasource] = useState([
    {
      name: 'นางสาวกชพรรณ นันทภักดิ์',
      hncode: '000742978',
      birth_date: '05/05/2513',
      pid: '5263020099080',
    },
    {
      name: 'นายกิตติ อุดมเดชรักษา',
      hncode: '000167093',
      birth_date: '04/04/2525',
      pid: '9899862521950',
    },
    {
      name: 'นายภาสกร ธนเจริญกิจ',
      hncode: '000167093',
      birth_date: '05/02/2529',
      pid: '8138228366102',
    },
    {
      name: 'นางสาวนาถินี อุดมเสก',
      hncode: '000501506',
      birth_date: '24/02/2536',
      pid: '0303845708082',
    },
    {
      name: 'นายพัฒนพล ทรัพย์มา',
      hncode: '000306239',
      birth_date: '04/09/2543',
      pid: '3489025132953',
    },
    {
      name: 'นางสาวกชพรรณ นันทภักดิ์',
      hncode: '000742978',
      birth_date: '05/05/2513',
      pid: '5263020099080',
    },
    {
      name: 'นายกิตติ อุดมเดชรักษา',
      hncode: '000167093',
      birth_date: '04/04/2525',
      pid: '9899862521950',
    },
    {
      name: 'นายภาสกร ธนเจริญกิจ',
      hncode: '000167093',
      birth_date: '05/02/2529',
      pid: '8138228366102',
    },
    {
      name: 'นางสาวนาถินี อุดมเสก',
      hncode: '000501506',
      birth_date: '24/02/2536',
      pid: '0303845708082',
    },
    {
      name: 'นายพัฒนพล ทรัพย์มา',
      hncode: '000306239',
      birth_date: '04/09/2543',
      pid: '3489025132953',
    },
    {
      name: 'นางสาวกชพรรณ นันทภักดิ์',
      hncode: '000742978',
      birth_date: '05/05/2513',
      pid: '5263020099080',
    },
    {
      name: 'นายกิตติ อุดมเดชรักษา',
      hncode: '000167093',
      birth_date: '04/04/2525',
      pid: '9899862521950',
    },
    {
      name: 'นายภาสกร ธนเจริญกิจ',
      hncode: '000167093',
      birth_date: '05/02/2529',
      pid: '8138228366102',
    },
    {
      name: 'นางสาวนาถินี อุดมเสก',
      hncode: '000501506',
      birth_date: '24/02/2536',
      pid: '0303845708082',
    },
    {
      name: 'นายพัฒนพล ทรัพย์มา',
      hncode: '000306239',
      birth_date: '04/09/2543',
      pid: '3489025132953',
    },
    {
      name: 'นายกิตติ อุดมเดชรักษา',
      hncode: '000167093',
      birth_date: '04/04/2525',
      pid: '9899862521950',
    },
    {
      name: 'นายภาสกร ธนเจริญกิจ',
      hncode: '000167093',
      birth_date: '05/02/2529',
      pid: '8138228366102',
    },
    {
      name: 'นางสาวนาถินี อุดมเสก',
      hncode: '000501506',
      birth_date: '24/02/2536',
      pid: '0303845708082',
    },
  ])

  const columns = [
    {
      key: '1',
      title: <div className='name'>ชื่อ - สกุล</div>,
      dataIndex: 'name',
      filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
        return (
          <>
          <Input 
            autoFocus 
            placeholder='Search name here' 
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value?[e.target.value]:[])
              confirm({ closeDropdown: false })
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
            style={{ width: 188, marginBottom: 20, margin: 5, display: 'block' }}
          />
          <div className='btn-search'>
          <Button className='btn-reset'
                  onClick={() => {
                    clearFilters(); 
                    confirm({ closeDropdown: true });
                  }}>Reset</Button>
          <Button type="primary"
                  onClick={()=> {confirm();
                  }}>OK</Button>
          </div>
          </>
        );
      },
      onFilter:(value,record) => {
        return record.name.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      key: '2',
      title: <div className='hncode'>HN Code</div>,
      dataIndex: 'hncode',
      filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
        return (
          <>
          <Input 
            autoFocus 
            placeholder='Search HN here' 
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value?[e.target.value]:[])
              confirm({ closeDropdown: false })
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
            style={{ width: 188, marginBottom: 20, margin: 5, display: 'block' }}
          />
          <div className='btn-search'>
          <Button className='btn-reset'
                  onClick={() => {
                    clearFilters(); 
                    confirm({ closeDropdown: true });
                  }}>Reset</Button>
          <Button type="primary"
                  onClick={()=> {confirm();
                  }}>OK</Button>
          </div>
          </>
        );
      },
      onFilter:(value,record) => {
        return record.hncode.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      key: '3',
      title: <div className='birth_date'>วัน/เดือน/ปี เกิด</div>,
      dataIndex: 'birth_date'
    },
    {
      key: '4',
      title: <div className='pid'>เลขบัตรประชาชน</div>,
      dataIndex: 'pid',
      filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => {
        return (
          <>
          <Input 
            autoFocus 
            placeholder='Search pid here' 
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value?[e.target.value]:[])
              confirm({ closeDropdown: false })
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
            style={{ width: 188, marginBottom: 20, margin: 5, display: 'block' }}
          />
          <div className='btn-search'>
          <Button className='btn-reset'
                  onClick={() => {
                    clearFilters(); 
                    confirm({ closeDropdown: true });
                  }}>Reset</Button>
          <Button type="primary"
                  onClick={()=> {confirm();
                  }}>OK</Button>
          </div>
          </>
        );
      },
      onFilter:(value,record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      key: '5',
      title: <div className='status'>สถานะ</div>,
      render: (record) => {
        return (
          <div className='button-container'>
          <Button style={{ backgroundColor: '#389e0d', borderBlockColor: '#389e0d', color: 'white' }}>สร้าง HN</Button>
          </div>
        )
      },
      filters: [
        { text: 'สร้าง HN แล้ว', value: true},
        { text: 'ยังไม่สร้าง HN', value: false}
      ],
      onFilter:(value,record) => {
        return record.status === value
      }
    },
    {
      key: '6',
      title: <div className='verify'>ตรวจสอบ</div>,
      render: (record) => {
        return (
          <div className='button-container'>
          <Button style={{ backgroundColor: '#1677ff', borderBlockColor: '#1677ff', color: 'white' }}>Verify</Button>
          </div>
        )
      },
      filters: [
        { text: 'ตรวจสอบแล้ว', value: true},
        { text: 'ยังไม่ตรวจสอบ', value: false}
      ],
      onFilter:(value,record) => {
        return record.status === value
      }
    },
    {
      key: '7',
      title: <div className='detail'>รายละเอียด</div>,
      render: (record) => {
        return (
          <>
            <InfoCircleOutlined className='icon' style={{color: '#1e376d', fontSize: '25px'}}/>
          </>
        )
      }
    },
    
  ];
  return (
    <div>
      <Table
        display='flex'
        className='table'
        columns={columns}
        dataSource={dataSource}
        style={{ margin: '40px'}}
        pagination={false}
        scroll={{
          y: 400,
        }}
      />

      
    </div>
  )
}

export default HN