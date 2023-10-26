import React from 'react';
import './AppHeader.css';
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
                    <Col span={8} style={{ height: 70, }}>
                        <img className='logo' alt='BHH' src='logo-en.png'></img>
                    </Col>
                    <Col span={12} offset={4} style={{ height: '70px', }}>
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
                                    <p className='user-name' style={{ float: 'right', color: '#1e376d', margin: 0, marginTop: 25, marginLeft: 200}}>ชื่อ : {data}</p>
                                    <DownOutlined style={{ float: 'right', margin: 0, marginTop: 25}}/>
                                </Space>
                            </a>
                        </Dropdown>
                        <img className='user' alt='user' src='user.png' style={{ float: 'right', width: '50px', height: '50px', marginRight: 50, marginTop: 10 }} />
                    </Col>
                </Row>
            </Layout>
        </div>
    )
}

export default AppHeader