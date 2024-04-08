import { PostInfoImage } from './post-info-image';

export type PostInfo = {
  title: string;
  description: string;
  images: PostInfoImage[];
  urlLinks: string[];
  language: string;
};
