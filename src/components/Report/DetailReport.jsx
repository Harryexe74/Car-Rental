// import React, { forwardRef, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

// const DetailReport = forwardRef(({ userId, onClose, onPrint }, ref) => {
//   const [userDetails, setUserDetails] = useState(null);

//   // useEffect(() => {
//   //   // Fetch user details based on userId
//   //   const fetchUserDetails = async () => {
//   //     try {
//   //       const response = await fetch(`/api/users/${userId}`);
//   //       const data = await response.json();
//   //       setUserDetails(data);
//   //     } catch (error) {
//   //       console.error('Error fetching user details:', error);
//   //     }
//   //   };

//   //   fetchUserDetails();
//   // }, [userId]);

//   // if (!userDetails) {
//   //   return <div>Loading...</div>;
//   // }

//   return (
//     <div ref={ref} className="mt-4 p-4 bg-primary-100 border border-primary-200">
//       <h2 className="text-xl font-bold mb-4">User Details</h2>
//       <p><strong>Name:</strong> {userDetails.name}</p>
//       <p><strong>Email:</strong> {userDetails.email}</p>
//       <p><strong>Phone:</strong> {userDetails.phone}</p>
//       {/* Add other user details as needed */}
//       <div className="mt-4 flex space-x-4">
//         <button
//           className="p-2 bg-primary-600 text-white rounded"
//           onClick={onClose}
//         >
//           Close
//         </button>
//         <button
//           className="p-2 bg-primary-600 text-white rounded"
//           onClick={onPrint}
//         >
//           Print
//         </button>
//       </div>
//     </div>
//   );
// });

// DetailReport.displayName = 'DetailReport';

// DetailReport.propTypes = {
//   userId: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired,
//   onPrint: PropTypes.func.isRequired,
// };

// export default DetailReport;

import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DetailReport = forwardRef(({ report, onClose, onPrint }, ref) => {
  // Calculate the total amount of all transactions
  const totalAmount = report.transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  return (
    <div ref={ref} className="mt-4 p-4 bg-white rounded-[10px] text-primary-900 border border-primary-200 a4-size">
      <h2 className="text-xl font-bold mb-4">Report Details</h2>
      <table className="min-w-full bg-white">
        <tbody>
          <tr>
            <td className="border px-4 py-2 font-bold">Name</td>
            <td className="border px-4 py-2">{report.name}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold">User</td>
            <td className="border px-4 py-2">{report.user}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold">Type</td>
            <td className="border px-4 py-2">{report.type}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold">Date</td>
            <td className="border px-4 py-2">{report.date}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold">Details</td>
            <td className="border px-4 py-2">{report.details}</td>
          </tr>
          {/* Add other report details as needed */}
        </tbody>
      </table>

      <h2 className="text-xl font-bold mt-6 mb-4">Transaction Details</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="border px-4 py-2">Transaction ID</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Amount</th>
            <th className="border px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {report.transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="border px-4 py-2">{transaction.id}</td>
              <td className="border px-4 py-2">{transaction.date}</td>
              <td className="border px-4 py-2">{transaction.amount}</td>
              <td className="border px-4 py-2">{transaction.description}</td>
            </tr>
          ))}
          <tr>
            <td className="border px-4 py-2 font-bold" colSpan="3">Total Transactions</td>
            <td className="border px-4 py-2">{report.transactions.length}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 font-bold" colSpan="3">Total Amount</td>
            <td className="border px-4 py-2">{totalAmount}</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-4 flex space-x-4">
        <button
          className="p-2 bg-primary-600 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
        <button
          className="p-2 bg-primary-600 text-white rounded"
          onClick={onPrint}
        >
          Print
        </button>
      </div>
    </div>
  );
});

DetailReport.displayName = 'DetailReport';

DetailReport.propTypes = {
  report: PropTypes.shape({
    name: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    transactions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onPrint: PropTypes.func.isRequired,
};

export default DetailReport;