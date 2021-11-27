import { PostType } from '../../constants';
import { User } from '../user';
import { PostInfo } from './post-info';
import { Label } from '../commons/label';
import { PostShareOptions } from './post-share-options';
import { DocTime } from '../commons/doc-time';

export type Post = {
  id: string;
  category: PostType;
  owner: User;
  info: PostInfo;
  labels: Label[];
  shareOptions: PostShareOptions;
  docTime: DocTime;
};
