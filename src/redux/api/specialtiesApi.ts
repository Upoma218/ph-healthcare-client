import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecialty: build.mutation({
      query: (data) => ({
        url: "/specialities",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.specialities],
    }),

    getAllSpecialties: build.query({
      query: () => ({
        url: "/specialities",
        method: "GET",
      }),
      providesTags: [tagTypes.specialities],
    }),

    deleteSpecialty: build.mutation({
      query: (id) => ({
        url: `/specialities/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.specialities],
    }),
  }),
});

export const {
  useCreateSpecialtyMutation,
  useGetAllSpecialtiesQuery,
  useDeleteSpecialtyMutation,
} = specialtiesApi;
