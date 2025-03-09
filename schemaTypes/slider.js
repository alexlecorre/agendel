export default {
  name: 'slider',
  title: 'Slider',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre du Slider',
      type: 'string',
    },
    {
      name: 'events',
      title: 'Événements du slider',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'event'}]}], // Références aux événements
    },
  ],
}
