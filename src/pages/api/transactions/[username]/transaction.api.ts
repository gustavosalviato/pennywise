import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import * as z from 'zod'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const username = String(req.query.username)

  const user = await prisma.user.findUnique({
    where: {
      username
    }
  })

  if (!user) {
    return res.status(404).json({ message: 'User does not exists' })
  }


  switch (req.method) {
    case 'GET':

      const responseTransactions = await prisma.transaction.findMany({
        where: {
          user_id: user.id,
        },
        include: {
          category: {
            select: {
              title: true
            }
          }
        }
      })

      const transactions = responseTransactions.map((transaction) => {
        return {
          id: transaction.id,
          price: Number(transaction.price),
          user_id: transaction.user_id,
          title: transaction.title,
          type: transaction.type,
          created_at: transaction.created_at,
          category_title: transaction.category.title,
          category_id: transaction.category_id

        }
      })

      res.status(200).json(transactions)
      break

    case 'POST':
      const newTransactionBodySchema = z.object({
        category_id: z.string(),
        price: z.number(),
        title: z.string(),
        type: z.string(),
        user_id: z.string(),
      })

      const { category_id, price, title, type } = req.body

      const response = await prisma.transaction.create({
        data: {
          price,
          title,
          type,
          category_id,
          user_id: user.id,
        },
        include: {
          category: {
            select: {
              title: true
            }
          }
        }
      })

      const newTransaction = {
        id: response.id,
        title: response.title,
        price: response.price,
        type: response.type,
        created_at: response.created_at,
        user_id: response.user_id,
        category_id: response.category_id,
        category_title: response.category.title
      }

      return res.json(newTransaction)
      break
  }

}
