
import { PrismaAdapter } from "@/lib/auth/prisma-adapter"
import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { NextApiRequest, NextApiResponse, NextPageContext } from 'next'
import { GithubProfile } from 'next-auth/providers/github'

export function buildNextAuthOptions(
  req: NextApiRequest | NextPageContext['req'],
  res: NextApiResponse | NextPageContext['res'],
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(req, res),
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID ?? '',
        clientSecret: process.env.GITHUB_SECRET ?? '',

        profile(profile: GithubProfile) {
          return {
            id: String(profile.id),
            avatar_url: profile.avatar_url,
            email: profile.email!,
            name: profile.name!,
            username: '',
          }
        },

      }),

    ],

    callbacks: {
      session({ session, user }) {
        return {
          ...session,
          user
        }
      }
    }
  }

}
export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, buildNextAuthOptions(req, res))
}