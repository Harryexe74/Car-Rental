import TopPerformance from "./TopPerformance/TopPerformance";
import Status from "./StatusCard/Status";

const Dashboard = () => {
	return (
		<div className="flex flex-col gap-6 w-full h-screen  bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?cs=srgb&dl=pexels-mikebirdy-120049.jpg&fm=jpg)' }}>
			<div className="flex flex-col md:flex-row gap-4 justify-between">
				<div className="flex-1">
					<TopPerformance />
				</div>
				<div className="w-full md:w-1/4">
					<Status />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
