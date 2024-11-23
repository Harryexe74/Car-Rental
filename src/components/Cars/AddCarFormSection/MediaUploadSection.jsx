import React from "react";
import FormSection from "../../Vendor/FormInput/FormSection";
import PreviewImage from "../../Vendor/FormInput/PreviewImage";
import PreviewVideo from "../../Vendor/FormInput/PreviewVideo";
import { FiImage, FiVideo } from "react-icons/fi";

const MediaUploadSection = ({
  formData,
  handleImageChange,
  handleVideoChange,
  removeImage,
  removeVideo,
}) => {
  return (
    <>
      <FormSection icon={<FiImage />} title="Upload Images">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="form-control mb-2"
        />
        <div className="preview-container d-flex flex-wrap">
          {formData.carImages.length === 0 ? (
            <PreviewImage
              image={null}
              altText="Default Image"
            />
          ) : (
            formData.carImages.map((image, index) => (
              <div key={index} className="preview-item position-relative">
                <PreviewImage
                  image={image}
                  altText={`Image ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="btn btn-danger position-absolute top-0 end-0 m-2"
                >
                  X
                </button>
              </div>
            ))
          )}
        </div>
      </FormSection>

      <FormSection icon={<FiVideo />} title="Upload Videos">
        <input
          type="file"
          accept="video/*"
          multiple
          onChange={handleVideoChange}
          className="form-control mb-2"
        />
        <div className="preview-container d-flex flex-wrap">
          {formData.carVideos.length === 0 ? (
            <PreviewVideo
              video={null}
              altText="Default Video"
            />
          ) : (
            formData.carVideos.map((video, index) => (
              <div key={index} className="preview-item position-relative">
                <PreviewVideo
                  video={video}
                  altText={`Video ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeVideo(index)}
                  className="btn btn-danger position-absolute top-0 end-0 m-2"
                >
                  X
                </button>
              </div>
            ))
          )}
        </div>
      </FormSection>
    </>
  );
};

export default MediaUploadSection;
