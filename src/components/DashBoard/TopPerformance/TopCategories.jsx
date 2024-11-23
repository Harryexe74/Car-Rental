<<<<<<< HEAD
import { Doughnut } from "react-chartjs-2";
=======
>>>>>>> 09a43d659f73a3da85365cd900115f6017a8179a
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TopCategories = () => {
<<<<<<< HEAD
	const data = {
		labels: ["Customers", "User", "Rent Cars"],
		datasets: [
			{
				data: [558, 204, 108],
				backgroundColor: [
					"rgba(0, 51, 102, 0.9)", // Rich navy blue
					"rgba(0, 128, 128, 0.9)", // Vibrant teal
					"rgba(255, 127, 80, 0.9)", // Warm coral
				],
				borderWidth: 0,
			},
		],
	};
=======
>>>>>>> 09a43d659f73a3da85365cd900115f6017a8179a

	const options = {
		responsive: true,
		cutout: "85%",
		plugins: {
			legend: {
				display: false, // Hide the legend if not needed
			},
			tooltip: {
				enabled: true, // Ensure tooltips are enabled
				backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark background for tooltip
				titleColor: "#ffffff", // White color for tooltip title
				bodyColor: "#ffffff", // White color for tooltip body
				borderColor: "rgba(255, 255, 255, 0.2)", // Border color of tooltip
				borderWidth: 1, // Border width of tooltip
				callbacks: {
					label: function (context) {
						// Customize tooltip label
						let label = context.label || "";
						let value = context.raw || "";
						return `${label}: ${value}`;
					},
				},
			},
		},
		elements: {
			arc: {
				borderWidth: 1, // Border width of pie slices
				borderColor: "rgba(0, 0, 0, 0.2)", // Border color of pie slices
			},
		},
	};

	return (
		<div className="bg-ground rounded-[10px] p-4 min-h-64">
			<h4 className="text-gray-700 mb-4 text-[1rem] font-semibold">Totals</h4>
			{/* <div className="relative mb-4">
        <Doughnut data={data} options={options} height={150} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-2xl">8,452</div>
          <div className="text-gray-700">Total Sessions</div>
        </div>
      </div> */}
			<ul className="space-y-2">
				<li className="flex justify-between text-primary">
					<span>Customers</span>{" "}
					<span className="bg-white rounded-full px-3 py-1 text-sm">558</span>
				</li>
				<li className="flex justify-between text-primary">
					<span>Users</span>{" "}
					<span className="bg-white rounded-full px-3 py-1 text-sm">204</span>
				</li>
				<li className="flex justify-between text-primary">
					<span>Rent Cars</span>{" "}
					<span className="bg-white rounded-full px-3 py-1 text-sm">108</span>
				</li>
			</ul>
		</div>
	);
};

export default TopCategories;
