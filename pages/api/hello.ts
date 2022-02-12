import type { NextApiRequest, NextApiResponse } from 'next'
import api from '@app/services/api'

type Response = {
  token: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Response>
): Promise<void> => {
  const host = process.env.NEXT_KNACK_HOST
  await api(`${host}/v1/objects/object_18/records`, 'POST', req.body)
    .then(({ data }) => res.status(200).json(data))
    .catch(({ response }) => {
      return res
        .status(response?.status || 400)
        .json(response?.data || response.statusText)
    })
}
