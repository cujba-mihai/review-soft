import * as React from 'react';

const Icon: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={80}
      height={80}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M31.88 24.81c.74-.157 1.496-.236 2.254-.235 2.821 0 5.474 1.076 7.47 3.032.505.494.958 1.038 1.35 1.622m1.739 5.725a10.214 10.214 0 01-3.09 7.292 10.566 10.566 0 01-6.044 2.939m-6.013-.928a10.576 10.576 0 01-2.882-2.011c-1.995-1.955-3.094-4.555-3.094-7.32 0-2.765 1.099-5.364 3.094-7.32.435-.426.906-.815 1.41-1.162m21.2 2.998a15.53 15.53 0 00-1.931-3.6l5.488-5.378-.498 3.248c-.228 1.49.782 2.923 2.3 3.163.148.024.297.035.448.035 1.355 0 2.543-.97 2.75-2.323l1.75-11.414a2.676 2.676 0 00-.113-1.272 2.72 2.72 0 00-.692-1.082l-.02-.02a2.821 2.821 0 00-2.669-.711c-.267.067-.533.137-.804.187l-9.96 1.83c-1.485.273-2.533 1.637-2.307 3.1.237 1.536 1.722 2.56 3.267 2.277l2.11-.388-4.989 4.889c-2.695-1.863-5.904-2.866-9.27-2.866-4.31 0-8.361 1.645-11.409 4.63C19.678 26.734 18 30.704 18 34.928c0 4.222 1.678 8.192 4.725 11.178a16.12 16.12 0 007.707 4.215m6.643.155a16.124 16.124 0 008.467-4.37c2.821-2.765 4.469-6.373 4.698-10.244M28.65 65.81l1.178-1.154 1.96 1.92c.258.254.565.455.903.593.338.137.7.207 1.066.207.366 0 .728-.07 1.066-.208a2.78 2.78 0 00.903-.592 2.69 2.69 0 000-3.859l-1.96-1.92 2.84-2.783a16.341 16.341 0 009.268 2.86c4.131 0 8.263-1.54 11.408-4.622a15.603 15.603 0 000-22.357c-3.047-2.986-7.099-4.63-11.408-4.63-4.31 0-8.361 1.644-11.408 4.63-3.047 2.985-4.726 6.955-4.726 11.178 0 3.299 1.024 6.443 2.925 9.084l-2.837 2.78-1.96-1.92a2.825 2.825 0 00-3.939 0 2.69 2.69 0 000 3.86l1.96 1.92-4.638 4.545a2.69 2.69 0 000 3.859c.258.254.565.455.903.592.338.137.7.207 1.066.207.366 0 .728-.07 1.066-.207a2.78 2.78 0 00.903-.592l.4-.392m27.755-16.416c-4.12 4.036-10.821 4.036-14.94 0-1.995-1.955-3.094-4.555-3.094-7.32 0-2.765 1.099-5.364 3.094-7.32 1.995-1.955 4.648-3.031 7.47-3.031s5.475 1.076 7.47 3.032a10.216 10.216 0 010 14.639z"
        stroke="#00534C"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Icon;
