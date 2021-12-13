import axios from 'axios'

const CheckListAPI = {
  fetchList: async () => {
    const source = axios.CancelToken.source()
    // signal.addEventListener('abort', () => {
    //   source.cancel();
    // })
    const response = await axios.get(`/api/list`, {
      cancelToken: source.token,
    })
    return response.data
  }
}

export default CheckListAPI