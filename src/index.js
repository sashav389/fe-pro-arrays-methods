import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
  return goods.filter(item => {
    return item.brand === brand;
  })
};

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
  return goods.filter(item => {
    return item.color === color;
  })
};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
  return goods.filter(item => {
    return item.model === model;
  })
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
  return goods.filter(item => {
    return item.memory === memory;
  })
};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
  return goods.filter(item => {
    return item.price === price;
  })
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
  return goods.filter(item => {
    return item.country === country;
  })
};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {
  return goods.filter(item => {
    return item.os === os;
  })
};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
  return goods.filter(item => {
    return item.price >= from && item.price <= to;
  })
};

const minPriceReducer = () => {

  return goods.reduce((accum, item) => {
    if(item.price <= accum) return  item.price;
    else return accum;
  }, 40000)
 };

const maxPriceReducer = () => {
  return goods.reduce((accum, item) => {
    if(item.price > accum) return  item.price;
    else return accum;
  }, 0)
};
function compareMax(a, b){
  if(a.price < b.price) return 1;
  if(a.price === b.price) return 0;
  return -1;
}
function compareMin(a, b){
  if(a.price > b.price) return 1;
  if(a.price === b.price) return 0;
  return -1;
}
const toMaxSorter = () => {
  return goods.sort(compareMax)
};
const toMinSorter = () => {
  return goods.sort(compareMin);
};

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
