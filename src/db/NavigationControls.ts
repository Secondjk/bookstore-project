import { IconType } from 'react-icons';
import { BiBookHeart, BiBookReader } from 'react-icons/bi';
import { GiBookCover, GiBookmark } from 'react-icons/gi';

export declare interface NavigationLink {
  name: string
  link: string
}

export declare interface NavigationControl {
  name: string
  path: string
  icon?: IconType
  subMenu?: NavigationLink[]
}

export const NavigationControls: NavigationControl[] = [
  {
    name: 'Главная',
    path: '/',
  },
  {
    name: 'Легкое чтение',
    path: '/catalog/easy',
    icon: BiBookReader,
    subMenu: [
      {
        name: 'Детективы',
        link: '/catalog/detectives',
      },
      {
        name: 'Фэнтези',
        link: '/catalog/fantasy',
      },
      {
        name: 'Боевики, остросюжетная литература',
        link: '/catalog/thrillers',
      },
      {
        name: 'Ужасы / мистика',
        link: '/catalog/horrors',
      },
    ],
  },
  {
    name: 'Серьёзное чтение',
    path: '/catalog/serious',
    icon: GiBookCover,
    subMenu: [
      {
        name: 'Современная проза',
        link: '/catalog/prose',
      },
      {
        name: 'Биографии и мемуары',
        link: '/catalog/memoirs',
      },
      {
        name: 'Классическая литература',
        link: '/catalog/classic',
      },
    ],
  },
  {
    name: 'Детские книги',
    path: '/catalog/children',
    icon: GiBookmark,
    subMenu: [
      {
        name: 'Сказки',
        link: '/catalog/fairytales',
      },
      {
        name: 'Зарубежные детские книги',
        link: '/catalog/foreignchildren',
      },
      {
        name: 'Книги для подростков',
        link: '/catalog/booksteens',
      },
      {
        name: 'Школьные учебники',
        link: '/catalog/textbooks',
      },
    ],
  },
  {
    name: 'О нас',
    path: '/about',
  },
];