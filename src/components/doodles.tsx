export function ChalkStar({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 1 L14 9.5 L12 8 L10 9.5 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M12 23 L14 14.5 L12 16 L10 14.5 Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M1 12 L9.5 10 L8 12 L9.5 14 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M23 12 L14.5 10 L16 12 L14.5 14 Z"
        fill="currentColor"
        opacity="0.8"
      />
      <line x1="5" y1="5" x2="8" y2="8" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <line x1="16" y1="16" x2="19" y2="19" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
    </svg>
  );
}

export function BoxedStamp({ className = "" }: { className?: string }) {
  return (
    <svg width="36" height="18" viewBox="0 0 36 18" fill="none" className={className} aria-hidden="true">
      <rect x="1" y="1" width="34" height="16" stroke="currentColor" strokeWidth="1.2" opacity="0.5"
        strokeDasharray="2 1" rx="1" />
      <rect x="0.5" y="0.5" width="34" height="16" stroke="currentColor" strokeWidth="0.4" opacity="0.2"
        transform="translate(0.8, 0.5)" rx="1" />
      <text x="18" y="12.5" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="monospace"
        letterSpacing="0.1em" opacity="0.7">315</text>
    </svg>
  );
}

export function CornerRoomLines({ className = "", position = "tl" }: { className?: string; position?: "tl" | "tr" | "bl" | "br" }) {
  const transforms: Record<string, string> = {
    tl: "",
    tr: "scale(-1, 1)",
    bl: "scale(1, -1)",
    br: "scale(-1, -1)",
  };
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true"
      style={{ transform: transforms[position] }}>
      <line x1="0" y1="0" x2="0" y2="28" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
      <line x1="0" y1="0" x2="28" y2="0" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
      <line x1="0" y1="0" x2="18" y2="18" stroke="currentColor" strokeWidth="0.3" opacity="0.12" />
    </svg>
  );
}

export function ShiverCrack({ className = "" }: { className?: string }) {
  return (
    <svg width="28" height="40" viewBox="0 0 28 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 0 L15 8 L12 12 L16 18 L11 22 L15 28 L13 33 L14 40"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M12 12 L8 14"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.15"
      />
      <path
        d="M16 18 L20 17"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.15"
      />
    </svg>
  );
}

export function CropMarks({ className = "" }: { className?: string }) {
  return (
    <>
      <svg className={`absolute top-2 left-2 ${className}`} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M0 12 L0 0 L12 0" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      </svg>
      <svg className={`absolute top-2 right-2 ${className}`} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M16 12 L16 0 L4 0" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      </svg>
      <svg className={`absolute bottom-2 left-2 ${className}`} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M0 4 L0 16 L12 16" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      </svg>
      <svg className={`absolute bottom-2 right-2 ${className}`} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M16 4 L16 16 L4 16" stroke="currentColor" strokeWidth="0.7" opacity="0.3" />
      </svg>
    </>
  );
}

export function SignalTicks({ className = "" }: { className?: string }) {
  return (
    <svg width="64" height="8" viewBox="0 0 64 8" fill="none" className={className} aria-hidden="true">
      {Array.from({ length: 11 }).map((_, i) => (
        <line
          key={i}
          x1={4 + i * 5.5}
          y1={i === 6 ? 0 : 2}
          x2={4 + i * 5.5}
          y2={i === 6 ? 8 : 6}
          stroke={i === 6 ? "var(--infrared)" : "currentColor"}
          strokeWidth={i === 6 ? 1.5 : 0.8}
          opacity={i === 6 ? 0.8 : 0.3}
        />
      ))}
    </svg>
  );
}
