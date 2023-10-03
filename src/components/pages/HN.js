import React from 'react';
import './HN.css';
import { Row, Col, Form } from 'antd';
import { Table, Button, Input, Modal } from 'antd';
import { InfoCircleOutlined, CheckCircleOutlined, CheckOutlined, CopyOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import FormItem from 'antd/es/form/FormItem';
import address from "../../base_address.json"

function HN() {


  const [dataSource, setDatasource] = useState([
    {
      fullname: 'นางสาวนฤพร พัฒสงค์',
      nickname: 'กิ๊ก',
      pid: '1234567891000',
      user_id: 'U9ea774d7645rdfg5r4dc903076a644a47',
      hncode: '03-26-000000',
      patient_id: 12303301022010141,
      raw_patient_id: '12303301022010141',
      create_hn_status: 'created',
      verify_status: 'notverify',
      fix_gender_id: '2',
      birthdate: '2001-03-26',
      occupation: 'นักศึกษา',
      marital_status: '1',
      religion: 'พุทธ',
      drug_food_allergy_status: '1',
      drug_food_allergy_description: '',
      blood_group: 'B',
      place_name: '90 ถนน กาญจนวณิชย์ ซอย1 หมู่ 10',
      home_id: '90',
      road: 'กาญจนวณิชย์',
      lane: '1',
      village: '10',
      fix_changwat_id: '80',
      fix_amphur_id: '14',
      fix_tambol_id: '05',
      postcode: '80120',
      email: 'naruporn.ph@gmail.com',
      phone: '0612199260',
      emergency_contact_name: 'นางสาวศศิวิมล ดวงมุสิก',
      emergency_contact_relation: 'มารดา',
      emergency_contact_numberphone: '0872634680',
    },
    {
      fullname: 'นายเทส ทดสอบ ',
      nickname: 'เทส',
      pid: '1234567891111',
      user_id: 'U9ea774d7645rdfg5r4dc903076a644b48',
      hncode: '07-24-000000',
      patient_id: 12403301022010141,
      raw_patient_id: '12403301022010141',
      create_hn_status: 'notcreate',
      verify_status: 'verify',
      fix_gender_id: '1',
      birthdate: '1985-09-01',
      occupation: 'นักกฎหมาย',
      marital_status: '2',
      religion: 'คริสต์',
      drug_food_allergy_status: '2',
      drug_food_allergy_description: 'อาหารทะเล',
      blood_group: 'A',
      place_name: '',
      home_id: '123',
      road: 'พลพิชัย',
      lane: 'ทุ่งรี',
      village: '1',
      fix_changwat_id: '90',
      fix_amphur_id: '11',
      fix_tambol_id: '02',
      postcode: '90110',
      email: 'tester.test@gmail.com',
      phone: '090252548',
      emergency_contact_name: 'นางสาวสมศรี มีหมอน',
      emergency_contact_relation: 'มารดา',
      emergency_contact_numberphone: '0937564832',
    },
    {
      fullname: 'นางสาวนูรมา จูกูยี',
      nickname: 'นุชชี่',
      pid: '1234567891222',
      user_id: 'U9ea774d7645rdfg5r4dc903076a644c49',
      hncode: '11-13-000000',
      patient_id: 12503301022010141,
      raw_patient_id: '12503301022010141',
      create_hn_status: 'created',
      verify_status: 'notverify',
      fix_gender_id: '2',
      birthdate: '2002-11-13',
      occupation: 'นักศึกษา',
      marital_status: '1',
      religion: 'อิสลาม',
      drug_food_allergy_status: '2',
      drug_food_allergy_description: 'ขนแมว',
      blood_group: 'AB',
      place_name: '',
      home_id: '30',
      road: 'เพชรเกษม ',
      lane: '2',
      village: '8',
      fix_changwat_id: '96',
      fix_amphur_id: '03',
      fix_tambol_id: '06',
      postcode: '90110',
      email: 'nurma.chu@gmail.com',
      phone: '0616720446',
      emergency_contact_name: 'นายสมนึก จูกูยี',
      emergency_contact_relation: 'บิดา',
      emergency_contact_numberphone: '0843395474',
    }
  ])

  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});


  useEffect(()=>{
    onAddress()
  },[details])
  
  const columns = [
    {
      key: '1',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>ชื่อ - สกุล</div>,
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
        return record.fullname.toLowerCase().includes(value.toLowerCase())
      },
    },
    {
      key: '2',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>hncode</div>,
      dataIndex: 'hncode',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder='Search hncode here'
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
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>วัน/เดือน/ปี เกิด</div>,
      dataIndex: 'birthdate',
      sorter: (a, b) => a.birthdate > b.birthdate
    },
    {
      key: '4',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>เลขประจำตัวประชาชน</div>,
      dataIndex: 'pid',
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
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>สถานะ</div>,
      render: (record) => {
        return record.create_hn_status === 'created' ? (
          <CheckCircleOutlined className='icon' style={{ color: '#1e376d', fontSize: '25px' }} />
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button onClick={() => { onCreate(record) }} style={{ backgroundColor: '#52c41a', borderBlockColor: '#52c41a', color: 'white', padding: 0, width: 90 }}  >
              สร้าง HN
            </Button>
          </div>

        );
      },
    },

    {
      key: '6',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>ตรวจสอบ</div>,
      render: (record) => {
        return record.verify_status === 'verify' ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#02BC7D' }}>
            <CheckOutlined className='icon' style={{ color: '#02BC7D', fontSize: '20px' }} />
            ตรวจสอบแล้ว
          </div>

        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button onClick={() => { onCreate(record) }} style={{ backgroundColor: '#1890FF', borderBlockColor: '#1890FF', color: 'white', padding: 0, width: 90 }}>
              Verify
            </Button>
          </div>
        );
      },
    },
    {
      key: '7',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>รายละเอียด</div>,
      render: (record) => {
        return (
          <>
            <InfoCircleOutlined className='icon' onClick={() => { setDetails(record); setOpen(true); }} style={{ color: '#1e376d', fontSize: '25px' }} />
          </>
        )
      }
    },


  ];
  function handleCopy(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);

    input.select();
    document.execCommand('copy');

    document.body.removeChild(input);
  }

  const onCreate = (data) => {
    // console.log(data)
  }

  const [changwatName, setChangwatName] = useState('');
  const [amphurName, setAmphurName] = useState('');
  const [tambolName, setTambolName] = useState('');
  const onAddress = ()=>{
   
      const data = address.base_address;
     
      const tambol = details.fix_changwat_id+details.fix_amphur_id+details.fix_tambol_id
      const amphur = details.fix_changwat_id+details.fix_amphur_id+'00'
      const changwat = details.fix_changwat_id+'0000'
      data.map(item=>{
        if(item.fullcode === tambol){
          console.log(item.description)
          setTambolName(item.description);
        }
        if(item.fullcode === amphur){
          console.log(item.description)
          setAmphurName(item.description)
        }
        if(item.fullcode === changwat){
          console.log(item.description)
          setChangwatName(item.description);
        }
      })
    

  }


  // useEffect(() => {

  //   console.log(details)
  //   // Address();
  // }, []);

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
        bodyStyle={{ maxHeight: '500px', overflowY: 'auto', overflowX: 'hidden' }}
      >
        {details && (
          <div>
            <p className='p-text'>ข้อมูลส่วนตัว</p>
            <Row gutter={60} style={{ marginLeft: 50 }}>
              <Col span={12}>
                <Form>
                  <FormItem name='fullname'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>ชื่อ - สกุล</label>
                      <Input placeholder="" className='input' value={details.fullname} 
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy(details.fullname)}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
              <Col span={12}>
                <Form>
                  <FormItem name='nickname'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>ชื่อเล่น</label>
                      <Input placeholder="" className='input' value={details.nickname}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy(details.nickname)}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
            </Row>
            <Row gutter={60} style={{ marginLeft: 50 }}>
              <Col span={12}>
                <Form>
                  <FormItem name='pid'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>เลขประจำตัวประชาชน</label>
                      <Input placeholder="" className='input' value={details.pid}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy(details.pid)}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
              <Col span={12}>
                <Form>
                  <FormItem name='hncode'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>hncode</label>
                      <Input placeholder="" className='input' value={details.hncode}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy(details.hncode)}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
            </Row>
            <Row gutter={60} style={{ marginLeft: 50 }}>
              <Col span={12}>
                <Form>
                  <FormItem name='patient_id'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>patient_id</label>
                      <Input placeholder="" className='input' value={details.patient_id}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy(details.patient_id)}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
              <Col span={12}>
                <Form>
                  <FormItem name='fix_gender_id'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>เพศ</label>
                      <Input placeholder="" className='input' value={details.fix_gender_id}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy(details.fix_gender_id)}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
            </Row>
            <Row gutter={60} style={{ marginLeft: 50 }}>
              <Col span={12}>
                <Form>
                  <FormItem name='birthdate'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>วัน/เดือน/ปี เกิด</label>
                      <Input placeholder="" className='input' value={details.birthdate}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy(details.birthdate)}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
              <Col span={12}>
                <Form>
                  <FormItem name='occupation'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>อาชีพ</label>
                      <Input placeholder="" className='input' value={details.occupation}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy(details.occupation)}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
            </Row>
            <Row gutter={60} style={{ marginLeft: 50 }}>
              <Col span={12}>
                <Form>
                  <FormItem name='marital_status'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>สถานภาพ</label>
                      <Input placeholder="" className='input' value={details.marital_status}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy(details.marital_status)}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
              <Col span={12}>
                <Form>
                  <FormItem name='religion'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>ศาสนา</label>
                      <Input placeholder="" className='input' value={details.religion}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy(details.religion)}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
            </Row>
            <Row gutter={60} style={{ marginLeft: 50 }}>
              <Col span={12}>
                <Form>
                  <FormItem name='drug_food_allergy_description'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>ประวัติการแพ้</label>
                      <Input placeholder="" className='input' value={details.drug_food_allergy_description}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy(details.drug_food_allergy_description)}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
              <Col span={12}>
                <Form>
                  <FormItem name='blood_group'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>หมู่เลือด</label>
                      <Input placeholder="" className='input' value={details.blood_group}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy(details.blood_group)}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
            </Row>
            <p className='p-text'>ช่องทางติดต่อ</p>
            <Row gutter={60} style={{ marginLeft: 50 }}>
              <Col span={12}>
                <Form>
                  <FormItem name='place_name'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>ที่อยู่</label>
                      <Input placeholder="" className='input' value={details.place_name || `${details.home_id} ถนน ${details.road} ซอย ${details.lane} หมู่ ${details.village}`}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy(details.place_name)}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
              <Col span={12}>
                <Form>
                  <FormItem name='home_id'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>บ้านเลขที่</label>
                      <Input placeholder="" className='input' value={details.home_id}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy(details.home_id)}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
            </Row>
            <Row gutter={60} style={{ marginLeft: 50 }}>
              <Col span={12}>
                <Form>
                  <FormItem name='road'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>ถนน</label>
                      <Input placeholder="" className='input' value={details.road}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy(details.road)}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
              <Col span={12}>
                <Form>
                  <FormItem name='lane'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>ซอย</label>
                      <Input placeholder="" className='input' value={details.lane}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy(details.lane)}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
            </Row>
            <Row gutter={60} style={{ marginLeft: 50 }}>
              <Col span={12}>
                <Form>
                  <FormItem name='village'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>หมู่</label>
                      <Input placeholder="" className='input' value={details.village}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy(details.village)}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
              <Col span={12}>
                <Form>
                  <FormItem name='fix_tambol_id'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>ตำบล</label>
                      <Input placeholder="" className='input' value={tambolName}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy()}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
            </Row>
            <Row gutter={60} style={{ marginLeft: 50 }}>
              <Col span={12}>
                <Form>
                  <FormItem name='fix_amphur_id'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>อำเภอ</label>
                      <Input placeholder="" className='input' value={amphurName}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy()}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
              <Col span={12}>
                <Form>
                  <FormItem name='fix_changwat_id'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>จังหวัด</label>
                      <Input placeholder="" className='input' value={changwatName}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined >คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
            </Row>
            <Row gutter={60} style={{ marginLeft: 50 }}>
              <Col span={12}>
                <Form>
                  <FormItem name='postcode'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>รหัสไปรษณีย์</label>
                      <Input placeholder="" className='input' value={details.postcode}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy(details.postcode)}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
              <Col span={12}>
                <Form>
                  <FormItem name='email'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>อีเมล</label>
                      <Input placeholder="" className='input' value={details.email}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy(details.email)}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
            </Row>
            <Row gutter={60} style={{ marginLeft: 50 }}>
              <Col span={12}>
                <Form>
                  <FormItem name='phone'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>เบอร์โทร</label>
                      <Input placeholder="" className='input' value={details.phone}
                        suffix={
                          <div className='input-suffix'>
                            <CopyOutlined onClick={() => handleCopy(details.phone)}>คัดลอก</CopyOutlined>
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
            </Row>
            <p className='p-text'>ข้อมูลผู้ที่ติดต่อได้ในกรณีฉุกเฉิน</p>
            <Row gutter={60} style={{ marginLeft: 50 }}>
              <Col span={12}>
                <Form>
                  <FormItem name='emergency_contact_name'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>ชื่อ - สกุล</label>
                      <Input placeholder="" className='input' value={details.emergency_contact_name} 
                      suffix={
                        <div className='input-suffix'>
                          <CopyOutlined onClick={() => handleCopy(details.emergency_contact_name)}>คัดลอก</CopyOutlined>
                        </div>
                      }/>
                    </div>
                  </FormItem>
                </Form>
              </Col>
              <Col span={12}>
                <Form>
                  <FormItem name='emergency_contact_relation'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>ความสัมพันธ์</label>
                      <Input placeholder="" className='input' value={details.emergency_contact_relation} 
                      suffix={
                        <div className='input-suffix'>
                          <CopyOutlined onClick={() => handleCopy(details.emergency_contact_relation)}>คัดลอก</CopyOutlined>
                        </div>
                      }/>
                    </div>
                  </FormItem>
                </Form>
              </Col>
            </Row>
            <Row gutter={60} style={{ marginLeft: 50 }}>
              <Col span={12}>
                <Form>
                  <FormItem name='emergency_contact_numberphone'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px' }}>เบอร์โทร</label>
                      <Input placeholder="" className='input' value={details.emergency_contact_numberphone} 
                      suffix={
                        <div className='input-suffix'>
                          <CopyOutlined onClick={() => handleCopy(details.emergency_contact_numberphone)}>คัดลอก</CopyOutlined>
                        </div>
                      }/>
                    </div>
                  </FormItem>
                </Form>
              </Col>
            </Row>
          </div>
        )}
      </Modal>

    </div>
  )
}

export default HN