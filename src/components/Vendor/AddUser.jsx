import { useState } from "react";
import { FiInfo, FiImage, FiMail } from "react-icons/fi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import FormSection from "./FormInput/FormSection";
import FormInput from "./FormInput/FormInput";
import "./AddVendorForm.css";
import { IoPersonAddSharp } from "react-icons/io5";

import {
	useRegisterMutation,
	useRegisterAddressMutation,
} from "../../redux/slices/usersApiSlice";
import { useCreateCardMutation } from "../../redux/slices/cardsApiSlice";
import uploadImage from "../../helpers/imageUpload";
import FileUpload from "./FormInput/FileUpload";
import { PreviewImage } from "./FormInput/PreviewImage";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
	const [selectedDate, setSelectedDate] = useState("");
	const [imageLoading, setImageLoading] = useState(false);
	const [imageUrl, setImageUrl] = useState("");
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		phoneNumber: "",
		status: "active",
		registrationDate: "",
		image: "",
		address: "",
		city: "",
		zip_Code: "",
		state: "",
		cnic: "",
		ownerType: "user",
		cardHolderName: "",
		cardNumber: "",
		expiryDate: "",
		cvv: "",
		billingAddress: "",
	});

	const [register] = useRegisterMutation();
	const [registerAddress] = useRegisterAddressMutation();
	const [createCard] = useCreateCardMutation();

	const handleDateChange = (event) => {
		setSelectedDate(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log(formData);

		try {
			// Prepare data for user registration
			const userData = {
				name: formData.name,
				email: formData.email,
				password: formData.password,
				phoneNumber: formData.phoneNumber,
				status: formData.status,
				registrationDate: selectedDate,
				image: imageUrl,
				cnic: formData.cnic,
			};

			console.log(userData);

			const userResponse = await register(userData).unwrap();
			console.log("User registered successfully:", userResponse);

			const userId = userResponse.doc[0].id;

			if (!userId) {
				throw new Error("User ID is missing in the response.");
			}

			const addressData = {
				userId: userId,
				address: formData.address,
				city: formData.city,
				zipCode: formData.zip_Code,
				state: formData.state,
			};

			// Register address
			await registerAddress(addressData).unwrap();

			const cardData = {
				ownerId: userId,
				ownerType: formData.ownerType,
				cardHolderName: formData.cardHolderName,
				cardNumber: formData.cardNumber,
				expiryDate: formData.expiryDate,
				cvv: formData.cvv,
				billingAddress: formData.billingAddress,
			};

			console.log("Creating card with data:", cardData);
			try {
				await createCard(cardData).unwrap();
				toast.success("User, address, and card added successfully!");
			} catch (error) {
				console.error("Error creating card:", error);
				toast.error("Failed to create card!");
			}

			navigate("/users");

			setFormData({
				name: "",
				email: "",
				password: "",
				phoneNumber: "",
				status: "active",
				registrationDate: "",
				address: "",
				city: "",
				zip_Code: "",
				state: "",
				cnic: "",
				ownerType: "user",
				cardHolderName: "",
				cardNumber: "",
				expiryDate: "",
				cvv: "",
				billingAddress: "",
			});
			event.target.reset();
		} catch (error) {
			console.error("Error adding user, address, or card:", error);
			toast.error(error.data.message);
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
				setImageLoading(true);
				const url = await uploadImage(uploadedImage, "car-rental-data");
				setImageUrl(url); // Set the URL in a separate state variable
				setFormData({
					...formData,
					[name]: url, // Update the formData with the image URL
				});
				setImageLoading(false);
			} catch (error) {
				setImageLoading(false);
				console.error("Error uploading image:", error);
				toast.error("Image upload failed!");
			}
		}
	};

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
									<PreviewImage
										image={imageUrl}
										altText="User Image"
										style={{ width: "200px" }}
									/>
									<FileUpload
										name="image"
										label="User Image"
										accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
										onChange={handleImageChange}
									/>
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

export default AddUser;
