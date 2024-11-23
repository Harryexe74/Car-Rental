// import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import Tablefooter from "../List/Tablefooter";
import Tableheader from "../List/Tableheader"; // Import Tableheader
import { FaEdit, FaEye } from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom";
import { useState } from "react";

const TransactionTable = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const itemsPerPage = 12;

	const [transactionData, setTransactionData] = useState("")
	// Handle page change
	const handleChange = (event, value) => {
		setCurrentPage(value);
	};

	// Filter data based on search query
	const filteredData = transactionData.filter(
		(transaction) =>
			transaction.customerId.toString().includes(searchQuery.toLowerCase()) ||
			transaction.paymentMethod
				.toLowerCase()
				.includes(searchQuery.toLowerCase())
	);

	const columnHeaders = [
		"Id",
		"Customer ID",
		"Rental Charges",
		"Additional Charges",
		"Payment Method",
		"Payment Date",
		"Allocation ID",
		"Status",
		"Vendor ID",
		"Action", // Added Action column
	];

	const handleToggleStatus = (id, currentStatus) => {
		// Update the status for the item with the given id
		setTransactionData((prevData) =>
			prevData.map((transaction) =>
				transaction.Id === id
					? {
							...transaction,
							Status: currentStatus === "Active" ? "Inactive" : "Active",
					  }
					: transaction
			)
		);
	};

	return (
		<div className="w-full ">
			{/* Table Header */}
			<Tableheader
				title={"Transaction"}
				columnHeaders={columnHeaders}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>

			{/* Responsive Table Container */}
			<div className="overflow-x-auto">
				{filteredData.length === 0 ? (
					<div className="text-center text-primary-900 py-4">
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
											className="px-2 py-2 text-left text-xs sm:px-4 sm:py-2 sm:text-sm md:text-base"
										>
											{header}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{filteredData
									.slice(
										(currentPage - 1) * itemsPerPage,
										currentPage * itemsPerPage
									)
									.map((transaction, index) => (
										<tr
											key={index}
											className="bg-white text-primary-900 hover:bg-hover-100"
										>
											<td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
												{transaction.Id}
											</td>
											<td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
												{transaction.customerId}
											</td>
											<td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
												{transaction.rentalCharges}
											</td>
											<td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
												{transaction.additionalCharges}
											</td>
											<td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
												{transaction.paymentMethod}
											</td>
											<td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
												{transaction.paymentDate}
											</td>
											<td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
												{transaction.allocationId}
											</td>
											<td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
												<Switch
													checked={transaction.Status === "Active"}
													onChange={() =>
														handleToggleStatus(
															transaction.Id,
															transaction.Status
														)
													}
													inputProps={{ "aria-label": "Status switch" }}
												/>
											</td>
											<td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
												{transaction.vendorId}
											</td>
											<td className="px-2 py-2 text-left">
												<div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
													<button
														className="text-blue-500 border rounded-[5px] border-blue-500 p-1 sm:p-2 hover:text-blue-700 text-xs sm:text-sm md:text-base"
														onClick={() => console.log("Edit", transaction.Id)}
													>
														<FaEdit />
													</button>
													<Link
														to="/billing-payments/list-transcation/card-detail"
														className="text-green-500 border rounded-[5px] border-green-500 p-1 sm:p-2 hover:text-green-700 text-xs sm:text-sm md:text-base"
														onClick={() => console.log("View", transaction.Id)}
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

export default TransactionTable;
