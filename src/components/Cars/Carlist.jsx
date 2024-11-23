import { useState } from "react";
import Tablefooter from "../List/Tablefooter";
import Tableheader from "../List/Tableheader";
import { FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetCarsQuery } from "../../redux/slices/carsApiSlice";
import Loader from "./../shared/Loader";
import NoDataFoundMessage from "../shared/NoDataFoundMessage";

const Carlist = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const itemsPerPage = 12;

	const { data: cars, isLoading,refetch } = useGetCarsQuery({});

	// Handle page change
	const handleChange = (event, value) => {
		setCurrentPage(value);
	};

	const columnHeaders = [
		"S. No",
		"Name",
		"Model",
		"Assembly",
		"Registration Number",
		"Registration City",
		"Action",
	];

	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};
	return (
		<div className="w-full rounded-[10px]">
			{/* Table Header */}
			<Tableheader
				title={"Cars"} // Update title to "Car List"
				columnHeaders={columnHeaders}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>

			{/* Responsive Table Container */}
			<div className="overflow-x-auto">
				{isLoading ? (
					<Loader />
				) : cars && cars?.doc?.length ? (
					<>
						<table className="w-full table-auto rounded-lg text-primary-900">
							<thead className="bg-ground rounded-t-lg">
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
								{cars?.doc
									?.slice(
										(currentPage - 1) * itemsPerPage,
										currentPage * itemsPerPage
									)
									.map((car, index) => (
										<tr key={index} className="bg-white hover:bg-hover-100">
											<td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
												{++index}
											</td>
											<td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
												{capitalizeFirstLetter(car.name)}
											</td>
											<td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
												{car.model}
											</td>
											<td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
												{car.assembly}
											</td>
											<td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
												{car.registrationNumber}
											</td>
											<td className="px-2 py-2 text-left text-xs sm:px-4 sm:text-sm md:text-base">
												{capitalizeFirstLetter(car.registrationCity)}
											</td>
											<td className="px-2 py-2 text-left">
												<div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
													<Link
														to={`/bookings/${car.id}`}
														className="bg-green-500 py-2 px-4 sm:p-2 text-white text-xs sm:text-sm md:text-base"
													>
														Alot
													</Link>
													<Link to  = {`/cars/update-car/${car.id}`}
														className="text-blue-500 border border-blue-500 p-1 sm:p-2 hover:text-blue-700 text-xs sm:text-sm md:text-base"
													>
														<FaEdit />
													</Link>
													<Link
														to={`/car-details/${car.id}`}
														className="text-green-500 border border-green-500 p-1 sm:p-2 hover:text-green-700 text-xs sm:text-sm md:text-base"
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
							filteredData={cars?.doc}
							handleChange={handleChange}
						/>
					</>
				) : (
					<NoDataFoundMessage message={"No cars found!"} />
				)}
			</div>
		</div>
	);
};

export default Carlist;
