import { BaseApi } from '@/api/BaseApi'

export class FetchApi extends BaseApi {
  constructor() {
    super()
  }
  async get(url: string) {
    const response = await fetch(`${this.baseUrl}${url}`)
    return await response.json()
  }
}
