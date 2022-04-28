import { IApi } from '@/helpers/interfaces/IApi'
/* eslint-disable @typescript-eslint/no-empty-function */

export class BaseApi implements IApi {
  protected baseUrl = 'https://jsonplaceholder.typicode.com/'
  async get(url: string) {}
}
