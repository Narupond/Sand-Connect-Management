import React from 'react';
import './Navbar.css';
import { Row, Col, Button } from 'antd';
import Link from 'antd/es/typography/Link';

function Navbar() {
    return (
        <>
            <Row className='row-nav' style={{ background: '#1e376d' }}>
                <Col span={24}>
                    <div className='container'>
                        <div className='tab-memu'>
                            <ul>
                                <li className='flex-fill'>
                                    <Link>สร้าง HN</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Navbar