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
    return apiClient.get("https://yuksel.biz/api" + path, {timeout: 1000})
  },
  async post(path, body) {
    return apiClient.post("https://yuksel.biz/api" + path, body, {timeout: 1000})
  }
}

export default events;
