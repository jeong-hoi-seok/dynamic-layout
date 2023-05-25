import type { NextApiRequest, NextApiResponse } from 'next'

const main = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if(req.method !== 'GET')
    {
      throw 'method error';
    }

    res.status(200).json({ name: 'John Doe' });
    
  } catch (error) {
    res.status(400);
  }
};

export default main;
