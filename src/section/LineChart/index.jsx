import React from 'react';
import Chart from 'react-apexcharts';
import { useTranslation } from 'react-i18next';
import './styles.css';

const LineChart = () => {
  const { t } = useTranslation();
  const points = [];
  for (let i = 0; i < 1000; i++) {
    const x = (i - 500) / 100;
    const y = Math.exp((-x * x) / 2) / Math.sqrt(2 * Math.PI);
    points.push(y * 100);
  }
  const data = {
    series: [
      {
        name: 'Line Chart',
        data: points,
      },
    ],
    options: {
      chart: {
        type: 'line',
        zoom: {
          enabled: true,
        },

        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        // width: [2],
      },
      xaxis: {
        show: false,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },

      yaxis: {
        show: false,
      },
    },
  };

  return (
    <div className="line-chart">
      <h3>{t('lineChart.title')} </h3>
      <div className="chart-head">
        <p>{t('lineChart.chartHead.lessRisk')} </p>
        <p>{t('lineChart.chartHead.moreRisk')} </p>
      </div>
      <Chart
        options={data.options}
        series={data.series}
        type="line"
        height={350}
      />
      <div className="chart-bottom">
        <p>{t('lineChart.fixedIncome')} </p>
        <p>{t('lineChart.equity')} </p>
      </div>
    </div>
  );
};

export default LineChart;
