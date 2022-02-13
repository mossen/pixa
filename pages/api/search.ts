import api from '@utils/api';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ENDPOINT_SEARCH, PER_PAGE } from '@utils/constants';

type Response = {
  token: string;
};

const handler  = (
  req: NextApiRequest,
  res: NextApiResponse<Response>
): void => {
  const host = process.env.NEXT_PEXELS_API_URL;

  api(`${host}${ENDPOINT_SEARCH}`, 'GET', { ...req.body, per_page: PER_PAGE })
    .then(({ data }) => {
      res.status(200).json(data);
    })
    .catch(({ response }) => {
      res
        .status(response?.status || 400)
        .json(response?.data || response.statusText);
    });
};

export default handler ;