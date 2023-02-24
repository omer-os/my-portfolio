import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectCategories',
  title: 'All Project Categories ',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    }),

    defineField({
      name: 'coverimage',
      title: 'Cover Image',
      type: 'image',
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
