import React from "react";

function CardPaymentList() {
  const paymentData = [
    {
      bank_name: "Bank of America",
      holder_name: "John Doe",
      card_number: "**** **** **** 1234",
      card_charge: "$50",
      due_date: "2024-12-15",
      year_fee: "$100",
      status: "Pending",
      paid_amount: "$50",
      extra_pay: "$10",
      less_pay: "$0",
    },
    {
      bank_name: "Chase",
      holder_name: "Jane Smith",
      card_number: "**** **** **** 5678",
      card_charge: "$75",
      due_date: "2024-11-30",
      year_fee: "$120",
      status: "Paid",
      paid_amount: "$75",
      extra_pay: "$5",
      less_pay: "$0",
    },
    {
      bank_name: "Wells Fargo",
      holder_name: "Robert Brown",
      card_number: "**** **** **** 4321",
      card_charge: "$120",
      due_date: "2024-12-05",
      year_fee: "$150",
      status: "Pending",
      paid_amount: "$100",
      extra_pay: "$20",
      less_pay: "$0",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 w-96 overflow-x-scroll md:w-full scroll-smooth">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Card Payment Data</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border border-gray-300 px-4 py-2">Bank Name</th>
            <th className="border border-gray-300 px-4 py-2">Holder Name</th>
            <th className="border border-gray-300 px-4 py-2">Card Number</th>
            <th className="border border-gray-300 px-4 py-2">Card Charge</th>
            <th className="border border-gray-300 px-4 py-2">Due Date</th>
            <th className="border border-gray-300 px-4 py-2">Year Fee</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Paid Amount</th>
            <th className="border border-gray-300 px-4 py-2">Extra Pay</th>
            <th className="border border-gray-300 px-4 py-2">Less Pay</th>
          </tr>
        </thead>
        <tbody>
          {paymentData.map((data, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}
            >
              <td className="border border-gray-300 px-4 py-2">{data.bank_name}</td>
              <td className="border border-gray-300 px-4 py-2">{data.holder_name}</td>
              <td className="border border-gray-300 px-4 py-2">{data.card_number}</td>
              <td className="border border-gray-300 px-4 py-2">{data.card_charge}</td>
              <td className="border border-gray-300 px-4 py-2">{data.due_date}</td>
              <td className="border border-gray-300 px-4 py-2">{data.year_fee}</td>
              <td className="border border-gray-300 px-4 py-2">{data.status}</td>
              <td className="border border-gray-300 px-4 py-2">{data.paid_amount}</td>
              <td className="border border-gray-300 px-4 py-2">{data.extra_pay}</td>
              <td className="border border-gray-300 px-4 py-2">{data.less_pay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CardPaymentList;
