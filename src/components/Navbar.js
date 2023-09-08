import React from 'react';
import './Navbar.css';
import { Row, Col } from 'antd';

function Navbar() {
    return (
        <>
            <Row className='row-nav'style={{ background: '#1e376d' }}>
                <Col span={24}>
                    <div className='container'>
                        <div className='tab-memu'>
                            <ul>
                                <li className='flex-fill'>สร้าง HN</li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Navbar