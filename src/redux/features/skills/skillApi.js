import { baseApi } from "@/redux/api/baseApi";

const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSkill: builder.mutation({
      query: (skillData) => ({
        url: "/skill/create-skill",
        method: "POST",
        body: skillData,
      }),
      invalidatesTags: ["skill"],
    }),
    getAllSkills: builder.query({
      query: () => ({
        url: "/skill/get-all-skill",
        method: "GET",
      }),
      providesTags: ["skill"],
    }),
    getSkillById: builder.query({
      query: (id) => ({
        url: `/skill/get-single-skill/${id}`,
        method: "GET",
      }),
      providesTags: ["skill"],
    }),
    updateSkillById: builder.mutation({
      query: ({ id, skillData }) => {
        return {
          url: `/skill/update-skill/${id}`,
          method: "PUT",
          body: skillData,
        };
      },
      invalidatesTags: ["skill"],
    }),
    deleteSkillById: builder.mutation({
      query: (id) => ({
        url: `/skill/delete-skill/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["skill"],
    }),
  }),
});

export const {
  useCreateSkillMutation,
  useGetAllSkillsQuery,
  useGetSkillByIdQuery,
  useUpdateSkillByIdMutation,
  useDeleteSkillByIdMutation,
} = skillApi;
