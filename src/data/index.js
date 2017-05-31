import * as axios from 'axios';

const baseUrl = 'http://localhost:9000';

export const getHotels = ({filter, sort}) => {
  console.log(filter, sort);
  const filterString = Object.keys(filter).length > 0 ?
    Object.keys(filter).map((f) => `${encodeURIComponent(f)}=${encodeURIComponent(Array.isArray(filter[f]) ? filter[f].join(',') : filter[f])}`).join('&')
    : '';
  const sortString = sort.value ?
    `sortValue=${sort.value}&sortDirection=${sort.direction}`
    : '';
  const queryString = filterString.length > 0 || sortString.length > 0 ?
    `?${[filterString, sortString].filter((str) => str.length > 0).join('&')}`
    : '';
  console.log(filter, sort, filterString, sortString, queryString);

  return axios.get(`${baseUrl}/hotels${queryString}`)
    .then((response) => {
      return response.data.slice(0, 20)
    })
    .catch(console.error);
}
