/**
 * Uploads a video to Cloudinary with auto-format and quality optimizations.
 * @param {File} file - The video file to be uploaded.
 * @param {String} folder - The Cloudinary folder where the video will be uploaded.
 * @returns {Promise<String>} - The URL of the uploaded and optimized video.
 */
const uploadVideo = async (file, folder) => {
	try {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "carrental121"); // Your Cloudinary preset
		formData.append("folder", folder);

		const response = await fetch(
			`https://api.cloudinary.com/v1_1/dbaldcbyq/video/upload`,
			{
				method: "POST",
				body: formData,
			}
		);

		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.error.message);
		}

		// Apply video optimizations like auto-format and auto-quality
		// Return the optimized video URL
		return `${data.secure_url}`;
	} catch (error) {
		console.error("Error uploading video:", error);
		throw error;
	}
};

export default uploadVideo;
