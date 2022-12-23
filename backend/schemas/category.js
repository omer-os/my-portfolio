export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      required: true, // added required property
    },
    {
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: {
        hotspot: true,
      },
      required: true, // added required property
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      required: true, // added required property
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
    },
    prepare(selection) {
      return Object.assign({}, selection)
    },
  },
}
