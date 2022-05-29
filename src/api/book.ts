import {AxiosResponse} from 'axios';
import useAxios from '.';
import {IBookResponse, IBooks} from '../interfaces/IBooks';
import {IResponse} from '../interfaces/IResponse';

type IBookFilter =
  | 'following-topics'
  | 'recommended'
  | 'recently-started'
  | 'saved';

export const getBooksFrom = async (
  filterBy: IBookFilter,
  {page = 1, limit = 10},
): Promise<AxiosResponse<IBookResponse>> => {
  return await useAxios.get(
    `user/books/${filterBy}?skip=${(page - 1) * limit}&limit=${limit}`,
  );
};

export const getSingleBook = async (
  id: string,
): Promise<AxiosResponse<{books: IBooks}>> => {
  return await useAxios.get(`user/books/${id}`);
};

export const getSimilarBooks = async (
  id: string,
): Promise<AxiosResponse<IBookResponse>> => {
  return await useAxios.get(`user/books/${id}/similar-books`);
};

export const bookSaveUnsave = async (
  id: string,
): Promise<AxiosResponse<IResponse>> => {
  return await useAxios.put(`user/books/${id}/save`);
};
