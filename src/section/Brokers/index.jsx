import React, { useState } from 'react';
import ProductList from './ProductList.jsx';
import { useTranslation } from 'react-i18next';
import Designz from '../../assets/Designz.png';
import './styles.css';

const categories = ['Category A', 'Category B', 'Category C', 'Category D'];

const partnerProductList = [
  {
    name: ' Product 1',
    img: Designz,
    rating: 2,
    fees: 'Varies',
    minimum: '$100',
    highlight:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    name: 'Product 2',
    img: Designz,
    rating: 3,
    fees: '0.3%',
    minimum: '$150',
    highlight:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    name: 'Product 3',
    img: Designz,
    rating: 4,
    fees: 'Takeaway',
    minimum: '$200',
    highlight:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
];

const productList = [
  {
    name: 'Product 1',
    rating: 2,
    category: 'Category A',
    fees: '$20',
    minimum: '$200',
    highlight:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    name: 'Product 2',
    rating: 3,
    category: 'Category B',
    fees: '$25',
    minimum: '$250',
    highlight:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    name: 'Product 3',
    rating: 4,
    category: 'Category C',
    fees: '$30',
    minimum: '$300',
    highlight:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    name: 'Product 4',
    rating: 5,
    category: 'Category D',
    fees: '$30',
    minimum: '$300',
    highlight:
      'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
];

const NavigationMenu = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <ul className="navigation-menu">
      {categories.map((category) => (
        <li key={category}>
          <button
            onClick={() => onSelectCategory(category)}
            style={{
              fontWeight: category === selectedCategory ? 'bold' : 'normal',
            }}
            className={category === selectedCategory ? 'activeButton' : ''}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
};

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const { t } = useTranslation();
  const products =
    selectedCategory === 'Partner'
      ? partnerProductList
      : selectedCategory === 'Category A'
      ? productList.filter((product) => product.category === 'Category A')
      : selectedCategory === 'Category B'
      ? productList.filter((product) => product.category === 'Category B')
      : selectedCategory === 'Category C'
      ? productList.filter((product) => product.category === 'Category C')
      : productList.filter((product) => product.category === 'Category D');

  return (
    <div className="broker-secion">
      <h3>{t('brokers.heading')}</h3>
      <p>
        {t('brokers.text')} {new Date().toLocaleDateString()}
      </p>
      <NavigationMenu
        categories={['Partner', ...categories]}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProductList products={products} />
    </div>
  );
};

export default Index;
