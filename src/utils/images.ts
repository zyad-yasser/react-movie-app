import { imagesBaseUrl } from './../config/index';

export const getImageFullPath = (image: string) => `${imagesBaseUrl}${image}`;