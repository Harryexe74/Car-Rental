import React from "react";

function CarBookingList() {
  const bookingData = [
    {
      car_id: "C001",
      username: "John Doe",
      company_name: "XYZ Rentals",
      start_date: "2024-11-20",
      end_date: "2024-11-25",
      price_per_day: 50,
      with_driver: true,
      driver_details: {
        name: "Michael Johnson",
        license_number: "DL12345",
        contact: "123-456-7890",
      },
      agreement_document: "https://via.placeholder.com/300?text=Agreement+Document+C001",
      car_picture: "https://via.placeholder.com/300?text=Car+Picture+C001",
    },
    {
      car_id: "C002",
      username: "Jane Smith",
      company_name: "ABC Travels",
      start_date: "2024-11-18",
      end_date: "2024-11-22",
      price_per_day: 60,
      with_driver: false,
      driver_details: null,
      agreement_document: "https://via.placeholder.com/300?text=Agreement+Document+C002",
      car_picture: "https://via.placeholder.com/300?text=Car+Picture+C002",
    },
  ];

  return (
    <div className="p-6 bg-gray-100  w-96 overflow-x-scroll  md:w-full scroll-smooth">
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Booking Data</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border border-gray-300 px-4 py-2">Car ID</th>
            <th className="border border-gray-300 px-4 py-2">Username</th>
            <th className="border border-gray-300 px-4 py-2">Company Name</th>
            <th className="border border-gray-300 px-4 py-2">Start Date</th>
            <th className="border border-gray-300 px-4 py-2">End Date</th>
            <th className="border border-gray-300 px-4 py-2">Price Per Day</th>
            <th className="border border-gray-300 px-4 py-2">With Driver</th>
            <th className="border border-gray-300 px-4 py-2">Driver Details</th>
            <th className="border border-gray-300 px-4 py-2">Agreement Document</th>
            <th className="border border-gray-300 px-4 py-2">Car Picture</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map((booking, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100`}
            >
              <td className="border border-gray-300 px-4 py-2">{booking.car_id}</td>
              <td className="border border-gray-300 px-4 py-2">{booking.username}</td>
              <td className="border border-gray-300 px-4 py-2">{booking.company_name}</td>
              <td className="border border-gray-300 px-4 py-2">{booking.start_date}</td>
              <td className="border border-gray-300 px-4 py-2">{booking.end_date}</td>
              <td className="border border-gray-300 px-4 py-2">${booking.price_per_day}</td>
              <td className="border border-gray-300 px-4 py-2">{booking.with_driver ? "Yes" : "No"}</td>
              <td className="border border-gray-300 px-4 py-2">
                {booking.with_driver && booking.driver_details ? (
                  <div>
                    <p>
                      <strong>Name:</strong> {booking.driver_details.name}
                    </p>
                    <p>
                      <strong>License:</strong> {booking.driver_details.license_number}
                    </p>
                    <p>
                      <strong>Contact:</strong> {booking.driver_details.contact}
                    </p>
                  </div>
                ) : (
                  "N/A"
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <a
                  href={booking.agreement_document}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View Agreement
                </a>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <a
                  href={booking.car_picture}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View Car Picture
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CarBookingList;
