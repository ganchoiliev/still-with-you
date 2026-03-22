import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Still With You - Mental Health First Steps | UK'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0E1A',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '48px',
        }}
      >
        <div
          style={{
            background: '#141824',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '32px',
            border: '2px solid rgba(91, 164, 164, 0.3)',
            boxShadow: '0 24px 48px rgba(0,0,0,0.4)',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 120,
              fontWeight: 700,
              color: '#F5F4F0',
              fontFamily: 'sans-serif',
              letterSpacing: '-0.04em',
              marginBottom: 24,
            }}
          >
            Still With You
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 36,
              fontWeight: 500,
              color: '#5BA4A4',
              fontFamily: 'sans-serif',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Mental Health First Steps
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
