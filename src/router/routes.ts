import { MoviePage } from '../pages/movie-page/movie.page';
import { MoviesPage } from '../pages/movies-page/movies.page';
import { Route } from '../types/router';

export const routes: Route[] = [
  {
    path: '/movies',
    component: MoviesPage,
    exact: true,
    name: 'MoviesPage',
  },
  {
    path: '/movie/:id',
    component: MoviePage,
    exact: true,
    name: 'MoviePage',
  },
  {
    path: '*',
    redirect: '/movies',
  },
];
