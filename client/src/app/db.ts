import { Item } from './models/item';

const temp = [];

for (let i = 0; i < 50; i++) {
  temp.push({
    name: 'Great Item',
    image: '../../../assets/images/test1.jpg',
    type: i < 20 ? 'p' : i > 35 ? 'c' : 's',
    id: i,
  });
}

export const items = temp;

const test = [
  {
    name: 'Great Picture',
    image: '../../../assets/images/test1.jpg',
    type: 'p',
    id: '0',
  },
  {
    name: 'Another Picture',
    image: '../../../assets/images/test1.jpg',
    type: 'p',
    id: '0',
  },
  {
    name: 'Awesome Picture',
    image: '../../../assets/images/test1.jpg',
    type: 'p',
    id: '0',
  },
  {
    name: 'Great Picture',
    image: '../../../assets/images/test1.jpg',
    type: 'p',
    id: '0',
  },
  {
    name: 'Another Picture',
    image: '../../../assets/images/test1.jpg',
    type: 'p',
    id: '0',
  },
  {
    name: 'Awesome Picture',
    image: '../../../assets/images/test1.jpg',
    type: 'p',
  },
  {
    name: 'Great Picture',
    image: '../../../assets/images/test1.jpg',
    type: 'p',
  },
  {
    name: 'Another Picture',
    image: '../../../assets/images/test1.jpg',
    type: 'p',
  },
  {
    name: 'Awesome Picture',
    image: '../../../assets/images/test1.jpg',
    type: 'p',
  },
  {
    name: 'Great Sculpture',
    image: '../../../assets/images/test1.jpg',
    type: 's',
  },
  {
    name: 'Another Sculpture',
    image: '../../../assets/images/test1.jpg',
    type: 's',
  },
  {
    name: 'Awesome Sculpture',
    image: '../../../assets/images/test1.jpg',
    type: 's',
  },
  {
    name: 'Great Sculpture',
    image: '../../../assets/images/test1.jpg',
    type: 's',
  },
  {
    name: 'Another Sculpture',
    image: '../../../assets/images/test1.jpg',
    type: 's',
  },
  {
    name: 'Awesome Sculpture',
    image: '../../../assets/images/test1.jpg',
    type: 's',
  },
  {
    name: 'Great Collage',
    image: '../../../assets/images/test1.jpg',
    type: 'c',
  },
  {
    name: 'Another Collage',
    image: '../../../assets/images/test1.jpg',
    type: 'c',
  },
  {
    name: 'Awesome Collage',
    image: '../../../assets/images/test1.jpg',
    type: 'c',
  },
  {
    name: 'Great Collage',
    image: '../../../assets/images/test1.jpg',
    type: 'c',
  },
  {
    name: 'Another Collage',
    image: '../../../assets/images/test1.jpg',
    type: 'c',
  },
  {
    name: 'Awesome Collage',
    image: '../../../assets/images/test1.jpg',
    type: 'c',
  },
];
