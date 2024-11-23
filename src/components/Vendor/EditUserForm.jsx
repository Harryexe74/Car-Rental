import { useState } from "react";
import { FiInfo, FiImage, FiMail } from "react-icons/fi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormSection from "./FormInput/FormSection";
import FormInput from "./FormInput/FormInput";
import "./AddVendorForm.css";
import { IoPersonAddSharp } from "react-icons/io5";

const EditUserForm = () => {
	return (
		<div className="bg-ground rounded-[10px] text-primary-100">
			<div>
				<div className="p-4">
					<div className="flex items-center h1 mb-0 text-capitalize d-flex align-items-center gap-2">
						<IoPersonAddSharp className="text-2xl text-black" />
						<h1 className="text-[1rem] font-semibold text-black">
							Add New User
						</h1>
					</div>
				</div>
				<div>
					<form
						className="bg-ground py-2 rounded-b-[10px]"
						onSubmit={handleSubmit}
						encType="multipart/form-data"
						id="add-user-form"
					>
						<FormSection
							icon={<FiInfo className="mb-1" />}
							title="User Information"
						>
							<div className="row align-items-center p-4">
								<div className="col-lg-6 mb-4 mb-lg-0">
									<FormInput
										label="Name"
										name="name"
										type="text"
										placeholder="Enter Name"
										value={formData.name}
										onChange={handleInputChange}
										required
									/>
									<div className="form-group">
										<label
											htmlFor="phoneNumber"
											className="title-color d-flex gap-1 align-items-center"
										>
											Phone
										</label>
										<PhoneInput
											inputProps={{
												name: "phoneNumber",
												required: true,
												autoFocus: false,
												placeholder: "Enter phone number",
												autoComplete: "off",
											}}
											country={"us"}
											value={formData.phoneNumber}
											onChange={(value) =>
												handleInputChange({
													target: { name: "phoneNumber", value },
												})
											}
										/>
									</div>
								</div>
								<div className="col-lg-6 flex flex-col w-full justify-center items-center">
									{imageLoading ? (
										<Loader />
									) : imageUrl ? (
										<div className="w-40 bg-slate-50 p-2 border rounded-md shadow-md">
											<img
												src={imageUrl}
												alt={`user image`}
												className="w-full h-32 object-cover"
											/>
										</div>
									) : (
										<div className="mb-4">
											<label className="block text-sm font-medium text-gray-700">
												Upload Image
											</label>
											<input
												type="file"
												accept="image/*"
												onChange={handleImageUpload}
												className="mt-1"
											/>
										</div>
									)}
								</div>
							</div>
						</FormSection>

						<FormSection
							icon={<FiMail className="mb-1" />}
							title="Account Information"
						>
							<div className="row p-4">
								<div className="col-lg-4">
									<FormInput
										label="Email"
										name="email"
										type="email"
										placeholder="Ex: John@company.com"
										value={formData.email}
										onChange={handleInputChange}
										required
									/>
								</div>
								<div className="col-lg-4">
									<FormInput
										label="Password"
										name="password"
										type="password"
										placeholder="Enter Password"
										value={formData.password}
										onChange={handleInputChange}
										required
									/>
								</div>
								<div className="col-lg-4">
									<label htmlFor="status" className="form-label">
										Status
									</label>
									<select
										name="status"
										value={formData.status}
										onChange={handleInputChange}
										className="form-select"
										required
									>
										<option value="inactive">Inactive</option>
										<option value="active">Active</option>
									</select>
								</div>
								<div className="col-lg-4">
									<FormInput
										label="Registration Date"
										name="registrationDate"
										value={selectedDate}
										onChange={handleDateChange}
										type="date"
										placeholder="Select Registration Date"
										required
									/>
								</div>
								<div className="col-lg-4">
									<FormInput
										label="CNIC"
										name="cnic"
										type="text"
										placeholder="Enter CNIC"
										value={formData.cnic}
										onChange={handleInputChange}
										required
									/>
								</div>
							</div>
						</FormSection>

						<FormSection
							icon={<FiImage className="mb-1" />}
							title="Address Information"
						>
							<div className="row p-4">
								<div className="col-lg-4">
									<FormInput
										label="User Address"
										name="address"
										type="text"
										placeholder="Enter Address"
										value={formData.address}
										onChange={handleInputChange}
										required
									/>
								</div>
								<div className="col-lg-4">
									<FormInput
										label="City"
										name="city"
										type="text"
										placeholder="Enter City"
										value={formData.city}
										onChange={handleInputChange}
										required
									/>
								</div>
								<div className="col-lg-4">
									<FormInput
										label="Zip Code"
										name="zip_Code"
										type="text"
										placeholder="Enter Zip Code"
										value={formData.zip_Code}
										onChange={handleInputChange}
										required
									/>
								</div>
								<div className="col-lg-4">
									<FormInput
										label="State"
										name="state"
										type="text"
										placeholder="Enter State"
										value={formData.state}
										onChange={handleInputChange}
										required
									/>
								</div>
							</div>
						</FormSection>

						<FormSection
							icon={<FiInfo className="mb-1" />}
							title="Card Information"
						>
							<div className="row p-4">
								<div className="col-lg-4">
									<label htmlFor="ownerType" className="form-label">
										Owner Type
									</label>
									<select
										name="ownerType"
										value={formData.ownerType}
										onChange={handleInputChange}
										className="form-select"
										required
									>
										<option value="user">User</option>
										<option value="customer">Customer</option>
									</select>
								</div>
								<div className="col-lg-4">
									<FormInput
										label="Card Holder Name"
										name="cardHolderName"
										type="text"
										placeholder="Enter Card Holder Name"
										value={formData.cardHolderName}
										onChange={handleInputChange}
										required
									/>
								</div>
								<div className="col-lg-4">
									<FormInput
										label="Card Number"
										name="cardNumber"
										type="text"
										placeholder="Enter Card Number"
										value={formData.cardNumber}
										onChange={handleInputChange}
										required
									/>
								</div>
								<div className="col-lg-4">
									<FormInput
										label="Expiry Date"
										name="expiryDate"
										type="date"
										placeholder="Select Registration Date"
										value={formData.expiryDate}
										onChange={handleInputChange}
										required
									/>
								</div>
								<div className="col-lg-4">
									<FormInput
										label="CVV"
										name="cvv"
										type="text"
										placeholder="Enter CVV"
										value={formData.cvv}
										onChange={handleInputChange}
										required
									/>
								</div>
								<div className="col-lg-4">
									<FormInput
										label="Billing Address"
										name="billingAddress"
										type="text"
										placeholder="Enter Billing Address"
										value={formData.billingAddress}
										onChange={handleInputChange}
										required
									/>
								</div>
							</div>
						</FormSection>

						<div className="p-4 flex justify-end">
							<button
								type="submit"
								className="bg-black text-white border border-black py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
							>
								Add User
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditUserForm;
