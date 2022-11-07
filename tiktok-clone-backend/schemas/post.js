export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
    {
      name: "video",
      title: "Video",
      type: "file",
      option: {
        hotspot: true,
      },
    },
    {
      name: "userId",
      title: "User Id",
      type: "string",
    },
    {
      name: "postedBy",
      title: "Posted By",
      type: "postedBy",
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "user",
            },
          ],
        },
      ],
    },
    {
      name: "comments",
      title: "Comments",
      type: "array",
      of: [{ type: "comment" }],
    },
    {
      name: "topic",
      title: "Topic",
      type: "string",
    },
  ],
};
