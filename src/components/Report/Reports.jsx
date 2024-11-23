// import { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { format } from "date-fns";

// const Reports = () => {
//   // State to manage filters
//   const [userType, setUserType] = useState("All");
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [month, setMonth] = useState(null);

//   // Handle User Type Change
//   const handleUserTypeChange = (e) => {
//     setUserType(e.target.value);
//   };

//   // Handle Date and Month Change
//   const handleStartDateChange = (date) => setStartDate(date);
//   const handleEndDateChange = (date) => setEndDate(date);
//   const handleMonthChange = (date) => setMonth(date);

//   // Dummy Data (In real use-case, this would come from an API)
//   const reports = [
//     { id: 1, name: "Report 1", user: "Admin", date: "2024-09-05" },
//     { id: 2, name: "Report 2", user: "User", date: "2024-08-15" },
//     { id: 3, name: "Report 3", user: "Customer", date: "2024-09-01" },
//     // More reports...
//   ];

//   // Filter data based on selected filters
//   const filteredReports = reports.filter((report) => {
//     const reportDate = new Date(report.date);
//     const isUserTypeMatch = userType === "All" || report.user === userType;
//     const isDateMatch =
//       (!startDate || reportDate >= startDate) &&
//       (!endDate || reportDate <= endDate);
//     const isMonthMatch =
//       !month || format(reportDate, "yyyy-MM") === format(month, "yyyy-MM");

//     return isUserTypeMatch && (isDateMatch || isMonthMatch);
//   });

//   return (
//     <div className="bg-primary-600 mx-auto p-4 rounded-[10px]">
//       <h1 className="text-3xl font-bold mb-6">Report Page</h1>

//       {/* Filters */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//         {/* User Type Filter */}
//         <div>
//           <label htmlFor="userType" className="block mb-2 text-sm font-medium">
//             User Type
//           </label>
//           <select
//             id="userType"
//             value={userType}
//             onChange={handleUserTypeChange}
//             className="block w-full p-2 rounded"
//           >
//             <option value="All">All</option>
//             <option value="User">User</option>
//             <option value="Admin">Admin</option>
//             <option value="Customer">Customer</option>
//           </select>
//         </div>

//         {/* Date Range Filter */}
//         <div className="">
//           <label className="block mb-2 text-sm font-medium">Date Range</label>
//           <div className="flex space-x-2 ">
//             <DatePicker
//               selected={startDate}
//               onChange={handleStartDateChange}
//               placeholderText="Start Date"
//               className="p-2 rounded"
//             />
//             <DatePicker
//               selected={endDate}
//               onChange={handleEndDateChange}
//               placeholderText="End Date"
//               className="p-2 rounded"
//             />
//           </div>
//         </div>

//         {/* Month Filter */}
//         <div className="ml-6">
//           <label className="block mb-2  text-sm font-medium">Month</label>
//           <DatePicker
//             selected={month}
//             onChange={handleMonthChange}
//             showMonthYearPicker
//             dateFormat="MMMM yyyy"
//             placeholderText="Select Month"
//             className="p-2 border border-gray-300 rounded"
//           />
//         </div>
//       </div>

//       {/* Filtered Reports */}
//       <div>
//         <h2 className="text-xl font-bold mb-4">Filtered Reports</h2>
//         <ul className="space-y-2">
//           {filteredReports.length > 0 ? (
//             filteredReports.map((report) => (
//               <li
//                 key={report.id}
//                 className="p-4 bg-white border border-gray-200 rounded shadow"
//               >
//                 <p>
//                   <strong>{report.name}</strong> - {report.user}
//                 </p>
//                 <p>Date: {report.date}</p>
//               </li>
//             ))
//           ) : (
//             <p>No reports found for the selected filters.</p>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Reports;


import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import DetailReport from "./DetailReport";
import { useReactToPrint } from 'react-to-print';

