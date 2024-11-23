import { useState } from "react";
import Tablefooter from "../List/Tablefooter";
import Tableheader from "../List/Tableheader"; // Import Tableheader
import { FaEdit, FaEye } from "react-icons/fa"; // Import icons
import { useGetBookingsQuery } from "../../redux/slices/bookingsApiSlice";
import Loader from "../shared/Loader";
import NoDataFoundMessage from "../shared/NoDataFoundMessage";
import { formatDate } from "../../helpers/helper";

const Carallocationtable = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const itemsPerPage = 12;

	const { data: bookings, isLoading } = useGetBookingsQuery({});

	console.log(bookings);

	// Handle page change
	const handleChange = (event, value) => {
		setCurrentPage(value);
	};

	const columnHeaders = [
		"Id",
		"Car ID",
		"Customer ID",
		"Rental Start Date",
		"Rental End Date",
		"Total Days",
		"Initial Mileage",
		"Total Price",
		"Actions",
	];

	return (
		<div className="w-full">
			{/* Table Header */}
			<Tableheader
				title={"Car Allocations"} // Update title to "Car Allocation"
				columnHeaders={columnHeaders}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>

			{/* Responsive Table Container */}
			<div className="overflow-x-auto">
				{isLoading ? (
					<Loader />
				) : bookings && bookings?.doc?.length ? (
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
								{bookings?.doc
									?.slice(
										(currentPage - 1) * itemsPerPage,
										currentPage * itemsPerPage
									)
									.map((car, index) => (
										<tr
											key={index}
											className="bg-white text-center text-primary-900 hover:bg-hover-100"
										>
											{/* Add nowrap to avoid text breaking */}
											<td className="px-2 py-2 text-left whitespace-nowrap text-xs sm:px-1 sm:text-sm md:text-base">
												{++index}
											</td>
											<td className="px-2 py-2 text-left whitespace-nowrap text-xs sm:px-1 sm:text-sm md:text-base">
												{car.carId}
											</td>
											<td className="px-2 py-2 text-left whitespace-nowrap text-xs sm:px-1 sm:text-sm md:text-base">
												{car.customerId}
											</td>
											<td className="px-2 py-2 text-left whitespace-nowrap text-xs sm:px-1 sm:text-sm md:text-base">
												{formatDate(car.rentalStartDate)}
											</td>
											<td className="px-2 py-2 text-left whitespace-nowrap text-xs sm:px-1 sm:text-sm md:text-base">
												{formatDate(car.rentalEndDate)}
											</td>
											<td className="px-2 py-2 text-left whitespace-nowrap text-xs sm:px-1 sm:text-sm md:text-base">
												{car.totalDays}
											</td>
											<td className="px-2 py-2 text-left whitespace-nowrap text-xs sm:px-1 sm:text-sm md:text-base">
												{car.initialMileage}
											</td>
											<td className="px-2 py-2 text-left whitespace-nowrap text-xs sm:px-1 sm:text-sm md:text-base">
												${car.totalPrice}
											</td>
											<td className="px-2 py-2 text-left">
												<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
													<button
														className="text-blue-500 border border-blue-500 p-1 sm:p-2 hover:text-blue-700 text-xs sm:text-sm md:text-base"
														onClick={() => console.log("Edit", car.Id)}
													>
														<FaEdit />
													</button>
													<button
														className="text-green-500 border border-green-500 p-1 sm:p-2 hover:text-green-700 text-xs sm:text-sm md:text-base"
														onClick={() => console.log("View", car.Id)}
													>
														<FaEye />
													</button>
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
							filteredData={bookings?.doc}
							handleChange={handleChange}
						/>
					</>
				) : (
					<NoDataFoundMessage message="Bookings data not found!" />
				)}
			</div>
		</div>
	);
};

export default Carallocationtable;
