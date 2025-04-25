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
      query: (formData) => ({
        url: "/update-profile", // Your API endpoint for updating the profile
        method: "PATCH",
        body: formData,
        formData: true,
      }),
      invalidatesTags: ["updateProfile"],
    }),

    getProfile: builder.query({
      query: () => `/user/get-profile`,
      tagsTypes: ["get-profile"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useUpdateProfileMutation,
  useGetProfileQuery,
} = userApiSlice;
