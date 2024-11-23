/* eslint-disable react/prop-types */
const CustomerDetails = ({ customer }) => {
	console.log(customer);
	return customer ? (
		<div className="p-4 w-full rounded-lg text-lg text-primary-900 bg-ground">
			<h2 className="text-xl font-bold mb-4">Customer Details</h2>

			{/* customer Details Table */}
			<div className="flex flex-col gap-4 mb-6 w-full">
				<div className="w-full flex items-center justify-center">
					<img
						src={
							customer?.imageUrl ||
							"https://www.pngitem.com/pimgs/m/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png"
						}
						alt={customer.firstName}
						className="w-32 h-32 rounded-full object-cover"
					/>
				</div>

				<div className="flex flex-col md:flex-row gap-4 mx-auto w-full">
					{/* customer Info and Address */}
					<div className="w-full md:w-1/2 flex flex-col gap-4">
						<div className="rounded-[10px] min-h-96 bg-ground opacity-60">
							<h3 className="text-xl  font-semibold p-2 h-12 rounded-t-[10px] bg-ground">
								Customer Information
							</h3>
							<table className="w-full">
								<tbody>
									<tr>
										<td className="px-4 py-2 font-semibold">First Name:</td>
										<td className="px-4 py-2">{customer.firstName}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">Last Name:</td>
										<td className="px-4 py-2">{customer.lastName}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">CNIC:</td>
										<td className="px-4 py-2">{customer.cnic}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">Phone Number:</td>
										<td className="px-4 py-2">{customer.phoneNumber}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">Date of Birth:</td>
										<td className="px-4 py-2">{customer.dateOfBirth}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">Status:</td>
										<td className="px-4 py-2 text-green-600">
											{customer.status}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="rounded-lg shadow-md min-h-96 bg-ground opacity-60">
							<h3 className="text-xl font-semibold p-2 h-12 rounded-t-[10px] bg-ground">
								Customer Address
							</h3>
							<table className="w-full">
								<tbody>
									<tr>
										<td className="px-4 py-2 font-semibold">Address:</td>
										<td className="px-4 py-2">{customer.address}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">City:</td>
										<td className="px-4 py-2">{customer.city}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">State:</td>
										<td className="px-4 py-2 ">{customer.state}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">Zip Code:</td>
										<td className="px-4 py-2">{customer.zipCode}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					{/* Licenses and Cards */}
					<div className="w-full md:w-1/2 flex flex-col gap-4">
						<div className="rounded-lg shadow-md min-h-96 bg-ground opacity-60">
							<h3 className="text-xl font-semibold p-2 h-12 rounded-t-[10px] bg-ground">
								Customer License
							</h3>
							<table className="w-full">
								<tbody>
									<tr>
										<td className="px-4 py-2 font-semibold">License Number:</td>
										<td className="px-4 py-2">
											{customer.drivingLicenseNumber}
										</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">Expiry Date:</td>
										<td className="px-4 py-2">{customer.licenseExpiryDate}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : null;
};

export default CustomerDetails;
