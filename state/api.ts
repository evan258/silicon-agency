import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (builder) => ({
    sendMessage: builder.mutation<{ id: number }, { title: string; body: string }>({
      query: (body) => ({ url: "/posts", method: "POST", body: { ...body, userId: 1 } }),
    }),
  }),
});

export const {
  useSendMessageMutation,
} = api;
