import { useState } from "react";
import CarInfoSection from "./AddCarFormSection/CarInfoSection";
import AdditionalInfoSection from "./AddCarFormSection/AdditionalInfoSection";
import { toast } from "react-toastify";
import {
  useCreateCarMutation,
  useCreateCarMediaMutation,
  useCreateCarSpecificationsMutation,
  useCreateCarStatusMutation,
} from "../../redux/slices/carsApiSlice";
import CarStatus from "./AddCarFormSection/CarStatus";
import MediaUploader from "../Carallocation/MediaUploader";

const AddCarForm = () => {
  const [createCar] = useCreateCarMutation();
  const [createCarMedia] = useCreateCarMediaMutation();
  const [createCarSpecifications] = useCreateCarSpecificationsMutation();
  const [createCarStatus] = useCreateCarStatusMutation();

  const [selectedDate, setSelectedDate] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    carTypeId: "",
    brandId: "",
    ownerId: "",
    model: "",
    registrationNumber: "",
    registrationCity: "",
    description: "",
    carDocuments: "",
    assembly: "",
    pricePerDay: "",
    transmission: "",
    fuelType: "",
    seatingCapacity: "",
    minMileage: "",
    maxMileage: "",
    engineCapacity: "",
    engineCondition: "",
    odometerReading: "",
    color: "",
    location: "",
    availabilityStatus: "",
    insuranceDetail: "",
    fuelPolicy: "",
    lastServicedDate: "",
  });

  const [imageUrls, setImageUrls] = useState([]); // Store uploaded image URLs
  const [videoUrls, setVideoUrls] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {
        name,
        carTypeId,
        brandId,
        ownerId,
        model,
        registrationNumber,
        registrationCity,
        description,
        carDocuments,
        assembly,
        pricePerDay,
        transmission,
        fuelType,
        seatingCapacity,
        minMileage,
        maxMileage,
        engineCapacity,
        engineCondition,
        odometerReading,
        color,

        location,
        insuranceDetail,
        fuelPolicy,
        lastServicedDate,
      } = formData;

      let response = await createCar({
        name,
        carTypeId,
        brandId,
        ownerId,
        model,
        registrationNumber,
        registrationCity,
        description,
        carDocuments,
        assembly,
      });

      console.log(response);
      if (response) {
        await createCarMedia({
          carId: response.data.doc[0].id,
          imageUrls,
          videoUrls,
        });

        await createCarSpecifications({
          carId: response.data.doc[0].id,
          pricePerDay,
          transmission,
          fuelType,
          seatingCapacity,
          minMileage,
          maxMileage,
          engineCapacity,
          engineCondition,
          odometerReading,
          color,
        });

        await createCarStatus({
          carId: response.data.doc[0].id,
          location,
          insuranceDetail,
          fuelPolicy,
          lastServicedDate,
        });
      }
      toast.success("Car added successfully!");
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CarInfoSection formData={formData} handleChange={handleChange} />
      <AdditionalInfoSection
        formData={formData}
        handleChange={handleChange}
        handleDateChange={(e) => setSelectedDate(e.target.value)}
        selectedDate={selectedDate}
      />
      <CarStatus
        formData={formData}
        handleChange={handleChange}
        handleDateChange={(e) => setSelectedDate(e.target.value)}
        selectedDate={selectedDate}
      />

      <button
        type="submit"
        className="btn bg-gray-950 text-white mt-3 text-center w-full"
      >
        Add Car
      </button>
    </form>
  );
};

export default AddCarForm;
