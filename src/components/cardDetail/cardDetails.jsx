// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateCardDetails } from '../../Slices/cardSlice';
// import { useSubmitCardDetailsMutation } from '../../Service/apiSlice';
// import { AiOutlineExclamationCircle } from 'react-icons/ai';

// const CardDetails = () => {
//   const dispatch = useDispatch();
//   const cardDetails = useSelector((state) => state.card);
//   const [submitCardDetails, { isLoading, isSuccess, isError }] = useSubmitCardDetailsMutation();
//   const [validationError, setValidationError] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     dispatch(updateCardDetails({ name, value }));
//     if (validationError) setValidationError(''); // Clear validation error on input change
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (Object.values(cardDetails).some((value) => !value.trim())) {
//       setValidationError('All fields are required');
//       return;
//     }

//     try {
//       await submitCardDetails(cardDetails).unwrap();
//       console.log('Card Details submitted successfully');
//     } catch (error) {
//       console.error('Error submitting card details:', error);
//     }
//   };

//   return (
//     <div className="mx-auto p-6 bg-gray-200 shadow-md rounded-lg w-[80%] mt-6">
//       <h2 className="text-base font-bold mb-1 text-gray-600 flex items-center gap-1"><span><AiOutlineExclamationCircle /></span>Card Details</h2>
//       <div className="border-b border-gray-500"></div>
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
//         {Object.keys(cardDetails).map((field) => (
//           <div key={field}>
//             <label className="block text-gray-500 font-medium capitalize">
//               {field.replace('_', ' ')}
//             </label>
//             {field === 'due_date' ? (
//               <input
//                 type="date"
//                 name={field}
//                 value={cardDetails[field]}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded-md outline-none"
//               />
//             ) : field === 'status' ? (
//               <select
//                 name={field}
//                 value={cardDetails[field]}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded-md outline-none"
//               >
//                 <option value="">Select status</option>
//                 <option value="Active">Active</option>
//                 <option value="Inactive">Inactive</option>
//               </select>
//             ) : (
//               <input
//                 type="text"
//                 name={field}
//                 value={cardDetails[field]}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border rounded-md outline-none"
//               />
//             )}
//           </div>
//         ))}
//         <button
//           type="submit"
//           className="w-full bg-[#192236] text-white py-2 rounded-md font-semibold"
//           disabled={isLoading || isSuccess}
//         >
//           {isLoading ? 'Saving...' : 'Save Details'}
//         </button>
//         {validationError && <p className="text-red-600 mt-2">{validationError}</p>}
//         {isSuccess && <p className="text-green-600 mt-2">Details saved successfully!</p>}
//         {isError && <p className="text-red-600 mt-2">Error saving details. Please try again.</p>}
//       </form>
//     </div>
//   );
// };

// export default CardDetails;



import React, { useState } from 'react';

const CardDetails = () => {
  const initialState = {
    bank_name: '',
    holder_name: '',
    card_number: '',
    card_charge: '',
    due_date: '',
    year_fee: '',
    status: '',
    paid_amount: '',
    extra_pay: '',
    less_pay: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [validationError, setValidationError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (validationError) setValidationError(''); // Clear validation error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation: Check if any field is empty
    if (Object.values(formData).some((value) => !value.trim())) {
      setValidationError('All fields are required');
      return;
    }

    console.log('Form Data Submitted:', formData);
    // Reset form after submission
    setFormData(initialState);
    setValidationError('');
  };

  return (
    <div className=" p-6 bg-gray-200 shadow-md rounded-lg w-full ">
          <div className="w-full h-56 overflow-hidden rounded-md relative mb-6">
            <img
              src="https://enews.hamariweb.com/wp-content/uploads/2023/12/Meezan-Bank-Debit-Card.jpg"
              alt="Car"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-2xl font-bold">
              Insert your Card Details!
            </div>
          </div>
      <h2 className="text-base font-bold mb-1 text-gray-600">Card Details</h2>
      <div className="border-b border-gray-500"></div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        {/* Render all fields */}
        {Object.keys(initialState).map((field) => (
          <div key={field}>
            <label className="block text-gray-500 font-medium capitalize">
              {field.replace('_', ' ')}
            </label>
            {field === 'due_date' ? (
              <input
                type="date"
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md outline-none"
              />
            ) : field === 'status' ? (
              <select
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md outline-none"
              >
                <option value="">Select status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            ) : (
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md outline-none"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-[#192236] text-white py-2 rounded-md font-semibold"
        >
          Save Details
        </button>
        {validationError && <p className="text-red-600 mt-2">{validationError}</p>}
      </form>
    </div>
  );
};

export default CardDetails;





