import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import * as z from 'zod'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  switch (req.method) {
    case 'GET':
      const categories = await prisma.category.findMany({})

      return res.json(categories)
      break
    case 'POST':
      const newTransactionBodySchema = z.object({
        title: z.string()
      })

      const { title } = newTransactionBodySchema.parse(req.body)


      const response = await prisma.category.create({
        data: {
          title
        }
      })

      return res.json(response)
      break
  }
}
