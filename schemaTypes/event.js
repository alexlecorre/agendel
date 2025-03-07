export default {
  name: 'event',
  title: 'evenement',
  type: 'document',
  fields: [
    {name: 'title', title: 'Titre', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'begindate', title: 'Date de debut', type: 'datetime'},
    {name: 'enddate', title: 'Date de fin', type: 'datetime'},
    {name: 'price', title: 'Prix', type: 'string'},
    {name: 'image', title: 'Image', type: 'image'},
    {name: 'category', title: 'Categorie', type: 'string'},
    {name: 'tags', title: 'etiquettes', type: 'array', of: [{type: 'string'}]},
    {name: 'venue', title: 'Lieu', type: 'reference', to: [{type: 'venue'}]},
  ],
}
