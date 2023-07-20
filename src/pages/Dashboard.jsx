import React from 'react';
import Banner from '../components/Banner';
import AccountTab from '../components/AccountTab';
import ProductSlider from '../components/ProductSlider';
import Service from '../components/Service';
import ProductTab from '../components/ProductTab';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div className="main-content">
      <section className='account-section'>
        <AccountTab />
      </section>
      <section className="product-banner my-5">
        <Banner />
      </section>
      <section className="product-slider my-5">
        <ProductSlider />
      </section>
      <section className="product-service my-5">
        <Service />
      </section>
      <section className="product-category my-5">
        <ProductTab />
      </section>
      <section className="footer mt-auto">
        <Footer />
      </section>
    </div>
  )
}

export default Dashboard