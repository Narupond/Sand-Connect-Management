import React from 'react';
import './Navbar.css';
import { Row, Col, Button } from 'antd';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';

function Navbar() {
    const clearData = localStorage.getItem("username");
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/login')
    }
    return (
        <>
            <Row className='row-nav' style={{ background: '#1e376d', overflow: 'hidden', }}>
                <Col span={24}>
                <ul>
                    <li><Link to='/CreateHN'>สร้าง HN</Link></li>
                    <li style={{marginRight: 20}}><Link to='/Login' onClick={logout}>logout</Link></li>
                </ul>
                </Col>
            </Row>
        </>
    )
}

export default Navbar