/* eslint-disable react/prop-types */
import { useState } from "react";
import { carData as initialCarData } from "../../../utils/data"; // Import the updated car data
import Tablefooter from "../List/Tablefooter";
import Tableheader from "../List/Tableheader"; // Import Tableheader
import { FaEdit, FaEye, FaTrash } from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import { useDeleteCarTypeMutation } from "../../redux/slices/carTypeApiSlice";
const CarTypeList = ({ carTypes ,refetch}) => {

  const [deleteCarType] =  useDeleteCarTypeMutation();

	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const [carData, setCarData] = useState(initialCarData); // State for car data
	const itemsPerPage = 12;

	// Handle page change
	const handleChange = (event, value) => {
		setCurrentPage(value);
	};

	// Filter data based on search query
	const filteredData = carData.filter((car) =>
		car.Name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const columnHeaders = [
		"Id",
		"Name",
		"Action", // Action for Edit and View
	];
	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

  const deleteCarTypebyId =async (id)=>{
try {
   await  deleteCarType(id);
   toast.success("Car Type Deleted Successfully");
  refetch ();

} catch (error) {
  console.log( error)
  toast.error("Internal Error")
}
  }

	return (
		<div className="w-full rounded-[10px] mt-5">
			<Tableheader
				title={"Car"}
				columnHeaders={columnHeaders}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>

			<div className="overflow-x-auto">
				<>
					<table className="min-w-full table-auto bg-white rounded-lg shadow-md">
						<thead className="bg-ground rounded-t-lg">
							<tr>
								{columnHeaders.map((header, index) => (
									<th
										key={index}
										className="px-2 py-3 text-left text-xs font-semibold uppercase tracking-wider text-primary-900 sm:px-4 sm:text-sm md:text-base"
									>
										{header}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{carTypes
								.slice(
									(currentPage - 1) * itemsPerPage,
									currentPage * itemsPerPage
								)
								.map((carType, index) => (
									<tr
										key={index}
										className="bg-white hover:bg-gray-100 border-b transition duration-150 ease-in-out"
									>
										<td className="px-2 py-3 text-left text-xs sm:px-4 sm:text-sm md:text-base">
											{++index}
										</td>
										<td className="px-2 py-3 text-left text-xs sm:px-4 sm:text-sm md:text-base">
											{carType.carType}
										</td>
										<td className="px-2 py-3 text-left">
											<div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
												<Link
												to ={`/car-types/update/${carType.id}/${carType.carType}`}
													className="text-blue-500 border border-blue-500 p-1 sm:p-2 hover:text-blue-700 rounded text-xs sm:text-sm md:text-base"
												>
													<FaEdit />
												</Link>
												<button
													className="text-green-500 border border-green-500 p-1 sm:p-2 hover:text-green-700 rounded text-xs sm:text-sm md:text-base"
													onClick={() => deleteCarTypebyId(carType.id)}
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
						filteredData={filteredData}
						handleChange={handleChange}
					/>
				</>
			</div>
		</div>
	);
};

export default CarTypeList;