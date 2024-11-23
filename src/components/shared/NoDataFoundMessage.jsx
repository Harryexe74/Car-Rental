/* eslint-disable react/prop-types */
const NoDataFoundMessage = ({ message }) => {
	return (
		<div className="bg-red-50 text-red-500 py-2 px-4 w-full text-center my-4">
			{message}
		</div>
	);
};

export default NoDataFoundMessage;
