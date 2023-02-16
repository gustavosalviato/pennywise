import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).end()
  }

  const username = String(req.query.username)

  const user = await prisma.user.findUnique({
    where: {
      username
    }
  })

  if (!user) {
    return res.status(404).json({ message: 'User does not exists' })
  }

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
}
