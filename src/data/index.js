import * as axios from 'axios';

const baseUrl = 'http://localhost:9000';

export const getHotels = () => {
  return axios.get(`${baseUrl}/hotels`)
    .then((response) => {
      return response.data.slice(0, 20)
    })
    .catch(console.error);
}
