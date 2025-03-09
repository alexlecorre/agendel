export default {
  name: 'homepage',
  title: "Page d'accueil",
  type: 'document',
  fields: [
    {
      name: 'sliders',
      title: 'Sliders',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'slider'}]}], // 🔹 Associe plusieurs sliders à la homepage
    },
  ],
}
