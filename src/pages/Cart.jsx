import React from 'react'
import AccountTab from '../components/AccountTab';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import ProductTab from '../components/ProductTab';

const Cart = () => {
  return (
    <div className="main-content">
      <section className='account-section'>
        <AccountTab />
      </section>
      <section className='product-section'>
        <Banner />
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

export default Cart