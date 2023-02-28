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
      validation: (Rule) => Rule.required().error('give me a title'),
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
      validation: (Rule) => Rule.required().error('give me subtitle'),
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
      title: 'Project Categories',
      type: 'reference',
      name: 'projectCategories',
      to: [{type: 'projectCategories'}],
      validation: (Rule) => Rule.required().error('give me categories'),
      weak: true,
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
