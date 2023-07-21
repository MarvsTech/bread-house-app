import React from 'react';
import Swal from 'sweetalert2';

const CheckOut = () => {
  const handleClick = () => {
    Swal.fire({
      title: 'Success',
      icon: 'success',
      text: 'Your work has been saved.',
    });
  };

  return (
    <>
      <button className="btn btn-info btn" onClick={handleClick}>
        Success
      </button>
    </>
  );
};

export default CheckOut;