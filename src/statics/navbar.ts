import { NavButton } from "../types/navbar";

export const navStartContent: NavButton[] = [
  {
    name: 'Movies',
    children: [
      {
        name: 'Popular',
        path: '/movie/popular',
      },
      {
        name: 'Now playing',
        path: '/movie/now-playing',
      },
      {
        name: 'Upcoming',
        path: '/movie/upcoming',
      },
      {
        name: 'Top Rated',
        path: '/movie/top-rated',
      },
    ],
  },
  {
    name: 'TV Shows',
    children: [
      {
        name: 'Popular',
      },
      {
        name: 'Airing Today',
      },
      {
        name: 'On TV',
      },
      {
        name: 'Top Rated',
      },
    ],
  },
  {
    name: 'People',
    children: [
      {
        name: 'Popular People',
      },
    ],
  },
  {
    name: 'More',
    children: [
      {
        name: 'Discussion',
      },
      {
        name: 'Leaderboard',
      },
      {
        name: 'Support',
      },
      {
        name: 'API',
      },
    ],
  },
];
