
import FormSection from "../Vendor/FormInput/FormSection";
import FormInput from "../Vendor/FormInput/FormInput";
import { useState } from "react";
import { FiInfo } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateBrandMutation } from "../../redux/slices/brandApiSlice";
import { toast } from "react-toastify";
import { useGetBrandsQuery } from "../../redux/slices/brandApiSlice";
const UpdateBrand = () => {
	const { data: brands, isLoading, refetch } = useGetBrandsQuery({});
	const navigate = useNavigate();
	const [updateBrand] =  useUpdateBrandMutation();
	const {name,id} =useParams();
    const [brandName, setBrand] = useState(name);
	
	const handleInputChange = (event) => {
		setBrand(event.target.value);
	};
    const handleSubmit =async(event)=>{
		event.preventDefault();

		try {
			let data = {
				id :id ,
				name : brandName 
			}
			await updateBrand(data);
			setBrand(brandName)
			refetch();
			navigate("/brands")
		} catch (error) {
			console.log(error);
			toast.error("Internal Error")
		}
    }
  return <>
  <div className="bg-ground rounded-[10px] text-primary-900">
				<div className="p-4">
					<div className="flex items-center h1 mb-0 text-capitalize d-flex align-items-center gap-2">
						<FiInfo className="text-2xl" />
						<h1 className="text-[1rem] font-semibold">Update Brand Name</h1>
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
							Update Brand
						</button>
					</div>
				</form>
			</div>
  </>;
};

export default UpdateBrand;
