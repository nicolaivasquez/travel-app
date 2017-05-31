const rawData = require('../hotels.json');

export const hotels = rawData.Establishments;

export const hotelsSort = (hotels, sort) => {
  const multiplier = (direction) => direction === 'asc' ? 1 : -1;

  if (sort.value && sort.direction) {
    if (sort.value == 'Name') {
      return hotels.sort((a, b) => {
        const nameA = a[sort.value].toUpperCase();
        const nameB = b[sort.value].toUpperCase();
        return (nameA < nameB ? -1 : 1) * multiplier(sort.direction);
      });
    }
    return hotels.sort((a, b) => {
      return (a[sort.value] - b[sort.value]) * multiplier(sort.direction);
    });
  }
}

export const hotelsFilter = (hotels, filters) => {
  return Object.keys(filters)
    .reduce((h, filter) => {
      if (filter === 'Stars' || filter === 'Name') {
        return h.filter((hotel) => filters[filter].indexOf(hotel[filter]) > -1);
      }
      return h.filter((hotel) => hotel[filter] <= filters[filter]);
    }, hotels);
}
