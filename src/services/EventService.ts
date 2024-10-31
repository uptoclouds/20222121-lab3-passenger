import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.instantwebtools.net/v1/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage: number, page: number) {
    return apiClient.get('/passenger?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(_id: string) {
    return apiClient.get('/passenger/' + _id)
  }
}