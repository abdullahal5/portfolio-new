import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../features/auth/authSlice";
import toast from "react-hot-toast";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://portfolio-backend-nu-teal.vercel.app/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const state = getState();
    const token = state.auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithLogout = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401 || result?.error?.data?.message) {
    toast.error(result?.error?.data?.message);

    api.dispatch(logout());
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithLogout,
  endpoints: () => ({}),
  tagTypes: ["user", "skill", "Project", "Blog"],
});
