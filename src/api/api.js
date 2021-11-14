/* eslint-disable import/prefer-default-export */
import client from './client'

function getProducts() {
  return client('products')
}

export { getProducts }
