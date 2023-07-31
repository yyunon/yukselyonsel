import axios from 'axios'

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json'
  }
});

const events = {
  async get(path) {
    return apiClient.get(path)
  },
  async post(path) {
    return apiClient.post(path)
  }
}

export default events;
