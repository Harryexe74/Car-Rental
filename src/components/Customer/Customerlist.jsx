import { useState } from "react";
import Switch from "@mui/material/Switch";
import Tablefooter from "../List/Tablefooter";
import Tableheader from "../List/Tableheader"; // Import Tableheader
import { FaEdit, FaEye, FaTrash } from "react-icons/fa"; // Import icons including FaTrash
import { Link } from "react-router-dom";
import { useGetCustomersQuery } from "../../redux/slices/customersApiSlice";
import { useUpdateCustomerMutation, useDeleteCustomerMutation } from "../../redux/slices/customersApiSlice";

const Customerlist = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 12;

    const { data: customers, isLoading } = useGetCustomersQuery({});
    const [updateCustomer] = useUpdateCustomerMutation();
    const [deleteCustomer] = useDeleteCustomerMutation(); // Hook for delete

    // Handle page change
    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    // Column headers for the table
    const columnHeaders = ["S. No", "Customer", "Cnic", "PhoneNumber", "Status", "Action"];

    // Handle the status toggle
    const handleToggleStatus = async (id, currentStatus) => {
        const newStatus = currentStatus === "active" ? "inactive" : "active";
        
        try {
            await updateCustomer({ id, status: newStatus }).unwrap();  // API call to update status
            console.log(`Status updated to ${newStatus} for customer ID: ${id}`);
        } catch (error) {
            console.error("Failed to update status: ", error);
        }
    };

    // Handle customer deletion
    const handleDeleteCustomer = async (id) => {
        if (window.confirm("Are you sure you want to delete this customer?")) {
            try {
                await deleteCustomer(id).unwrap(); // API call to delete customer
                console.log(`Customer ID ${id} deleted successfully`);
            } catch (error) {
                console.error("Failed to delete customer: ", error);
            }
        }
    };

    return (
        <div className="w-full ">
            {/* Table Header */}
            <Tableheader
                title={"Customer"}
                columnHeaders={columnHeaders}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            {/* Responsive Table Container */}
            <div className="overflow-x-auto">
                {isLoading ? (
                    "Loading..."
                ) : customers && customers?.doc?.length === 0 ? (
                    <div className="text-center text-primary-100 py-4">
                        Data not found
                    </div>
                ) : (
                    <>
                        <table className="min-w-full table-auto rounded-lg">
                            <thead className="bg-ground text-primary-900 rounded-t-lg">
                                <tr>
                                    {columnHeaders.map((header, index) => (
                                        <th
                                            key={index}
                                            className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base"
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {customers?.doc
                                    ?.slice(
                                        (currentPage - 1) * itemsPerPage,
                                        currentPage * itemsPerPage
                                    )
                                    .map((customer, index) => (
                                        <tr
                                            key={index}
                                            className="bg-ground text-primary-900 hover:bg-hover-100"
                                        >
                                            <td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
                                                {++index}
                                            </td>
                                            <td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base flex items-center gap-2">
                                                <img
                                                    src={
                                                        customer.imageUrl ||
                                                        "https://www.pngitem.com/pimgs/m/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png"
                                                    }
                                                    alt={customer.name}
                                                    className="w-10 h-10 sm:w-16 sm:h-16 rounded-full object-cover"
                                                />
                                                <span>
                                                    {customer.firstName + " " + customer.lastName}
                                                </span>
                                            </td>
                                            <td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
                                                {customer.cnic}
                                            </td>
                                            <td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
                                                {customer.phoneNumber}
                                            </td>
                                            <td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
                                                <Switch
                                                    checked={customer.status === "active"}
                                                    onChange={() =>
                                                        handleToggleStatus(customer.id, customer.status)
                                                    }
                                                    inputProps={{ "aria-label": "Status switch" }}
                                                />
                                            </td>
                                            <td className="px-2 py-2 text-left">
                                                <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                                                    <button
                                                        className="text-blue-500 border border-blue-500 p-1 sm:p-2 hover:text-blue-700 text-xs sm:text-sm md:text-base"
                                                        onClick={() => console.log("Edit", customer.id)}
                                                    >
                                                        <FaEdit />
                                                    </button>
                                                    <Link
                                                        to={`/customers/customer-details/${customer.id}`}
                                                        className="text-green-500 border border-green-500 p-1 sm:p-2 hover:text-green-700 text-xs sm:text-sm md:text-base"
                                                        onClick={() => console.log("View", customer.id)}
                                                    >
                                                        <FaEye />
                                                    </Link>
                                                    <button
                                                        className="text-red-500 border border-red-500 p-1 sm:p-2 hover:text-red-700 text-xs sm:text-sm md:text-base"
                                                        onClick={() => handleDeleteCustomer(customer.id)}
                                                    >
                                                        <FaTrash />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>

                        {/* Footer with Pagination */}
                        <Tablefooter
                            currentPage={currentPage}
                            itemsPerPage={itemsPerPage}
                            filteredData={customers?.doc}
                            handleChange={handleChange}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default Customerlist;
