export interface IPost {
  
id : number;
title:string;
subTitle :string;
authorId: number;
postBodyId: number;
slug:string;
readTime: number;
postImage:string;
publishedAt: Date;
updatedAt: Date;
likeId: number;
isPublished: boolean;
author: IAuthor;
like: ILike;
tags: ITag[];
}

export interface IAuthor{
id: number;
authorName: string;
email: string;
authorDescription: string;
authorImage: string;
posts: IPost[];
}
export interface ILike{
  id: number;
  count: number;
}
export interface ITag{
  id: number;
  tagName: string;
  posts: IPost[];
}

export interface ISavePost
{
  title:string;
  description: string;
  postModel:string;
  selectedTags: ITag[];
  selectedAuthors: IAuthor;
  image:string;
  readTime:number;
}