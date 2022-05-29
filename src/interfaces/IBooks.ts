export interface IBooks {
  _id: string;
  name: string;
  type: string;
  coverPhoto: string;
  creator: string;
  authorName: string;
  tagline: string;
  aboutBook: string;
  whatIsItFor: string;
  description: string;
  aboutAuthor: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
  saved: boolean;
}

export interface IBookResponse {
  books: {
    _id: string;
    name: string;
    type: string;
    coverPhoto: string;
    authorName: string;
    tagline: string;
  }[];
}
