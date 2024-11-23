import { apiSlice } from "./apiSlice";
import { BRANDS_URL } from "../constants";

export const brandsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBrand: builder.mutation({
      query: (brand) => ({
        url: BRANDS_URL,
        method: "POST",
        body: brand,
      }),
    }),
    getBrands: builder.query({
      query: () => {
        return {
          url: BRANDS_URL,

        };
      },
    }),
    updateBrand: builder.mutation({
      query: (data) => ({
        url: `${BRANDS_URL}/${data.id}`,
        method: "PUT",
        body :data
      }),
      keepUnusedDataFor: 5,
    }),
    deleteBrand: builder.mutation({
      query: (id) => ({
        url: `${BRANDS_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
	useCreateBrandMutation,
	useGetBrandsQuery,
	useUpdateBrandMutation,
	useDeleteBrandMutation,
} = brandsApiSlice;
