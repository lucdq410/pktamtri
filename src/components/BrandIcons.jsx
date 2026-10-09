export function FacebookIcon(props) {
  return (
    <svg viewBox="3.5 3.5 17 17.5" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.87.25-1.46 1.5-1.46h1.6V4.46A21 21 0 0 0 14.27 4.3c-2.3 0-3.87 1.4-3.87 3.98v2.22H7.8v3h2.6V21h3.1Z" />
    </svg>
  )
}

export function MessengerIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.2 5.43 3.14 7.17.16.15.26.35.27.57l.05 1.78c.02.57.6.94 1.12.71l1.98-.87c.17-.08.36-.09.54-.04.91.25 1.87.38 2.9.38 5.64 0 10-4.13 10-9.7S17.64 2 12 2Zm6 7.46-2.94 4.66c-.47.74-1.47.93-2.17.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.32-.97-.18-.69-.63l2.94-4.66c.47-.74 1.47-.93 2.17-.4l2.34 1.75a.6.6 0 0 0 .72 0l3.16-2.4c.42-.32.97.18.69.63Z" />
    </svg>
  )
}

export function ZaloIcon({ className = '', ...props }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className} {...props}>
      <path
        fill="currentColor"
        d="M24 5C12.4 5 3 13 3 22.9c0 5.6 3 10.6 7.7 13.9-.3 2.2-1.4 4.4-3.3 6.2 3.5.2 7-.9 9.5-2.8 2.2.6 4.6 1 7.1 1 11.6 0 21-8 21-17.9S35.6 5 24 5Z"
      />
      <text
        x="24"
        y="27.5"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="11"
        fill="#0068FF"
      >
        Zalo
      </text>
    </svg>
  )
}
