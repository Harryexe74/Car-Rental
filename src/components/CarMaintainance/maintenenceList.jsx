import React from "react";

function CarMaintenenceList() {
  const serviceData = [
    {
      car_id: "C001",
      date: "2024-11-20",
      chassis_no: "CH1234567890",
      engine: "E123456",
      reg_no: "ABC1234",
      cell: "123-456-7890",
      type: "Engine Repair",
      labour: "5 hours",
      total_labour_cost: 100,
      total_parts_cost: 150,
      grand_total: 250,
    },
    {
      car_id: "C002",
      date: "2024-11-21",
      chassis_no: "CH0987654321",
      engine: "E987654",
      reg_no: "XYZ5678",
      cell: "987-654-3210",
      type: "Transmission Repair",
      labour: "6 hours",
      total_labour_cost: 120,
      total_parts_cost: 200,
      grand_total: 320,
    },
    {
      car_id: "C003",
      date: "2024-11-22",
      chassis_no: "CH1122334455",
      engine: "E112233",
      reg_no: "DEF6789",
      cell: "555-123-4567",
      type: "Brake Service",
      labour: "3 hours",
      total_labour_cost: 80,
      total_parts_cost: 50,
      grand_total: 130,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 w-96 overflow-x-scroll md:w-full scroll-smooth">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Car Service Data</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border border-gray-300 px-4 py-2">Car ID</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Chassis No</th>
            <th className="border border-gray-300 px-4 py-2">Engine</th>
            <th className="border border-gray-300 px-4 py-2">Reg No</th>
            <th className="border border-gray-300 px-4 py-2">Cell</th>
            <th className="border border-gray-300 px-4 py-2">Type</th>
            <th className="border border-gray-300 px-4 py-2">Labour</th>
            <th className="border border-gray-300 px-4 py-2">Total Labour Cost</th>
            <th className="border border-gray-300 px-4 py-2">Total Parts Cost</th>
            <th className="border border-gray-300 px-4 py-2">Grand Total</th>
          </tr>
        </thead>
        <tbody>
          {serviceData.map((data, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}
            >
              <td className="border border-gray-300 px-4 py-2">{data.car_id}</td>
              <td className="border border-gray-300 px-4 py-2">{data.date}</td>
              <td className="border border-gray-300 px-4 py-2">{data.chassis_no}</td>
              <td className="border border-gray-300 px-4 py-2">{data.engine}</td>
              <td className="border border-gray-300 px-4 py-2">{data.reg_no}</td>
              <td className="border border-gray-300 px-4 py-2">{data.cell}</td>
              <td className="border border-gray-300 px-4 py-2">{data.type}</td>
              <td className="border border-gray-300 px-4 py-2">{data.labour}</td>
              <td className="border border-gray-300 px-4 py-2">${data.total_labour_cost}</td>
              <td className="border border-gray-300 px-4 py-2">${data.total_parts_cost}</td>
              <td className="border border-gray-300 px-4 py-2">${data.grand_total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CarMaintenenceList;
