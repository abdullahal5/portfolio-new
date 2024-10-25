import { baseApi } from "@/redux/api/baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProject: builder.mutation({
      query: (projectData) => ({
        url: "/projects/create-project",
        method: "POST",
        body: projectData,
      }),
      invalidatesTags: ["Project"],
    }),
    getAllProjects: builder.query({
      query: () => "/projects/get-all-projects",
      providesTags: ["Project"],
    }),
    getProjectById: builder.query({
      query: (id) => `/projects/get-project/${id}`,
      providesTags: (result, error, id) => [{ type: "Project", id }],
    }),
    updateProjectById: builder.mutation({
      query: ({ id, projectData }) => ({
        url: `/projects/update-project/${id}`,
        method: "PUT",
        body: projectData,
      }),
      invalidatesTags: ["Project"],
    }),
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `/projects/delete-project/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Project"],
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useGetAllProjectsQuery,
  useGetProjectByIdQuery,
  useUpdateProjectByIdMutation,
  useDeleteProjectMutation,
} = projectApi;
