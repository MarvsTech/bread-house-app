import React from 'react'
import Profile from '../img/profile.png';

const AccountTab = () => {
  return (
    <div className='account-container'>
      <img src={Profile} alt="profile" />
      <h1>Marvin Ramos</h1>
    </div>
  )
}

export default AccountTab