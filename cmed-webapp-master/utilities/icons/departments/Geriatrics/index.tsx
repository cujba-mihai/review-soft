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
        d="M32.832 16.446v.175a4.428 4.428 0 004.43 4.427 4.428 4.428 0 004.43-4.427v-1.196A4.428 4.428 0 0037.261 11c-.69 0-1.343.158-1.925.438m4.085 25.207a36.578 36.578 0 00-.19 3.175m0 0H27.803m11.427 0l3.962 9.727c.64 1.57.968 3.249.968 4.944v2.437M27.804 39.82s.718-12.32 2.873-16.029c2.155-3.707 5.06-3.02 6.584-2.631 1.652.421 4.207 2.238 3.61 5.775 0 0-.254 1.304-.562 3.169M27.804 39.82c0 2.55 1.668 4.356 1.668 4.356l7.272 8.234a3.75 3.75 0 01.94 2.483v9.247m-9.88-24.32h10.518m5.839 21.208v3.112m0 0h-6.478m6.478 0s-.246 1.617 1.263 2.132c.826.282 1.406 1.073 1.761 1.731a.676.676 0 01-.595.997h-7.375a1.53 1.53 0 01-1.532-1.53v-3.33M37.2 53.052c-.15.448-.322.889-.52 1.32l-4.262 9.12m0 0l-5.887-2.7m5.887 2.7s-.898 1.367.258 2.464c.634.6.83 1.561.879 2.307a.676.676 0 01-.958.658l-6.703-3.073a1.53 1.53 0 01-.753-2.03l1.39-3.026m0 0l4.093-8.754a3.755 3.755 0 00.183-2.648l-1.853-5.905v-.002m10.79-14.398l-4.133 2.591m4.132-2.59l-1.925-3.181a2.442 2.442 0 00-3.297-.857 2.438 2.438 0 00-.879 3.383l1.97 3.245m4.131-2.59l1.892 3.396a1.798 1.798 0 001.116.864l5.347 1.4a2.672 2.672 0 011.925 3.2l-.204.864a.7.7 0 01-.863.514l-1.41-.381M35.61 31.676l2.142 3.43a4.295 4.295 0 002.523 1.872l3.31.894M55 69V43.173a3.827 3.827 0 00-3.828-3.825h-1.868M34.61 17.158h.574a1.051 1.051 0 001.05-1.05v-3.631a1.05 1.05 0 00-1.05-1.05 3.153 3.153 0 00-3.154 3.152 2.58 2.58 0 002.58 2.58z"
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