export default {
  name: 'venue',
  title: 'Lieu',
  type: 'document',
  fields: [
    {name: 'name', title: 'Nom du lieu', type: 'string'},
    {name: 'address', title: 'Adresse', type: 'string'},
    {name: 'city', title: 'Ville', type: 'string'},
    {name: 'metro', title: 'Métro à proximité', type: 'string'},
  ],
}
