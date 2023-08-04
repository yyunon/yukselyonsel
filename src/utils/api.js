import axios from 'axios'

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json'
  },
  validateStatus: function() {
    return true;
  }
});

const events = {
  async get(path) {
    return apiClient.get(path)
  },
  async post(path, body) {
    return apiClient.post(path, body)
  }
}

export default events;
