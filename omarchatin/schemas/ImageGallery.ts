import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ImageGallery',
  title: 'image gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().error('give me a title'),
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      media: 'image',
      title: 'slug.current',
    },
    prepare({media, title}) {
      return {
        media,
        title,
      }
    },
  },
})
