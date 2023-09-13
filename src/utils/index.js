export const links = [
  {
    text: 'Home',
    url: '/',
    icon: '/images/Home.svg',
  },
  {
    text: 'Movies',
    icon: '/images/Movie-projector.svg',
  },
  {
    text: 'TV Series',
    icon: '/images/Tv.svg',
  },
  {
    text: 'Upcoming',
    icon: '/images/Calendar.svg',
  },
];

export const showMessage = (message) => {
  if (typeof message === 'object') {
    return message.status_message;
  } else {
    return message;
  }
};
