import React from "react"; 
import FormSection from "../../Vendor/FormInput/FormSection";
import FormInput from "../../Vendor/FormInput/FormInput";
import FormSelect from "../../Vendor/FormInput/FormSelect";
import { carTypeOptions, carBrandOptions, userOptions, carDocumentOptions, assemblyOptions } from "../options"; // Add options for carDocuments and assembly
import { FiInfo } from "react-icons/fi";
import { useGetBrandsQuery } from "../../../redux/slices/brandApiSlice";
import {useGetCarTypesQuery} from "../../../redux/slices/carTypeApiSlice"
import {useGetUsersQuery} from "../../../redux/slices/usersApiSlice";
const CarInfoSection = ({ formData, handleChange }) => {

  const { data: brands} = useGetBrandsQuery({});
  const { data: carTypes } = useGetCarTypesQuery({});
  const {data :users} = useGetUsersQuery({});
  return (
    <FormSection icon={<FiInfo className="" />} title="Car Information">
      <div className="row">
        {/* Car Name */}
        <div className="col-lg-6">
          <FormInput
            label="Car Name"
            name="name"
            type="text"
            placeholder="Enter Car Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* Car Type */}
        <div className="col-lg-6">
          <FormSelect
            label="Car Type"
            name="carTypeId" // Match the schema (carTypeId)
            options={carTypes}
            value={formData.carTypeId}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* Car Brand */}
        <div className="col-lg-6">
          <FormSelect
            label="Car Brand"
            name="brandId"  // Match the schema (brandId)
            options={brands}
            value={formData.brandId}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* User/Owner */}
        <div className="col-lg-6">
          <FormSelect
            label="User"
            name="ownerId"  // Match the schema (ownerId)
            options={users}
            value={formData.ownerId}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* Model Year */}
        <div className="col-lg-6">
          <FormInput
            label="Model Year"
            name="model"  // Match the schema (model)
            type="number"
            placeholder="Enter Model Year"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>
        {/* Registration Number */}
        <div className="col-lg-6">
          <FormInput
            label="Registration Number"
            name="registrationNumber"
            type="text"
            placeholder="Enter Registration Number"
            value={formData.registrationNumber}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* Registration City */}
        <div className="col-lg-6">
          <FormInput
            label="Registration City"
            name="registrationCity"
            type="text"
            placeholder="Enter Registration City"
            value={formData.registrationCity}
            onChange={handleChange}
            required
          />
        </div>

        {/* Description (Optional) */}
        <div className="col-lg-6">
          <FormInput
            label="Description"
            name="description"
            type="text"
            placeholder="Enter Description (Optional)"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        
        {/* Car Documents */}
        <div className="col-lg-6">
          <FormSelect
            label="Car Documents"
            name="carDocuments"  // Match the schema (carDocuments)
            options={carDocumentOptions}  // Options: ['registration', 'unRegistered']
            value={formData.carDocuments}
            onChange={handleChange}
            required
          />
        </div>
        
        {/* Assembly */}
        <div className="col-lg-6">
          <FormSelect
            label="Assembly"
            name="assembly"  // Match the schema (assembly)
            options={assemblyOptions}  // Options: ['imported', 'local']
            value={formData.assembly}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </FormSection>
  );
};

export default CarInfoSection;
