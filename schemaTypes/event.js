export default {
  name: 'event',
  title: 'Événement',
  type: 'document',
  fields: [
    {name: 'title', title: 'Titre', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'date', title: 'Date', type: 'datetime'},
    {name: 'price', title: 'Prix', type: 'string'},
    {name: 'image', title: 'Image', type: 'image'},
    {name: 'category', title: 'Catégorie', type: 'string'},
    {name: 'tags', title: 'Étiquettes', type: 'array', of: [{type: 'string'}]},
    {name: 'venue', title: 'Lieu', type: 'reference', to: [{type: 'venue'}]},
  ],
}
