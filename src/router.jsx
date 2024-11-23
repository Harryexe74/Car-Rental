import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import Customerlist from "./components/Customer/Customerlist";
import Cardlist from "./components/Card/Cardlist";
import Carlist from "./components/Cars/Carlist";
import Carallocationtable from "./components/Carallocation/Carallocationtable";
import Dashboard from "./components/DashBoard/Dashboard";
import AddCustomerForm from "./components/Customer/AddCustomerForm";
import CarDetails from "./components/Cars/CarDetails";
import Reports from "./components/Report/Reports";
import UserDetailPage from "./_root/pages/UserDetailPage";
import CustomerDetailPage from "./_root/pages/CustomerDetailPage";
import AddBrandForm from "./components/Brand/AddBrandForm";
import CarType from "./components/CarType/CarType";
import AddUser from "./components/Vendor/AddUser";
import TransactionTable from "./components/Transcation/Transactiontable";
import BookingPage from "./_root/pages/BookingPage";
import UserList from "./components/Vendor/Userlist";
import AddCarForm from "./components/Cars/AddCarsForm";
import UpdateUserPage from "../src/_root/pages/UpdateUserPage";
import CreateTransactionPage from "../src/_root/pages/CreateTransactionPage";
import TransactionList from "./_root/pages/TransactionList";
import TransactionDetailPage from "./_root/pages/TransactionDetailPage";
import TransactionDetails from "./components/Transcation/TransactionDetails";
import UpdateBrand from "./components/Brand/UpdateBrand";
import UpdateCarType from "./components/CarType/UpdateCarType";
import UpdateCars from "./components/Cars/UpdateCars";
import CarBookingForm from "./components/carBooking/carBooking";
import CarDetailsForm from "./components/Car/carDetails";
import CardDetails from "./components/cardDetail/cardDetails";
import FuelingAndMaintenanceForm from "./components/carFuel/carFuel";
import CarMaintenanceForm from "./components/CarMaintainance/carMaintainance";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpForm from "./components/Signup/signUp";
import ProtectedRoute from "./components/LoginPage/protectedLogin";
import CarBookingList from "./components/carBooking/carBookingList";
import CarDetailsTable from "./components/Car/carList";
import FuelingList from "./components/carFuel/carFuelList";
import CardPaymentList from "./components/cardDetail/cardList";
import CarMaintenenceList from "./components/CarMaintainance/maintenenceList";

const router = createBrowserRouter([
	{
		path:"/login",
		element:<LoginPage/>
	},
	{
		path: "/",
		element: (
		  <ProtectedRoute>
			<RootLayout />
		  </ProtectedRoute>
		),
		children: [
			
			{
				path: "/",
				element: <Dashboard />,
			},

			{
				path: "/car-types",
				element: <CarType />,
			},
			{
				path: "/car-types/update/:id/:name",
				element: <UpdateCarType />,
			},
			{
				path: "/brands",
				element: <AddBrandForm />,
			},
			{
				path: "/brands/update/:id/:name",
				element: <UpdateBrand />,
			},
			{
				path: "customers/customer-details/:id",
				element: <CustomerDetailPage />,
			},
			{
				path: "users/add-user",
				element: <AddUser />,
			},

			{
				path: "customer/add-customer",
				element: <AddCustomerForm />,
			},
			{
				path: "/users",
				element: <UserList />,
			},
			{
				path: "/customers",
				element: <Customerlist />,
			},
			{
				path: "users/user-details/:id",
				element: <UserDetailPage />,
			},
			{
				path: "bookings/car-alot",
				element: <BookingPage />,
			},
			{
				path: "/cars",
				element: <Carlist />,
			},
			{
				path: "/cars/add-car",
				element: <AddCarForm />,
			},
			{
				path: "/cars/update-car/:id",
				element: <UpdateCars />,
			},
			{
				path: "reports",
				element: <Reports />,
			},
			{
				path: "/billing-payments/list-cards",
				element: <Cardlist />,
			},
			{
				path: "/bookings",
				element: <Carallocationtable />,
			},
			{
				path: "car-details/:id",
				element: <CarDetails />,
			},
			// {
			// 	path: "cards",
			// 	element: <CardView />,
			// },

			{
				path: "billing-payments/add-card",
				element: <CreateTransactionPage />,
			},
			{
				path: "/transcations",
				element: <TransactionList />,
			},
			{
				path: "/billing-payments/add-card/transaction-list/:id",
				element: <TransactionDetailPage />,
			},
			{
				path: "billing-payments/add-card/transaction-list/:id/transaction",
				element: <TransactionDetails />,
			},
			{
				path: "/users/update/:id",

				element: <UpdateUserPage />,
			},
			{
				path: "/car-booking",

				element: <CarBookingForm />,
			},
			{
				path: "/car-bookingList",

				element: <CarBookingList />,
			},
			
			{
				path: "/car-Detail",

				element: <CarDetailsForm />,
			},
			{
				path: "/car-DetailList",

				element: <CarDetailsTable />,
			},
			{
				path: "/card-Details",

				element: <CardDetails />,
			},
			{
				path: "/card-List",

				element: <CardPaymentList />,
			},
			{
				path: "/car-fuel",

				element: <FuelingAndMaintenanceForm />,
			},
			{
				path: "/car-fuelingList",

				element: <FuelingList />,
			},
			{
				path: "/car-mainteinance",

				element: <CarMaintenanceForm />,
			},
			{
				path: "/maintenance-List",

				element: <CarMaintenenceList />,
			},
			
			{
				path: "/SignUp",

				element: <SignUpForm />,
			},
		],
	},
]);

export default router;



