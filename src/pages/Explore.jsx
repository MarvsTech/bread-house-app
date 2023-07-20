import React from 'react';
import AccountTab from '../components/AccountTab';
import Footer from '../components/Footer';
import ProductTab from '../components/ProductTab';

const Explore = () => {
  return (
    <div class="main-content">
      <section className='account-section'>
        <AccountTab />
      </section>
      <section className="product-category">
        <ProductTab />
      </section>
      <section className="footer">
        <Footer />
      </section>
    </div>
  )
}

export default Explore