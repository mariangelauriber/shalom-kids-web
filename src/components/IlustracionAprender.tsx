/** Ilustración original (no es foto del colegio): libros, lápiz, bloques y números. */
export function IlustracionAprender({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 480 400" role="img" aria-label="Ilustración: libros, lápiz y bloques de letras y números">
      {/* Fondo */}
      <circle cx="250" cy="200" r="170" fill="#fff" />
      <circle cx="250" cy="200" r="170" fill="none" stroke="#2aa1b7" strokeWidth="3" strokeDasharray="6 12" />

      {/* Sol */}
      <g transform="translate(395 70)">
        <circle r="30" fill="#edb24a" />
        {Array.from({ length: 8 }, (_, i) => (
          <rect key={i} x="-3" y="-50" width="6" height="12" rx="3" fill="#edb24a" transform={`rotate(${i * 45})`} />
        ))}
      </g>

      {/* Estrellas */}
      <path d="M78 92l6 13 14 2-10 10 2 14-12-7-12 7 2-14-10-10 14-2z" fill="#a96eff" />
      <path d="M430 260l4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1z" fill="#f8803c" />
      <circle cx="120" cy="300" r="7" fill="#f8803c" />
      <circle cx="380" cy="150" r="6" fill="#2aa1b7" />

      {/* Libros apilados */}
      <g transform="translate(150 255)">
        <rect x="0" y="40" width="190" height="34" rx="6" fill="#2aa1b7" />
        <rect x="8" y="46" width="174" height="6" rx="3" fill="#fff" opacity="0.6" />
        <rect x="14" y="8" width="168" height="32" rx="6" fill="#a96eff" />
        <rect x="22" y="14" width="152" height="5" rx="2.5" fill="#fff" opacity="0.6" />
        <rect x="-6" y="-22" width="178" height="30" rx="6" fill="#f8803c" />
        <rect x="2" y="-16" width="162" height="5" rx="2.5" fill="#fff" opacity="0.6" />
      </g>

      {/* Libro abierto */}
      <g transform="translate(165 120)">
        <path d="M80 30 C55 14 22 12 0 18 V108 C22 102 55 104 80 120 Z" fill="#fff" stroke="#1d2340" strokeWidth="4" strokeLinejoin="round" />
        <path d="M80 30 C105 14 138 12 160 18 V108 C138 102 105 104 80 120 Z" fill="#fff" stroke="#1d2340" strokeWidth="4" strokeLinejoin="round" />
        <path d="M18 42 H62 M18 58 H62 M18 74 H52" stroke="#2aa1b7" strokeWidth="5" strokeLinecap="round" />
        <text x="98" y="78" fontFamily="'Fredoka Variable', Fredoka, sans-serif" fontWeight="600" fontSize="34" fill="#f8803c">
          1+2
        </text>
      </g>

      {/* Lápiz */}
      <g transform="translate(330 190) rotate(35)">
        <rect x="0" y="0" width="22" height="110" rx="3" fill="#edb24a" />
        <rect x="0" y="0" width="22" height="16" rx="3" fill="#f8803c" />
        <path d="M0 110 L11 136 L22 110 Z" fill="#fde7c9" />
        <path d="M7 126 L11 136 L15 126 Z" fill="#1d2340" />
      </g>

      {/* Bloques de letras */}
      <g fontFamily="'Fredoka Variable', Fredoka, sans-serif" fontWeight="600" fontSize="34" textAnchor="middle">
        <g transform="translate(70 230) rotate(-8)">
          <rect width="58" height="58" rx="10" fill="#edb24a" />
          <text x="29" y="41" fill="#1d2340">A</text>
        </g>
        <g transform="translate(96 168) rotate(6)">
          <rect width="54" height="54" rx="10" fill="#a96eff" />
          <text x="27" y="38" fill="#fff">B</text>
        </g>
        <g transform="translate(360 300) rotate(-6)">
          <rect width="56" height="56" rx="10" fill="#2aa1b7" />
          <text x="28" y="40" fill="#fff">C</text>
        </g>
      </g>
    </svg>
  )
}
