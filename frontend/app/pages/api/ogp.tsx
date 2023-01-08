import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title')?.slice(0, 100) ?? 'Hello world!'
    const height = Number(searchParams.get('height')?.slice(0, 100) ?? 1000)
    const width = Number(searchParams.get('width')?.slice(0, 100) ?? 2000)


    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: 'white',      
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
          }}
        >
          <h2
            style={{
              width: "80%",
              fontSize: '64px',
              textAlign: "center",
            }}
          >
            {title}
          </h2>
        </div>
      ),
      {
        status: 200,
        headers: {
          'Cache-Control': 'max-age=0, s-maxage=300, stale-while-revalidate=300',
        },
        width: width,
        height: height,
      },
    )
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message)
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}