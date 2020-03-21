export const baseContentUrl = 'https://savecoins.app/game';

export const gamesInfos = [
  {
    name: 'Legend of Zelda: Breath of the Wild',
    url: 'the-legend-of-zelda-breath-of-the-wild',
    primaryColor: '#3CADD5',
  },
  {
    name: "Luigi's Mansion 3",
    url: 'luigi-s-mansion-3',
    primaryColor: '#73E831',
  },
  {
    name: 'Super Mario Odyssey',
    url: 'super-mario-odyssey',
    primaryColor: '#F1452F',
  },
  {
    name: 'ARMS',
    url: 'arms',
    primaryColor: '#F9EF3C',
  },
  {
    name: 'Splatoon 2',
    url: 'splatoon-2',
    primaryColor: '#F05998',
  },
  {
    name: 'Kirby Star Allies',
    url: 'kirby-star-allies',
    primaryColor: '#F3A7D4',
  },
  {
    name: 'Donkey Kong Country: Tropical Freeze',
    url: 'donkey-kong-country-tropical-freeze',
    primaryColor: '#9AE7FB',
  },
];

export const gameBuyUrl = (url) => `${baseContentUrl}/${url}`;
