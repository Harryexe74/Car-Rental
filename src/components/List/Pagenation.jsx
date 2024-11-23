// import React from 'react';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

// const Pagenation = () => {
//   return (
//     <Stack spacing={2}>
//       <Pagination count={10} variant="outlined" />
//       <Pagination count={10} variant="outlined" color="primary" />
//       <Pagination count={10} variant="outlined" color="secondary" />
//       <Pagination count={10} variant="outlined" disabled />
//     </Stack>
//   );
// };

// export default Pagenation;


import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Pagenation = () => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" />
      <Pagination count={10} variant="outlined" color="secondary" />
      <Pagination 
        count={10} 
        variant="outlined" 
        sx={{ 
          '& .MuiPaginationItem-root': {
            color: '#f0f0f0',  // Custom text color (replace with secondary-0)
            borderColor: '#f0f0f0'  // Custom border color
          },
          '& .MuiPaginationItem-root:hover': {
            backgroundColor: '#f0f0f0',  // Background on hover
            color: '#000', // Hover text color
          },
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: '#f0f0f0',  // Background for selected item
            color: '#000',  // Selected item text color
            borderColor: '#f0f0f0'  // Selected item border color
          },
        }} 
      />
      <Pagination count={10} variant="outlined" disabled />
    </Stack>
  );
};

export default Pagenation;
