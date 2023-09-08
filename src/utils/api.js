import axios from 'axios';


const apiClient = axios.create({
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json'
  },
  validateStatus: function() {
    return true;
  },
});

const events = {
  async get(path) {
    return apiClient.get("http://35.208.253.242:80/api" + path, {timeout: 1000})
  },
  async post(path, body) {
    return apiClient.post("http://35.208.253.242:80/api" + path, body, {timeout: 1000})
  }
}

export default events;
