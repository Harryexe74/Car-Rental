import {
	FaTachometerAlt,
	FaUser,
	FaList,
	FaPlus,
	FaClipboardList,
	FaCarSide,
	FaUserTie,
	FaMoneyCheckAlt,
	FaFileInvoiceDollar,
} from "react-icons/fa";
import { GiCityCar } from "react-icons/gi";
import { TbBrandBootstrap } from "react-icons/tb";
import { BsFillFuelPumpDieselFill  } from "react-icons/bs";
import { FaRegAddressCard } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";

export const sidebarItems = [
	{
		title: "Dashboard",
		path: "/",
		icon: <FaTachometerAlt />,
	},
	// {
	// 	title: "Car Type",
	// 	path: "/car-types",
	// 	icon: <GiCityCar />,
	// },
	// {
	// 	title: "Brand",
	// 	path: "/brands",
	// 	icon: <TbBrandBootstrap />,
	// },
	{
		title: "Booking",
		icon: <FaClipboardList />,
		subSections: [
			// {
			// 	title: "Allocate the car",
			// 	path: "/bookings/car-alot",
			// 	icon: <FaPlus />,
			// },
			// {
			// 	title: "List of allocaters",
			// 	path: "/bookings",
			// 	icon: <FaList />,
			// },
			{
				title: "Car Booking",
				path: "/car-booking",
				icon: <TbBrandBooking />,
			},
			{
				title: "Booking List",
				path: "/car-bookingList",
				icon: <TbBrandBooking />,
			},
		],
	},
	{
		title: "Cars",
		icon: <FaCarSide />,
		subSections: [
			// {
			// 	title: "Add Car",
			// 	path: "/cars/add-car",
			// 	icon: <FaPlus />,
			// },
			// {
			// 	title: "All Cars",
			// 	path: "/cars",
			// 	icon: <FaList />,
			// },
			{
				title: "Car Details",
				path: "/car-Detail",
				icon: <FaList />,
			},
			{
				title: "Car List",
				path: "/car-DetailList",
				icon: <FaList />,
			},
		
		
		],
	},
	{
		title: "Cars Fueling",
		icon: <FaCarSide />,
		subSections: [
			
			
			{
				title: "Car Fuel",
				path: "/car-fuel",
				icon: <BsFillFuelPumpDieselFill />,
			},
			{
				title: "Fueling List",
				path: "/car-fuelingList",
				icon: <BsFillFuelPumpDieselFill />,
			},
		
		],
	},
	{
		title: "Card",
		icon: <FaUser />,
		subSections: [
			// {
			// 	title: "Add Customer",
			// 	path: "/customer/add-customer",
			// 	icon: <FaPlus />,
			// },
			// {
			// 	title: "All Customers",
			// 	path: "/customers",
			// 	icon: <FaList />,
			// },
			{
				title: "Card Details",
				path: "/card-Details",
				icon: <FaRegAddressCard />,
			},
			{
				title: "Card List",
				path: "/card-List",
				icon: <FaRegAddressCard />,
			},
		],
	},
	// {
	// 	title: "Users",
	// 	icon: <FaUserTie />,
	// 	subSections: [
	// 		{
	// 			title: "Add User",
	// 			path: "/users/add-user",
	// 			icon: <FaPlus />,
	// 		},
	// 		{
	// 			title: "All Users",
	// 			path: "/users",
	// 			icon: <FaList />,
	// 		},
	// 	],
	// },
	{
		// title: "Billing/Payments",
		title: "Car Maintenance",
		icon: <FaMoneyCheckAlt />,
		subSections: [
			{
				title: "Car Mainteinance",
				path: "/car-mainteinance",
				icon: <FaPlus />,
			},
			{
				title: "Maintenance List",
				path: "/maintenance-List",
				icon: <FaPlus />,
			},
			// {
			// 	title: "All Transections",
			// 	path: "/transcations",
			// 	icon: <FaList />,
			// },
			

			// {
			// 	title: "Transections List",
			// 	path: "/billing-payments/list-transcation",
			// 	icon: <FaList />,
			// },
		],

	},
	// {
	// 	title: "Reports",
	// 	path: "/reports",
	// 	icon: <FaFileInvoiceDollar />,
	// },
];
