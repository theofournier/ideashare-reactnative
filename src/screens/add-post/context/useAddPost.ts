import { useContext } from 'react';
import { AddPostContext } from './add-post.context';

export default function useAddPost() {
  return useContext(AddPostContext);
}
