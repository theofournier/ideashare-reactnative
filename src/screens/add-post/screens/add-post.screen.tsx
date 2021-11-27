import React from 'react';
import {
  CategoryContent,
  InfoContent,
  LabelContent,
  OptionalInfoContent,
  ResumeContent,
  ShareOptionsContent,
} from '../contents';
import { AddPostProvider, AddPostStep, useAddPost } from '../context';

const AddPostContent = () => {
  const { step } = useAddPost();

  switch (step) {
    case AddPostStep.CATEGORY:
      return <CategoryContent />;
    case AddPostStep.INFO:
      return <InfoContent />;
    case AddPostStep.OPTIONALINFO:
      return <OptionalInfoContent />;
    case AddPostStep.LABEL:
      return <LabelContent />;
    case AddPostStep.SHAREOPTIONS:
      return <ShareOptionsContent />;
    case AddPostStep.RESUME:
      return <ResumeContent />;
  }
};

export const AddPostScreen = () => {
  return (
    <AddPostProvider>
      <AddPostContent />
    </AddPostProvider>
  );
};
