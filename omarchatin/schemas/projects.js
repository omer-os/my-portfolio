export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
      options: {
        minRows: 10,
      },
    },
    {
      name: 'demoLink',
      title: 'Demo Link',
      type: 'url',
    },
    {
      name: 'sourceCodeLink',
      title: 'Source Code Link',
      type: 'url',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'projectImages',
      title: 'Project Images',
      type: 'array',
      of: [{type: 'image'}],
    },
  ],
}
