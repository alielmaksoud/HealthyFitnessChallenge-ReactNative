import bridge from './bridge.svg';
import curl from './curl.svg';

export const media = [bridge, curl];
export const mediaByIndex = (index) => media[index % media.length];
