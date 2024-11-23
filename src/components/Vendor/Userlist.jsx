import { useState } from "react";
import Switch from "@mui/material/Switch";
import Tablefooter from "../List/Tablefooter";
import Tableheader from "../List/Tableheader";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../redux/slices/usersApiSlice";
import { useUpdateUserMutation } from "../../redux/slices/usersApiSlice";
import Loader from "../shared/Loader";
import NoDataFoundMessage from "../shared/NoDataFoundMessage";
import { useDeleteUserMutation } from "../../redux/slices/usersApiSlice";

const UserList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 12;

  const { data: users, isLoading, isError, refetch } = useGetUsersQuery({});
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const columnHeaders = [
    "S. No",
    "User",
    "Name",
    "Phone Number",
    "Status",
    "Action",
  ];

  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active";
    
    try {
      await updateUser({ id, status: newStatus }).unwrap();
      refetch(); // Refresh the data
      console.log(`Status updated to ${newStatus} for user ID: ${id}`);
    } catch (error) {
      console.error("Failed to update status: ", error);
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id).unwrap();
        refetch(); // Refresh the data
        console.log(`User ID ${id} deleted successfully`);
      } catch (error) {
        console.error("Failed to delete user: ", error);
      }
    }
  };

  return (
    <div className="w-full">
      <Tableheader
        title="Users"
        columnHeaders={columnHeaders}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="overflow-x-auto">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <NoDataFoundMessage message="Failed to fetch users." />
        ) : users?.doc?.length ? (
          <>
            <table className="min-w-full table-auto rounded-lg">
              <thead className="bg-ground text-primary-900 rounded-t-lg">
                <tr>
                  {columnHeaders.map((header, index) => (
                    <th key={index} className="px-2 py-2 text-left text-xs sm:px-4 sm:py-2 sm:text-sm md:text-base">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.doc
                  .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                  .map((user, index) => (
                    <tr key={user.id} className="bg-white text-primary-900 hover:bg-hover-100">
                      <td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
                        {(currentPage - 1) * itemsPerPage + index + 1}
                      </td>
                      <td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base flex items-center gap-2">
                        <img
                          src={user.image || "https://www.pngitem.com/pimgs/m/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png"}
                          alt={user.name}
                          className="w-10 h-10 sm:w-16 sm:h-16 rounded-full object-cover"
                        />
                        <span>{user.email}</span>
                      </td>
                      <td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">{user.name}</td>
                      <td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">{user.phoneNumber}</td>
                      <td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
                        <Switch
                          checked={user.status === "active"}
                          onChange={() => handleToggleStatus(user.id, user.status)}
                          inputProps={{ "aria-label": "Status switch" }}
                        />
                      </td>
                      <td className="px-2 py-2 text-left">
                        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                          <Link
                            to={`/users/update/${user.id}`}
                            className="text-blue-500 border border-blue-500 p-1 sm:p-2 hover:text-blue-700 text-xs sm:text-sm md:text-base"
                          >
                            <FaEdit />
                          </Link>
                          <Link
                            to={`/users/user-details/${user.id}`}
                            className="text-green-500 border border-green-500 p-1 sm:p-2 hover:text-green-700 text-xs sm:text-sm md:text-base"
                          >
                            <FaEye />
                          </Link>
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="text-red-500 border border-red-500 p-1 sm:p-2 hover:text-red-700 text-xs sm:text-sm md:text-base"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <Tablefooter
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              filteredData={users.doc}
              handleChange={handleChange}
            />
          </>
        ) : (
          <NoDataFoundMessage message="No users data found." />
        )}
      </div>
    </div>
  );
};

export default UserList;
