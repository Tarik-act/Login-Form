import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { Layout, Input, Button, Checkbox, Form } from 'antd';

const { Content } = Layout;
function Login() {
  const [info, setInfo] = useState({
    email: '',
    password: '',
  });

  const login = async () => {
    try {
      const response = await fetch('https://reqres.in/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: info.email,
          password: info.password,
        }),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!info.email) return;
    login();
  };

  return (
    <>
      <Layout>
        <Content style={{ backgroundColor: '#fff' }}>
          <Row>
            <Col flex='40%'>
              <div className='left'>
                <h1
                  style={{ fontSize: '1.75rem', fontWeight: '700', margin: 0 }}
                >
                  Welcome Back
                </h1>
                <p>Sub-title text goes here</p>
                <Form
                  name='basic'
                  initialValues={{
                    remember: false,
                  }}
                >
                  <Form.Item
                    name='email'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!',
                      },
                    ]}
                  >
                    <Input
                      placeholder='Email Address *'
                      name='email'
                      value={info.email}
                      onChange={(e) =>
                        setInfo({ ...info, email: e.target.value })
                      }
                      style={{ fontSize: '.8rem', padding: '.5rem .8rem' }}
                    />
                  </Form.Item>

                  <Form.Item
                    className='form-control'
                    name='password'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder='Password *'
                      name='password'
                      value={info.password}
                      onChange={(e) =>
                        setInfo({ ...info, password: e.target.value })
                      }
                      style={{ fontSize: '.8rem', padding: '.5rem .8rem' }}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      className='btn'
                      style={{
                        backgroundColor: '#023047',
                        color: '#fff',
                        border: 0,
                        width: '100%',
                      }}
                      htmlType='submit'
                      onClick={handleSubmit}
                    >
                      Login
                    </Button>
                  </Form.Item>

                  <Form.Item name='remember' valuePropName='checked'>
                    <div className='flex'>
                      <Checkbox className='checkbox'>Remember me</Checkbox>
                      <p>Forget Password?</p>
                    </div>
                  </Form.Item>
                </Form>
              </div>
            </Col>
            <Col flex='auto' className='image-none'></Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export default Login;
