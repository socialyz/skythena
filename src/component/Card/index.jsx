import React from 'react';
import './styles.css';

function Index({ icon, text }) {
  return (
    <div className="card">
      <i className={icon}></i>
      <p>{text}</p>
    </div>
  );
}

export default Index;
