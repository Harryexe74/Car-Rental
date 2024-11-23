/* eslint-disable react/prop-types */
const UserDetails = ({ user }) => {
	console.log(user);
	return (
		<div className="p-4 w-full rounded-lg text-lg text-primary-900 bg-ground">
			<h2 className="text-xl font-bold mb-4">User Details</h2>

			{/* user Details Table */}
			<div className="flex flex-col gap-4 mb-6 w-full">
				<div className="w-full flex items-center justify-center">
					<img
						src={
							user?.image ||
							"https://www.pngitem.com/pimgs/m/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png"
						}
						alt={user.name}
						className="w-32 h-32 rounded-full object-cover"
					/>
				</div>

				<div className="flex flex-col md:flex-row gap-4 mx-auto w-full">
					{/* user Info and Address */}
					<div className="w-full md:w-1/2 flex flex-col gap-4">
						<div className="rounded-[10px] min-h-96 bg-ground opacity-60">
							<h3 className="text-xl  font-semibold p-2 h-12 rounded-t-[10px] bg-ground">
								User Information
							</h3>
							<table className="w-full">
								<tbody>
									<tr>
										<td className="px-4 py-2 font-semibold">First Name:</td>
										<td className="px-4 py-2">{user.name}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">Email:</td>
										<td className="px-4 py-2">{user.email}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">CNIC:</td>
										<td className="px-4 py-2">{user.cnic}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">Phone Number:</td>
										<td className="px-4 py-2">{user.phoneNumber}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">
											Registration Date:
										</td>
										<td className="px-4 py-2">{user.registrationDate}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">Status:</td>
										<td className="px-4 py-2 text-green-600">{user.status}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="rounded-lg shadow-md min-h-96 bg-ground opacity-60">
							<h3 className="text-xl font-semibold p-2 h-12 rounded-t-[10px] bg-ground">
								User Address
							</h3>
							<table className="w-full">
								<tbody>
									<tr>
										<td className="px-4 py-2 font-semibold">Address:</td>
										<td className="px-4 py-2">{user.address}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">City:</td>
										<td className="px-4 py-2">{user.city}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">State:</td>
										<td className="px-4 py-2 ">{user.state}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">Zip Code:</td>
										<td className="px-4 py-2">{user.zipCode}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					{/* Licenses and Cards */}
					<div className="w-full md:w-1/2 flex flex-col gap-4">
						<div className="rounded-lg shadow-md min-h-96 bg-ground opacity-60">
							<h3 className="text-xl font-semibold p-2 h-12 rounded-t-[10px] bg-ground">
								Card Details
							</h3>
							<table className="w-full">
								<tbody>
									<tr>
										<td className="px-4 py-2 font-semibold">Card Number:</td>
										<td className="px-4 py-2">{user.cardNumber}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">
											Card Holder Name:
										</td>
										<td className="px-4 py-2">{user.cardHolderName}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">Expiry Date:</td>
										<td className="px-4 py-2">{user.expiryDate}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">
											Billing Address:
										</td>
										<td className="px-4 py-2">{user.billingAddress}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDetails;
