import AuthButton from '@/components/layout/auth-button';
import Link from 'next/link';
import { Suspense } from 'react';

const navlinks = [
  {
    title: 'HOME',
    href: '/home',
  },
  {
    title: 'BRANDS',
    href: '/brands',
  },
  {
    title: 'PERFUMES',
    href: '/perfumes',
  },
  {
    title: 'CONTACT',
    href: '/contact',
  },
];

export function Header() {
  return (
    <header className="w-full flex items-center justify-between border-b-2 border-red-300 pb-8">
      <Link href="/" aria-label="home link">
        <HarumaLogo />
      </Link>
      <nav className="space-x-16">
        {navlinks.map((link) => (
          <Link
            className="hover:text-primary"
            key={link.title}
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <Suspense fallback={<p>Loading...</p>}>
        <AuthButton />
      </Suspense>
    </header>
  );
}

export function HarumaLogo() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="39" cy="39" r="39" fill="#FF6F61" />
      <rect
        x="35.1605"
        y="21.4197"
        width="7.67876"
        height="13.3368"
        rx="1.06995"
        fill="#FFD2CE"
      />
      <path
        d="M13.3367 29.5026C17.2376 29.5026 21.1003 30.3441 24.7042 31.9791C28.3081 33.614 31.5828 36.0105 34.3411 39.0315C37.0994 42.0525 39.2875 45.639 40.7803 49.5862C42.2731 53.5333 43.0414 57.7639 43.0414 62.0363H34.6201C34.6201 58.9751 34.0695 55.9439 33 53.1158C31.9304 50.2877 30.3627 47.718 28.3863 45.5534C26.41 43.3888 24.0637 41.6718 21.4815 40.5004C18.8993 39.3289 16.1317 38.726 13.3367 38.726L13.3367 29.5026Z"
        fill="#FFBFB8"
      />
      <g filter="url(#filter0_f_170_883)">
        <path
          d="M42.8743 53.5779C41.7775 56.1605 39.1539 57.5176 37.0142 56.609C34.8744 55.7003 34.0289 52.8701 35.1256 50.2874C36.2223 47.7048 38.846 46.3477 40.9857 47.2564C43.1254 48.165 43.971 50.9952 42.8743 53.5779Z"
          fill="#FF8C81"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64.4611 29.5026L64.4611 38.726C61.6662 38.726 58.8986 39.3289 56.3163 40.5003C53.7341 41.6718 51.3879 43.3888 49.4115 45.5534C47.4352 47.7179 45.8675 50.2877 44.7979 53.1158C43.7283 55.9439 43.1778 58.9751 43.1778 62.0363L34.7565 62.0363C34.7565 57.7639 35.5248 53.5333 37.0176 49.5862C38.4579 45.7778 40.5454 42.3051 43.168 39.3522C43.2635 39.2446 43.3598 39.1377 43.4568 39.0315C43.5618 38.9164 43.6676 38.8023 43.7741 38.689C46.465 35.829 49.627 33.5518 53.0936 31.9791C56.6455 30.3677 60.4487 29.5271 64.2921 29.5031C64.3484 29.5028 64.4047 29.5026 64.4611 29.5026Z"
        fill="#FFD6D3"
      />
      <defs>
        <filter
          id="filter0_f_170_883"
          x="27.4921"
          y="39.8207"
          width="23.0157"
          height="24.224"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="3.57668"
            result="effect1_foregroundBlur_170_883"
          />
        </filter>
      </defs>
    </svg>
  );
}
