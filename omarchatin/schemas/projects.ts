import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'All Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'showinhome',
      title: 'show in home page',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Project Content',
      type: 'string',
      validation: (Rule) => Rule.required().error('give me content'),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('generate slug'),
    }),

    defineField({
      name: 'coverimage',
      title: 'Cover image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'MMM D yyyy',
      },
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: 'projectCategories',
      title: 'Project Categories',

      type: 'array',
      of: [
        {
          name: 'projectCategories',
          type: 'reference',
          to: [{type: 'projectCategories'}],
          title: 'Blog Category',
          validation: (Rule) => Rule.required().error('Please select a blog category'),
          weak: true,
        },
      ],
    }),
    defineField({
      name: 'demo',
      title: 'Demo Link',
      type: 'url',
    }),
    defineField({
      name: 'github',
      title: 'Source Code Link',
      type: 'url',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'coverimage',
    },
  },
})
