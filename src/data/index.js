import * as axios from 'axios';

const baseUrl = 'http://localhost:9000';

export const getHotels = ({filter, sort}) => {
  const filterString = Object.keys(filter).length > 0 ?
    Object.keys(filter)
      .filter((f) => filter[f] !== '' && filter[f].length > 0)
      .map((f) => `${encodeURIComponent(f)}=${encodeURIComponent(Array.isArray(filter[f]) ? filter[f].join(',') : filter[f])}`)
      .join('&')
    : '';
  const sortString = sort.value ?
    `sortValue=${sort.value}&sortDirection=${sort.direction}`
    : '';
  const queryString = filterString.length > 0 || sortString.length > 0 ?
    `?${[filterString, sortString].filter((str) => str.length > 0).join('&')}`
    : '';

  return axios.get(`${baseUrl}/hotels${queryString}`)
    .then((response) => {
      return response.data;
    })
    .catch(console.error);
}
