import { handleMintPascalRequest } from '@mint/Unity-Billal-mesloub-plugin/server'
import { BASE_URL } from '@/lib/utils'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const route = (request: Request) =>
  handleMintPascalRequest(request, {
    origin: process.env.MINT_PASCAL_HOST_ORIGIN ?? BASE_URL,
  })

export { route as GET, route as POST }
