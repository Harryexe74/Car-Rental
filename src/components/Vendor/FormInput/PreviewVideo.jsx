import React from "react";
import car from "../../../assets/Videos/car.mp4";

const PreviewVideo = ({ video, altText, style }) => {
  // Default video URL to display if no video is uploaded
  const defaultVideoUrl = car; // Example default video URL

  return (
    <div className="form-group">
      <div className="d-flex justify-content-center">
        <video
          style={style || { width: "200px", height: "150px" }}
          controls
        >
          <source src={video ? URL.createObjectURL(video) : defaultVideoUrl} type="video/mp4" />
          {altText}
        </video>
      </div>
    </div>
  );
};

export default PreviewVideo;
