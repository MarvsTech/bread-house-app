import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Profile from '../img/profile.png';

const AccountTab = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Button onClick={handleClose} className='logout'>
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