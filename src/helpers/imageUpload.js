import { Cloudinary } from "@cloudinary/url-gen";

/**
 * Uploads an image to Cloudinary with auto-format and quality optimizations.
 * @param {File} file - The image file to be uploaded.
 * @param {String} folder - The Cloudinary folder where the image will be uploaded.
 * @returns {Promise<String>} - The URL of the uploaded and optimized image.
 */
 const uploadImage = async (file, folder) => {
	try {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "carrental121");
		formData.append("folder", folder);

		const response = await fetch(
			`https://api.cloudinary.com/v1_1/dbaldcbyq/image/upload`,
			{
				method: "POST",
				body: formData,
			}
		);

		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.error.message);
		}

		// Create a Cloudinary instance to apply optimizations
		const cld = new Cloudinary({
			cloud: { cloudName: "dbaldcbyq" },
		});

		const img = cld.image(data.public_id);
		img.format("auto").quality("auto"); // Apply optimizations

		return img.toURL(); // Return optimized image URL
	} catch (error) {
		console.error("Error uploading image:", error);
		throw error;
	}
};

export default uploadImage
