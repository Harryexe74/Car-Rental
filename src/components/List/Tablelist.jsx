



// Tablelist.jsx
import React, { useState } from 'react';
import { firmsData } from '../../../utils/data';
import Tableheader from './Tableheader';
import Tablefooter from './Tablefooter';

const Tablelist = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 12;

  // Handle page change
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  // Filter data based on search query
  const filteredData = firmsData.filter(firm =>
    firm.firm.toLowerCase().includes(searchQuery.toLowerCase()) ||
    firm.price.current.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columnHeaders = [
    "Firm",
    "Price",
    "Account Size",
    "Profit Split",
    "Profit Target",
    "Max Daily Loss",
    "Max Total Drawdown",
    "Commission Per Round Lot",
    "Profit to Drawdown Ratio",
    "TrustPilot Rating",
    "Loyalty Points"
  ];

  return (
    <div className="w-full rounded-lg bg-primary-800">
      {/* Table Header */}
      <Tableheader columnHeaders={columnHeaders} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        {filteredData.length === 0 ? (
          <div className="text-center text-secondary-0 py-4">
            Data not found
          </div>
        ) : (
          <>
            <table className="min-w-full table-auto rounded-lg">
              <thead className="bg-primary-900 text-secondary-0 rounded-t-lg">
                <tr>
                  {columnHeaders.map((header, index) => (
                    <th key={index} className="px-4 py-2">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData
                  .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                  .map((firm, index) => (
                    <tr key={index} className="bg-primary-800 text-secondary-0 hover:bg-hover-100">
                      <td className="px-4 py-2">{firm.firm}</td>
                      <td className="px-4 py-2">
                        <span className="line-through">{firm.price.old}</span> {firm.price.current}
                      </td>
                      <td className="px-4 py-2">{firm.accountSize}</td>
                      <td className="px-4 py-2">{firm.profitSplit}</td>
                      <td className="px-4 py-2">{firm.profitTarget}</td>
                      <td className="px-4 py-2">{firm.maxDailyLoss}</td>
                      <td className="px-4 py-2">{firm.maxTotalDrawdown}</td>
                      <td className="px-4 py-2">{firm.commissionPerRoundLot}</td>
                      <td className="px-4 py-2">{firm.profitToDrawdownRatio}</td>
                      <td className="px-4 py-2">{firm.trustPilotRating}</td>
                      <td className="px-4 py-2">{firm.loyaltyPoints}</td>
                    </tr>
                  ))}
              </tbody>
            </table>

            {/* Footer with Showing text and Pagination */}
            <Tablefooter
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              filteredData={filteredData}
              handleChange={handleChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Tablelist;
