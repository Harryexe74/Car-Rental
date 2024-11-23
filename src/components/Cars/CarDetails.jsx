import { useState } from "react";
import PreviewVideo from "../Vendor/FormInput/PreviewVideo";
import { TbListDetails } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { useGetAllCarDetailsQuery } from "../../redux/slices/carsApiSlice";
import Loader from "../shared/Loader";
import NoDataFoundMessage from "../shared/NoDataFoundMessage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper styles
const CarDetails = () => {
	let { id } = useParams();
	const { data: user, isLoading } = useGetAllCarDetailsQuery(id, { skip: !id });
	console.log(user);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : user?.doc ? (
				<div className="bg-primary-700 rounded-[10px] text-primary-100 ">
					<div className="p-4">
						<div className="flex items-center h1 mb-0 text-capitalize d-flex align-items-center gap-2">
							<TbListDetails className="text-2xl " />
							<h1 className="text-[1rem] font-semibold">
								Car Details - {user.doc.OwnerName}
							</h1>
						</div>
					</div>
					{/* Product Info Section */}
					<div className="items-center bg-primary-500 ">
						{/* Product Image */}
						<div>
							{user.doc.imageUrls.length > 0 ? (
								<div className="relative w-full h-full">
									<Swiper
										pagination={{ clickable: true }} // Enable pagination
										spaceBetween={10} // Space between slides
										slidesPerView={1} // Show one slide at a time
										className="h-[20vw] w-[20vw]" // Adjust according to your desired width/height
									>
										{user.doc.imageUrls.map((image, index) => (
											<SwiperSlide key={index}>
												<img
													src={image}
													alt={`Product ${index + 1}`}
													className="h-full w-full object-cover p-4"
												/>
											</SwiperSlide>
										))}
									</Swiper>
								</div>
							) : (
								<p>No images available</p>
							)}
						</div>

						{/* Product Info */}

						<div className="p-4">
							<div className="items-center">
								<h2 className="text-[2rem] font-semibold">
									{user.doc.carName} - {user.doc.brandName}
								</h2>
							</div>
							<p className="mt-2 text-primary-100 text-[1rem]">
								Location: {user.doc.location}
							</p>
						</div>
					</div>

					{/* Modal for Image Display
      {isOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-[10px] relative">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={closeModal}
            >
              ✖
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="rounded-[10px]"
            />
          </div>
        </div>
      )} */}

					{/* General and Price Information */}
					<div className=" bg-primary-500 p-4 rounded-b-[10px]">
						<div className="flex flex-col gap-2 bg-primary-600 p-4 rounded-[10px]">
							<p className="flex items-center gap-2">
								<strong>Location:</strong>
								{user.doc.location}
							</p>
							<p className="flex items-center gap-2">
								<strong>Availability Status:</strong>
								<span className="text-primary-500 font-bold">
									{user.doc.availabilityStatus}
								</span>
							</p>
						</div>

						<div className="p-6 flex gap-4 w-full">
							{/* General Information Table */}
							<table className="table-auto w-full bg-primary-600 rounded-[10px]">
								<h3 className="text-xl font-bold p-4">General Information</h3>
								<tbody>
									<tr>
										<td className="p-2 font-semibold">Brand Name</td>
										<td className="p-2">{user.doc.brandName}</td>
									</tr>
									<tr>
										<td className="p-2 font-semibold">Car Type</td>
										<td className="p-2">{user.doc.carType}</td>
									</tr>
									<tr>
										<td className="p-2 font-semibold">Fuel Type</td>
										<td className="p-2">{user.doc.fuelType}</td>
									</tr>
									<tr>
										<td className="p-2 font-semibold">Transmission</td>
										<td className="p-2">{user.doc.transmission}</td>
									</tr>
								</tbody>
							</table>

							{/* Specification Information Table */}
							<table className="table-auto w-full bg-primary-600 rounded-[10px]">
								<h3 className="text-xl font-bold p-4">
									Specification Information
								</h3>
								<tbody>
									<tr>
										<td className="p-2 font-semibold">Price per day</td>
										<td className="p-2">${user.doc.pricePerDay}</td>
									</tr>
									<tr>
										<td className="p-2 font-semibold">Seating Capacity</td>
										<td className="p-2">{user.doc.seatingCapacity}</td>
									</tr>
									<tr>
										<td className="p-2 font-semibold">Engine Capacity</td>
										<td className="p-2">{user.doc.engineCapacity} cc</td>
									</tr>
									<tr>
										<td className="p-2 font-semibold">Color</td>
										<td className="p-2">{user.doc.color}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					{/* Video Section */}
					{/* <div className="bg-primary-500 p-2 rounded-[10px] w-full mt-6">
						{user.doc.videoUrls.length > 0 ? (
							<>
								<h2 className="text-xl text-primary-100 font-bold mb-4">
									Car Video
								</h2>

								<Swiper
									pagination={{ clickable: true }} // Enable pagination
									spaceBetween={10} // Space between slides
									slidesPerView={1} // Show one slide at a time
									className="h-[20vw] w-[20vw]" // Adjust according to your desired width/height
								>
									{user.doc.videoUrls.map((video, index) => (
										<SwiperSlide key={index}>
											<PreviewVideo
												video={video}
												altText={`Video ${
													index + 1
												} - This browser does not support video playback.`}
												style={{ width: "100%", height: "auto" }}
											/>
										</SwiperSlide>
									))}
								</Swiper>
							</>
						) : null}
					</div> */}
				</div>
			) : (
				<NoDataFoundMessage message={"Car details not found!"} />
			)}
		</>
	);
};

export default CarDetails;
