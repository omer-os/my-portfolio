export default {
  name: 'template',
  title: 'Template',
  type: 'document',
  fields: [
    {
      name: 'coverimage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
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
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'technology',
      title: 'Technology',
      type: 'string',
    },
    {
      name: 'demoLink',
      title: 'Demo Link',
      type: 'url',
    },

    {
      name: 'projectImages',
      title: 'Project Images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
