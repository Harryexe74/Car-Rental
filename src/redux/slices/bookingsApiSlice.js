import { BOOKINGS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const bookingsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getBookings: builder.query({
			query: (query) => ({
				url: BOOKINGS_URL,
				params: query,
			}),
		}),
		getBookingDetails: builder.query({
			query: (id) => ({
				url: `${BOOKINGS_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
		createBooking: builder.mutation({
			query: (data) => ({
				url: BOOKINGS_URL,
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["Booking"],
		}),

		updateBooking: builder.mutation({
			query: (data) => ({
				url: `${BOOKINGS_URL}/${data._id}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["Booking"],
		}),

		deleteBooking: builder.mutation({
			query: (bookingId) => ({
				url: `${BOOKINGS_URL}/${bookingId}`,
				method: "DELETE",
			}),
			providesTags: ["Booking"],
		}),
		getTopBookings: builder.query({
			query: () => `${BOOKINGS_URL}/top`,
			keepUnusedDataFor: 5,
		}),
	}),
});

export const {
	useGetBookingsQuery,
	useGetBookingDetailsQuery,
	useCreateBookingMutation,
	useUpdateBookingMutation,
	useDeleteBookingMutation,
	useGetTopBookingsQuery,
} = bookingsApiSlice;
