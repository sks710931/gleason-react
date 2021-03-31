import { ISavePost, ITag } from "./../data/IPost";
export const validateAddPost = (post: ISavePost) => {
  console.log('validate: ', JSON.stringify(post))
  const result:any = {
    title: validateTitle(post.title),
    description: validateDesc(post.description),
    body: validateBody(post.postModel),
    image: validateImage(post.image),
    tags: validateTags(post.selectedTags)
  }

  const validationStatus: boolean  = (result.title && result.description && result.body && result.image && result.tags);
  return {validationStatus, result}
};

const validateTitle = (title: string) => {
  if (title !== "" && title !== undefined) {
    return true;
  } else {
    return false;
  }
};

const validateDesc = (desc: string) => {
  if (desc !== "" && desc !== undefined) {
    return true;
  } else {
    return false;
  }
};

const validateBody = (body: string) => {
  if (body !== "" && body !== undefined) {
    return true;
  } else {
    return false;
  }
};

const validateImage = (image: string) => {
  if (image !== "" && image !== undefined) {
    return true;
  } else {
    return false;
  }
};

const validateTags = (tags: ITag[]) =>{
  if (tags.length > 0) {
    return true;
  } else {
    return false;
  }
}
