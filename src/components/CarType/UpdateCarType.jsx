import React, { useState } from 'react'
import FormSection from "../Vendor/FormInput/FormSection";
import FormInput from "../Vendor/FormInput/FormInput";
import { FiInfo } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import { useUpdateCarTypeMutation } from '../../redux/slices/carTypeApiSlice';
import { useGetCarTypesQuery } from '../../redux/slices/carTypeApiSlice';
const UpdateCarType = () => {
    const { data: carTypes, isLoading, refetch } = useGetCarTypesQuery({});
    const navigate = useNavigate();
    const [updateCarType] = useUpdateCarTypeMutation();
    const {id ,name} = useParams();
    const [carType,setCarType] = useState(name)
    const handleSubmit = async (event)=>{
        event.preventDefault();

        try {
            let data = {
				id :id ,
				carType 
			}

        await updateCarType (data)
            refetch()
            navigate("/car-types")

        } catch (error) {
            console.log(error);
        }
    }

    const handleInputChange = (event) => {
        setCarType(event.target.value);
      };
  return (
   <>
   <div className="bg-ground rounded-[10px] text-primary-900">
				<div className="p-4">
					<div className="flex items-center h1 mb-0 text-capitalize d-flex align-items-center gap-2">
						<FiInfo className="text-2xl" />
						<h1 className="text-[1rem] font-semibold">Update Car Type</h1>
					</div>
				</div>
				<form
					onSubmit={handleSubmit}
					className="bg-ground py-2 rounded-b-[10px]"
				>
					<FormSection icon={<FiInfo />} title="Car Type Information">
						<div className="col-lg-12">
							<FormInput
								label="Car Type Name"
								name="name"
								type="text"
								placeholder="Enter car Type Name"
								value={carType}
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
							Update Car Type				
                        </button>
					</div>
				</form>
			
			</div>
   </>
  )
}

export default UpdateCarType
