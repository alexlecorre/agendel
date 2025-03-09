export default {
  name: 'venue',
  title: 'Lieu',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image de l’événement',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'name',
      title: 'Nom du lieu',
      type: 'string',
    },
    {
      name: 'metro',
      title: "Nom de l'arrêt de métro",
      type: 'string',
    },
    {
      name: 'address',
      title: 'Adresse',
      type: 'string',
    },
    {
      name: 'arrondissement',
      title: 'Arrondissement',
      type: 'number',
    },
    {
      name: 'schedule',
      title: 'Horaires',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'access',
      title: 'Accès',
      type: 'text',
    },
  ],
}
