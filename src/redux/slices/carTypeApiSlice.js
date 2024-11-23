import { apiSlice } from "./apiSlice";
import { CAR_TYPES_URL } from "../constants";

export const carTypeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCarType: builder.mutation({
      query: (carType) => ({
        url: CAR_TYPES_URL,
        method: "POST",
        body: carType,
      }),
    }),
    getCarTypes: builder.query({
      query: () => {
        return {
          url: CAR_TYPES_URL,
        };
      },
    }),
    updateCarType: builder.mutation({
      query: (data) => ({
        url: `${CAR_TYPES_URL}/${data.id}`,
        method: "PUT",
        body:data
      }),
      keepUnusedDataFor: 5,
    }),
    deleteCarType: builder.mutation({
      query: (id) => ({
        url: `${CAR_TYPES_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateCarTypeMutation,
  useGetCarTypesQuery,
  useDeleteCarTypeMutation,
  useUpdateCarTypeMutation,
} = carTypeApiSlice;
