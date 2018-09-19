// hosts the data for the menu selections both top and side menus
// subs contain the sub menu items -- they need to be the same as the
// section names or the mid-page href's will NOT work

export const menu_lists = [
  // order counts
  {
    name: 'Book Now', to: 'https://www.airbnb.com/rooms/26077543',
    subs: []
  },
  {
    name: 'Amenities', to: '/Amenities',
    subs: ['General', 'Kitchen', 'Personal Care', 'Recreational', 'Safety']
  },
  {
    name: 'OBX Guide', to: '/Guide',
    subs: ['Breakfast', 'Lunch', 'Dinner', 'Crab Feast Anyone!?!\n']
  },
  {
    name: 'Location', to: '/Location',
    subs: []
  },
  {
    name: 'Policies', to: '/Rules',
    subs: []
  },
  // {
  //   name: 'About Us', to: '/AboutUs',
  //   subs: []
  // },
  {
    name: 'Contact Us', to: '/ContactUs',
    subs: []
  },
  {
    name: 'Blog', to: '/Blog',
    subs: []
  },
];