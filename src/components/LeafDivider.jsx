// Signature element: a scalloped edge that echoes the torn, curved rim of a
// banana leaf meal — used as the seam between every section instead of a
// plain straight divider.
export default function LeafDivider({ from = '#F6EFE2', to = '#1C120B', flip = false }) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}
      style={{ height: '64px', backgroundColor: from }}
    >
      <svg
        viewBox="0 0 1200 64"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <path
          d="M0,64 L0,28 C40,8 80,44 120,26 C160,8 200,42 240,24
             C280,6 320,40 360,22 C400,4 440,38 480,20
             C520,2 560,36 600,18 C640,0 680,34 720,16
             C760,-2 800,32 840,14 C880,-4 920,30 960,12
             C1000,-6 1040,28 1080,10 C1120,-8 1160,26 1200,8
             L1200,64 Z"
          fill={to}
        />
        <path
          d="M0,28 C40,8 80,44 120,26 C160,8 200,42 240,24
             C280,6 320,40 360,22 C400,4 440,38 480,20
             C520,2 560,36 600,18 C640,0 680,34 720,16
             C760,-2 800,32 840,14 C880,-4 920,30 960,12
             C1000,-6 1040,28 1080,10 C1120,-8 1160,26 1200,8"
          fill="none"
          stroke="#C6992F"
          strokeWidth="1.5"
          opacity="0.55"
        />
      </svg>
    </div>
  )
}
