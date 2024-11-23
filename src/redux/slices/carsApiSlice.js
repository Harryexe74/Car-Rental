import { apiSlice } from "./apiSlice";
import {
  CAR_CONDITIONS_URL,
  CAR_MEDIA_URL,
  CAR_SPECS_URL,
  CAR_STATUS_URL,
  CARS_URL,
} from "../constants";

export const carsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCar: builder.mutation({
      query: (car) => ({
        url: CARS_URL,
        method: "POST",
        body: car,
      }),
    }),
    createCarMedia: builder.mutation({
      query: (data) => ({
        url: CAR_MEDIA_URL,
        method: "POST",
        body: data,
      }),
    }),
    updateCarSpecifications: builder.mutation({
      query: (data) => ({
        url: `${CAR_SPECS_URL}/car/${data.id}`,
        method: "PUT",
        body: data,
      }),
    }),
    updateCar: builder.mutation({
      query: (data) => ({
        url: `${CARS_URL}/${data.id}`,
        method: "PUT",
        body: data,
      }),
    }),
    updateCarStatus: builder.mutation({
      query: (data) => ({
        url: `${CAR_STATUS_URL}/car/${data.id}`,
        method: "PUT",
        body: data,
      }),
    }),
    updateCarMedia: builder.mutation({
      query: (data) => ({
        url: `${CAR_MEDIA_URL}/car/${data.id}`,
        method: "PUT",
        body: data,
      }),
    }),
    createCarSpecifications: builder.mutation({
      query: (data) => ({
        url: CAR_SPECS_URL,
        method: "POST",
        body: data,
      }),
    }),
    createCarStatus: builder.mutation({
      query: (data) => ({
        url: CAR_STATUS_URL,
        method: "POST",
        body: data,
      }),
    }),
    createCarCondition: builder.mutation({
      query: (data) => ({
        url: CAR_CONDITIONS_URL,
        method: "POST",
        body: data,
      }),
    }),
    getCars: builder.query({
      query: (query) => {
        return {
          url: CARS_URL,
          params: query,
        };
      },
    }),
    getCarDetails: builder.query({
      query: (id) => ({
        url: `${CARS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),

    getAllCarDetails: builder.query({
      query: (id) => ({
        url: `${CARS_URL}/all/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getMyCars: builder.query({
      query: () => ({
        url: `${CARS_URL}/mine`,
      }),
      keepUnusedDataFor: 5,
    }),
    getCarSpecification: builder.query({
      query: () => ({
        url: `${CARS_URL}/mine`,
      }),
      keepUnusedDataFor: 5,
    }),
    getCarMedia: builder.query({
      query: () => ({
        url: `${CARS_URL}/mine`,
      }),
      keepUnusedDataFor: 5,
    }),
    getCarStatus: builder.query({
      query: () => ({
        url: `${CARS_URL}/mine`,
      }),
      keepUnusedDataFor: 5,
    }),

    avaliableCar: builder.query({
      query: (carId) => ({
        url: `${CARS_URL}/${carId}?avaliblity=availibile`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useCreateCarMutation,
  useGetCarDetailsQuery,
  useGetMyCarsQuery,
  useGetCarsQuery,
  useAvaliableCarQuery,
  useCreateCarConditionMutation,
  useCreateCarSpecificationsMutation,
  useCreateCarStatusMutation,
  useCreateCarMediaMutation,
  useGetAllCarDetailsQuery,
  useUpdateCarMediaMutation,
  useUpdateCarStatusMutation,
  useUpdateCarSpecificationsMutation,
  useUpdateCarMutation, 
  useGetCarMediaQuery,
  useGetCarSpecificationQuery,
  useGetCarStatusQuery,
} = carsApiSlice;
