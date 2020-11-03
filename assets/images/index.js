import abBikes from './abBikes.png';
import alternateLunges from './alternateLunges.png';

export const media = [
  {id: 1, title: 'Ab Bikes', img: abBikes},
  {id: 2, title: 'Alternate Lunges', img: alternateLunges},
  {id: 3, title: 'Ab Bikes', img: abBikes},
  {id: 4, title: 'Alternate Lunges', img: alternateLunges},
  {id: 5, title: 'Ab Bikes', img: abBikes},
  {id: 6, title: 'Alternate Lunges', img: alternateLunges},
];
export const mediaByIndex = (index) => media[index % media.length];
