import axios from 'axios'

export default function createApi() {
  const request = (path, method, data = {}) => new Promise(async (resolve, reject) => {

    try {
      const response = await axios(path, method, data)
      resolve(response)
    } catch (error) {
      reject(error)
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
