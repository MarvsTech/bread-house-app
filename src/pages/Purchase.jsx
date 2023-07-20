import React from 'react'
import ProductTable from '../components/ProductTable';
import AccountTab from '../components/AccountTab';
import Footer from '../components/Footer';

const Purchase = () => {
  return (
    <div className="main-content">
      <section className='account-section'>
        <AccountTab />
      </section>
      <section className='product-table-container my-5'>
        <ProductTable />
      </section>
      <section className="footer mt-auto">
        <Footer />
      </section>
    </div>
  )
}

export default Purchase