const Reports = () => {
  // State to manage filters
  const [userType, setUserType] = useState("All");
  const [selectedUser, setSelectedUser] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [month, setMonth] = useState(null);

  // Handle User Type Change
  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setSelectedUser(null); // Reset selected user when the user type changes
  };

  // Handle Date and Month Change
  const handleStartDateChange = (date) => setStartDate(date);
  const handleEndDateChange = (date) => setEndDate(date);
  const handleMonthChange = (date) => setMonth(date);

  // Handle selected User/Customer Change
  const handleSelectedUserChange = (e) => setSelectedUser(e.target.value);

  // Dummy Data (Users and Reports)
  const users = [
    { id: 1, name: "Alice", type: "User" },
    { id: 2, name: "Bob", type: "User" },
    { id: 3, name: "Charlie", type: "User" },
    { id: 4, name: "Daisy", type: "Customer" },
    { id: 5, name: "Eve", type: "Customer" },
    { id: 6, name: "Frank", type: "Customer" },
  ];
  
  const reports = [
    {
      id: 1,
      name: "Report 1",
      user: "Alice",
      type: "User",
      date: "2024-09-05",
      details: "Details of Report 1",
      transactions: [
        { id: "T1", date: "2024-09-01", amount: 100, description: "Transaction 1" },
        { id: "T2", date: "2024-09-02", amount: 200, description: "Transaction 2" },
      ],
    },
    {
      id: 2,
      name: "Report 2",
      user: "Bob",
      type: "User",
      date: "2024-08-15",
      details: "Details of Report 2",
      transactions: [
        { id: "T3", date: "2024-08-10", amount: 150, description: "Transaction 3" },
        { id: "T4", date: "2024-08-12", amount: 250, description: "Transaction 4" },
      ],
    },
    {
      id: 3,
      name: "Report 3",
      user: "Charlie",
      type: "User",
      date: "2024-09-01",
      details: "Details of Report 3",
      transactions: [
        { id: "T5", date: "2024-08-30", amount: 300, description: "Transaction 5" },
        { id: "T6", date: "2024-08-31", amount: 400, description: "Transaction 6" },
      ],
    },
    {
      id: 4,
      name: "Report 4",
      user: "Daisy",
      type: "Customer",
      date: "2024-07-22",
      details: "Details of Report 4",
      transactions: [
        { id: "T7", date: "2024-07-20", amount: 500, description: "Transaction 7" },
        { id: "T8", date: "2024-07-21", amount: 600, description: "Transaction 8" },
      ],
    },
    {
      id: 5,
      name: "Report 5",
      user: "Eve",
      type: "Customer",
      date: "2024-09-10",
      details: "Details of Report 5",
      transactions: [
        { id: "T9", date: "2024-09-05", amount: 700, description: "Transaction 9" },
        { id: "T10", date: "2024-09-06", amount: 800, description: "Transaction 10" },
      ],
    },
    {
      id: 6,
      name: "Report 6",
      user: "Frank",
      type: "Customer",
      date: "2024-06-14",
      details: "Details of Report 6",
      transactions: [
        { id: "T11", date: "2024-06-10", amount: 900, description: "Transaction 11" },
        { id: "T12", date: "2024-06-12", amount: 1000, description: "Transaction 12" },
      ],
    },
  ];

  // Filter data based on selected filters
  const filteredReports = reports.filter((report) => {
    const reportDate = new Date(report.date);
    const isUserTypeMatch = userType === "All" || report.type === userType;
    const isSpecificUserMatch = !selectedUser || report.user === selectedUser;
    const isDateMatch =
      (!startDate || reportDate >= startDate) &&
      (!endDate || reportDate <= endDate);
    const isMonthMatch =
      !month || format(reportDate, "yyyy-MM") === format(month, "yyyy-MM");

    return (
      isUserTypeMatch && isSpecificUserMatch && (isDateMatch || isMonthMatch)
    );
  });

  // Filter users based on selected type (User or Customer)
  const filteredUsers = users.filter((u) => u.type === userType);
  const [selectedReport, setSelectedReport] = useState(null);
  const reportRef = useRef();

  const handleReportClick = (report) => {
    setSelectedReport(report);
  };

  const handlePrint = useReactToPrint({
    content: () => reportRef.current,
  });


  return (
    <div className="p-6 bg-primary-600 mx-auto text-white rounded-[10px]">
      <h1 className="text-3xl font-bold mb-6">Reports</h1>

      {/* Filters */}
      <div className="flex flex-col w-96 mx-auto">
        {/* User Type Filter */}
        <div>
          <label htmlFor="userType" className="block mb-2 text-sm font-medium">
            User Type
          </label>
          <select
            id="userType"
            value={userType}
            onChange={handleUserTypeChange}
            className="block w-full bg-primary-100 p-2 rounded"
          >
            <option value="All">All</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
            <option value="Customer">Customer</option>
          </select>
        </div>

        {/* Specific User/Customer Dropdown */}
        {userType === "User" || userType === "Customer" ? (
          <div>
            <label htmlFor="specificUser" className="block mb-2 text-sm font-medium">
              Select {userType}
            </label>
            <select
              id="specificUser"
              value={selectedUser || ""}
              onChange={handleSelectedUserChange}
              className="block w-full p-2 bg-primary-100 rounded"
            >
              <option value="">All {userType}s</option>
              {filteredUsers.map((user) => (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        ) : null}

        {/* Date Range Filter */}
        <div className="flex-wrap gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Start Date</label>
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              placeholderText="Start Date"
              className="p-2 bg-primary-100 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Last Date</label>
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              placeholderText="End Date"
              className="p-2 bg-primary-100 rounded"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-sm font-medium">Month</label>
            <DatePicker
              selected={month}
              onChange={handleMonthChange}
              showMonthYearPicker
              dateFormat="MMMM yyyy"
              placeholderText="Select Month"
              className="p-2 bg-primary-100 rounded"
            />
          </div>
        </div>

        {/* Month Filter */}

      </div>

      {/* Filtered Reports */}
      <div>
        <h2 className="text-xl font-bold mb-4">Filtered Reports</h2>
        <ul className="space-y-2">
          {filteredReports.length > 0 ? (
            filteredReports.map((report) => (
              <li
                key={report.id}
                className="p-4 bg-primary-100 rounded-[10px] hover:shadow-sm text-primary-900 cursor-pointer "
                onClick={() => handleReportClick(report)}
              >
                <p>
                  <strong>{report.name}</strong> - {report.user} ({report.type})
                </p>
                <p>Date: {report.date}</p>
              </li>
            ))
          ) : (
            <p>No reports found for the selected filters.</p>
          )}
        </ul>
      </div>
      {selectedReport && (
        <DetailReport
          ref={reportRef}
          report={selectedReport}
          onClose={() => setSelectedReport(null)}
          onPrint={handlePrint}
        />
      )}
    </div>
  );
};

export default Reports;
