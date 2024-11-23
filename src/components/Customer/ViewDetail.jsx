const ViewDetail = ({ title, customer, customerAddress, licenses, cards }) => {
	if (!customer || !customerAddress) {
		return <div>No customer data available</div>;
	}

	return (
		<div className="p-4 w-full rounded-lg text-lg text-primary-900 bg-ground">
			<h2 className="text-xl font-bold mb-4">{title}</h2>

			{/* Customer Details Table */}
			<div className="flex flex-col gap-4 mb-6 w-full">
				<div className="w-full flex items-center justify-center">
					<img
						src={customer.image}
						alt="Customer"
						className="w-30 h-30 rounded-full object-cover"
					/>
				</div>

				<div className="flex flex-col md:flex-row gap-4 mx-auto w-full">
					{/* Customer Info and Address */}
					<div className="w-full md:w-1/2 flex flex-col gap-4">
						<div className="rounded-[10px] min-h-96 bg-ground opacity-60">
							<h3 className="text-xl  font-semibold p-2 h-12 rounded-t-[10px] bg-ground">
								{title} Info
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
										<td className="px-4 py-2 font-semibold">Email:</td>
										<td className="px-4 py-2">{customer.Email}</td>
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
										<td className="px-4 py-2">{customer.status}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="rounded-lg shadow-md min-h-96 bg-ground opacity-60">
							<h3 className="text-xl font-semibold p-2 h-12 rounded-t-[10px] bg-ground">
								{title} Address
							</h3>
							<table className="w-full">
								<tbody>
									<tr>
										<td className="px-4 py-2 font-semibold">Address:</td>
										<td className="px-4 py-2">{customerAddress.address}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">City:</td>
										<td className="px-4 py-2">{customerAddress.city}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">State:</td>
										<td className="px-4 py-2">{customerAddress.state}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">Zip Code:</td>
										<td className="px-4 py-2">{customerAddress.zipCode}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					{/* Licenses and Cards */}
					<div className="w-full md:w-1/2 flex flex-col gap-4">
						<div className="rounded-lg shadow-md min-h-96 bg-ground opacity-60">
							<h3 className="text-xl font-semibold p-2 h-12 rounded-t-[10px] bg-ground">
								{title} Licenses
							</h3>
							<table className="w-full">
								<tbody>
									<tr>
										<td className="px-4 py-2 font-semibold">License Number:</td>
										<td className="px-4 py-2">{licenses.licenseNumber}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">Expiry Date:</td>
										<td className="px-4 py-2">{licenses.licenseExpiryDate}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="rounded-lg shadow-md min-h-96 bg-ground opacity-60">
							<h3 className="text-xl font-semibold p-2 h-12 rounded-t-[10px] bg-ground">
								{title} Cards
							</h3>
							<table className="w-full">
								<tbody>
									<tr>
										<td className="px-4 py-2 font-semibold">Card Number:</td>
										<td className="px-4 py-2">{cards.cardNumber}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">
											Card Holder Name:
										</td>
										<td className="px-4 py-2">{cards.cardHolderName}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">Expiry Date:</td>
										<td className="px-4 py-2">{cards.expiryDate}</td>
									</tr>
									<tr>
										<td className="px-4 py-2 font-semibold">CVV:</td>
										<td className="px-4 py-2">{cards.CVV}</td>
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

export default ViewDetail;
