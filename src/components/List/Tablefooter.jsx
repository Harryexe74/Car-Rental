// import React from 'react'
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

// const Tablefooter = () => {
//   return (
//     <>
//     {/* Footer with Showing text and Pagination */}
//     <div className="flex flex-col md:flex-row justify-between mt-4 p-2 my-2 space-y-2 md:space-y-0">
//     {/* Showing X to Y of Z entries */}
//     <div className="text-secondary-0">
//       Showing {startIndex} to {endIndex} of {filteredData.length} entries
//     </div>

//     {/* Pagination aligned to the right */}
//     <Stack spacing={2} direction="row" className="self-center md:self-auto">
//       <Pagination
//         count={Math.ceil(filteredData.length / itemsPerPage)}
//         page={currentPage}
//         onChange={handleChange}
//         variant="outlined"
//         sx={{
//           '& .MuiPaginationItem-root': {
//             color: '#f0f0f0', // Replace this with your secondary-0 color
//             borderColor: '#f0f0f0', // Border color for pagination items
//           },
//           '& .MuiPaginationItem-root:hover': {
//             backgroundColor: '#f0f0f0', // Background color on hover
//             color: '#000', // Text color on hover
//           },
//           '& .MuiPaginationItem-root.Mui-selected': {
//             backgroundColor: '#f0f0f0', // Background color for selected item
//             color: '#000', // Text color for selected item
//             borderColor: '#f0f0f0', // Border color for selected item
//           },
//         }}
//       />
//     </Stack>
//   </div>
//   </>
//   )
// }

// export default Tablefooter


// Tablefooter.jsx
import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Tablefooter = ({ currentPage, itemsPerPage, filteredData, handleChange }) => {
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, filteredData.length);

  return (
    <div className="flex flex-col md:flex-row text-primary-900 gap-2 justify-center md:justify-between items-center bg-ground rounded-b-[10px] px-12 py-2 mb-2">
      {/* Showing X to Y of Z entries */}
      <div className="text-primary-900">
        Showing {startIndex} to {endIndex} of {filteredData.length} entries
      </div>

      {/* Pagination aligned to the right */}
      <Stack spacing={2} direction="row" className="self-center md:self-auto">
        <Pagination
          count={Math.ceil(filteredData.length / itemsPerPage)}
          page={currentPage}
          onChange={handleChange}
          variant="outlined"
                    sx={{
            '& .MuiPaginationItem-root': {
              color: '#4A90E2', // Replace this with your desired color
              borderColor: '#4A90E2', // Border color for pagination items
            },
            '& .MuiPaginationItem-root:hover': {
              backgroundColor: '#4A90E2', // Background color on hover
              color: '#FFFFFF', // Text color on hover
            },
            '& .MuiPaginationItem-root.Mui-selected': {
              backgroundColor: '#4A90E2', // Background color for selected item
              color: '#FFFFFF', // Text color for selected item
              borderColor: '#4A90E2', // Border color for selected item
            },
          }}
        />
      </Stack>
    </div>
  );
};

export default Tablefooter;
