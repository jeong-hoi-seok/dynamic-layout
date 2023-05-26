import type { NextApiRequest, NextApiResponse } from 'next'

const main = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if(req.method !== 'GET')
    {
      throw 'method error';
    }

    const components = [
      'Banner',
      'List',
    ]

    res.status(200).json({ components});
    
  } catch (error) {
    res.status(400);
  }
};

export default main;
