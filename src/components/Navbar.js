import React from 'react';
import './Navbar.css';
import { Row, Col, Button } from 'antd';
import {Link} from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';

function Navbar() {
    return (
        <>
            <Row className='row-nav' style={{ background: '#1e376d', overflow: 'hidden', }}>
                <Col span={24}>
                <ul>
                    <li><Link to='/CreateHN'>สร้าง HN</Link></li>
                </ul>
                </Col>
            </Row>
        </>
    )
}

export default Navbar