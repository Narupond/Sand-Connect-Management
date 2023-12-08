import React from 'react';
import { Footer } from 'antd/es/layout/layout';

function Appfooter() {
  return (
    <Footer style={{ padding: "0px" ,display:'flex',justifyContent:'cneter',margin:'auto',textAlign:'center'}}>
                <div style={{ position: 'fixed', bottom: 0, left: 0, padding: 10, margin: 0, textAlign: 'center', width: '100%', color: '#fff', backgroundColor: '#1e376d' }} >
                <p style={{ padding: 3, margin: 0, fontSize: '13px' }}>Currently V.1.4.3 Copyright ©{new Date().getFullYear()}. &nbsp;SandConnect by Sandbox Lab Center. &nbsp;Bangkok Hospital Hatyai All Rights Reserved</p>
                </div>
            </Footer>
  )
}

export default Appfooter