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
      <section className='product-section my-5'>
        <Banner />
      </section>
      <section className="product-category my-5">
        <ProductTab />
      </section>
      {/* <section className="footer mt-auto">
        <Footer />
      </section> */}
    </div>
  )
}

export default Cart