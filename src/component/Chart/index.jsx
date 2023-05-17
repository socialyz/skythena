import React from 'react';
import Chart from 'react-apexcharts';
import { useTranslation } from 'react-i18next';
// import Loader from '../../component/Loader';
import './styles.css';

function Index(props) {
  const { t } = useTranslation();
  const options = {
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
    legend: {
      show: false,
      position: 'top',
      // fontSize: '20px',
      fontFamily: 'Roboto, sans-serif',
      // formatter: function (seriesName, opts) {
      //   return [seriesName];
      // },
    },
    xaxis: {
      categories: [...Array(30).keys()].map((i) => i + 2023),
      tickAmount: 4,
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          var val = Math.abs(value);
          if (val >= 1000000) {
            val = '$' + (val / 1000000).toFixed(0) + ' M';
          }
          if (val >= 1000) {
            val = '$' + (val / 1000).toFixed(0) + ' K';
          }

          return val;
        },
      },
      opposite: true,
    },
    colors: ['#6CB4EE', '#0066b2', '#002D62', '#7CB9E8'],
    stroke: {
      width: [3, 3, 3, 3],
      curve: 'straight',
      dashArray: [5, 7, 0, 3],
    },
  };
  const series = props.series.length > 0 ? [...props.series] : [];
  // if (props.loading) {
  //   return <Loader />;
  // }
  return (
    <div className="chart">
      <div className="legend">
        <p className="strong-market">{t('market.strong')}</p>
        <p className="average-market">{t('market.average')}</p>
        <p className="weak-market">{t('market.weak')}</p>
        <p className="deposits">{t('deposits')}</p>
      </div>
      <Chart options={options} series={series} type="line" />
    </div>
  );
}

export default Index;
