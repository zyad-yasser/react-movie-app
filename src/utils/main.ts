import { appName } from '../config';

export const setPageTitle = (title: string) => {
  const fullTitle = title ? `${appName} | ${title}` : appName;

  document.title = fullTitle;
};
