import React from "react";
import FormSection from "../../Vendor/FormInput/FormSection";
import FormInput from "../../Vendor/FormInput/FormInput";
import FormSelect from "../../Vendor/FormInput/FormSelect";
import { FaCarSide } from "react-icons/fa";

const AdditionalInfoSection = ({
  formData,
  handleChange,
}) => {
  return (
    <FormSection icon={<FaCarSide />} title="Car Specification">
      <div className="row">
        {/* Price Per Day */}
        <div className="col-lg-6">
          <FormInput
            label="Price per Day"
            name="pricePerDay"
            type="number"
            placeholder="Enter Price per Day"
            value={formData.pricePerDay}
            onChange={handleChange}
            required
          />
        </div>
        {/* Transmission */}
        <div className="col-lg-6">
          <FormSelect
            label="Transmission"
            name="transmission"
            options={[
              { value: "automatic", label: "Automatic" },
              { value: "manual", label: "Manual" },
            ]}
            value={formData.transmission}
            onChange={handleChange}
            required
          />
        </div>

        {/* Fuel Type */}
        <div className="col-lg-6">
          <FormSelect
            label="Fuel Type"
            name="fuelType"
            options={[
              { value: "petrol", label: "Petrol" },
              { value: "diesel", label: "Diesel" },
              { value: "electric", label: "Electric" },
              { value: "hybrid", label: "Hybrid" },
            ]}
            value={formData.fuelType}
            onChange={handleChange}
            required
          />
        </div>

        {/* Seating Capacity */}
        <div className="col-lg-6">
          <FormInput
            label="Seating Capacity"
            name="seatingCapacity"
            type="number"
            placeholder="Enter Seating Capacity"
            value={formData.seatingCapacity}
            onChange={handleChange}
            required
          />
        </div>
        {/* Min Mileage */}
        <div className="col-lg-6">
          <FormInput
            label="Min Mileage"
            name="minMileage"
            type="number"
            placeholder="Enter Minimum Mileage"
            value={formData.minMileage}
            onChange={handleChange}
            required
          />
        </div>

        {/* Max Mileage */}
        <div className="col-lg-6">
          <FormInput
            label="Max Mileage"
            name="maxMileage"
            type="number"
            placeholder="Enter Maximum Mileage"
            value={formData.maxMileage}
            onChange={handleChange}
            required
          />
        </div>

        {/* Engine Capacity */}
        <div className="col-lg-6">
          <FormInput
            label="Engine Capacity"
            name="engineCapacity"
            type="text"
            placeholder="Enter Engine Capacity"
            value={formData.engineCapacity}
            onChange={handleChange}
            required
          />
        </div>
        {/* Engine Condition */}
        <div className="col-lg-6">
          <FormInput
            label="Engine Condition"
            name="engineCondition"
            type="text"
            placeholder="Enter Engine Condition"
            value={formData.engineCondition}
            onChange={handleChange}
            required
          />
        </div>

        {/* Odometer Reading */}
        <div className="col-lg-6">
          <FormInput
            label="Odometer Reading"
            name="odometerReading"
            type="number"
            placeholder="Enter Odometer Reading"
            value={formData.odometerReading}
            onChange={handleChange}
            required
          />
        </div>

        {/* Color */}
        <div className="col-lg-6">
          <FormInput
            label="Color"
            name="color"
            type="text"
            placeholder="Enter Car Color"
            value={formData.color}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </FormSection>
  );
};

export default AdditionalInfoSection;
