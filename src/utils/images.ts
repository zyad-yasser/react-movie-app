import { imagesThumbnailBaseUrl, imagesOriginalBaseUrl } from './../config/index';

export const getImageThumbnailFullPath = (image: string) => image && `${imagesThumbnailBaseUrl}${image}`;
export const getImageOriginalFullPath = (image: string) => image && `${imagesOriginalBaseUrl}${image}`;