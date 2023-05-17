import React from 'react';
import PieChart from '../../component/PieChart';
import './styles.css';

function Index({ sectionText, sectionTitle, equityRatio, returnAmount }) {
  return (
    <div className="strategies">
      <p>
        <strong>{sectionTitle}</strong> - {sectionText}
      </p>
      <PieChart percent={equityRatio[0]} returnAmount={returnAmount} />
      <PieChart percent={equityRatio[1]} returnAmount={returnAmount} />
      <PieChart percent={equityRatio[2]} returnAmount={returnAmount} />
    </div>
  );
}

export default Index;
