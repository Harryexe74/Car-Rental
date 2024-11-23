import React, { useState } from 'react';
import Tablefooter from '../List/Tablefooter';
import Tableheader from '../List/Tableheader'; // Import Tableheader
import { FaEdit, FaEye } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom';

const Cardlist = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [cardData, setCardData] = useState(initialCardData); // State for card data
  const itemsPerPage = 12;

  // Handle page change
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  // Filter data based on search query
  const filteredData = cardData.filter(card =>
    card.cardHolderName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columnHeaders = [
    "ownerId",
    "ownerType", // Default value from schema
    "cardNumber",
    "cardHolderName",
    "expiryDate",
    "cvv",
    "billingAddress",
  ];

  return (
    <div className="w-full rounded-lg bg-primary-800">
      {/* Table Header */}
      <Tableheader
        title={"Card List"} // Updated title
        columnHeaders={columnHeaders}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

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
                    <th key={index} className="px-4 py-2 text-left">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData
                  .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                  .map((card, index) => (
                    <tr key={index} className="bg-primary-800 text-secondary-0 hover:bg-hover-100">
                      <td className="px-4 py-2 text-left">{card.ownerId}</td>
                      <td className="px-4 py-2 text-left">{card.ownerType}</td>
                      <td className="px-4 py-2 text-left">{card.cardNumber}</td>
                      <td className="px-4 py-2 text-left">{card.cardHolderName}</td>
                      <td className="px-4 py-2 text-left">{card.expiryDate}</td>
                      <td className="px-4 py-2 text-left">{card.cvv}</td>
                      <td className="px-4 py-2 text-left">{card.billingAddress}</td>
                      <td className="px-4 py-2 text-left">
                        <div className="flex space-x-2">
                          <button
                            className="text-blue-500 border border-blue-500 p-2 hover:text-blue-700"
                            onClick={() => console.log('Edit', card.ownerId)}
                          >
                            <FaEdit />
                          </button>
                          <Link to="/card-detail"
                            className="text-green-500 border border-green-500 p-2 hover:text-green-700"
                            onClick={() => console.log('View', card.ownerId)}
                          >
                            <FaEye />
                          </Link>
                        </div>
                      </td>
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

export default Cardlist;
