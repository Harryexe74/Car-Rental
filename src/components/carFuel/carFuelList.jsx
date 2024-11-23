import React from "react";

function FuelingList() {
  const fuelingData = [
    {
      booking_id: "B001",
      customer_paid_by: "Customer",
      verified: true,
      total_amount_paid: 100.50,
      remaining_amount_left: 20.00,
      bill_paid: true,
      created_at: "2024-11-20 10:00:00",
     
    },
    {
      booking_id: "B002",
      customer_paid_by: "Owner",
      verified: false,
      total_amount_paid: 150.75,
      remaining_amount_left: 0.00,
      bill_paid: false,
      created_at: "2024-11-18 09:30:00",
     
    },
    {
      booking_id: "B003",
      customer_paid_by: "Customer",
      verified: true,
      total_amount_paid: 75.30,
      remaining_amount_left: 10.00,
      bill_paid: true,
      created_at: "2024-11-22 11:00:00",
     
    },
    {
      booking_id: "B004",
      customer_paid_by: "Owner",
      verified: true,
      total_amount_paid: 120.00,
      remaining_amount_left: 30.00,
      bill_paid: false,
      created_at: "2024-11-19 14:30:00",
     
    },
    {
      booking_id: "B005",
      customer_paid_by: "Customer",
      verified: true,
      total_amount_paid: 200.00,
      remaining_amount_left: 50.00,
      bill_paid: true,
      created_at: "2024-11-17 08:30:00",
    
    },
  ];

  return (
    <div className="p-6 bg-gray-100 w-96 overflow-x-scroll md:w-full scroll-smooth">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Fueling Maintenance Data</h1>
      <table className="md:w-full border-collapse border border-gray-300 w-72 overflow-x-scroll md:overflow-hidden scroll-smooth">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border border-gray-300 px-4 py-2">Booking ID</th>
            <th className="border border-gray-300 px-4 py-2">Customer Paid By</th>
            <th className="border border-gray-300 px-4 py-2">Verified</th>
            <th className="border border-gray-300 px-4 py-2">Total Amount Paid</th>
            <th className="border border-gray-300 px-4 py-2">Remaining Amount Left</th>
            <th className="border border-gray-300 px-4 py-2">Bill Paid</th>
            <th className="border border-gray-300 px-4 py-2">Created At</th>
          
          </tr>
        </thead>
        <tbody>
          {fuelingData.map((data, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}
            >
              <td className="border border-gray-300 px-4 py-2">{data.booking_id}</td>
              <td className="border border-gray-300 px-4 py-2">{data.customer_paid_by}</td>
              <td className="border border-gray-300 px-4 py-2">{data.verified ? "Yes" : "No"}</td>
              <td className="border border-gray-300 px-4 py-2">${data.total_amount_paid}</td>
              <td className="border border-gray-300 px-4 py-2">${data.remaining_amount_left}</td>
              <td className="border border-gray-300 px-4 py-2">{data.bill_paid ? "Yes" : "No"}</td>
              <td className="border border-gray-300 px-4 py-2">{data.created_at}</td>
           
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FuelingList;
