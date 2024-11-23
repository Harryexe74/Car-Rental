import { apiSlice } from "./apiSlice";
import { CUSTOMERS_URL,CUSTOMERS_ADDRESS_URL,CUSTOMERS_LICENSE_URL } from "../constants";

export const customersApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => ({
				url: `${CUSTOMERS_URL}/login`,
				method: "POST",
				body: data,
			}),
		}),
		createCustomer: builder.mutation({
			query: (data) => ({
				url: `${CUSTOMERS_URL}`,
				method: "POST",
				body: data,
			}),
		}),
		createCustomerAddress: builder.mutation({
			query: (data) => ({
				url: `${CUSTOMERS_ADDRESS_URL}`,
				method: "POST",
				body: data,
			}),
		}),
		createCustomerLicense: builder.mutation({
			query: (data) => ({
				url: `${CUSTOMERS_LICENSE_URL}`,
				method: "POST",
				body: data,
			}),
		}),
		logout: builder.mutation({
			query: (token) => ({
				url: `${CUSTOMERS_URL}/logout`,
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}),
		}),
		getCustomers: builder.query({
			query: () => ({
				url: CUSTOMERS_URL,
			}),
			providesTags: ["Customer"],
			keepUnusedDataFor: 5,
		}),
		deleteCustomer: builder.mutation({
			query: (customerId) => ({
				url: `${CUSTOMERS_URL}/${customerId}`,
				method: "DELETE",
			}),
		}),
		getCustomerDetails: builder.query({
			query: (id) => ({
				url: `${CUSTOMERS_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
		getAllCustomerDetails: builder.query({
			query: (id) => ({
				url: `${CUSTOMERS_URL}/all/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
		updateCustomer: builder.mutation({
			query: (data) => ({
				url: `${CUSTOMERS_URL}/${data.id}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["Customer"],
		}),
	}),
});

export const {
	useLoginMutation,
	useLogoutMutation,
	useCreateCustomerMutation,
	useGetCustomersQuery,
	useDeleteCustomerMutation,
	useUpdateCustomerMutation,
	useGetCustomerDetailsQuery,
	useGetAllCustomerDetailsQuery,
	useCreateCustomerAddressMutation,
	useCreateCustomerLicenseMutation,
} = customersApiSlice;
