/* eslint-disable react/prop-types */
import { FiCalendar } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import "../Vendor/AddVendorForm.css";
import FormSection from "../Vendor/FormInput/FormSection";
import FormInput from "../Vendor/FormInput/FormInput";
import { FaPeopleCarry } from "react-icons/fa";

const BookingForm = ({ customers, cars, formData, handleInputChange }) => {
	return (
		<div className="">
			<div className="p-4 border-b border-white">
				<div className="flex items-center h1 mb-0 text-capitalize d-flex align-items-center gap-2 ">
					<FaPeopleCarry className="text-2xl " />
					<h1 className="text-[1rem] font-semibold">Car Allocation</h1>
				</div>
			</div>
			<div className=" bg- py-2 rounded-b-[10px]">
				<FormSection
					icon={<FiCalendar className="mb-1" />}
					title="Car Allocation Information"
				>
					<div className="row align-items-center p-4">
						<div className="col-lg-6 ">
							<label
								htmlFor="car"
								className="block text-sm font-medium text-gray-800"
							>
								Car
							</label>
							<select
								id="car"
								name="carId"
								value={formData.carId}
								onChange={handleInputChange}
								className="select_field"
							>
								<option value="" className="text-base">
									--Select car--
								</option>
								{cars?.map((item) => (
									<option key={item.id} value={item.id} className="text-base">
										{item.name}
									</option>
								))}
							</select>
						</div>
						<div className="col-lg-6 ">
							<label
								htmlFor="customer"
								className="block text-sm font-medium text-gray-800"
							>
								Customer
							</label>
							<select
								id="customer"
								name="customerId"
								value={formData.customerId}
								onChange={handleInputChange}
								className="select_field"
							>
								<option value="" className="text-base">
									--Select customer--
								</option>
								{customers?.map((item) => (
									<option key={item.id} value={item.id} className="text-base">
										{item.firstName}
									</option>
								))}
							</select>
						</div>
					</div>
					<div className="row p-4">
						<div className="col-lg-6">
							<FormInput
								label="Rental Start Date"
								name="rentalStartDate"
								type="date"
								placeholder="Select start date"
								value={formData.rentalStartDate}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className="col-lg-6">
							<FormInput
								label="Rental End Date"
								name="rentalEndDate"
								type="date"
								placeholder="Select end date"
								value={formData.rentalEndDate}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className="col-lg-6">
							<FormInput
								label="Initial Mileage"
								name="initialMileage"
								type="text"
								placeholder="Enter Initial Mileage"
								value={formData.initialMileage}
								onChange={handleInputChange}
								required
							/>
						</div>
					</div>
				</FormSection>
			</div>
		</div>
	);
};

export default BookingForm;
