import React from 'react';
import './styles.css';
import { useTranslation } from 'react-i18next';

const PieChart = ({ percent, returnAmount }) => {
  const progressBarStyle = {
    background: `conic-gradient(
      #2f3f8b ${percent * 3.6}deg,
      #03bda3 ${percent * 3.6}deg
    )`,
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="circle-container">
        <div className="circle-container-left">
          <div className="circular-progress" style={progressBarStyle}>
            <div className="value-container">
              <span className="fixed-income-percent">{percent}</span>/
              <span className="equity-percent">{100 - percent}</span>
            </div>
          </div>{' '}
        </div>
        <div>
          {percent >= 0 && (
            <div className="percent">
              <span>
                {percent}% {t('circle-container.Income')}
              </span>{' '}
              /
              <span className="percent-equity">
                {100 - percent}%{t('circle-container.Equity')}
              </span>
            </div>
          )}

          <div className="circle-container-right">
            <div>
              <p>{t('circle-container.circle-container-right.p1')}:</p>
              <b>{returnAmount && returnAmount[0]}</b>
            </div>
            <div>
              <p>{t('circle-container.circle-container-right.p2')}:</p>
              <b>{returnAmount && returnAmount[1]}</b>
            </div>
            <div>
              <p>{t('circle-container.circle-container-right.p3')}:</p>
              <b>{returnAmount && returnAmount[1]}</b>
            </div>
            <div>
              <p>{t('circle-container.circle-container-right.p4')}:</p>
              <b>{returnAmount && returnAmount[3]}</b>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default PieChart;
