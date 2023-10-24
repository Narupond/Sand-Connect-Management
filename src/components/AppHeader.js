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
                <Header className='header' style={{ background: 'white', }}>
                    <Row>
                        <Col span={8}>
                            <img className='logo' alt='BHH' src='logo-en.png'></img>
                        </Col>
                        <Col span={8} offset={8}>
                            <img className='user' alt='user' src='user.png' style={{ float: 'right', width: '50px', marginLeft: 15, marginTop: 5, }} />
                            <p className='user-name' style={{ float: 'right', margin: 0, display: 'inline', marginRight: 20 }}>ชื่อ : {data}</p>
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
                                        <DownOutlined style={{ float: 'right' }}/>
                                    </Space>
                                </a>
                            </Dropdown>
                        </Col>
                    </Row>
                </Header>
            </Layout>
        </div>
    )
}

export default AppHeader