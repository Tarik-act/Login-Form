import React from 'react';
import './index.css';
import 'antd-button-color/dist/css/style.css';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <main style={{ fontFamily: `'Poppins', sans-serif` }}>
      <Navbar />
      <Login />
    </main>
  );
}

export default App;
