import { MdWork } from 'react-icons/md';

export const workIcon = (
  <>
    <svg width="0" height="0">
      <linearGradient id="blue-gradient" x1="0" y1="0" x2="0" y2="100%">
        <stop stopColor="#61dafb" offset="0%" />
        <stop stopColor="#5b7ee0" offset="100%" />
      </linearGradient>
    </svg>
    <MdWork style={{ fill: 'url(#blue-gradient)', top: '20px'}} />
  </>
);
