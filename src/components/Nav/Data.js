// hosts the data for the menu selections both top and side menus
// subs contain the sub menu items

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
    subs: ['Breakfast', 'Lunch', 'Dinner', 'Crab Feast']
  },
  {
    name: 'Location', to: '/Location',
    subs: []
  },
  {
    name: 'Policies', to: '/Rules',
    subs: []
  },
  {
    name: 'About Us', to: '/AboutUs',
    subs: []
  },
];