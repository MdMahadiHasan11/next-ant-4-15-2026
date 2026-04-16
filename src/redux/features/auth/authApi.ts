import { tags } from "@/constants";
import { TResponseRedux, User } from "@/types";
import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query<User, void>({
      query: () => ({
        url: "/auth-service/auth/profile",
        method: "GET",
      }),

      transformResponse: (response: TResponseRedux<User>): User => {
        if (!response?.data) {
          throw new Error("User data not found");
        }
        return response.data;
      },

      providesTags: [tags.userTag],
    }),
  }),

  overrideExisting: false,
});

export const { useGetMeQuery } = authApi;
