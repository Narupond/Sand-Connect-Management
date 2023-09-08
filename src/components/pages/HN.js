import React from 'react';
import './HN.css';
import { Row, Col } from 'antd';
import { Table, Button, Input, Modal } from 'antd';
import { InfoCircleOutlined, CheckCircleOutlined, CheckOutlined } from '@ant-design/icons';
import { useState } from 'react';
import FormItem from 'antd/es/form/FormItem';
const { Column, ColumnGroup } = Table;



function HN() {
  const [dataSource, setDatasource] = useState([
    {
      fullname: 'นาย ทดสอบ ทดสอบ',
      nickname: 'kik',
      pid: '1234567891000',
      user_id: 'U9ea774d7645rdfg5r4dc903076a644a47',
      hncode: '07-24-000000',
      patient_id: 12303301022010141,
      raw_patient_id: '12303301022010141',
      create_hn_status: 'created',
      verify_status: 'unverify',
      fix_gender_id: '1',
      birthdate: '1985-09-01',
      occupation: '',
      marital_status: '1',
      religion: '',
      drug_food_allergy_status: '2',
      drug_food_allergy_description: 'อาหารทะเล',
      blood_group: 'A',
      place_name: '',
      home_id: '123',
      road: '',
      lane: 'ทุ่งรี',
      village: '1',
      fix_changwat_id: '90',
      fix_amphur_id: '11',
      fix_tambol_id: '02',
      postcode: '90110',
      email: 'tester.test@gmail.com',
      phone: '090252548',
      emergency_contact_name: '',
      emergency_contact_relation: '',
      emergency_contact_numberphone: '',
    },
    {
      fullname: 'นาย ทดสอบ ทดสอบ',
      nickname: 'kik',
      pid: '1234567891000',
      user_id: 'U9ea774d7645rdfg5r4dc903076a644a47',
      hncode: '07-24-000000',
      patient_id: 12303301022010141,
      raw_patient_id: '12303301022010141',
      create_hn_status: 'notcreated',
      verify_status: 'verify',
      fix_gender_id: '1',
      birthdate: '1985-09-01',
      occupation: '',
      marital_status: '1',
      religion: '',
      drug_food_allergy_status: '2',
      drug_food_allergy_description: 'อาหารทะเล',
      blood_group: 'A',
      place_name: '',
      home_id: '123',
      road: '',
      lane: 'ทุ่งรี',
      village: '1',
      fix_changwat_id: '90',
      fix_amphur_id: '11',
      fix_tambol_id: '02',
      postcode: '90110',
      email: 'tester.test@gmail.com',
      phone: '090252548',
      emergency_contact_name: '',
      emergency_contact_relation: '',
      emergency_contact_numberphone: '',
    },
    {
      fullname: 'นาย ทดสอบ ทดสอบ',
      nickname: 'kik',
      pid: '1234567891000',
      user_id: 'U9ea774d7645rdfg5r4dc903076a644a47',
      hncode: '07-24-000000',
      patient_id: 12303301022010141,
      raw_patient_id: '12303301022010141',
      create_hn_status: 'created',
      verify_status: 'unverify',
      fix_gender_id: '1',
      birthdate: '1985-09-01',
      occupation: '',
      marital_status: '1',
      religion: '',
      drug_food_allergy_status: '2',
      drug_food_allergy_description: 'อาหารทะเล',
      blood_group: 'A',
      place_name: '',
      home_id: '123',
      road: '',
      lane: 'ทุ่งรี',
      village: '1',
      fix_changwat_id: '90',
      fix_amphur_id: '11',
      fix_tambol_id: '02',
      postcode: '90110',
      email: 'tester.test@gmail.com',
      phone: '090252548',
      emergency_contact_name: '',
      emergency_contact_relation: '',
      emergency_contact_numberphone: '',
    }
  ])

  const [open, setOpen] = useState(false);

  const columns = [
    {
      key: '1',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 150 }}>Name</div>,
      dataIndex: 'fullname',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search name here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      key: '2',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 100 }}>nickname</div>,
      dataIndex: 'nickname',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search HN here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.hncode.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      key: '3',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>pid</div>,
      dataIndex: 'pid',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search HN here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.hncode.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      key: '4',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>user_id</div>,
      dataIndex: 'user_id',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      key: '5',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 150 }}>hncode</div>,
      dataIndex: 'hncode',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      key: '6',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 100 }}>patient_id</div>,
      dataIndex: 'patient_id',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      key: '7',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 100 }}>raw_patient_id</div>,
      dataIndex: 'raw_patient_id',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      key: '8',
      title: <div className='create_hn_status'>create_hn_status</div>,
      render: (record) => {
        return record.create_hn_status === 'created' ? (
          <CheckCircleOutlined className='icon' style={{ color: '#1e376d', fontSize: '25px' }} />
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button style={{ backgroundColor: '#52c41a', borderBlockColor: '#52c41a', color: 'white', padding: 0, width: 90 }}>
              สร้าง HN
            </Button>
          </div>
        );
      },
    },

    {
      key: '9',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>verify_status</div>,
      render: (record) => {
        return record.verify_status === 'verify' ? (
          <CheckOutlined className='icon' style={{ color: '#1e376d', fontSize: '20px' }} />
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button style={{ backgroundColor: '#52c41a', borderBlockColor: '#52c41a', color: 'white', padding: 0, width: 90 }}>
              สร้าง HN
            </Button>
          </div>
        );
      },
    },
    {
      key: '10',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>fix_gender_id</div>,
      dataIndex: 'fix_gender_id',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      key: '11',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>birthdate</div>,
      dataIndex: 'birthdate',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      key: '12',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>occupation</div>,
      dataIndex: 'occupation',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      key: '13',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>marital_status</div>,
      dataIndex: 'marital_status',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      key: '14',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>religion</div>,
      dataIndex: 'religion',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      key: '15',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>drug_food_allergy_status</div>,
      dataIndex: 'drug_food_allergy_status',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      key: '16',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>drug_food_allergy_description</div>,
      dataIndex: 'drug_food_allergy_description',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      key: '17',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>blood_group</div>,
      dataIndex: 'blood_group',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },

    {
      key: '18',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>place_name</div>,
      dataIndex: 'place_name',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },

    {
      key: '19',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>home_id</div>,
      dataIndex: 'home_id',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },

    {
      key: '20',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>road</div>,
      dataIndex: 'road',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },

    {
      key: '21',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>lane</div>,
      dataIndex: 'lane',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },

    {
      key: '22',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>village</div>,
      dataIndex: 'village',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },

    {
      key: '23',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>fix_changwat_id</div>,
      dataIndex: 'fix_changwat_id',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },

    {
      key: '24',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>fix_amphur_id</div>,
      dataIndex: 'fix_amphur_id',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },

    {
      key: '25',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>fix_tambol_id</div>,
      dataIndex: 'fix_tambol_id',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },

    {
      key: '26',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>postcode</div>,
      dataIndex: 'postcode',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },

    {
      key: '27',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>email</div>,
      dataIndex: 'email',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },

    {
      key: '28',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>phone</div>,
      dataIndex: 'phone',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },

    {
      key: '29',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>emergency_contact_name</div>,
      dataIndex: 'emergency_contact_name',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },

    {
      key: '30',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>emergency_contact_relation</div>,
      dataIndex: 'emergency_contact_relation',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },

    {
      key: '31',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>emergency_contact_numberphone</div>,
      dataIndex: 'emergency_contact_numberphone',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },

    {
      key: '32',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>emergency_contact_numberphone</div>,
      dataIndex: 'emergency_contact_numberphone',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search pid here'
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : [])
                confirm({ closeDropdown: false })
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
              style={{ width: 188, marginBottom: 20, margin: 5 }}
            />
            <div className='btn-search'>
              <Button className='btn-reset'
                onClick={() => {
                  clearFilters();
                  confirm({ closeDropdown: true });
                }}>Reset</Button>
              <Button type="primary"
                onClick={() => {
                  confirm();
                }}>OK</Button>
            </div>
          </>
        );
      },
      onFilter: (value, record) => {
        return record.pid.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      key: '33',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 120 }}>รายละเอียด</div>,
      render: (record) => {
        return (
          <>
            <InfoCircleOutlined className='icon' onClick={() => setOpen(true)} style={{ color: '#1e376d', fontSize: '25px' }} />
          </>
        )
      }
    },


  ];
  return (
    <div>
      <Table
        className='table'
        columns={columns}
        dataSource={dataSource}
        style={{ margin: '40px' }}
        pagination={false}
        scroll={{
          x: 1000,
        }}
      />
      <Modal
        className='modal'
        title="รายละเอียด"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1200}
        bodyStyle={{ maxHeight: '500px', overflowY: 'auto' }}
      >
        <div>
          <p className='p-text'>ข้อมูลผู้ป่วย</p>
          <Row gutter={60} style={{ marginLeft: 50 }}>
            <Col span={8}>
              <FormItem name='name'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>ชื่อ - สกุล</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem name='nickname'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>ชื่อเล่น</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem name='hn_code'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>hn_code</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
          </Row>
          <Row gutter={60} style={{ marginLeft: 50 }}>
            <Col span={8}>
              <FormItem name='patient_id'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>patient_id</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem name='age'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>อายุ</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem name='gender'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>เพศ</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
          </Row>
          <Row gutter={60} style={{ marginLeft: 50 }}>
            <Col span={8}>
              <FormItem name='birthdate'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>วัน/เดือน/ปี เกิด</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem name='pid'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>เลขประจำตัวประชาชน</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem name='occupation'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>อาชีพ</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
          </Row>
          <Row gutter={60} style={{ marginLeft: 50 }}>
            <Col span={8}>
              <FormItem name='status'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>สถานภาพ</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem name='ethnicity'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>เชื้อชาติ</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem name='nationality'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>สัญชาติ</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
          </Row>
          <Row gutter={60} style={{ marginLeft: 50 }}>
            <Col span={8}>
              <FormItem name='religion'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>ศาสนา</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem name='drug_allergy'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>แพ้ยา</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem name='blood_group'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>หมู่เลือด</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
          </Row>
          <Row gutter={60} style={{ marginLeft: 50 }}>
            <Col span={8}>
              <FormItem name='address'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>ที่อยู่</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem name='sub_district'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>ตำบล</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem name='district'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>อำเภอ</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
          </Row>
          <Row gutter={60} style={{ marginLeft: 50 }}>
            <Col span={8}>
              <FormItem name='province'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>จังหวัด</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem name='postcode'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>รหัสไปรษณีย์</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem name='email'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>อีเมล</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
          </Row>
          <Row gutter={60} style={{ marginLeft: 50 }}>
            <Col span={8}>
              <FormItem name='phone_number'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>เบอร์โทร</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
          </Row>
        </div>
        <div>
          <p className='p-text'>ข้อมูลผู้ที่ติดต่อได้ในกรณีฉุกเฉิน</p>
          <Row gutter={60} style={{ marginLeft: 50 }}>
            <Col span={8}>
              <FormItem name='name'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>ชื่อ - สกุล</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem name='relationship'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>สัมพันธ์กับผู้ป่วย</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem name='phone_number'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ marginBottom: '8px' }}>หมายเลขโทรศัพท์ที่ติดต่อได้</label>
                  <Input placeholder="" />
                </div>
              </FormItem>
            </Col>
          </Row>
        </div>
      </Modal>

    </div>
  )
}

export default HN