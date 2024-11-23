import { TRANSACTIONS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const transactionsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTransactions: builder.query({
			query: (query) => ({
				url: TRANSACTIONS_URL,
				params: query,
			}),
		}),
		getTransactionDetails: builder.query({
			query: (id) => ({
				url: `${TRANSACTIONS_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
		createTransaction: builder.mutation({
			query: (data) => ({
				url: TRANSACTIONS_URL,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["Transaction"],
		}),

		updateTransaction: builder.mutation({
			query: (data) => ({
				url: `${TRANSACTIONS_URL}/${data._id}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["Transaction"],
		}),
		deleteTransaction: builder.mutation({
			query: (transactionId) => ({
				url: `${TRANSACTIONS_URL}/${transactionId}`,
				method: "DELETE",
			}),
			providesTags: ["Transaction"],
		}),
		getAllRevenue: builder.query({
			query: () => ({
				url: TRANSACTIONS_URL,
				params: {
					fields: "rentalCharges",
				},
			}),
		}),
	}),
});

export const {
	useGetTransactionsQuery,
	useGetTransactionDetailsQuery,
	useCreateTransactionMutation,
	useUpdateTransactionMutation,
	useDeleteTransactionMutation,
	useGetTopTransactionsQuery,
	useGetAllRevenueQuery,
} = transactionsApiSlice;
