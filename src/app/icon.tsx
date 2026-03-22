import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
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
          borderRadius: '8px', 
        }}
      >
        <div
          style={{
            display: 'flex',
            color: '#5BA4A4', // Teal text
            fontSize: 15,
            fontWeight: 800,
            fontFamily: 'sans-serif',
            letterSpacing: '-1px',
            marginTop: '2px', // Slight visual centering adjustment
          }}
        >
          SWY
        </div>
      </div>
    ),
    { ...size }
  );
}
