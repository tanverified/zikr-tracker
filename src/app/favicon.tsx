import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
export const contentType = 'image/x-icon';
export const size = { width: 16, height: 16 };
 
export default function Favicon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#3F51B5',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 12,
          borderRadius: '50%',
        }}
      >
        ذ
      </div>
    ),
    {
      ...size,
    }
  );
}
