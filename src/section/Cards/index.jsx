import React from 'react';
import './styles.css';
import Card from '../../component/Card';
import { useTranslation } from 'react-i18next';

function Index() {
  const { t } = useTranslation();
  return (
    <div className="cards">
      <Card icon="fa-solid fa-credit-card" text={t('Card.creditCardText')} />
      <Card icon="fa-solid fa-landmark" text={t('Card.personalLoanText')} />
      <Card icon="fa-solid fa-briefcase" text={t('Card.businessLoanText')} />
    </div>
  );
}

export default Index;
