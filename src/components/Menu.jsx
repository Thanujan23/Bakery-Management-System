import React from 'react';
import './Menu.css'; // Create and style this CSS file accordingly

const Menu = () => {
  return (
    <div className="menu">
      <header className="menu-header">
        <h1>Our Menu</h1>
        <p>Explore our wide variety of baked goods made fresh every day!</p>
      </header>

      {/* Cakes Section */}
      <section className="menu-section">
        <h2>Cakes</h2>
        <div className="menu-items">
          <div className="menu-item">
            <h3>Chocolate Cake</h3>
            <p>$18.99</p>
            <p>Rich and moist chocolate cake with a creamy ganache topping.</p>
          </div>
          <div className="menu-item">
            <h3>Vanilla Sponge Cake</h3>
            <p>$15.99</p>
            <p>Classic vanilla sponge cake with buttercream frosting.</p>
          </div>
          <div className="menu-item">
            <h3>Red Velvet Cake</h3>
            <p>$19.99</p>
            <p>Soft and fluffy red velvet layers with cream cheese frosting.</p>
          </div>
        </div>
      </section>

      {/* Pastries Section */}
      <section className="menu-section">
        <h2>Pastries</h2>
        <div className="menu-items">
          <div className="menu-item">
            <h3>Croissants</h3>
            <p>$3.49</p>
            <p>Buttery, flaky croissants baked to golden perfection.</p>
          </div>
          <div className="menu-item">
            <h3>Apple Turnovers</h3>
            <p>$4.49</p>
            <p>Delicious pastries filled with spiced apple filling.</p>
          </div>
          <div className="menu-item">
            <h3>Strawberry Danish</h3>
            <p>$3.99</p>
            <p>Sweet and tangy strawberry-filled Danish pastries.</p>
          </div>
        </div>
      </section>

      {/* Bread Section */}
      <section className="menu-section">
        <h2>Bread</h2>
        <div className="menu-items">
          <div className="menu-item">
            <h3>Sourdough Bread</h3>
            <p>$5.99</p>
            <p>Artisan sourdough with a crispy crust and soft interior.</p>
          </div>
          <div className="menu-item">
            <h3>Brioche Loaf</h3>
            <p>$6.49</p>
            <p>Soft, buttery brioche bread, perfect for breakfast or desserts.</p>
          </div>
          <div className="menu-item">
            <h3>Whole Wheat Bread</h3>
            <p>$4.99</p>
            <p>Healthy and hearty whole wheat bread for everyday use.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="menu-footer">
        <p>Visit us in-store or order online for delivery!</p>
      </footer>
    </div>
  );
};

export default Menu;
