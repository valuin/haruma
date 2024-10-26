import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="font-sans bg-primary text-white flex flex-col items-center justify-center gap-12 p-12">
      <div className="flex items-center gap-8">
        <Logo />
        <div className="border-r-2 px-8 space-y-2">
          <p>Jl. RS Fatmawati No.1, Cilandak</p>
          <p>Jakarta Selatan, 12350</p>
        </div>
        <div className="border-r-2 px-8 space-y-2">
          <div className="flex">
            <Mail size={24} className="mr-2" />
            <p>support@haruma.com</p>
          </div>
          <div className="flex">
            <Phone size={24} className="mr-2" />
            <p>+62 812 3456 7890</p>
          </div>
        </div>
        <div className="px-8 space-y-2">
          <p>Have questions? We&apos;re here to help!</p>
          <p>Contact us</p>
        </div>
      </div>
      <p>&copy; 2024 Haruma. All rights reserved.</p>
    </footer>
  );
}

function Logo() {
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="31.6579"
        width="11.1389"
        height="19.3464"
        rx="3.5"
        fill="#FFD2CE"
      />
      <path
        d="M1.45675e-07 11.7256C5.65863 11.7256 11.2619 12.9463 16.4897 15.318C21.7176 17.6897 26.4678 21.1659 30.4691 25.5483C34.4703 29.9306 37.6443 35.1332 39.8098 40.859C41.9752 46.5848 43.0898 52.7216 43.0898 58.9192L30.8737 58.9192C30.8737 54.4786 30.0752 50.0816 28.5236 45.9791C26.9721 41.8766 24.6979 38.1489 21.831 35.009C18.9641 31.8691 15.5606 29.3783 11.8149 27.679C8.06909 25.9797 4.0544 25.1051 0 25.1051L1.45675e-07 11.7256Z"
        fill="#FFBFB8"
      />
      <g filter="url(#filter0_f_170_872)">
        <path
          d="M42.8474 46.6494C41.2565 50.3958 37.4506 52.3644 34.3467 51.0463C31.2428 49.7282 30.0162 45.6227 31.6071 41.8763C33.1981 38.1298 37.0039 36.1613 40.1079 37.4793C43.2118 38.7974 44.4383 42.903 42.8474 46.6494Z"
          fill="#FF8C81"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.0715 58.9192C31.0715 52.7216 32.1861 46.5848 34.3515 40.859C36.517 35.1332 39.691 29.9306 43.6922 25.5483C47.6935 21.1659 52.4437 17.6897 57.6716 15.318C62.8995 12.9463 68.5027 11.7256 74.1613 11.7256V25.1051C70.1069 25.1051 66.0922 25.9797 62.3464 27.679C58.6007 29.3783 55.1972 31.8691 52.3303 35.009C49.4634 38.1489 47.1892 41.8766 45.6377 45.9791C44.0861 50.0816 43.2876 54.4786 43.2876 58.9192H31.0715Z"
        fill="#FFD6D3"
      />
      <defs>
        <filter
          id="filter0_f_170_872"
          x="7.51058"
          y="13.6698"
          width="59.4334"
          height="61.186"
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
            stdDeviation="11.7"
            result="effect1_foregroundBlur_170_872"
          />
        </filter>
      </defs>
    </svg>
  );
}
