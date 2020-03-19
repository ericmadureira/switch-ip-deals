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
];

export const gameBuyUrl = (url) => `${baseContentUrl}/${url}`;
