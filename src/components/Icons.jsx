// 미니멀 라인 아이콘 (이모지 사용 안 함). stroke 는 currentColor 를 따릅니다.
const P = {
  door: (<><path d="M6 21V4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21" /><path d="M3.5 21h17" /><circle cx="14.6" cy="12.4" r=".7" fill="currentColor" /></>),
  layers: (<><path d="M12 3l9 4.5-9 4.5-9-4.5z" /><path d="M3 12l9 4.5 9-4.5" /><path d="M3 16.5L12 21l9-4.5" /></>),
  gift: (<><circle cx="12" cy="12" r="9" /><path d="M8.5 15.5l7-7" /><circle cx="9" cy="9" r="1.2" /><circle cx="15" cy="15" r="1.2" /></>),
  chat: (<><path d="M4 5h16v11H9l-5 4z" /><path d="M8 9.5h8M8 12.5h5" /></>),
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  washer: (<><rect x="4" y="3" width="16" height="18" rx="1.5" /><circle cx="12" cy="13.5" r="4.5" /><path d="M7.5 6.5h2M12.5 6.5h4" /></>),
  truck: (<><path d="M2.5 6.5h11v9h-11z" /><path d="M13.5 9.5h4l3 3v3h-7" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></>),
  phone: (<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A15 15 0 0 1 4 5a1 1 0 0 1 1-1z" />),
  pin: (<><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>),
  arrow: <path d="M4 12h16M14 6l6 6-6 6" />,
  arrowL: <path d="M20 12H4M10 6l-6 6 6 6" />,
  arrowDown: <path d="M12 4v16M6 14l6 6 6-6" />,
  close: <path d="M5 5l14 14M19 5L5 19" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  search: (<><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></>),
  sparkle: <path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6z" />,
}

export default function Icon({ name, size = 22, stroke = 1.4, className = '' }) {
  return (
    <svg
      className={`ico ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {P[name]}
    </svg>
  )
}
