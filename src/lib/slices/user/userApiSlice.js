import { apiSlice } from "../api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
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

    updateProfile: builder.mutation({
      query: (body) => ({
        url: "/user/updateProfile",
        method: "PATCH",
        body,
        formData: true,
      }),
      tagsTypes: ["updateProfile"],
      invalidatesTags: ["updateProfile"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useUpdateProfileMutation,
} = userApiSlice;
