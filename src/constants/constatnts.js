import image from './images';

const constants = {
  Banner: [
    {
      id: 1,
      image: image.Banner,
    },
    {
      id: 2,
      image: image.Banner1,
    },
    {
      id: 3,
      image: image.Package2,
    },
    {
      id: 4,
      image: image.Banner1,
    },
    {
      id: 5,
      image: image.Banner,
    },
  ],
  TopPackages: [
    {
      id: 1,
      tag: [{title: 'BestSeller', backgrndColor: '#722F87', textcolr: 'white'}],
      title: 'IILT For All Happy Offer',
      image: image.Package1,
      lessons: '5 Modules, 1 Year Validity, Extra Live',
    },
    {
      id: 2,
      tag: [{title: 'Free', backgrndColor: '#80BF36', textcolr: 'white'}],
      title: 'One One Year',
      image: image.Package3,
      lessons: '5 Modules, 1 Year Validity, Extra Live',
    },
    {
      id: 3,
      tag: [{title: 'Bestseller', backgrndColor: '#722F87', textcolr: 'white'}],
      title: 'One One Year',
      image: image.Package2,
      lessons: '5 Modules, 1 Year Validity, Extra Live',
    },
    // {
    //   id: 4,
    //   tag: [{title: 'Speaking', backgrndColor: '#E5C32F', textcolr: 'white'}],
    //   title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   image: image.courseBackgrnd,
    //   lessons: '12 Lessons',
    //   test: 'Mock Test',
    // },
  ],
};
export default constants;
