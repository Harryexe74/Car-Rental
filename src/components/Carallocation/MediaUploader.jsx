/* eslint-disable react/prop-types */
import { useState } from "react";
import uploadImage from "../../helpers/imageUpload";
import uploadVideo from "../../helpers/videoUpload";
import Loader from "../shared/Loader";

const MediaUploader = ({
	imageUrls,
	videoUrls,
	setImageUrls,
	setVideoUrls,
}) => {
	// Store uploaded video URLs
	const [imageLoading, setImageLoading] = useState(false);
	const [videoLoading, setVideoLoading] = useState(false);

	// Handle image upload
	const handleuploadImage = async (event) => {
		const file = event.target.files[0];
		if (file) {
			try {
				setImageLoading(true);
				const url = await uploadImage(file, "car-rental-images");
				setImageLoading(false);

				setImageUrls([...imageUrls, url]);
			} catch (error) {
				console.error("Image upload failed:", error);
			}
		}
	};

	console.log(imageUrls);

	// Handle video upload
	const handleVideoUpload = async (event) => {
		const file = event.target.files[0];
		if (file) {
			try {
				setVideoLoading(true);
				const url = await uploadVideo(file, "car-rental-videos");
				setVideoLoading(false);

				setVideoUrls([...videoUrls, url]); // Add the new video URL to the array
			} catch (error) {
				console.error("Video upload failed:", error);
			}
		}
	};

	// Handle deletion of image
	const handleDeleteImage = (index) => {
		const updatedImages = imageUrls.filter((_, i) => i !== index);
		setImageUrls(updatedImages); // Update the image URLs list
	};

	// Handle deletion of video
	const handleDeleteVideo = (index) => {
		const updatedVideos = videoUrls.filter((_, i) => i !== index);
		setVideoUrls(updatedVideos); // Update the video URLs list
	};

	return (
		<div className="media-uploader">
			<h2 className="text-lg font-bold mb-4">Upload Images and Videos</h2>

			{/* Loading spinner */}

			{/* Image Upload */}
			<div className="mb-4">
				<label className="block text-sm font-medium text-gray-700">
					Upload Image
				</label>
				<input
					type="file"
					accept="image/*"
					onChange={handleuploadImage}
					className="mt-1"
				/>
			</div>

			{/* List of Uploaded Images */}
			<div className="uploaded-images  grid grid-cols-6 gap-4 mb-4">
				{imageLoading ? (
					<Loader />
				) : (
					imageUrls.map((media, index) => (
						<div
							key={index}
							className="media-card bg-slate-50 p-2 border rounded-md shadow-md"
						>
							<img
								src={media}
								alt={`Image ${index + 1}`}
								className="w-full h-32 object-cover"
							/>
							<button
								onClick={() => handleDeleteImage(index)}
								className="mt-2 w-full bg-red-500 text-white px-4 py-2 rounded-md"
							>
								Delete
							</button>
						</div>
					))
				)}
			</div>

			{/* Video Upload */}
			<div className="mb-4">
				<label className="block text-sm font-medium text-gray-700">
					Upload Video
				</label>
				<input
					type="file"
					accept="video/*"
					onChange={handleVideoUpload}
					className="mt-1"
				/>
			</div>

			{/* List of Uploaded Videos */}
			<div className="uploaded-videos grid grid-cols-4 gap-4 mt-8">
				{videoLoading ? (
					<Loader />
				) : (
					videoUrls.map((media, index) => (
						<div
							key={index}
							className="media-card bg-slate-50 p-2 border rounded-md shadow-md"
						>
							<video src={media} controls className="w-full h-32" />
							<button
								onClick={() => handleDeleteVideo(index)}
								className="mt-2 w-full bg-red-500 text-white px-4 py-2 rounded-md"
							>
								Delete
							</button>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default MediaUploader;
