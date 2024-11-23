import FormSection from "../../Vendor/FormInput/FormSection";
import FormInput from "../../Vendor/FormInput/FormInput";
import FormSelect from "../../Vendor/FormInput/FormSelect";
import { FaCarSide } from "react-icons/fa";

const CarStatus = ({
  formData,
  handleChange,
}) => {
  return (
    <FormSection icon={<FaCarSide />} title="Car Status">
      <div className="row">


        {/* Location */}
        <div className="col-lg-6">
          <FormInput
            label="Location"
            name="location"
            type="text"
            placeholder="Enter Car Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        {/* Availability Status */}

        {/* Insurance Details */}
        <div className="col-lg-6">
          <FormInput
            label="Insurance Details"
            name="insuranceDetail"
            type="text"
            placeholder="Enter Insurance Details"
            value={formData.insuranceDetail}
            onChange={handleChange}
            optional
          />
        </div>

        {/* Fuel Policy */}
        <div className="col-lg-6">
          <FormSelect
            label="Fuel Policy"
            name="fuelPolicy"
            options={[
              { value: "full-to-full", label: "Full to Full" },
              { value: "same-to-same", label: "Same to Same" },
            ]}
            value={formData.fuelPolicy}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Serviced Date */}
        <div className="col-lg-6">
          <FormInput
            label="Last Serviced Date"
            name="lastServicedDate"
            type="text"
            placeholder="Enter Last Serviced Date"
            value={formData.lastServicedDate}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </FormSection>
  );
};

export default CarStatus;
