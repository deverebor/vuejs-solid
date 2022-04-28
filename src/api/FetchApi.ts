import { IApi } from '@/helpers/interfaces/IApi'
import { BaseApi } from '@/api/BaseApi'

export class FetchApi extends BaseApi implements IApi {
  constructor() {
    super()
  }
  async get(url: string) {
    const response = await fetch(`${this.baseUrl}${url}`)
    return await response.json()
  }
}
