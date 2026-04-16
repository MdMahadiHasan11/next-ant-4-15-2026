import config from "@/config";
import { tagTypes } from "@/constants";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${config.host}`,
    credentials: "include",
    prepareHeaders: async (headers, { getState }) => {
      const state = getState() as {
        auth?: {
          accessToken?: string | null;
        };
      };
      const accessToken = state.auth?.accessToken;

      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      } else {
        headers.delete("Authorization");
      }

      return headers;
    },
  }),
  tagTypes,
  endpoints: () => ({}),
});
