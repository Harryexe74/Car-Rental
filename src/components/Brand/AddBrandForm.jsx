import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiInfo } from "react-icons/fi";
import FormSection from "../Vendor/FormInput/FormSection";
import FormInput from "../Vendor/FormInput/FormInput";

import {
	useCreateBrandMutation,
	useGetBrandsQuery,
} from "../../redux/slices/brandApiSlice";
import Brandlist from "./Brandlist";
import NoDataFoundMessage from "../shared/NoDataFoundMessage";
import Loader from "../shared/Loader";

const AddBrandForm = () => {
	const [createBrand] = useCreateBrandMutation();

	const { data: brands, isLoading, refetch } = useGetBrandsQuery({});

	const [brandName, setBrand] = useState("");
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await createBrand({ name: brandName });

			toast.success(`Brand added successfully! `);
			refetch();
			setBrand(""); // Properly reset form state
		} catch (error) {
			console.error("Error adding brand:", error);
			toast.error("Failed to add brand!");
		}
	};

	const handleInputChange = (event) => {
		setBrand(event.target.value);
	};

	return (
		<>
			<div className="bg-ground rounded-[10px] text-primary-900">
				<div className="p-4">
					<div className="flex items-center h1 mb-0 text-capitalize d-flex align-items-center gap-2">
						<FiInfo className="text-2xl" />
						<h1 className="text-[1rem] font-semibold">Add New Brand</h1>
					</div>
				</div>
				<form
					onSubmit={handleSubmit}
					className="bg-ground py-2 rounded-b-[10px]"
				>
					<FormSection icon={<FiInfo />} title="Brand Information">
						<div className="col-lg-12">
							<FormInput
								label="Brand Name"
								name="name"
								type="text"
								placeholder="Enter Brand Name"
								value={brandName}
								onChange={handleInputChange}
								required
							/>
						</div>
					</FormSection>

					<div className="flex justify-end p-4">
						<button
							type="submit"
							className="bg-primary-900 text-white py-2 px-4 rounded hover:bg-primary-600"
						>
							Add Brand
						</button>
					</div>
				</form>
			</div>
			{isLoading ? (
				<Loader />
			) : brands && brands?.doc ? (
				<Brandlist brands={brands?.doc}  refetch={refetch}/>
			) : (
				<NoDataFoundMessage message={"Brands not found!"} />
			)}
		</>
	);
};

export default AddBrandForm;