import React, { createContext, useState } from 'react';
import { Post } from '../../../shared/models';

export type AddPostContextType = {
  savePost: () => void;
  post: Post;
  setPost: React.Dispatch<React.SetStateAction<Post>>;
};

export const AddPostContext = createContext<AddPostContextType>({
  savePost: () => {},
  post: {},
  setPost: () => {},
});

export default function AddPostProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [post, setPost] = useState<Post>({});

  const savePost = () => {
    console.log('SAVE POST');
  };

  const contexValue: AddPostContextType = {
    savePost,
    post,
    setPost,
  };

  return (
    <AddPostContext.Provider value={contexValue}>
      {children}
    </AddPostContext.Provider>
  );
}
