import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogs',
  title: 'All Blogs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().error('give me a title'),
    }),
    defineField({
      name: 'wordcount',
      title: 'Word Count',
      type: 'number',
      validation: (Rule: any) => Rule.required().error('give me a number'),
    }),
    defineField({
      name: 'readminutes',
      title: 'Read Minutes',
      type: 'number',
      validation: (Rule: any) => Rule.required().error('give me a number'),
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
      validation: (Rule: any) => Rule.required().error('give me subtitle'),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required().error('generate slug'),
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
      title: 'Content',
      name: 'content',
      description: 'md content of the blog',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required().error('please add content'),
    }),

    defineField({
      name: 'blogCategories',
      title: 'categories',
      type: 'array',
      of: [
        {
          name: 'blogCategories',
          type: 'reference',
          to: [{type: 'blogCategories'}],
          title: 'Blog Category',
          validation: (Rule) => Rule.required().error('Please select a blog category'),
          weak: true,
        },
      ],
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
