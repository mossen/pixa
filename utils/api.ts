import axios, { AxiosPromise, Method } from 'axios'

type Headers = {
  headers: {
    Authorization?: string
    'Content-Type': 'application/json'
  }
}

export const getDefaultHeaders = (): Headers => {
  const headers: Headers = {
    headers: {
      Authorization: process.env.NEXT_API_KEY,
      'Content-Type': 'application/json',
    },
  }

  return headers
}

/**
 * api is returning axios, this is used only on the server side
 *
 * @param {string} url
 * @param {Method} [method='GET']
 * @param {*} [data=null]
 * @param {Headers} [headers={ headers: defaultHeaders }]
 * @return {*}  {AxiosPromise}
 */
const api = (
  url: string,
  method: Method = 'GET',
  data: any = null,
  headers = getDefaultHeaders()
): AxiosPromise => {
  // axios expects params for GET method
  let dataKey = 'data'
  if (method === 'GET') {
    dataKey = 'params'
  }

  const options = {
    method,
    [dataKey]: data,
    url,
    ...headers,
  }

  return axios(options)
}

export default api
