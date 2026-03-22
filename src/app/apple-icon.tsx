import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0E1A', // Navy background
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontWeight: 800,
            fontFamily: 'sans-serif',
            fontSize: 76,
            letterSpacing: '-2px',
          }}
        >
          <span style={{ color: '#F5F4F0' }}>S</span>
          <span style={{ color: '#5BA4A4', margin: '0 4px' }}>W</span>
          <span style={{ color: '#F5F4F0' }}>Y</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
