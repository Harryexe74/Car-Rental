import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FiInfo } from "react-icons/fi";
import FormSection from "../Vendor/FormInput/FormSection";
import FormInput from "../Vendor/FormInput/FormInput";
import { useGetCarTypesQuery } from "../../redux/slices/carTypeApiSlice";
import { useCreateCarTypeMutation } from "../../redux/slices/carTypeApiSlice";
import CarTypeList from "./CarTypeList";
import Loader from "../shared/Loader";
import NoDataFoundMessage from "../shared/NoDataFoundMessage";

const CarType = () => {
  const [createCarType] = useCreateCarTypeMutation({});

  const { data: carTypes, isLoading, refetch } = useGetCarTypesQuery({});

  const [carType, setCarType] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createCarType({ carType });
      toast.success("Car Type added successfully!");
      refetch();
      setCarType("");
      // Properly reset form state
    } catch (error) {
      console.error("Error adding Car Type:", error);
      toast.error("Failed to add Car Type!");
    }
  };

  const handleInputChange = (event) => {
    setCarType(event.target.value);
  };
  
	return (
		<>
			<div className="bg-ground rounded-[10px] text-primary-900">
				<div className="p-4">
					<div className="flex items-center h1 mb-0 text-capitalize d-flex align-items-center gap-2">
						<FiInfo className="text-2xl" />
						<h1 className="text-[1rem] font-semibold">Add New Car Type</h1>
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
							Add Car Type
						</button>
					</div>
				</form>
			
			</div>

      {isLoading ? (
        <Loader />
      ) : carTypes && carTypes?.doc ? (
        <CarTypeList carTypes={carTypes?.doc} refetch={refetch} />
      ) : (
        <NoDataFoundMessage message={"Car types not found!"} />
      )}
    </>
  );

};

export default CarType;
