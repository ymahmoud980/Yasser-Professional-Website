import { defineField, defineType } from 'sanity'

export const photo = defineType({
    name: 'photo',
    title: 'Gallery Photo',
    type: 'document',
    fields: [
        defineField({
            name: 'caption',
            title: 'Caption',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'event',
            title: 'Event / Conference Name',
            type: 'string',
        }),
    ],
})
