import { Post } from '../shared/models';

const createPost = async (post: Post) => {
  console.log(post);
  //TODO: create post on db
  await new Promise(resolve => setTimeout(resolve, 500));
};

export default {
  createPost,
};
