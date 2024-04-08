import { Privacy, Visibleness } from '../../constants';

export type PostShareOptions = {
  privacy: Privacy;
  anonymous: boolean;
  like: Visibleness;
  comment: Visibleness;
  createComment: Visibleness;
};
