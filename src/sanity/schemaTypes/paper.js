import { defineField, defineType } from 'sanity'

export const paper = defineType({
    name: 'paper',
    title: 'Technical Paper',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'file',
            title: 'Paper File (PDF)',
            type: 'file',
            options: {
                accept: 'application/pdf',
            },
        }),
        defineField({
            name: 'description',
            title: 'Abstract / Description',
            type: 'text',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published Date',
            type: 'date',
        }),
    ],
})
