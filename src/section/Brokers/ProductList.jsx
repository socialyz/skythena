import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.css';
import StartRating from '../../component/StartRating';

const ProductList = ({ products }) => {
  const { t } = useTranslation();
  return (
    <div className="product-list-wrapper">
      <div className="product-table product-table-head">
        <p className="product-table-head-cell">{t('brokers.partner')}</p>
        <p className="product-table-head-cell">{t('brokers.fees')}</p>
        <p className="product-table-head-cell">{t('brokers.minimum')}</p>
        <p className="product-table-head-cell">{t('brokers.highlight')}</p>
      </div>
      {products.map((product, index) => (
        <div key={index} className="product-table">
          <p className="product-table-cell product-table-cell-product">
            <img src={product.img} alt="Product" />
            <StartRating rating={product.rating} />
          </p>
          <p className="product-table-cell product-table-cell-fees">
            {product.fees}
          </p>
          <p className="product-table-cell product-table-cell-minimum">
            {' '}
            {product.minimum}
          </p>
          <div className="product-table-cell product-table-cell-highlight">
            <span>{product.highlight}</span>
            <button>
              {t('brokers.next')} <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
