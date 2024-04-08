import * as React from "react";
import Svg, { ClipPath, Defs, G, Mask, Path } from "react-native-svg";

export default function Icons({ name, size = 24, ...props }) {
  const IconMap = {
    google: (
      <>
        <Path
          fill="#4285F4"
          fillRule="evenodd"
          d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.258h2.908c1.702-1.566 2.684-3.874 2.684-6.614Z"
          clipRule="evenodd"
        />
        <Path
          fill="#34A853"
          fillRule="evenodd"
          d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z"
          clipRule="evenodd"
        />
        <Path
          fill="#FBBC05"
          fillRule="evenodd"
          d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z"
          clipRule="evenodd"
        />
        <Path
          fill="#EA4335"
          fillRule="evenodd"
          d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z"
          clipRule="evenodd"
        />
      </>
    ),
    user: (
      <>
        <G clipPath="url(#a)">
          <Mask
            id="b"
            width={56}
            height={56}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
              maskType: "alpha",
            }}
          >
            <Path
              fill="#fff"
              d="M56 28C56 12.536 43.464 0 28 0S0 12.536 0 28s12.536 28 28 28 28-12.536 28-28Z"
            />
          </Mask>
          <G mask="url(#b)">
            <Path fill="#FEB052" d="M56 0H0v56h56V0Z" />
            <Path
              fill="#4894FE"
              d="m63.268-1.648-44.466 5.46c-6.14.753-10.506 6.342-9.752 12.481l5.46 44.466c.754 6.14 6.342 10.506 12.481 9.752l44.466-5.46c6.14-.754 10.506-6.342 9.752-12.482L75.75 8.103c-.753-6.139-6.342-10.505-12.481-9.751Z"
            />
            <Path
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth={2.222}
              d="M29.029 31.349c3.188 1.39 6.295 1.228 9.32-.489"
            />
            <Path
              fill="#fff"
              d="M24.656 22.232c-.044-.858-.603-1.526-1.246-1.492-.643.033-1.129.756-1.084 1.614.045.858.603 1.526 1.247 1.492.643-.033 1.128-.756 1.083-1.614ZM43.297 21.255c-.044-.858-.602-1.526-1.246-1.492-.643.033-1.129.756-1.084 1.614.045.858.603 1.526 1.247 1.492.643-.033 1.129-.756 1.084-1.614Z"
            />
          </G>
        </G>
        <Defs>
          <ClipPath id="a">
            <Path fill="#fff" d="M0 0h56v56H0z" />
          </ClipPath>
        </Defs>
      </>
    ),
  };
  return (
    <Svg
      {...props}
      width={size}
      height={size}
      // {...{ onPress }}
      // viewBox="0 0 24 24"
      fill="none"
    >
      {IconMap[name]}
    </Svg>
  );
}
