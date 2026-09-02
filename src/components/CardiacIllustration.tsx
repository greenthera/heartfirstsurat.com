export default function CardiacIllustration({ className = '' }: { className?: string }) {
  return (
    <div className={`cardiac-illustration relative overflow-hidden border border-line bg-indigo/[0.035] ${className}`} aria-hidden="true">
      <svg viewBox="0 0 520 390" className="block h-auto w-full" fill="none">
        <defs>
          <linearGradient id="heart-wash" x1="150" y1="80" x2="380" y2="340" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3f51b5" stopOpacity=".2" />
            <stop offset=".72" stopColor="#3f51b5" stopOpacity=".06" />
            <stop offset="1" stopColor="#ffea00" stopOpacity=".08" />
          </linearGradient>
          <radialGradient id="soft-glow">
            <stop stopColor="#3f51b5" stopOpacity=".1" />
            <stop offset="1" stopColor="#3f51b5" stopOpacity="0" />
          </radialGradient>
          <pattern id="heart-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" stroke="#3f51b5" strokeOpacity=".08" />
          </pattern>
        </defs>
        <rect width="520" height="420" fill="url(#heart-grid)" />
        <circle cx="260" cy="210" r="185" fill="url(#soft-glow)" />
        <circle cx="260" cy="210" r="142" stroke="#3f51b5" strokeOpacity=".12" />
        <circle className="diagnostic-ring" cx="260" cy="210" r="106" stroke="#3f51b5" strokeOpacity=".16" strokeDasharray="4 8" />
        <g className="heart-beat">
          <path d="M252 345c-60-41-131-95-131-176 0-55 67-85 106-43l25 27 27-29c39-42 104-10 104 45 0 80-70 135-131 176Z" fill="url(#heart-wash)" stroke="#3f51b5" strokeWidth="2.4" />
          <path d="M252 153c17 42 8 81-7 123m31-117c-3 34 10 62 31 87" stroke="#3f51b5" strokeOpacity=".38" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M168 166c18-35 51-48 80-13" stroke="#3f51b5" strokeOpacity=".24" strokeWidth="5" strokeLinecap="round" />
          <path d="M181 172c15-21 38-27 57-10" stroke="#fff" strokeOpacity=".72" strokeWidth="2" strokeLinecap="round" />
        </g>
        <path className="ecg-trace" pathLength="1" d="M42 240h92l17-35 24 69 25-51 15 17h77l18-31 22 55 16-24h130" stroke="#3f51b5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle className="ecg-dot" cx="478" cy="240" r="7" fill="#ffea00" />
        <path d="M62 72h72M62 84h42M386 342h72M416 354h42" stroke="#3f51b5" strokeOpacity=".25" strokeWidth="2" />
      </svg>
    </div>
  )
}
