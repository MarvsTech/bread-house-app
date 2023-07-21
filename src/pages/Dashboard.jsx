import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import AccountTab from '../components/AccountTab';
import ProductSlider from '../components/ProductSlider';
import Service from '../components/Service';
import ProductTab from '../components/ProductTab';
import Footer from '../components/Footer';
import MobileProductSlider from '../components/MobileProductSlider';
import MobileProductTab from '../components/MobileProductTab';

const Dashboard = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="main-content">
      <section className='account-section'>
        <AccountTab />
      </section>
      <section className="product-banner my-5">
        <Banner />
      </section>

      {screenWidth >= 600 ? (
        <section className="product-slider my-5">
          <ProductSlider />
        </section>
      ) : (
        <section className="mobile-product-slider my-5">
          <MobileProductSlider />
        </section>
      )}

      <section className="product-service my-5">
        <Service />
      </section>
      
      {screenWidth >= 600 ? (
        <section className="product-category my-5">
          <ProductTab />
        </section>
      ) : (
        <section className="mobile-product-category my-5">
          <MobileProductTab />
        </section>
      )}

      <section className="footer mt-auto">
        <Footer />
      </section>
    </div>
  )
}

export default Dashboard