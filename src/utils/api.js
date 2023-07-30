import axios from 'axios'

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json'
  }
});

const events = {
  async get(path) {
    return apiClient.get('/markdowns/'+path)
  },
  async post(path) {
    return apiClient.post('/markdowns/'+path)
  }
}

export default events;
