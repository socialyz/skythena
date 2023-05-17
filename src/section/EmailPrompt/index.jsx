import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles.css';

const Index = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const { t } = useTranslation();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="box">
      <h2 className="box-heading">{t('box.box-heading')}</h2>
      <p className="box-text">{t('box.box-text')}</p>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="input-field"
            placeholder={t('box.input.firstName')}
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="input-field"
            placeholder={t('box.input.lastName')}
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            id="email"
            name="email"
            className="input-field"
            placeholder={t('box.input.email')}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="wrapper">
          <button type="submit" className="submit-button">
            {t('box.subscribe')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Index;
