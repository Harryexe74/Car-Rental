import React, { useState, useRef } from "react";
import { IoPerson } from "react-icons/io5";
import { AiFillCamera } from "react-icons/ai";
import { IoIosLock } from "react-icons/io";

const ProfileInformation = () => {
  const [image, setImage] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const passwordSectionRef = useRef(null); // Reference for the password section

  // Handle profile image upload
  const handleuploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Handle background image upload
  const handleBackgrounduploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBackgroundImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6 relative">
      <h1 className="flex items-center gap-2 text-[1rem] font-semibold mb-4">
        <span>
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/profile_setting.png"
            alt="profile"
            className="h-6 w-6"
          />
        </span>{" "}
        Profile Information
      </h1>

      {/* Background Image */}
      <div className="relative h-36 w-full rounded-t-lg overflow-hidden">
        <img
          src={
            backgroundImage || "https://via.placeholder.com/600x200" // Placeholder for background image
          }
          alt="Background"
          className="h-full w-full object-cover"
        />
        <label
          htmlFor="backgroundImage"
          className="absolute top-2 right-2 bg-white p-1 rounded-full shadow cursor-pointer"
        >
          <AiFillCamera className="text-xl" />
        </label>
        <input
          type="file"
          id="backgroundImage"
          accept="image/*"
          onChange={handleBackgrounduploadImage}
          className="hidden"
        />
      </div>

      {/* Profile Picture */}
      <div className="absolute top-24 md:top-20 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          <img
            src={image || "https://via.placeholder.com/150"} // Placeholder for profile picture
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white object-cover"
          />
          <label
            htmlFor="profileImage"
            className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow cursor-pointer"
          >
            <AiFillCamera className="text-xl" />
          </label>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={handleuploadImage}
            className="hidden"
          />
        </div>
      </div>

      {/* Form Section */}
      <form className="mt-20">
        <div className="text-lg font-semibold flex items-center gap-2 mb-4">
          <IoPerson className="text-2xl" />
          Basic Information
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Full Name */}
          <div className="col-span-1">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Admin"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="col-span-1">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number <span className="text-gray-500">(Optional)</span>
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                <img
                  src="https://flagcdn.com/us.svg"
                  alt="Flag"
                  className="w-6 h-4"
                />
                &nbsp;+1
              </span>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="+00xxxxxxxxxx"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div className="col-span-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="admin@admin.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </form>

      {/* Change Password Section */}
      <div
        className="bg-white px-5 py-3 border border-gray-300 shadow rounded my-5"
        id="password"
        ref={passwordSectionRef}
      >
        <div className="flex items-center gap-3">
          <IoIosLock className="font-bold text-xl" />
          <h1 className="text-md font-semibold">Change Password</h1>
        </div>
        <br />
        <form action="" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="">
            <label htmlFor="newPassword">New Password *</label>
            <input
              id="newPassword"
              type="password"
              placeholder="Enter New Password"
              className="border border-gray-300 px-3 py-2 rounded w-full"
            />
          </div>
          <div className="">
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="border border-gray-300 px-3 py-2 rounded w-full"
            />
          </div>
        </form>
        <div className="flex justify-end items-center px-2 py-3">
          <button className="px-3 py-2 border bg-green-500 hover:bg-green-700 text-white rounded">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
