export default {
  name: 'event',
  title: 'Événement',
  type: 'document',
  fields: [
    {
      name: 'sliderTags',
      title: 'Tags pour les sliders',
      type: 'array',
      of: [{type: 'string'}], // ✅ Garde ça simple pour stocker plusieurs tags
    },
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
      name: 'venue',
      title: 'Nom de lieu',
      type: 'reference',
      to: [{type: 'venue'}],
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
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          {title: 'Exposition', value: 'expo'},
          {title: 'Théâtre', value: 'theatre'},
        ],
      },
    },
    {
      name: 'theme',
      title: 'Thématique',
      type: 'string',
    },
    {
      name: 'startDate',
      title: 'Date de début',
      type: 'datetime',
    },
    {
      name: 'endDate',
      title: 'Date de fin',
      type: 'datetime',
    },
    {
      name: 'price',
      title: 'Prix (€)',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'schedulePrice',
      title: 'Horaire et tarif',
      type: 'text',
    },
    {
      name: 'access',
      title: 'Accès',
      type: 'text',
    },
    {
      name: 'labels',
      title: 'Étiquettes',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'visitDuration',
      title: 'Temps de visite',
      type: 'string',
    },
    {
      name: 'metro',
      title: "Nom de l'arrêt de métro",
      type: 'string',
    },
    {
      name: 'metroLine',
      title: 'Ligne de métro',
      type: 'array',
      of: [{type: 'number'}],
    },
  ],
}
