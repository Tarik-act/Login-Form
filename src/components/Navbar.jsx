import 'antd/dist/antd.css';
import Button from 'antd-button-color';
import { Layout } from 'antd';
import React from 'react';
const { Header } = Layout;

function Navbar() {
  return (
    <>
      <Layout
        style={{ position: 'absolute', top: '0', left: '0', width: '100%' }}
      >
        <Header
          style={{
            backgroundColor: '#fff',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            zIndex: 1,
          }}
        >
          <div className='flex'>
            <p className='nav-para'>
              ATools<span>.</span>
            </p>
            <div className='btn-container' style={{ fontSize: '.8rem' }}>
              <Button
                className='btn'
                style={{
                  backgroundColor: '#023047',
                  color: '#fff',
                  padding: '0 2.5rem',
                  border: 0,
                  fontSize: '.75rem',
                }}
              >
                Start Free Trial
              </Button>
              <Button
                className='btn'
                style={{
                  backgroundColor: '#fcac60',
                  color: '#fff',
                  padding: '0 2.5rem',
                  border: 0,
                  fontSize: '.75rem',
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </Header>
      </Layout>
    </>
  );
}

export default Navbar;
