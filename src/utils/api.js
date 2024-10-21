import axios from 'axios';


const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json'
  },
  validateStatus: function() {
    return true;
  },
});

const events = {
  async get(path) {
    return apiClient.get("http://yuksel.pro/api" + path, {timeout: 1000})
  },
  async post(path, body) {
    return apiClient.post("http://yuksel.pro/api" + path, body, {timeout: 1000})
  }
}

export default events;
