import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import * as z from 'zod'
import { setCookie } from 'nookies'
import { use } from 'react'


const UserBodyType = z.object({
  name: z.string(),
  username: z.string()
})
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).end()
  }

  const { name, username } = UserBodyType.parse(req.body)

  const userAlreadyExists = await prisma.users.findUnique({
    where: {
      username
    }
  })

  if (userAlreadyExists) {
    return res.status(400).json({ message: 'User already exists' })
  }

  const user = await prisma.users.create({
    data: {
      name,
      username
    }
  })

  setCookie({ res }, '@pennywise:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, //7 Days
    path: '/',
  })

  return res.status(201).json(user)
}