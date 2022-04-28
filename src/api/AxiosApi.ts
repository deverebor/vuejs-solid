import axios from 'axios'
import { BaseApi } from '@/api/BaseApi'
import { IApi } from '@/helpers/interfaces/IApi'

export class AxiosApi extends BaseApi implements IApi {
  constructor() {
    super()
  }
  async fetch(url: string) {
    const { data } = await axios.get(`${this.baseUrl}${url}`)
    return data
  }
}
