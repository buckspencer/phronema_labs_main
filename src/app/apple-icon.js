import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: 'linear-gradient(45deg, #0A0A0A, #262626)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F5F5F5',
          fontWeight: 'bold',
          fontFamily: 'system-ui',
          borderRadius: '20px',
        }}
      >
        P
      </div>
    ),
    {
      ...size,
    }
  )
}