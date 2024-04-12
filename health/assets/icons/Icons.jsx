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
    home: (
      <>
        <Path
          fill="#63B4FF"
          d="m20.83 8.01-6.55-5.24C13 1.75 11 1.74 9.73 2.76L3.18 8.01c-.94.75-1.51 2.25-1.31 3.43l1.26 7.54C3.42 20.67 4.99 22 6.7 22h10.6c1.69 0 3.29-1.36 3.58-3.03l1.26-7.54c.18-1.17-.39-2.67-1.31-3.42ZM12.75 18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3Z"
        />
      </>
    ),
    homeOutline: (
      <>
        <Path
          stroke="#8696BB"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12ZM12 17.99v-3"
        />
      </>
    ),
    video: (
      <>
        <Path
          fill="#63B4FF"
          d="M16.75 3.56V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-6.5V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25-.02.29.22.53.5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25ZM20 9.84H4c-.55 0-1 .45-1 1V17c0 3 1.5 5 5 5h8c3.5 0 5-2 5-5v-6.16c0-.55-.45-1-1-1ZM9.21 18.21c-.1.09-.21.16-.33.21-.12.05-.25.08-.38.08s-.26-.03-.38-.08-.23-.12-.33-.21c-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.1-.09.21-.16.33-.21a1 1 0 0 1 .76 0c.12.05.23.12.33.21.18.19.29.45.29.71 0 .26-.11.52-.29.71Zm.21-3.83c-.05.12-.12.23-.21.33-.1.09-.21.16-.33.21-.12.05-.25.08-.38.08s-.26-.03-.38-.08-.23-.12-.33-.21c-.09-.1-.16-.21-.21-.33A.995.995 0 0 1 7.5 14c0-.13.03-.26.08-.38s.12-.23.21-.33c.1-.09.21-.16.33-.21a1 1 0 0 1 .76 0c.12.05.23.12.33.21.09.1.16.21.21.33.05.12.08.25.08.38s-.03.26-.08.38Zm3.29.33c-.1.09-.21.16-.33.21-.12.05-.25.08-.38.08s-.26-.03-.38-.08-.23-.12-.33-.21c-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.1-.09.21-.16.33-.21.24-.11.52-.11.76 0 .12.05.23.12.33.21.18.19.29.45.29.71 0 .26-.11.52-.29.71Z"
        />
      </>
    ),
    videoOutline: (
      <>
        <Path
          stroke="#8696BB"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={1.5}
          d="M8.667 2v3M16.667 2v3M4.167 9.09h17M21.667 8.5V17c0 3-1.5 5-5 5h-8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
        />
        <Path
          stroke="#8696BB"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12.662 13.7h.01M8.961 13.7h.009M8.961 16.7h.009"
        />
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
