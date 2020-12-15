import axios from 'axios'

const robotApi = axios.create({
  // baseURL:"http://10.7.5.88:8080", // api的base_url
  timeout: 60000 // 请求超时时间
})

export function robotMove(data) {
  return robotApi({
    url: '/gs-robot/cmd/move',
    method: 'post',
    data: data
  })
}
