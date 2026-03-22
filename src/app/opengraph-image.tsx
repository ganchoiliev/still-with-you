import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Still With You — Mental Health First Steps | UK'
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
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <h1
          style={{
            fontSize: 84,
            fontWeight: 500,
            color: '#F5F4F0',
            lineHeight: 1.2,
            marginBottom: 24,
            fontFamily: 'sans-serif',
          }}
        >
          You don&apos;t have to figure this out alone.
        </h1>
        <p
          style={{
            fontSize: 42,
            color: '#E8E6E1',
            opacity: 0.8,
            lineHeight: 1.4,
            maxWidth: '900px',
            fontFamily: 'sans-serif',
          }}
        >
          Still With You is a free, gentle guide for anyone navigating mental health in the UK.
        </p>
        <div style={{ display: 'flex', marginTop: 'auto' }}>
          <span style={{ fontSize: 32, color: '#5BA4A4', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            stillwithyou.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
