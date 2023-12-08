import React from 'react';
import './HN.css';
import AppHeader from '../AppHeader';
import Navbar from '../Navbar';
import Appfooter from '../Footer';
import { Row, Col, Form, Spin } from 'antd';
import { Table, Button, Input, Modal } from 'antd';
import { InfoCircleOutlined, CheckCircleOutlined, CheckOutlined, CopyOutlined, SearchOutlined, CloseCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import FormItem from 'antd/es/form/FormItem';
import address from "../../base_address.json";
import image from '../../wating.gif';

function HN() {

  const [fullnameIsCopied, setFullnameIsCopied] = useState(false);
  const [nicknameIsCopied, setNicknameIsCopied] = useState(false);
  const [pidIsCopied, setPidIsCopied] = useState(false);
  const [hncodeIsCopied, setHncodeIsCopied] = useState(false);
  const [patientidIsCopied, setPatientidIsCopied] = useState(false);
  const [genderIsCopied, setGenderIsCopied] = useState(false);
  const [birthdateIsCopied, setBirthdateIsCopied] = useState(false);
  const [occupationIsCopied, setOccupationIsCopied] = useState(false);
  const [maritalIsCopied, setMaritalIsCopied] = useState(false);
  const [religionIsCopied, setReligionIsCopied] = useState(false);
  const [drugIsCopied, setDrugIsCopied] = useState(false);
  const [bloodIsCopied, setBloodIsCopied] = useState(false);
  const [placenameIsCopied, setPlacenameIsCopied] = useState(false);
  const [homeidIsCopied, setHomeidIsCopied] = useState(false);
  const [roadIsCopied, setRoadIsCopied] = useState(false);
  const [laneIsCopied, setLaneIsCopied] = useState(false);
  const [villageIsCopied, setVillageIsCopied] = useState(false);
  const [tambolIsCopied, setTambolIsCopied] = useState(false);
  const [amphurIsCopied, setAmphurIsCopied] = useState(false);
  const [changwatIsCopied, setChangwatIsCopied] = useState(false);
  const [postcodeIsCopied, setPostcodeIsCopied] = useState(false);
  const [emailIsCopied, setEmailIsCopied] = useState(false);
  const [phoneIsCopied, setPhoneIsCopied] = useState(false);
  const [nameIsCopied, setnameIsCopied] = useState(false);
  const [relationIsCopied, setRelationIsCopied] = useState(false);
  const [numberphoneIsCopied, setNumberphoneIsCopied] = useState(false);
  const [changwatName, setChangwatName] = useState('');
  const [amphurName, setAmphurName] = useState('');
  const [tambolName, setTambolName] = useState('');
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});
  const [waiting, setWaiting] = useState(false);
  const [data, setData] = useState([]);
  const [pid, setPid] = useState('1234567891111');

  useEffect(() => {
    fetchData();
    // fetch('http://localhost:3001/api/data')
    //   .then((response) => response.json())
    //   .then((data) => 
    //   console.log(data),
    //   setData(data));
  }, []);

  useEffect(() => {
    onAddress()
  }, [details])

  const fetchData = async () => {
    setWaiting(false);
    const response = await fetch('http://localhost:3001/api/data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    if (response.status === 200) {
      const json = await response.json();
      const data = json.data;
      console.log(data);
      setData(data)
      setWaiting(true);

    }
  };

  const ButtonCreate = async () => {
    const response = await fetch('http://localhost:3001/hn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pid }),
    })
    if (response.ok) {
      const json = await response.json();
      const data = json.data;
      setData(data);
    }
  }


  const columns = [
    {
      key: 'fullname',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>ชื่อ - สกุล</div>,
      dataIndex: 'fullname',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              prefix={<SearchOutlined style={{ color: '#cfcdcf' }} />}
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
              style={{ width: 188, marginBottom: 20, margin: 5, borderRadius: 13 }}
            />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
              <Button style={{ border: 'none', boxShadow: 'none', color: '#cfcdcf' }}
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
      key: 'hncode',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>hncode</div>,
      dataIndex: 'hncode',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              prefix={<SearchOutlined style={{ color: '#cfcdcf' }} />}
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
              style={{ width: 188, marginBottom: 20, margin: 5, borderRadius: 13 }}
            />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
              <Button style={{ border: 'none', boxShadow: 'none', color: '#cfcdcf' }}
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
      key: 'birthdate',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>วัน/เดือน/ปี เกิด</div>,
      dataIndex: 'birthdate',
      sorter: (a, b) => a.birthdate > b.birthdate
    },
    {
      key: 'pid',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>เลขประจำตัวประชาชน</div>,
      dataIndex: 'pid',
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
        return (
          <>
            <Input
              autoFocus
              prefix={<SearchOutlined style={{ color: '#cfcdcf' }} />}
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
              style={{ width: 188, marginBottom: 20, margin: 5, borderRadius: 13 }}
            />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
              <Button style={{ border: 'none', boxShadow: 'none', color: '#cfcdcf' }}
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
      key: 'create_hn_status',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>สถานะ</div>,
      render: (record) => {
        return (
          <>
            {record.create_hn_status === 'created' ? (
              <CheckCircleOutlined className='icon' style={{ color: '#1e376d', fontSize: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button onClick={() => { ButtonCreate(record) }} style={{ background: '#52c41a', background: 'linear-gradient(0deg, #52c41a 0%, #95de64 100%)', boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.20)', borderColor: '#52c41a', border: 'none', color: 'white', padding: 0, width: 90, height: 35 }}>
                  สร้าง HN
                </Button>
              </div>
            )}
          </>
        );
      },
      filters: [
        { text: 'สร้าง HN แล้ว', value: 'created' },
        { text: 'ยังไม่สร้าง HN', value: 'notcreated' }
      ],
      onFilter: (value, record) => record.create_hn_status === value,
    },
    {
      key: 'verify_status',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>ตรวจสอบ</div>,
      render: (record) => {
        return (
          <>
            {record.verify_status === 'verify' ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#02BC7D' }}>
                <CheckOutlined className='icon' style={{ color: '#02BC7D', fontSize: '20px' }} />
                ตรวจสอบแล้ว
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button onClick={() => { onCreate(record) }} style={{ background: '#1890FF', background: 'linear-gradient(0deg, #1890FF 0%, #69c0ff 100%)', boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.20)', borderColor: '#52c41a', border: 'none', color: 'white', padding: 0, width: 90, height: 35 }}>
                  Verify
                </Button>
              </div>
            )}
          </>
        );
      },
      filters: [
        { text: 'ตรวจสอบแล้ว', value: 'verify' },
        { text: 'ยังไม่ตรวจสอบ', value: 'notverify' }
      ],
      onFilter: (value, record) => record.verify_status === value,
    },
    {
      key: 'pdpa',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>PDPA</div>,
      render: (record) => {
        return (
          <>
            {record.pdpa === 'doit' ? (
              <CheckOutlined className='icon' style={{ color: '#02BC7D', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            ) : (
              <CloseOutlined className='icon' style={{ color: '#ab2727', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} />
            )}
          </>
        );
      },
      filters: [
        { text: 'ทำ', value: 'doit' },
        { text: 'ไม่ทำ', value: 'dontdoit' }
      ],
      onFilter: (value, record) => record.pdpa === value,
    },
    {
      key: 'detail',
      title: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>รายละเอียด</div>,
      render: (record) => {
        return (
          <>
            <InfoCircleOutlined className='icon' onClick={() => {
              console.log(record);
              setDetails(record);
              setOpen(true);
            }} style={{ color: '#1e376d', fontSize: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
          </>
        )
      }
    },
  ];

  const handleCopyClick = (value, setIsCopied) => {
    const tempInput = document.createElement('input');
    tempInput.value = value;

    document.body.appendChild(tempInput);

    tempInput.select();

    document.execCommand('copy');

    document.body.removeChild(tempInput);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }

  const onCreate = (data) => {
    // console.log(data)
  }

  const onAddress = () => {
    const data = address.base_address;
    const tambol = details.fix_changwat_id + details.fix_amphur_id + details.fix_tambol_id
    const amphur = details.fix_changwat_id + details.fix_amphur_id + '00'
    const changwat = details.fix_changwat_id + '0000'
    data.map(item => {
      if (item.fullcode === tambol) {
        console.log(item.description)
        setTambolName(item.description);
      }
      if (item.fullcode === amphur) {
        console.log(item.description)
        setAmphurName(item.description)
      }
      if (item.fullcode === changwat) {
        console.log(item.description)
        setChangwatName(item.description);
      }
    })
  };


  return (
    <>
      <AppHeader />
      <Navbar />
      <Appfooter />

      {
        waiting ?
          <Table
            className='table'
            columns={columns}
            dataSource={data}
            style={{ margin: '40px' }}
            pagination={false}
            scroll={{
              x: 1200,
            }}
          />
          : <img src={image} style={{ width: 50, position: 'absolute', top: '50%', left: '50%', marginTop: '-30px', marginLeft: '-30px' }} />
      }

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
            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>ข้อมูลส่วนตัว</p>
            <Row gutter={60} style={{ marginLeft: 50 }}>
              <Col span={12}>
                <Form>
                  <FormItem name='fullname'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>ชื่อ - สกุล</label>
                      <Input placeholder="" className='input' value={details.fullname}
                        suffix={
                          <div className='input-suffix'>
                            {fullnameIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.fullname, setFullnameIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>ชื่อเล่น</label>
                      <Input placeholder="" className='input' value={details.nickname}
                        suffix={
                          <div className='input-suffix'>
                            {nicknameIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.nickname, setNicknameIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>เลขประจำตัวประชาชน</label>
                      <Input placeholder="" className='input' value={details.pid}
                        suffix={
                          <div className='input-suffix'>
                            {pidIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.pid, setPidIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>hncode</label>
                      <Input placeholder="" className='input' value={details.hncode}
                        suffix={
                          <div className='input-suffix'>
                            {hncodeIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.hncode, setHncodeIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>patient_id</label>
                      <Input placeholder="" className='input' value={details.patient_id}
                        suffix={
                          <div className='input-suffix'>
                            {patientidIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.patient_id, setPatientidIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>เพศ</label>
                      <Input placeholder="" className='input' value={details.fix_gender_id === '1' ? 'ชาย' : 'หญิง'}
                        suffix={
                          <div className='input-suffix'>
                            {genderIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.fix_gender_id === '1' ? 'ชาย' : 'หญิง', setGenderIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>วัน/เดือน/ปี เกิด</label>
                      <Input placeholder="" className='input' value={details.birthdate}
                        suffix={
                          <div className='input-suffix'>
                            {birthdateIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.birthdate, setBirthdateIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>อาชีพ</label>
                      <Input placeholder="" className='input' value={details.occupation}
                        suffix={
                          <div className='input-suffix'>
                            {occupationIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.occupation, setOccupationIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>สถานภาพ</label>
                      <Input placeholder="" className='input' value={
                        details.marital_status === '1' ? 'โสด' :
                          details.marital_status === '2' ? 'สมรส' :
                            details.marital_status === '3' ? 'แยกกันอยู่' :
                              details.marital_status === '4' ? 'หย่า' :
                                details.marital_status === '5' ? 'หม้าย' :
                                  details.marital_status === '6' ? 'สมณะ' : ''
                      }
                        suffix={
                          <div className='input-suffix'>
                            {maritalIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.marital_status === '1' ? 'โสด' :
                                details.marital_status === '2' ? 'สมรส' :
                                  details.marital_status === '3' ? 'แยกกันอยู่' :
                                    details.marital_status === '4' ? 'หย่า' :
                                      details.marital_status === '5' ? 'หม้าย' :
                                        details.marital_status === '6' ? 'สมณะ' : '', setMaritalIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>ศาสนา</label>
                      <Input placeholder="" className='input' value={details.religion}
                        suffix={
                          <div className='input-suffix'>
                            {religionIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.religion, setReligionIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>ประวัติการแพ้</label>
                      <Input placeholder="" className='input' value={
                        details.drug_food_allergy_status === '1'
                          ? '-'
                          : details.drug_food_allergy_description
                      }
                        suffix={
                          <div className='input-suffix'>
                            {drugIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.drug_food_allergy_description, setDrugIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>หมู่เลือด</label>
                      <Input placeholder="" className='input' value={details.blood_group}
                        suffix={
                          <div className='input-suffix'>
                            {bloodIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.blood_group, setBloodIsCopied)} />
                            )}
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
            </Row>
            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>ช่องทางติดต่อ</p>
            <Row gutter={60} style={{ marginLeft: 50 }}>
              <Col span={12}>
                <Form>
                  <FormItem name='place_name'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>ที่อยู่</label>
                      <Input placeholder="" className='input' value={details.place_name || `${details.home_id} ถนน ${details.road} ซอย ${details.lane} หมู่ ${details.village}`}
                        suffix={
                          <div className='input-suffix'>
                            {placenameIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.place_name, setPlacenameIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>บ้านเลขที่</label>
                      <Input placeholder="" className='input' value={details.home_id}
                        suffix={
                          <div className='input-suffix'>
                            {homeidIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.home_id, setHomeidIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>ถนน</label>
                      <Input placeholder="" className='input' value={details.road}
                        suffix={
                          <div className='input-suffix'>
                            {roadIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.road, setRoadIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>ซอย</label>
                      <Input placeholder="" className='input' value={details.lane}
                        suffix={
                          <div className='input-suffix'>
                            {laneIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.lane, setLaneIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>หมู่</label>
                      <Input placeholder="" className='input' value={details.village}
                        suffix={
                          <div className='input-suffix'>
                            {villageIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.village, setVillageIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>ตำบล</label>
                      <Input placeholder="" className='input' value={tambolName}
                        suffix={
                          <div className='input-suffix'>
                            {tambolIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(tambolName, setTambolIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>อำเภอ</label>
                      <Input placeholder="" className='input' value={amphurName}
                        suffix={
                          <div className='input-suffix'>
                            {amphurIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(amphurName, setAmphurIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>จังหวัด</label>
                      <Input placeholder="" className='input' value={changwatName}
                        suffix={
                          <div className='input-suffix'>
                            {changwatIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(changwatName, setChangwatIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>รหัสไปรษณีย์</label>
                      <Input placeholder="" className='input' value={details.postcode}
                        suffix={
                          <div className='input-suffix'>
                            {postcodeIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.postcode, setPostcodeIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>อีเมล</label>
                      <Input placeholder="" className='input' value={details.email}
                        suffix={
                          <div className='input-suffix'>
                            {emailIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.email, setEmailIsCopied)} />
                            )}
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
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>เบอร์โทร</label>
                      <Input placeholder="" className='input' value={details.phone}
                        suffix={
                          <div className='input-suffix'>
                            {phoneIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.phone, setPhoneIsCopied)} />
                            )}
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
            </Row>
            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>ข้อมูลผู้ที่ติดต่อได้ในกรณีฉุกเฉิน</p>
            <Row gutter={60} style={{ marginLeft: 50 }}>
              <Col span={12}>
                <Form>
                  <FormItem name='emergency_contact_name'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>ชื่อ - สกุล</label>
                      <Input placeholder="" className='input' value={details.emergency_contact_name}
                        suffix={
                          <div className='input-suffix'>
                            {nameIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.emergency_contact_name, setnameIsCopied)} />
                            )}
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
              <Col span={12}>
                <Form>
                  <FormItem name='emergency_contact_relation'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>ความสัมพันธ์</label>
                      <Input placeholder="" className='input' value={details.emergency_contact_relation}
                        suffix={
                          <div className='input-suffix'>
                            {relationIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.emergency_contact_relation, setRelationIsCopied)} />
                            )}
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
                  <FormItem name='emergency_contact_numberphone'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label className='detail-label' style={{ marginBottom: '8px', fontWeight: 'bold' }}>เบอร์โทร</label>
                      <Input placeholder="" className='input' value={details.emergency_contact_numberphone}
                        suffix={
                          <div className='input-suffix'>
                            {numberphoneIsCopied ? (
                              <CheckOutlined className='copy' />
                            ) : (
                              <CopyOutlined className='copy' onClick={() => handleCopyClick(details.emergency_contact_numberphone, setNumberphoneIsCopied)} />
                            )}
                          </div>
                        } />
                    </div>
                  </FormItem>
                </Form>
              </Col>
            </Row>
          </div>
        )}
      </Modal>
    </>
  )
}

export default HN