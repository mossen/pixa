import axios, { AxiosPromise, Method } from 'axios'

type Headers = {
  headers: {
    Authorization?: string
    'X-Knack-REST-API-Key': string
    'X-Knack-Application-Id': string
    'Content-Type': 'application/json'
  }
}

export const getDefaultHeaders = (): Headers => {
  const headers: Headers = {
    headers: {
      'X-Knack-REST-API-Key': process.env.NEXT_KNACK_API_KEY || 'renderer',
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
  data = null,
  headers = getDefaultHeaders()
): AxiosPromise => {
  // axios expects params for get parameters
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
