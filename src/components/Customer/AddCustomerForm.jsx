import { useState } from "react";
import { FiUserPlus, FiMail, FiCalendar, FiImage } from "react-icons/fi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Vendor/AddVendorForm.css";
import FormInput from "../Vendor/FormInput/FormInput";
import FormSection from "../Vendor/FormInput/FormSection";
import FileUpload from "../Vendor/FormInput/FileUpload";
import { PreviewImage } from "../Vendor/FormInput/PreviewImage";
import { IoPersonAddSharp } from "react-icons/io5";
import DropSelection from "../Vendor/FormInput/FormSection";
import uploadImage from "../../helpers/imageUpload";
import {
	useCreateCustomerMutation,
	useCreateCustomerAddressMutation,
	useCreateCustomerLicenseMutation,
} from "../../redux/slices/customersApiSlice";
const AddCustomerForm = () => {
	const [createCustomer] = useCreateCustomerMutation();

	const [imageUrl, setImageUrl] = useState("");

	const [createCustomerAddress] = useCreateCustomerAddressMutation();
	const [createCustomerLicense] = useCreateCustomerLicenseMutation();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		cnic: "",
		password: "",
		phoneNumber: "",
		dateOfBirth: "",
		status: "active",
		address: "",
		city: "",
		state: "",
		zipCode: "",
		country: "",
		drivingLicenseNumber: "",
		licenseExpiryDate: "",
	});

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			let {
				firstName,
				lastName,
				cnic,
				password,
				phoneNumber,
				dateOfBirth,
				status,
				address,
				city,
				state,
				zipCode,
				country,
				drivingLicenseNumber,
				licenseExpiryDate,
			} = formData;

			const response = await createCustomer({
				firstName,
				lastName,
				cnic,
				dateOfBirth,
				password,
				phoneNumber,
				status,
				imageUrl,
			});

			if (response) {
				await createCustomerAddress({
					customerId: response.data.doc[0].id,
					address,
					city,
					state,
					zipCode,
					country,
				});

				const responseLicense = await createCustomerLicense({
					customerId: response.data.doc[0].id,
					drivingLicenseNumber,
					licenseExpiryDate,
				});
				console.log(licenseExpiryDate);
			}

			// Simulate successful form submission
			toast.success("Customer added successfully!");
			setFormData({
				firstName: "",
				lastName: "",
				cnic: "",
				password: "",
				phoneNumber: "",
				dateOfBirth: "",
				imageUrl: null,
				status: "active",
				address: "",
				city: "",
				state: "",
				zipCode: "",
				country: "",
				drivingLicenseNumber: "",
				licenseExpiryDate: "",
			});
			event.target.reset(); // Reset form fields
		} catch (error) {
			console.error("Error adding customer:", error);
			toast.error("Failed to add customer!");
		}
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleImageChange = async (event) => {
		const { name, files } = event.target;
		const uploadedImage = files[0];
		if (uploadedImage) {
			try {
				const url = await uploadImage(uploadedImage, "car-rental-data");
				setImageUrl(url); // Set the URL in a separate state variable
				setFormData({
					...formData,
					[name]: url, // Update the formData with the image URL
				});
			} catch (error) {
				console.error("Error uploading image:", error);
				toast.error("Image upload failed!");
			}
		}
	};

	return (
		<div className="bg-ground rounded-[10px] text-primary-900">
			<div className="p-4 border-b">
				<div className="flex items-center h1 mb-0 text-capitalize d-flex align-items-center gap-2">
					<IoPersonAddSharp className="text-2xl " />
					<h1 className="text-[1rem] font-semibold">Add Customer</h1>
				</div>
			</div>
			<form
				onSubmit={handleSubmit}
				encType="multipart/form-data"
				className="bg-ground py-2 rounded-b-[10px]"
			>
				<FormSection icon={<FiUserPlus />} title="Customer Information">
					<div className="row p-4">
						<div className="col-lg-6">
							<FormInput
								label="First Name"
								name="firstName"
								type="text"
								placeholder="Enter First Name"
								value={formData.firstName}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className="col-lg-6">
							<FormInput
								label="Last Name"
								name="lastName"
								type="text"
								placeholder="Enter Last Name"
								value={formData.lastName}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className="col-lg-6">
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
						<div className="col-lg-6">
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
						<div className="col-lg-6">
							<label>Phone Number</label>
							<PhoneInput
								country={"us"}
								value={formData.phoneNumber}
								onChange={(value) =>
									handleInputChange({
										target: { name: "phoneNumber", value },
									})
								}
								required
							/>
						</div>
						<div className="col-lg-6">
							<FormInput
								label="Date of Birth"
								name="dateOfBirth"
								type="date"
								value={formData.dateOfBirth}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className="col-lg-6">
							<DropSelection
								label="Status"
								name="status"
								value={formData.status}
								onChange={handleInputChange}
								required={true}
								options={[
									{ value: "active", label: "Active" },
									{ value: "inactive", label: "Inactive" },
								]}
							/>
						</div>
					</div>
				</FormSection>

				<FormSection icon={<FiImage />} title="Address Information">
					<div className="row p-4">
						<div className="col-lg-6">
							<FormInput
								label="Address"
								name="address"
								type="text"
								placeholder="Enter Address"
								value={formData.address}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className="col-lg-6">
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
						<div className="col-lg-6">
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
						<div className="col-lg-6">
							<FormInput
								label="Zip Code"
								name="zipCode"
								type="number"
								placeholder="Enter Zip Code"
								value={formData.zipCode}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className="col-lg-6">
							<FormInput
								label="Country"
								name="country"
								type="text"
								placeholder="Enter Country"
								value={formData.country}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className="col-lg-6 flex flex-col w-full justify-center items-center">
							<PreviewImage
								image={imageUrl}
								altText="Customer image"
								style={{ width: "200px" }}
							/>
							<FileUpload
								name="imageUrl"
								label="Customer Image"
								accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
								onChange={handleImageChange}
							/>
						</div>
					</div>
				</FormSection>

				<FormSection icon={<FiCalendar />} title="License Information">
					<div className="row p-4">
						<div className="col-lg-6">
							<FormInput
								label="License Number"
								name="drivingLicenseNumber"
								type="text"
								placeholder="Enter License Number"
								value={formData.drivingLicenseNumber}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className="col-lg-6">
							<FormInput
								label="License Expiry Date"
								name="licenseExpiryDate"
								type="date"
								value={formData.licenseExpiryDate}
								onChange={handleInputChange}
								required
							/>
						</div>
					</div>
				</FormSection>

				<div className="flex justify-end p-4">
					<button
						type="submit"
						className="bg-primary-600 text-white py-2 px-4 rounded hover:bg-primary-500"
					>
						Add Customer
					</button>
				</div>
			</form>

			<ToastContainer />
		</div>
	);
};

export default AddCustomerForm;
