type IconName =
  | "cube"
  | "star"
  | "atom"
  | "arrow"
  | "check"
  | "plus"
  | "menu"
  | "close"
  | "quote"
  | "pulse"
  | "chevron"
  | "search"
  | "phone"
  | "mail"
  | "globe"
  | "location"
  | "send"
  | "calendar"
  | "graduation";

const paths: Record<IconName, JSX.Element> = {
  cube: (
    <>
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
      <path d="M3 7l9 5 9-5M12 12v10" />
    </>
  ),
  star: <path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6.1L12 17l-5.4 2.7 1.2-6.1L3.3 9.4l6.1-.8L12 3Z" />,
  atom: (
    <>
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M4 12.5l5 5L20 6.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  quote: <path d="M7 7h5v5c0 3-2 5-5 5M14 7h5v5c0 3-2 5-5 5" />,
  pulse: <path d="M2 12h5l2-6 4 12 2-6h7" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </>
  ),
  phone: <path d="M4 4h4l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 2 6a2 2 0 0 1 2-2Z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </>
  ),
  location: (
    <>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  send: <path d="M4 12l16-8-6 16-3-6-7-2Z" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </>
  ),
  graduation: <path d="M12 4 2 9l10 5 8-4v6M6 12v4c0 1.5 3 3 6 3s6-1.5 6-3v-4" />,
};

export function Icon({
  name,
  size = 24,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
