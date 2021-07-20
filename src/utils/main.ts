import { appName } from '../config';

export const setTitle = (title: string) => {
  const fullTitle = title ? `${appName} | ${title}` : appName;

  document.title = fullTitle;
};
