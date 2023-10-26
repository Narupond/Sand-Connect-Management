import React, { useState } from 'react';
import './Login.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  const navigate = useNavigate();


  const handleLogin = async () => {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const json = await response.json();
      const data = json.result;
      const name = data.name + ' ' + data.lastname
      localStorage.setItem('username', name);
      navigate('/createHN',{replace:true});
    } else {
      message.error('เข้าสู่ระบบไม่สำเร็จ');
    }
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className='App'>
      <div className='App-header' style={{ background: '#fff', }}>
        <Form
          name="normal_login"
          className='form-login'
          style={{ margin: 20, padding: 40, paddingTop: 60, paddingBottom: 60, border: '2px solid #fff', borderRadius: '15px', boxShadow: '5px 10px 8px #f0f0f0' }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <img className='user' alt='user' src='user.png' style={{ width: '80px', height: '80px', marginBottom: 40 }} />
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined
              className="site-form-item-icon" />}
              style={{ width: 300 }}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary"
              htmlType="submit"
              className="login-button"
              style={{ width: 300 }}
              onClick={handleLogin}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;