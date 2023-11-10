import React from 'react';
import { Link } from 'react-router-dom';
import Im from '../components/Images/cleanup.png';
import '../styles/Cleanup.css';
import Layout from '../components/Layout/Layout';

function Cleanupdrive() {
  return (
    <Layout>
    <div className="Cleanupdrive" style={{ backgroundImage: `url(${Im})` }}>
    
      <div className="hContainer">
      <h1>BE A HERO FOR A CLEANER PLANET</h1>
        <h2>"Clean up the Earth, it's the only Home we have got"</h2>
        <div className="content">
          <div className="section">
            <h3>Mithi River Clean up</h3>
            <p>Date:10th December 2023</p>
            <p>Timings:04:00pm to 06:00pm</p>
            <p>At the causeway slope, Mangalore</p>
            <p>REGISTRATION IS MANDATORY</p>
            <p>Open Invitation,</p>
            <p>Everyone is Welcome</p>
            </div>
            <Link to="/Cleanup_register">
              <button>Register</button>
            </Link>
          
        </div>
      </div>
      </div>
    </Layout>
  );
}

export default Cleanupdrive;