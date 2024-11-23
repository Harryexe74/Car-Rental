/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const TransactionDetails = ({ transaction }) => {
	console.log(transaction);
	// Ensure transactionId is a number
	return (
		<div className="mt-4 p-4 bg-primary-100 rounded-[10px] text-primary-900 border border-primary-200">
			<h2 className="text-xl font-bold mb-4">Transaction Details</h2>
			<table className="min-w-full bg-white rounded-[10px]">
				<thead>
					<tr>
						<th className="border px-4 py-2">Transaction ID</th>
						<th className="border px-4 py-2">Booking ID</th>
						<th className="border px-4 py-2">Payment Date</th>
						<th className="border px-4 py-2">Rental Charges</th>
						<th className="border px-4 py-2">Additional Charges</th>
						<th className="border px-4 py-2">Payment Method</th>
						<th className="border px-4 py-2">Total Amount</th>
						<th className="border px-4 py-2">Status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="border px-4 py-2">{transaction.id}</td>
						<td className="border px-4 py-2">{transaction.bookingId}</td>
						<td className="border px-4 py-2">
							{new Date(transaction.paymentDate).toLocaleDateString()}
						</td>
						<td className="border px-4 py-2">{transaction.rentalCharges}</td>
						<td className="border px-4 py-2">
							{transaction.additionalCharges}
						</td>
						<td className="border px-4 py-2">{transaction.paymentMethod}</td>
						<td className="border px-4 py-2">{transaction.totalAmount}</td>
						<td className="border px-4 py-2">{transaction.status}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

TransactionDetails.propTypes = {
	transactions: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			bookingId: PropTypes.number.isRequired,
			paymentDate: PropTypes.string.isRequired,
			rentalCharges: PropTypes.string.isRequired,
			additionalCharges: PropTypes.string.isRequired,
			paymentMethod: PropTypes.string.isRequired,
			totalAmount: PropTypes.string.isRequired,
			status: PropTypes.string.isRequired,
			ownerId: PropTypes.number,
			customerId: PropTypes.number,
		})
	).isRequired,
	transactionId: PropTypes.number.isRequired, // transactionId should be a number
};

export default TransactionDetails;
