import React from 'react';
import { Layout } from 'antd';
import { Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const { Header } = Layout;

// const { Search } = Input;
// const onSearch = (value) => console.log(value);

const items = [
    {
        label: 'logout',
        key: 'logout'
    }
]

const data = localStorage.getItem("username");

function AppHeader() {
    const clearData = localStorage.getItem("username");
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/login')
    }
    return (
        <div className="App">
            <Layout>
                <Row style={{ height: 70, background: '#fff' }}>
                    <Col span={12}>
                        <img style={{ display: 'flex', width: '150px', height: '50px', margin: '10px 0 0 10px', marginLeft: '50px'  }} alt='BHH' src='logo-en.png'></img>
                    </Col>
                    <Col span={8}>
                        <p className='user-name' style={{ float: 'right', color: '#1e376d', margin: 0, marginTop: 25, }}>ชื่อ : {data}</p>
                    </Col>
                    <Col span={2}>
                    <Dropdown
                            menu={{
                                items: [
                                    {
                                        label: 'logout',
                                        onClick: () => {
                                            logout();
                                        },
                                    },
                                ],
                            }}
                            trigger={['click']}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <DownOutlined style={{ margin: 0, marginTop: 28, marginLeft: 10, marginRight: 80}}/>
                                </Space>
                            </a>
                        </Dropdown>
                    </Col>
                    <Col span={2}>
                        <img className='user' alt='user' src='user.png' style={{ float: 'right', width: '50px', height: '50px', marginRight: 55, marginTop: 10 }} />
                    </Col>
                </Row>
            </Layout>
        </div>
    )
}

export default AppHeader