import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Profile from '../img/profile.png';

import Swal from 'sweetalert2';

const AccountTab = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    Swal.fire({
      title: 'Alert',
      icon: 'alert',
      text: 'Are you sure you want to logout.',
    }).then((result) => {
      if (result.isConfirmed) {
        handleClose();
      }
    });
  };

  return (
    <div className='account-container'>
      <Button variant="primary" onClick={handleShow}>
        <img src={Profile} alt="profile" />
        <h1>Marvin Ramos</h1>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <img src={Profile} alt="profile" />
          <h1>Marvin Ramos</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClick} className='logout'>
            LOG OUT
          </Button>
          <Button onClick={handleClose} className='cancel'>
            CANCEL
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AccountTab