import React from 'react';
import Banner from '../components/Banner';
import AccountTab from '../components/AccountTab';
import ProductSlider from '../components/ProductSlider';
import Service from '../components/Service';
import ProductTab from '../components/ProductTab';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <>
      <section className='account-section'>
        <AccountTab />
      </section>
      <section className="product-banner">
        <Banner />
      </section>
      <section className="product-slider">
        <ProductSlider />
      </section>
      <section className="product-service">
        <Service />
      </section>
      <section className="product-category">
        <ProductTab />
      </section>
      <section className="footer">
        <Footer />
      </section>
    </>
    
  )
}

export default Dashboard