import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["login"],
      tagTypes: ["googleAuthLogin"],
    }),

    register: builder.mutation({
      query: (body) => ({
        url: "/user/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["register"],
    }),

    updateUser: builder.mutation({
      query: (body) => ({
        url: "/user/update",
        method: "POST",
        body,
        formData: true,
      }),
      tagsTypes: ["updateUser"],
      invalidatesTags: ["updateUser"],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useUpdateUserMutation } =
  authApiSlice;
