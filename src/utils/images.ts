import { imagesThumbnailBaseUrl, imagesOriginalBaseUrl } from './../config/index';

export const getImageThumbnailFullPath = (image: string) => `${imagesThumbnailBaseUrl}${image}`;
export const getImageOriginalFullPath = (image: string) => `${imagesOriginalBaseUrl}${image}`;