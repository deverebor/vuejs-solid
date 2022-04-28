import { IApi } from '@/helpers/interfaces/IApi'
import { BaseApi } from '@/api/BaseApi'
import { FetchApi } from '@/api/FetchApi'
import { AxiosApi } from '@/api/AxiosApi'

export class Api extends BaseApi implements IApi {
  private provider: any = new AxiosApi()
  async get(url: string): Promise<any> {
    return await this.provider.fetch(url)
  }
}
