export const PreviewImage = ({ image, altText }) => {
  const isFile = image instanceof File; // Check if the image is a File object

  return (
    <div className="form-group">
      <div className="d-flex justify-content-center">
        <img
          className="upload-img-view border border-gray-400"
          src={
            isFile
              ? URL.createObjectURL(image)
              : image || "https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg"
          }
          alt={altText}
          style={{ width: "200px", height: "150px" }}
        />
      </div>
    </div>
  );
};
