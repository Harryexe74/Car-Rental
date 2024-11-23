/* eslint-disable react/prop-types */
import { FiInfo } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import "../Vendor/AddVendorForm.css";
import FormSection from "../Vendor/FormInput/FormSection";
import { FaCarCrash } from "react-icons/fa";

const AddCarConditionForm = ({ formData, handleInputChange }) => {
	return (
		<div className="bg-ground rounded-[10px] text-primary-900">
			<div className="">
				<div className="p-4">
					<div className="flex items-center h1 mb-0 text-capitalize d-flex align-items-center gap-2">
						<FaCarCrash className="text-2xl " />
						<h1 className="text-[1rem] font-semibold">Car Condition</h1>
					</div>
				</div>
				<div className="bg-ground py-2 rounded-b-[10px]">
					<FormSection
						icon={<FiInfo className="mb-1" />}
						title="Car Condition Information"
					>
						<div className="row align-items-center p-4">
							<div className="col-lg-6 mb-4 mb-lg-0">
								<label
									htmlFor="conditionType"
									className="block text-sm font-medium text-gray-800"
								>
									Car
								</label>
								<select
									id="conditionType"
									name="conditionType"
									value={formData.conditionType}
									onChange={handleInputChange}
									className="select_field"
								>
									<option value="" className="text-base">
										--Select car condition--
									</option>
									<option name="initial" value="initial" className="text-base">
										Initial
									</option>
									<option name="final" value="final" className="text-base">
										Final
									</option>
								</select>
							</div>
						</div>
					</FormSection>
				</div>
			</div>
		</div>
	);
};

export default AddCarConditionForm;
