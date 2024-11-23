export const formatDate = (isoString) => {
	const date = new Date(isoString);

	const options = { year: "numeric", month: "long", day: "numeric" };

	return date.toLocaleDateString("en-US", options);
};
