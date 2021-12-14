import axios, { AxiosRequestConfig } from 'axios'

interface IOptions {
  data: any,
  method?: 'post' | 'get' | 'delete' | 'put',
}

export default async function request(url: string, options: IOptions) {
  const source = axios.CancelToken.source()
  // signal.addEventListener('abort', () => {
  //   source.cancel();
  // })
  const config: AxiosRequestConfig = {
    method: options.method || 'post',
    data: options.data,
    cancelToken: source.token,
  }
  if (config.method === 'get') {
    config.params = options.data;
  }
  try {
    const response = await axios(url, config);
    return response.data
  } catch (err: any) {
    throw new Error(err.msg);
  }
}