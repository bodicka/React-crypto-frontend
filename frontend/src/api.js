import {cryptoData, cryptoAssets} from "./data";

export function fakeFetchCrypto() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoData)
    }, 2000)
  })
}

export function fakeFetchAssets () {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(cryptoAssets)
    }, 2000)
  })
}
 