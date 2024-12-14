import React from 'react';
import './Product.css';

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: 'Chocolate Cake',
      price: '$18.99',
      description: 'Rich and moist chocolate cake topped with creamy frosting.',
      image: 'choca.jfif',
    },
    {
      id: 2,
      name: 'Cinnamon Rolls',
      price: '$6.99',
      description: 'Warm, gooey cinnamon rolls with a sweet glaze.',
      image: 'cinnomon.jfif',
    },
    {
      id: 3,
      name: 'Fresh Croissants',
      price: '$3.49',
      description: 'Buttery and flaky croissants, baked fresh daily.',
      image: 'fresh.jfif',
    },
    {
      id: 4,
      name: 'Blueberry Muffins',
      price: '$5.99',
      description: 'Soft muffins bursting with fresh blueberries.',
      image: 'bluemuffin.avif',
    },
    {
      id: 5,
      name: 'Lemon Cake',
      price: '$7.99',
      description: 'Light and zesty lemon cake with a tangy glaze.',
      image: 'lemoncake.avif',
    },
    {
      id: 6,
      name: 'Apple Pie',
      price: '$9.99',
      description: 'Classic apple pie with a buttery, flaky crust.',
      image: 'applepie.avif',
    },
    {
      id: 7,
      name: 'Strawberry Shortcake',
      price: '$8.99',
      description: 'Delicious shortcake layered with fresh strawberries and whipped cream.',
      image: 'short.avif',
    },
    {
      id: 8,
      name: 'Carrot Cake',
      price: '$10.99',
      description: 'Moist carrot cake with cream cheese frosting.',
      image: 'carrot.avif',
    },

  ];

  return (
    <div className="product-page">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
