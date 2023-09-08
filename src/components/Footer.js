import React from 'react';
import { Footer } from 'antd/es/layout/layout';
import './Footer.css';

function Appfooter() {
  return (
    <Footer style={{ padding: "0px" ,display:'flex',justifyContent:'cneter',margin:'auto',textAlign:'center'}}>
                <div className="footer" >
                <p className='txt-footer'>Currently V.1.4.3 Copyright ©{new Date().getFullYear()}. &nbsp;SandConnect by Sandbox Lab Center. &nbsp;Bangkok Hospital Hatyai All Rights Reserved</p>
                </div>
            </Footer>
  )
}

export default Appfooter