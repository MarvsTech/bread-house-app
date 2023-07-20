import React from 'react'
import AccountTab from '../components/AccountTab';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const Cart = () => {
  return (
    <div class="main-content">
      <section className='account-section'>
        <AccountTab />
      </section>
      <section className='product-section'>
        <Banner />
      </section>
      <section className="footer">
        <Footer />
      </section>
    </div>
  )
}

export default Cart