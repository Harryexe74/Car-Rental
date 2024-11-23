import { useState, useEffect, useRef } from "react";
import CarInfoSection from "./AddCarFormSection/CarInfoSection";
import AdditionalInfoSection from "./AddCarFormSection/AdditionalInfoSection";
import { toast } from "react-toastify";
import Loader from "../shared/Loader";
import {
  useGetAllCarDetailsQuery,
  useUpdateCarMutation,
  useUpdateCarMediaMutation,
  useUpdateCarSpecificationsMutation,
  useUpdateCarStatusMutation,
} from "../../redux/slices/carsApiSlice";
import CarStatus from "./AddCarFormSection/CarStatus";
import { useGetCarsQuery } from "../../redux/slices/carsApiSlice";

import MediaUploader from "../Carallocation/MediaUploader";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCars = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const {
    data: user,
    isLoading,
    refetch :refechUser,
  } = useGetAllCarDetailsQuery(id, { skip: !id });

  const { data: cars,refetch:refechCars } = useGetCarsQuery({});
  console.log(user)
  const [updateCar] = useUpdateCarMutation();
  const [updateCarMedia] = useUpdateCarMediaMutation();
  const [updateCarSpecifications] = useUpdateCarSpecificationsMutation();
  const [updateCarStatus] = useUpdateCarStatusMutation();
  const [selectedDate, setSelectedDate] = useState("");
  const previousImage = useRef([]);
  const previousVideoUrls = useRef([]);
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
    const removeImageUrls = previousImage.current.filter(
      (prevImage) => !imageUrls.includes(prevImage)
    );
    const removeVideoUrls = previousVideoUrls.current.filter(
      (prevVideo) => !videoUrls.includes(prevVideo)
    );

    // Identify images and videos to be added (present in current imageUrls or videoUrls but not in previousImage or previousVideoUrls)
    const addImageUrls = imageUrls.filter(
      (currentImage) => !previousImage.current.includes(currentImage)
    );

    const addVideoUrls = videoUrls.filter(
      (currentVideo) => !previousVideoUrls.current.includes(currentVideo)
    );
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
      let data  ={
        id,
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
      }
      let response = updateCar(data);

      if (response) {
         data = {
          id,
          removeImageUrls,
          removeVideoUrls,
          addImageUrls,
          addVideoUrls,
        };
        const respond = await updateCarMedia(data);
        console.log(respond);
        data = {
            id,
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
        }
        await updateCarSpecifications(data);
        data = {
            id,
            location,
            insuranceDetail,
            fuelPolicy,
            lastServicedDate,
        }
        await updateCarStatus(data);
      }
      refechUser();
      refechCars();
      setFormData({
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
      })
      setImageUrls([]);
      setVideoUrls([])
  
      navigate("/cars");
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message);
    }

  };

  useEffect(() => {
    if (user?.doc) {
      const carData = user.doc;
      setFormData({
        name: carData.carName || "",
        carTypeId: carData.carTypeId || "",
        brandId: carData.brandId || "",
        ownerId: carData.userId || "",
        model: carData.model || "",
        registrationNumber: carData.registrationNumber || "",
        registrationCity: carData.location || "",
        description: carData.description || "",
        carDocuments: carData.carDocuments || "",
        assembly: carData.assembly || "",
        pricePerDay: carData.pricePerDay || "",
        transmission: carData.transmission || "",
        fuelType: carData.fuelType || "",
        seatingCapacity: carData.seatingCapacity || "",
        minMileage: carData.minMileage || "",
        maxMileage: carData.maxMileage || "",
        engineCapacity: carData.engineCapacity || "",
        engineCondition: carData.engineCondition || "",
        odometerReading: carData.odometerReading || "",
        color: carData.color || "",
        location: carData.location || "",
        availabilityStatus: carData.availabilityStatus || "",
        insuranceDetail: carData.insuranceDetail || "",
        fuelPolicy: carData.fuelPolicy || "",
        lastServicedDate: carData.lastServicedDate || "",
      });
      setImageUrls(carData.imageUrls || []);
      setVideoUrls(carData.videoUrls || []);

      previousImage.current = carData.imageUrls || [];
      previousVideoUrls.current = carData.videoUrls || [];
    }
  }, [user]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : user?.doc ? (
        <form onSubmit={handleSubmit}>
          <CarInfoSection formData={formData} handleChange={handleChange} />
          <MediaUploader
            imageUrls={imageUrls}
            setImageUrls={setImageUrls}
            videoUrls={videoUrls}
            setVideoUrls={setVideoUrls}
          />
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
            update Cars
          </button>
        </form>
      ) : (
        "no data"
      )}
    </>
  );
};

export default UpdateCars;
