import { MdWork } from 'react-icons/md';

export const workIcon = (
  <div>
    <svg width="0" height="0">
      <linearGradient id="blue-gradient" x1="0" y1="0" x2="0" y2="100%">
        <stop stopColor="#a5d6af" offset="0%" />
        <stop stopColor="#127890" offset="100%" />
      </linearGradient>
    </svg>
    <MdWork style={{ fill: 'url(#blue-gradient)' }} className="workIcon"/>
  </div>
);
