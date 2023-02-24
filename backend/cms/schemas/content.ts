import {defineField, defineType} from 'sanity'

export default {
  name: 'content',
  title: 'Content',
  type: 'array',
  of: [
    {
      type: 'block',
    },
    {
      type: 'image',
      fields: [
        defineField({
        }),
      ],
    },
  ],
}
