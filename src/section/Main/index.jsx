import React, { useEffect, useState } from 'react';
import Chart from '../../component/Chart';
import Dropdown from '../../component/Dropdown';
import Loader from '../../component/Loader';
import { useTranslation } from 'react-i18next';
import './styles.css';

function Index() {
  const [principal, setPrincipal] = useState(20);
  const [timeInterval, setTimeInterval] = useState('biweekly');
  const [series, setSeries] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const options = [
    { value: 'onetime', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'biweekly', label: 'Bi-weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'yearly', label: 'Yearly' },
  ];

  useEffect(() => {
    calculateGrowth();
  }, []);
  // Constants for calculation
  const marketConditions = {
    weak: 5,
    average: 10,
    strong: 15,
    deposit: 0,
  };
  const intervals = {
    onetime: 365,
    weekly: 52,
    biweekly: 26,
    monthly: 12,
    quarterly: 4,
    yearly: 1,
  };
  const calculateGrowth = () => {
    setLoading(true);
    setSeries([]);
    const interval = intervals[timeInterval] || 1;
    const firstAmount = principal * interval;
    // setTimeout(() => {
    Object.keys(marketConditions).map((condition) => {
      const growthRate = marketConditions[condition];
      const data = [];
      for (let i = 1; i <= 30; i++) {
        const growth = firstAmount * Math.pow(1 + growthRate / 100, i);

        data.push(growth.toFixed(2));
      }

      return setSeries((prev) => [...prev, { name: condition, data }]);
    });
    setLoading(false);
    // }, 250);
  };
  const reset = () => {
    setPrincipal(0);
    setSeries([]);
    setShowButton(false);
  };
  return (
    <div className="main">
      <h1> {t('potentialEarnings.title')}</h1>
      <div className="main-app">
        <div className="app-tool">
          {t('potentialEarnings.newDeposit')}
          <div className="principal-input">
            $
            <input
              type="text"
              id="principal"
              className="principal-input-field"
              value={principal}
              onChange={(e) => {
                setShowButton(true);
                setPrincipal(e.target.value.replace(/\D/, ''));
              }}
            />
          </div>
          <label>
            {t('potentialEarnings.frequency')}
            <Dropdown
              isSearchable={false}
              isMulti={false}
              placeHolder="Select"
              options={options}
              onChange={(value) => setTimeInterval(value.value)}
            />
          </label>
          <button
            onClick={calculateGrowth}
            className={showButton ? 'show-apply-button' : 'apply-button'}
          >
            {t('potentialEarnings.apply')}
          </button>
          {showButton && (
            <button onClick={reset} className="reset-button">
              {t('potentialEarnings.reset')}
            </button>
          )}
        </div>
        {loading ? (
          <div className="loader-menu">
            <Loader />
          </div>
        ) : (
          <Chart series={series} principal={principal} loading={loading} />
        )}
      </div>
      <p className="imp-text">{t('potentialEarnings.important')}</p>
    </div>
  );
}

export default Index;
