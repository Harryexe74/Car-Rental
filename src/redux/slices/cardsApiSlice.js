import { apiSlice } from "./apiSlice"; // Adjust the import path if necessary
import { CARDS_URL } from "../constants"; // Define CARDS_URL in your constants

export const cardsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Create a new card
    createCard: builder.mutation({
      query: (data) => ({
        url: `${CARDS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    
    // Get all cards
    getCards: builder.query({
      query: () => `${CARDS_URL}`,
    }),

    // Get a single card by ID
    getCardById: builder.query({
      query: (id) => `${CARDS_URL}/${id}`,
    }),

    // Update a card by ID
    updateCardById: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${CARDS_URL}/${userId}`,
        method: "PUT",
        body: data,
      }),
    }),

    // Delete a card by ID
    deleteCardById: builder.mutation({
      query: (id) => ({
        url: `${CARDS_URL}/${id}`,
        method: "DELETE",
      }),
    }),

    // Get cards with users
    getCardsWithUsers: builder.query({
      query: () => `${CARDS_URL}/all/${id}`,
    }),

    // Get a card with a user by ID
    getCardWithUserById: builder.query({
      query: (id) => `${CARDS_URL}/all/${id}`,
    }),
  }),
});

export const {
  useCreateCardMutation,
  useGetCardsQuery,
  useGetCardByIdQuery,
  useUpdateCardByIdMutation,
  useDeleteCardByIdMutation,
  useGetCardsWithUsersQuery,
  useGetCardWithUserByIdQuery,
} = cardsApiSlice;
