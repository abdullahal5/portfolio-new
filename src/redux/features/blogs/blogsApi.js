import { baseApi } from "@/redux/api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (blogData) => ({
        url: "/blogs/create-blog",
        method: "POST",
        body: blogData,
      }),
      invalidatesTags: ["Blog"],
    }),
    getAllBlogs: builder.query({
      query: () => "/blogs/all-blog",
      providesTags: ["Blog"],
    }),
    getSingleBlog: builder.query({
      query: (id) => `/blogs/sinlge-blog/${id}`,
      providesTags: ["Blog"],
    }),
    updateBlog: builder.mutation({
      query: ({ id, blogData }) => ({
        url: `/blogs/update-blog/${id}`,
        method: "PUT",
        body: blogData,
      }),
      invalidatesTags: ["Blog"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/delete-blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetAllBlogsQuery,
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
