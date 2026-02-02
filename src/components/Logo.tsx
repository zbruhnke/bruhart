interface LogoProps {
  className?: string;
  color?: 'white' | 'dark' | 'primary';
}

export default function Logo({ className = 'h-10 w-auto', color = 'dark' }: LogoProps) {
  const colors = {
    white: '#ffffff',
    dark: '#1a1a1a',
    primary: '#1e3a5f',
  };

  const fillColor = colors[color];

  return (
    <svg
      className={className}
      viewBox="0 0 180 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bru-Hart Industries"
    >
      {/* BRU-HART Text - top, closer to arrow */}
      <text
        x="90"
        y="21"
        fontFamily="Barlow, sans-serif"
        fontWeight="800"
        fontSize="20"
        textAnchor="middle"
        fill={fillColor}
      >
        BRU-HART
      </text>

      {/* First chevron tail */}
      <polyline
        points="4,22 10,28 4,34"
        stroke={fillColor}
        strokeWidth="2"
        fill="none"
      />

      {/* Second chevron tail */}
      <polyline
        points="12,22 18,28 12,34"
        stroke={fillColor}
        strokeWidth="2"
        fill="none"
      />

      {/* Arrow - main continuous line to arrowhead */}
      <line
        x1="20"
        y1="28"
        x2="168"
        y2="28"
        stroke={fillColor}
        strokeWidth="2"
      />

      {/* Arrow head */}
      <polygon
        points="180,28 168,22 168,34"
        fill={fillColor}
      />

      {/* INDUSTRIES subtitle - bottom, closer to arrow */}
      <text
        x="90"
        y="40"
        fontFamily="Barlow, sans-serif"
        fontWeight="500"
        fontSize="9"
        textAnchor="middle"
        letterSpacing="5"
        fill={fillColor}
      >
        INDUSTRIES
      </text>
    </svg>
  );
}
