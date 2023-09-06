import React from 'react';
import './AppHeader.css';
import { Layout } from 'antd';
import { Row, Col } from 'antd';

const { Header } = Layout;

// const { Search } = Input;
// const onSearch = (value) => console.log(value);

function AppHeader() {
    return (
        <div className="App">
            <Layout>
                <Header className='header' style={{ background: 'white', }}>
                    <Row className='row'>
                        <Col span={20}>
                            <img className='logo' alt='BHH' src='logo-en.png'></img>
                        </Col>
                        <Col span={4}>
                            <img className='user' alt='user' src='user.png' style={{ float: 'right', width: '50px' }} />
                            <p className='user-name' style={{ float: 'right' }}>ชื่อ :xxx xxxx</p>
                        </Col>
                    </Row>
                </Header>
            </Layout>
        </div>
    )
}

export default AppHeader