import React from 'react';
import CardView from './CardView';

const CardDetail = () => {
  const cardDetails = {
    ownerId: '',
    ownerType: 'customer', 
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <CardView card={cardDetails} />
    </div>
  );
};

export default CardDetail;