import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
import tour5 from './images/tour-5.jpeg';
import tour6 from './images/tour-6.jpeg';

export const pageLinks = [
  { id: 1, href: 'home', text: 'home' },
  { id: 2, href: 'about', text: 'about' },
  { id: 3, href: 'services', text: 'services' },
  { id: 4, href: 'tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, at!',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, cum?',
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor earum quod nemo soluta perspiciatis facere omnis beatae dolorum modi!`,
    location: 'china',
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    img: tour2,
    date: 'october 1th, 2020',
    title: 'best of java',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni inventore animi magnam aliquid. Quae eum veritatis voluptate, fugit non atque! ',
    location: 'indonesia',
    duration: 11,
    price: 1400,
  },
  {
    id: 3,
    img: tour3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illum officiis dicta officia quod amet, maxime inventore adipisci veritatis cupiditate.',
    location: 'hong kong',
    duration: 8,
    price: 5000,
  },
  {
    id: 4,
    img: tour4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nobis voluptatem assumenda ut tenetur reiciendis qui sunt dolore nesciunt omnis.',
    location: 'Kenya',
    duration: 20,
    price: 3300,
  },
  {
    id: 5,
    img: tour5,
    date: 'may 21st, 2023',
    title: 'Kilimanjaro Plains',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe blanditiis consequuntur nostrum cumque accusamus dicta dolores laborum. Quod, minima incidunt! ',
    location: 'Tanzania',
    duration: 14,
    price: 6000,
  },
  {
    id: 6,
    img: tour6,
    date: 'june 12th, 2023',
    title: 'Tunis Beauty',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus explicabo totam aliquid tempore dolores beatae earum animi nisi adipisci reiciendis? ',
    location: 'Tunisia',
    duration: 10,
    price: 9800,
  },
];
