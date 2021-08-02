import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ marginTop: '500px' }}>
      <Link to='/contact'>Contacto</Link>
      <h1>Soy el home</h1>
    </div>
  );
};

export default Home;
