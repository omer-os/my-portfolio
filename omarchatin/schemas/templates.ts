import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'templates',
  title: 'All Website Templates',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
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
      name: 'templateCategory',
      title: 'Template Category',
      type: 'reference',
      to: [{type: 'templateCategories'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'demoUrl',
      title: 'Demo URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'githubUrl',
      title: 'Github URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'framework',
      title: 'Framework',
      type: 'string',
      options: {
        list: [
          {title: 'Next.js', value: 'nextjs'},
          {title: 'Javascript', value: 'javascript'},
          {title: 'Jquery', value: 'jquery'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),

    // images
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
})
