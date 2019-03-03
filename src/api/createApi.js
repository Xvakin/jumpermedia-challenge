import axios from 'axios'

export default function createApi() {
  const request = (url, method, options = {}) => new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url,
        method,
        ...options,
      })
      resolve(response.data)
    } catch (error) {
      reject(error.response)
    }
  })

  return {
    get(href, options) {
      return request(href, 'GET', options)
    },
    post(href, options) {
      return request(href, 'POST', options)
    },
    put(href, options) {
      return request(href, 'PUT', options)
    },
    patch(href, options) {
      return request(href, 'PATCH', options)
    },
    del(href, options) {
      return request(href, 'DELETE', options)
    },
  }
}
