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
      viewBox="0 0 180 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Bru-Hart Industries"
    >
      {/* Arrow - left segment */}
      <line
        x1="0"
        y1="16"
        x2="18"
        y2="16"
        stroke={fillColor}
        strokeWidth="2"
      />

      {/* Arrow - right segment */}
      <line
        x1="162"
        y1="16"
        x2="175"
        y2="16"
        stroke={fillColor}
        strokeWidth="2"
      />

      {/* Arrow head */}
      <polygon
        points="180,16 170,11 170,21"
        fill={fillColor}
      />

      {/* BRU-HART Text */}
      <text
        x="90"
        y="22"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="22"
        textAnchor="middle"
        fill={fillColor}
      >
        BRU-HART
      </text>

      {/* INDUSTRIES subtitle */}
      <text
        x="90"
        y="38"
        fontFamily="Arial, sans-serif"
        fontWeight="400"
        fontSize="11"
        textAnchor="middle"
        letterSpacing="3.5"
        fill={fillColor}
      >
        INDUSTRIES
      </text>
    </svg>
  );
}
