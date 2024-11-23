import React from "react";
import { FiInfo, FiImage, FiVideo } from "react-icons/fi";
import { FaCarCrash } from "react-icons/fa";
import FileUpload from "../../Vendor/FormInput/FileUpload";

import FormSection from "../../Vendor/FormInput/FormSection";
import FormInput from "../../Vendor/FormInput/FormInput";
import FormSelect from "../../Vendor/FormInput/FormSelect";

const AddCarConditionSection = ({
  formData,
  handleInputChange,
  handleFileChange,
}) => {

  return (
    <div className="bg-ground rounded-[10px] text-primary-900">
      <div className="p-4">
        <div className="flex items-center h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <FaCarCrash className="text-2xl" />
          <h1 className="text-[1rem] font-semibold">Car Condition</h1>
        </div>
      </div>

      <form
        className="bg-ground py-2 rounded-b-[10px]"
        id="add-car-condition-form"

        onSubmit={handleSubmit}
      >
        <FormSection
          icon={<FiInfo className="mb-1" />}
          title="Car Condition Information"
        >
          <div className="row align-items-center p-4">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <FormInput
                label="Car ID"
                name="carId"
                type="text"
                placeholder="Enter Car ID"
                value={formData.carId}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-lg-6 mb-4 mb-lg-0">
              <FormInput
                label="Condition Type"
                name="conditionType"
                type="text"
                placeholder="Enter Condition Type"
                value={formData.conditionType}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </FormSection>

        <FormSection
          icon={<FiImage className="mb-1" />}
          title="Upload Condition Images"
        >
          <div className="row p-4">
            <div className="col-lg-12">
              <FileUpload
                name="conditionImages"
                label="Images"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "image")}
                multiple
              />
              {formData.conditionImages?.length > 0 && (
                <div className="image-previews mt-3">
                  {formData.conditionImages.map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      alt={`Condition preview ${index}`}
                      className="preview-image"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </FormSection>

        <FormSection
          icon={<FiVideo className="mb-1" />}
          title="Upload Condition Videos"
        >
          <div className="row p-4">
            <div className="col-lg-12">
              <FileUpload
                name="conditionVideos"
                label="Videos"
                accept="video/*"
                onChange={(e) => handleFileChange(e, "video")}
                multiple
              />
              {formData.conditionVideos?.length > 0 && (
                <div className="video-previews mt-3">
                  {formData.conditionVideos.map((video, index) => (
                    <video
                      key={index}
                      src={URL.createObjectURL(video)}
                      controls
                      className="preview-video"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </FormSection>

        <div className="flex justify-end p-4">
          <button
            type="submit"
            className="bg-primary-800 text-white py-2 px-4 rounded hover:bg-primary-900"
          >
            Add Car Condition
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCarConditionSection;
