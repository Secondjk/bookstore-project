import imgs from 'assets/images';

export interface INews {
  src: string
}

export const news: INews[] = imgs.map((src) => ({
  src,
}));