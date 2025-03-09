export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'sliders',
      title: 'Sliders',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Titre du Slider',
              type: 'string',
            },
            {
              name: 'filter',
              title: 'Filtre des événements',
              type: 'string',
              options: {
                list: [
                  {title: 'Nouvelles sorties', value: 'last_releases'},
                  {title: 'Expos du moment', value: 'current_exhibitions'},
                  {title: 'Sorties théâtre', value: 'theater_events'},
                ],
              },
            },
          ],
        },
      ],
    },
  ],
}
