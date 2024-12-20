import * as React from "react";
import { SVGProps } from "react";

const NumberEight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    {...props}
  >
    <path
      style={{
        fill: "#f1f2f2",
      }}
      d="M446.8 140.2c-1.4-5.8-4.3-9.4-6.8-11.6-2.9-2.6-6.1-3.9-8.9-4.6-3.2-3.8-7.2-6.3-11.9-7.4-4.6-1-9.1-.5-13.1.8-18.3-4.9-29.6 9.9-33.1 18.6-.1.2-.2.5-.2.7-4.7 10.5-3.7 21.2-3.2 24.4q.45 5.1 2.7 10.2c-3.4 5.6-3.4 12.7 0 19.7.7 1.6 1.7 3.1 2.7 4.6-1.8 1.8-3.6 3.3-5.4 4.7v-1.1c0-25.4-13.2-46.4-39.2-62.3-5.3-3.2-10.7-6-16.3-8.5v-1c-.3-12.1-3.7-23.6-9.6-32.3-.2-.3-.4-.6-.6-.8.7-.6 1.3-1.3 1.9-2 3.1-4.2 3-9.9-.3-14-11.7-14.4-31-22.1-31.8-22.4l-10-3.9-4.2 16.5c-1.4 5.5.2 11.2 3.7 15.2-2.5 1.5-4.9 3.4-7 5.7-1.5-1.4-3.1-2.7-4.7-3.8 4.4-4.2 6.4-10.8 4.5-17l-5-16.3-9.8 4.4c-.8.4-19.7 8.9-30.7 23.9-3 4.1-2.9 9.6.1 13.6-.7.9-1.3 1.8-1.9 2.8-5.4 8.5-8.3 19.4-8.4 30.9-5.3 2.1-10.3 4.6-15 7.4-25 15-38.2 38.1-38.2 66.9v1.4c-3.4-2.1-6.8-4.7-10.1-7.9 1-1.5 2-3 2.7-4.6 3.4-7 3.3-14.1 0-19.7 1.5-3.3 2.5-6.8 2.7-10.2.5-3.2 1.5-13.9-3.2-24.4-.1-.3-.2-.5-.3-.8-3.4-8.6-14.7-23.5-33-18.6-4-1.2-8.5-1.8-13.1-.8-4.7 1-8.8 3.6-11.9 7.4-2.8.7-5.9 2-8.9 4.6-2.5 2.2-5.4 5.8-6.8 11.6-7 5.2-12.2 14.4-8.3 27.2 2.2 7.1 7 12.8 12.7 16.7.9 1.6 1.9 2.9 2.9 4.1 4.6 6.4 9.5 10.1 13.9 12.1.5 2 1.4 3.8 2.6 5.5 3.5 5 9.3 7.7 16.3 7.7 2.8 0 5.8-.5 8.8-1.3 13.9 15.5 29.7 22.2 42.6 25 3.1 4.9 7.3 10 12.7 15.3l-.1.1c-7.3 6.6-13.2 13.6-17.7 20.7-6.8 10.9-10.3 22.4-10.3 34.3 0 31.7 11.4 56.4 33.9 73.3l-8.3 6c-3.2-1.2-6-1.2-7.9-1-1.7.2-3.3.7-4.9 1.4 0 0-.1 0-.1-.1-2.3-1-4.5-1.5-6.7-1.7l-1.8-1.8c-.4-3.1.1-6.7.5-9.3q.15-1.2.3-2.1c1-8.6-.4-17.5-4-25.8-9.9-22.5-33.6-33.9-53-25.4-10.8 4.7-19.8 15.3-23.3 28.1-3 9.1-3 19.8.5 30.1.1.5.2 1 .4 1.5 1.2 3.6 12.3 35.6 28.9 55.5 3.6 4.9 8.2 9.1 13.2 12 3.2 2 6.6 3.4 9.9 4.2 1.5.3 2.9.6 4.3.6 1.3.2 2.6.2 3.9.2 4.4 0 8.7-.9 12.7-2.6 2.8-1.2 5.4-2.8 7.7-4.8 8.3-1.3 15.4-6.6 19.3-10.1 13-4.7 17.5-14.5 17.6-22.3l22.7-16.4c15.7 5.1 33.8 7.8 54.2 7.8 13 0 25.2-1.3 36.5-3.9l20.3 14.7c.1 7.8 4.6 17.6 17.6 22.3 4 3.7 11.5 9.2 20.2 10.2q1.95 1.5 4.2 2.7c4.6 2.4 9.5 3.6 14.8 3.6h1.5c1.4 0 2.9-.1 4.4-.3 3.4-.5 6.8-1.7 10.1-3.5 5.2-2.6 10.1-6.4 14.1-11.1 18.3-19.1 32.2-51.9 32.7-53.3.2-.5.4-1 .5-1.5 4.3-10.1 5-20.7 2.7-30-2.6-13-10.8-24.2-21.2-29.7-9.4-4.9-20.3-5.2-30.9-.7-6.8 2.8-12.8 7.4-17.7 13.3q2.7-10.5 2.7-22.2c0-13.1-3.4-25.6-10.1-37.1l-.1-.2c-4.4-7.5-10.5-14.9-18-22.1l-.5-.5c6.4-6.3 11.5-13 15.1-19.8 11.8-3.4 25.4-10.3 37.5-23.8q2.85.9 5.7 1.2c1.1.1 2.1.2 3.1.2 6.9 0 12.7-2.7 16.2-7.7 1.2-1.7 2.1-3.6 2.6-5.5 4.4-2 9.3-5.7 13.9-12.1 1-1.2 2-2.5 2.9-4.1 5.7-3.9 10.5-9.6 12.7-16.7 4.2-12.6-1-21.9-8-27.1m-86.7 222.4c-.5 3.2-.7 6.4-.5 9.6 0 .6.1 1.4.1 2.1.2 2.7.4 6.3-.2 9.3-1.5 1.2-2.9 2.6-4.2 4-2.1.2-4.3.6-6.5 1.7 0 0-.1 0-.1.1-1.6-.7-3.2-1.2-4.9-1.5-1.9-.2-4.7-.2-7.8 1l-2.6-1.9c1.4-.9 2.8-1.7 4.2-2.7 9.2-6.2 16.7-13.4 22.5-21.7"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M337.5 229.6c-9.9 0-16.7-1.9-17.1-2-2.4-.7-3.8-3.2-3.1-5.6s3.2-3.7 5.6-3.1c1.7.5 42 11.5 68.4-28.5 1.4-2.1 4.2-2.6 6.2-1.3 2.1 1.4 2.6 4.2 1.3 6.2-15.7 23.8-36.2 31.3-50.5 33.4-3.8.7-7.5.9-10.8.9"
    />
    <ellipse
      transform="rotate(-54.634 397.992 188.06)"
      style={{
        fill: "#fff",
      }}
      cx={398}
      cy={188.1}
      rx={10.9}
      ry={19.6}
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M406.8 204c-.7 0-1.4 0-2.1-.1-4.5-.5-9.4-2.5-13.9-5.7s-8-7.2-10-11.2c-2.1-4.3-2.1-8.3-.1-11.1s5.8-4.1 10.5-3.6c4.5.5 9.4 2.5 13.9 5.7s8 7.2 10 11.2c2.1 4.3 2.1 8.3.1 11.1-1.7 2.4-4.6 3.7-8.4 3.7m-17.6-28.9c-2.8 0-4.9.8-6 2.4-1.4 1.9-1.2 4.8.4 8.1 1.7 3.6 4.9 7.2 9 10.1s8.5 4.7 12.5 5.2c3.6.4 6.4-.4 7.8-2.3s1.2-4.8-.4-8.1c-1.7-3.6-4.9-7.2-9-10.1s-8.5-4.7-12.5-5.2c-.6 0-1.2-.1-1.8-.1"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M410.9 138.4c38.9 24 20 42.8 20 42.8-14.3 20.5-28.3 3.9-28.3 3.9-7.2-.4-21.5-13.8-22.1-25.2 0 0-2.1-12.4 4.1-22"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M415.4 193c-6.9 0-12.1-4.9-13.5-6.4-7.9-1.1-22.2-14.4-22.8-26.4-.2-1.3-1.9-13.3 4.3-23 .4-.7 1.4-.9 2.1-.5s.9 1.4.5 2.1c-5.8 9-3.9 20.8-3.8 21v.2c.5 10.4 14 23.4 20.6 23.7.4 0 .8.2 1.1.5.1.1 5.3 6.1 12.2 5.8 4.8-.2 9.4-3.5 13.7-9.6l.2-.2c.2-.2 5-5.1 4-13.1-1.1-9-9.3-18.5-23.7-27.4-.7-.4-.9-1.4-.5-2.1s1.4-.9 2.1-.5c15.5 9.6 24 19.6 25.1 29.7 1 8.8-4 14.5-4.8 15.4-4.8 6.9-10.2 10.5-16 10.8z"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M399.8 137.9c-15 18.1 3.9 20.4 3.9 20.4-1.7 10.5 10.7 13.1 10.7 13.1 4.4 14.4 26.2 6.1 30.2-7.2s-8-17.2-8-17.2c-.3-13.9-11.9-12.7-11.9-12.7-7.5-15.5-25.1-1.2-25.1-1.2l-5.3 3.9"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M424.6 180.5c-5.5 0-9.6-2.8-11.4-7.8-4.6-1.2-11.6-5.2-11.2-13.1-2.4-.6-7.2-2.2-8.9-6.5-1.7-4.2.2-9.6 5.6-16.1.5-.6 1.5-.7 2.1-.2s.7 1.5.2 2.1c-4.5 5.5-6.3 10-5.1 13 1.6 4.1 7.9 4.9 8 4.9.4.1.8.3 1 .6s.3.7.3 1.1c-1.5 8.9 9.1 11.3 9.5 11.4.5.1 1 .5 1.1 1 1.6 5.4 5.7 6.5 8.8 6.5 6.8 0 16.1-5.6 18.5-13.7 3.5-11.6-6.6-15.2-7-15.3-.6-.2-1-.8-1-1.4-.1-4.1-1.2-7.1-3.4-9-2.9-2.6-6.8-2.2-6.8-2.2-.6.1-1.2-.3-1.5-.8-1.7-3.4-4-5.5-6.9-6.1-7.1-1.6-15.8 5.4-15.9 5.4l-5.4 4c-.7.5-1.6.3-2.1-.3-.5-.7-.3-1.6.3-2.1l5.3-3.9c.3-.3 9.8-7.9 18.4-6 3.6.8 6.4 3.1 8.5 6.9 1.7 0 5.2.4 8.1 2.9 2.6 2.3 4.1 5.7 4.4 10.2 3 1.4 11.6 6.5 8 18.6-2.9 9.5-13.4 15.8-21.5 15.9"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M424.8 134.4s-1.1 12.7-21.1 23.9"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M403.7 159.8c-.5 0-1-.3-1.3-.8-.4-.7-.1-1.6.6-2 18.9-10.6 20.3-22.7 20.3-22.8.1-.8.8-1.4 1.6-1.4.8.1 1.4.8 1.4 1.6 0 .6-1.4 13.6-21.8 25.1-.3.3-.6.3-.8.3"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M436.6 147.1s-1.9 16.3-22.3 24.4"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M414.4 172.9c-.6 0-1.2-.4-1.4-.9-.3-.8.1-1.6.8-1.9 19.2-7.6 21.3-22.5 21.3-23.1.1-.8.9-1.4 1.7-1.3s1.4.8 1.3 1.7c-.1.7-2.3 17.3-23.2 25.6-.2-.1-.4-.1-.5-.1"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M383.3 140.1s6.3-15.9 20.2-11.9c11.1 3.1 14.3 8.8 13.7 13.6s-12.7 11.3-21.9 2.7c0 0 6.4 8.5-1.5 16.6"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M393.8 162.6c-.4 0-.8-.1-1-.4-.6-.6-.6-1.5 0-2.1 6.9-7.1 1.6-14.4 1.4-14.7-.5-.6-.4-1.5.2-2s1.5-.5 2 0c5.5 5.2 11.5 3.8 13.8 3 3.4-1.2 5.4-3.4 5.6-4.8.7-5.2-3.9-9.6-12.6-12-12.4-3.5-18.1 10.5-18.4 11.1-.3.8-1.2 1.1-1.9.8-.8-.3-1.1-1.2-.8-1.9.1-.2 6.9-17.1 22-12.8 14.6 4.1 15.2 12 14.8 15.3-.4 2.8-3.4 5.7-7.5 7.2-4.2 1.5-8.5 1.2-12.3-.6.9 3.6.8 8.6-3.9 13.5-.6.2-1 .4-1.4.4m-219.1 67c-3.3 0-6.9-.2-10.8-.8-14.4-2.1-34.8-9.6-50.5-33.4-1.4-2.1-.8-4.9 1.3-6.2 2.1-1.4 4.9-.8 6.2 1.3 26.5 40.2 68 28.6 68.4 28.5 2.4-.7 4.9.7 5.6 3.1s-.7 4.9-3.1 5.6c-.4 0-7.2 1.9-17.1 1.9"
    />
    <ellipse
      transform="rotate(-35.363 114.241 188.074)"
      style={{
        fill: "#fff",
      }}
      cx={114.2}
      cy={188.1}
      rx={19.6}
      ry={10.9}
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M105.5 204c-3.7 0-6.7-1.2-8.5-3.7-2-2.8-2-6.8.1-11.1 1.9-4 5.5-8 10-11.2s9.4-5.2 13.9-5.7c4.8-.5 8.5.7 10.5 3.6 2 2.8 2 6.8-.1 11.1-1.9 4-5.5 8-10 11.2-5.4 3.8-11.2 5.8-15.9 5.8m17.5-28.9c-.6 0-1.1 0-1.8.1-4 .4-8.4 2.3-12.5 5.2s-7.3 6.5-9 10.1c-1.6 3.3-1.7 6.2-.4 8.1 2.9 4.1 12.2 2.8 20.2-2.8 4.1-2.9 7.3-6.5 9-10.1 1.6-3.3 1.7-6.2.4-8.1-1-1.6-3.1-2.5-5.9-2.5m-15.1 4.1"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M101.3 138.4c-38.9 24-20 42.8-20 42.8 14.3 20.5 28.3 3.9 28.3 3.9 7.2-.4 21.5-13.8 22.1-25.2 0 0 2.1-12.4-4.1-22"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M96.8 193h-.7c-5.8-.3-11.2-3.9-16-10.8-.8-.9-5.8-6.6-4.8-15.4 1.2-10.1 9.6-20.1 25.1-29.7.7-.4 1.6-.2 2.1.5.4.7.2 1.6-.5 2.1-14.4 8.9-22.7 18.4-23.7 27.4-1 8 3.8 12.9 4 13.1l.2.2c4.3 6.1 8.9 9.4 13.7 9.6 6.9.4 12.2-5.7 12.2-5.8.3-.3.7-.5 1.1-.5 6.6-.4 20.1-13.3 20.6-23.7v-.2c0-.1 1.9-12-3.8-21-.4-.7-.2-1.6.5-2.1s1.6-.2 2.1.5c6.2 9.7 4.5 21.7 4.3 23-.7 12-14.9 25.3-22.8 26.4-1.5 1.6-6.7 6.4-13.6 6.4"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M112.4 137.9c15 18.1-3.9 20.4-3.9 20.4 1.7 10.5-10.7 13.1-10.7 13.1-4.4 14.4-26.2 6.1-30.2-7.2s8-17.2 8-17.2c.3-13.9 11.9-12.7 11.9-12.7 7.5-15.5 25.1-1.2 25.1-1.2l5.3 3.9"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M87.6 180.5c-8 0-18.6-6.3-21.4-15.8-3.7-12.1 4.9-17.2 8-18.6.3-4.5 1.7-7.9 4.4-10.2 2.9-2.5 6.4-2.9 8.1-2.9 2.1-3.8 4.9-6.1 8.5-6.9 8.6-1.9 18.1 5.7 18.5 6l5.3 3.9c.7.5.8 1.4.3 2.1s-1.4.8-2.1.3l-5.3-3.9c-.1-.1-8.8-7.1-16-5.5-2.9.7-5.2 2.7-6.9 6.1-.3.6-.9.9-1.5.8 0 0-4-.4-6.9 2.2-2.1 1.9-3.3 4.9-3.4 9 0 .6-.4 1.2-1 1.4-.4.1-10.5 3.7-7 15.3 2.4 8.1 11.7 13.7 18.5 13.7 3.1 0 7.2-1.1 8.8-6.5.2-.5.6-.9 1.1-1 .4-.1 11-2.4 9.5-11.4-.1-.4 0-.8.3-1.1s.6-.5 1-.6c.1 0 6.4-.9 8-4.9 1.2-3.1-.5-7.6-5.1-13-.5-.6-.4-1.6.2-2.1s1.6-.4 2.1.2c5.4 6.4 7.2 11.9 5.6 16.1-1.7 4.3-6.5 5.9-8.9 6.5.4 7.9-6.6 11.9-11.2 13.1-1.9 4.8-6 7.7-11.5 7.7"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M87.5 134.4s1.1 12.7 21.1 23.9"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M108.6 159.8c-.2 0-.5-.1-.7-.2C87.4 148.1 86 135.1 86 134.5c-.1-.8.5-1.6 1.4-1.6.8-.1 1.5.5 1.6 1.4 0 .2 1.5 12.2 20.3 22.8.7.4 1 1.3.6 2-.3.5-.8.7-1.3.7"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M75.6 147.1s1.9 16.3 22.3 24.4"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M97.9 172.9c-.2 0-.4 0-.6-.1-20.9-8.3-23.1-24.9-23.2-25.6-.1-.8.5-1.6 1.3-1.7s1.6.5 1.7 1.3c.1.6 2.2 15.6 21.3 23.1.8.3 1.1 1.2.8 1.9-.2.7-.7 1.1-1.3 1.1"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M128.9 140.1s-6.3-15.9-20.2-11.9c-11.1 3.1-14.3 8.8-13.7 13.6s12.7 11.3 21.9 2.7c0 0-6.4 8.5 1.5 16.6"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M118.5 162.6c-.4 0-.8-.2-1.1-.5-4.7-4.9-4.8-9.9-3.9-13.5-3.8 1.8-8.2 2.1-12.3.6s-7.2-4.4-7.5-7.2c-.4-3.2.2-11.2 14.8-15.3 15-4.2 21.9 12.7 22 12.8.3.8-.1 1.6-.8 1.9-.8.3-1.6-.1-1.9-.8-.2-.6-6-14.5-18.4-11.1-8.7 2.4-13.3 6.8-12.6 12 .2 1.4 2.2 3.6 5.6 4.8 2.3.8 8.3 2.2 13.8-3 .6-.5 1.4-.5 2 0s.7 1.4.2 2c-.2.3-5.5 7.6 1.4 14.7.6.6.6 1.5 0 2.1-.6.3-1 .5-1.3.5m254.2 279.2c-1.3 0-2.7-.4-3.8-1.2l-95.3-68.9c-2.9-2.1-3.6-6.2-1.5-9.1s6.2-3.6 9.1-1.5l95.3 68.9c2.9 2.1 3.6 6.2 1.5 9.1-1.3 1.8-3.3 2.7-5.3 2.7"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M362.3 399.8s-10.4-4.9-13.2 5.2c0 0-5.6-11.8-13.2-2.8-4.1 4.9 0 15.5-6.3 11.1 0 0-2.8 10.8 12.2 15 0 0 17.7 18.6 27.3 2.6"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M358.9 438.9c-8.2 0-16.3-7.6-18-9.3-15.7-4.6-12.9-16.5-12.8-16.7.1-.5.5-.9.9-1 .5-.2 1-.1 1.4.2.7.5 1.1.7 1.3.7.2-.6.3-2 .4-2.9.2-2.8.5-6.2 2.6-8.7q3.75-4.35 7.8-3.9c2.8.4 4.9 2.5 6.3 4.3 1-1.7 2.3-3 3.9-3.7 4.6-2.1 10 .4 10.2.5.8.4 1.1 1.2.7 2-.3.7-1.2 1.1-2 .7 0 0-4.4-2-7.7-.5-1.7.8-2.8 2.4-3.5 4.7-.2.6-.7 1-1.3 1.1-.6 0-1.2-.3-1.5-.9-.6-1.4-2.9-4.9-5.6-5.3-1.6-.2-3.3.7-5.1 2.8-1.5 1.7-1.7 4.6-1.9 7-.2 2.5-.4 4.7-2.1 5.5-.7.3-1.5.3-2.2.1.1 3 1.7 8.5 11.3 11.1.3.1.5.2.7.4.1.1 9.1 9.5 17.2 8.6 3.2-.3 5.7-2.2 7.8-5.7.4-.7 1.4-.9 2.1-.5s.9 1.3.5 2.1c-2.6 4.3-6 6.7-10.1 7.2-.3.1-.8.1-1.3.1"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M375.1 351.9c8.6-16.4 26.4-24 39.8-17 12.9 6.8 20.7 25.7 13.2 41.7l-3.7-.9s-13.6 32.5-30.8 50.2c-3.1 3.8-6.9 6.7-10.8 8.6-2.3 1.2-4.6 2.1-6.9 2.4-1 .2-2 .2-2.8.2-3.8.2-7.6-.5-11.1-2.3-12-6.3-5-6.1 2.8-20.9 2.6-4.9-1.8-15.4 1.4-19.1 6.2-7.4 4.6-18 4.4-23.2-.4-6.3 1.1-13.2 4.5-19.7"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M371.6 438.8c-3.7 0-7.2-.8-10.4-2.5-4.3-2.2-6.7-3.9-7.2-6.1s.9-4.2 3.1-7.1c1.7-2.2 3.9-5.3 6.2-9.7 1-2 .7-5.4.3-8.7-.4-4.2-.8-8.2 1.2-10.7 5.1-6.1 4.5-14.9 4.2-20.2 0-.7-.1-1.4-.1-1.9-.3-6.9 1.3-14 4.7-20.5 9-17.1 27.8-25 41.8-17.6 13 6.9 21.9 26.5 13.9 43.7-.3.6-1 1-1.7.8l-2.5-.6c-2.6 6-15 33.4-30.6 49.5-3.2 3.8-7.1 6.9-11.3 8.9-2.4 1.3-4.9 2.2-7.3 2.6-1.1.2-2.1.2-3 .2-.3-.2-.8-.1-1.3-.1m4.8-86.2c-3.2 6-4.7 12.6-4.4 19 0 .6.1 1.2.1 1.9.4 5.7 1 15.3-4.9 22.3-1.2 1.5-.9 5-.5 8.4.4 3.8.8 7.7-.7 10.4-2.4 4.6-4.7 7.7-6.5 10.1-1.6 2.1-2.8 3.8-2.6 4.7.3 1.2 3.2 2.8 5.6 4.1 3.1 1.6 6.6 2.4 10.3 2.1h.2c.8 0 1.6 0 2.5-.2 2.1-.3 4.2-1.1 6.4-2.3 3.9-1.9 7.5-4.7 10.4-8.2 0 0 0-.1.1-.1 16.8-17.3 30.3-49.4 30.5-49.7.3-.7 1-1 1.7-.9l2.5.6c6.5-15.4-1.5-32.5-13-38.6-12.5-6.5-29.5.8-37.7 16.4"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M378.7 358.2c8.6-16.4 26.4-24 39.8-17 12.9 6.8 16.9 24.7 9.4 40.7l.1.1s-13.6 32.5-30.8 50.2c-3.1 3.8-6.9 6.7-10.8 8.6-2.3 1.2-4.6 2.1-6.9 2.4-1 .2-2 .2-2.8.2-3.8.2-7.6-.5-11.1-2.3-12-6.3-15.5-23.5-7.7-38.3 2.6-4.9 6-8.9 10-11.9 4.1-3.1 6.6-7.9 6.3-13.1-.4-6.2 1-13.1 4.5-19.6"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M375.2 445.1c-3.7 0-7.2-.8-10.4-2.5-12.8-6.7-16.5-24.8-8.3-40.3 2.6-4.9 6.2-9.2 10.4-12.4 3.8-2.9 5.9-7.3 5.7-11.8-.3-6.9 1.3-14 4.7-20.5 4.3-8.2 11-14.6 18.9-17.9 7.9-3.4 16.1-3.3 22.9.3 13.4 7 17.9 25.5 10.3 42.2 0 .2 0 .4-.1.6-.6 1.3-13.9 32.9-31.1 50.6-3.2 3.8-7.1 6.9-11.3 8.9-2.4 1.3-4.9 2.2-7.3 2.6-1.1.2-2.1.2-3 .2zm32.5-104.9c-3.4 0-6.9.7-10.3 2.2-7.2 3.1-13.4 9-17.4 16.6-3.2 6-4.7 12.6-4.4 19 .3 5.5-2.3 10.9-6.9 14.4-3.9 2.9-7.2 6.8-9.5 11.4-7.4 14-4.2 30.3 7.1 36.2 3.1 1.6 6.6 2.4 10.3 2.1h.2c.8 0 1.6 0 2.5-.2 2.1-.3 4.2-1.1 6.4-2.3 3.9-1.9 7.5-4.7 10.4-8.2 0 0 0-.1.1-.1 15.6-16.1 28.5-45.1 30.3-49.2 0-.2 0-.5.1-.7 7.2-15.4 3.4-32.4-8.7-38.7-3.3-1.7-6.7-2.5-10.2-2.5m-61.8 77.5c-.9 0-1.5-.8-1.5-1.6.4-6.5 3.2-11.6 3.3-11.8.4-.7 1.3-1 2-.6s1 1.3.6 2c0 .1-2.6 4.7-2.9 10.5 0 .8-.7 1.5-1.5 1.5m-215.7 22c-2 0-4-.9-5.3-2.7-2.1-2.9-1.4-7 1.5-9.1l95.3-68.9c2.9-2.1 7-1.4 9.1 1.5s1.4 7-1.5 9.1L134 438.5c-1.1.8-2.4 1.2-3.8 1.2"
    />
    <path
      style={{
        fill: "#f15a29",
      }}
      d="M353.5 284.4c-3.9-6.6-9.3-13.1-16.1-19.6-5.6-5.5-8.5-8.4-8.5-8.7 0-.8 2.5-3.6 7.4-8.5 5.9-5.8 10.5-11.7 13.7-17.8 5.1-9.2 7.6-19.4 7.6-30.6 0-21.1-11.1-38.4-33.4-52-19.4-11.8-40.7-17.8-64-17.8-27.6 0-50.5 5.4-68.6 16.1-21.6 12.9-32.3 31.8-32.3 56.6q0 15.3 6.9 27.3c2.7 4.8 7 10 12.8 15.5 4.5 4.5 6.7 7.6 6.7 9.1l-8.2 7.4c-6.5 5.9-11.7 12-15.6 18.2-5.6 9-8.5 18.2-8.5 27.9 0 29.2 10.7 51.2 32.1 65.9 18.7 13.1 44 19.6 76 19.6 27.6 0 50.7-6.2 69.2-18.6 20.8-14 31.3-33.7 31.3-58.9 0-10.9-2.8-21.3-8.5-31.1M260 351.5c-16.2 0-29.3-12-29.3-26.8s13.1-26.8 29.3-26.8 29.3 12 29.3 26.8c-.1 14.8-13.2 26.8-29.3 26.8"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M261.5 395.5c-32.4 0-58.4-6.8-77.4-20.1-22-15.1-33.2-38-33.2-67.9 0-10.1 3-19.9 8.8-29.2 4-6.4 9.4-12.6 16.1-18.7l7-6.3c-.6-1-2.1-3-5.6-6.6-5.9-5.6-10.3-11-13.2-16-4.8-8.3-7.3-17.9-7.3-28.5 0-25.6 11.3-45.4 33.5-58.7 18.4-10.9 41.9-16.5 69.9-16.5 23.6 0 45.6 6.1 65.3 18.1 23 14.1 34.6 32.3 34.6 54.2 0 11.5-2.7 22.2-7.9 31.8-3.3 6.2-8 12.4-14.1 18.3-3.6 3.6-5.3 5.4-6.1 6.4 1 1.1 3 3.1 7.2 7.2 6.9 6.6 12.5 13.4 16.5 20.1 5.8 10.1 8.8 21 8.8 32.4 0 26-10.9 46.5-32.4 60.9-18.7 12.7-42.5 19.1-70.5 19.1M260.2 132c-27.1 0-49.7 5.3-67.3 15.8-20.9 12.6-31.1 30.4-31.1 54.4 0 9.7 2.2 18.5 6.6 26 2.6 4.6 6.8 9.6 12.4 14.9 6.6 6.7 7.5 9.2 7.5 10.9 0 .7-.3 1.4-.8 1.9l-8.2 7.4C173 269 167.9 275 164.1 281c-5.4 8.5-8.1 17.4-8.1 26.5 0 28.2 10.4 49.7 31 63.8 18.2 12.7 43.2 19.2 74.5 19.2 27 0 49.8-6.1 67.8-18.2 20-13.5 30.1-32.6 30.1-56.8 0-10.5-2.7-20.6-8.1-29.9-3.8-6.4-9-12.8-15.6-19.1-9.2-9-9.2-9.2-9.2-10.5 0-1.4.6-2.8 8.1-10.3 5.7-5.6 10.2-11.3 13.2-17.1 4.9-8.8 7.3-18.7 7.3-29.4 0-20-10.8-36.8-32.2-49.9-18.9-11.5-40-17.3-62.7-17.3m-.2 222c-17.5 0-31.8-13.2-31.8-29.3 0-16.2 14.3-29.3 31.8-29.3s31.8 13.2 31.8 29.3c-.1 16.2-14.3 29.3-31.8 29.3m0-53.6c-14.8 0-26.8 10.9-26.8 24.3s12 24.3 26.8 24.3 26.8-10.9 26.8-24.3c-.1-13.4-12.1-24.3-26.8-24.3"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M218.8 182.4s46.3 15.2 86.1-6.3c0 0-2.2 35.4-26.4 48.5-19.1 10.3-41.3 4.3-52.7-13.9-4-6.4-6.2-13.7-6.6-21.2z"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M259 232.2c-13.9 0-27.2-7.1-35.4-20.1-4.1-6.5-6.5-14.3-7-22.4l-.4-7.1c0-.8.3-1.6 1-2.1s1.5-.7 2.3-.4c.5.1 45.8 14.6 84.1-6.1.8-.4 1.8-.4 2.5.1.8.5 1.2 1.4 1.1 2.3-.1 1.5-2.6 37-27.7 50.6-6.6 3.5-13.6 5.2-20.5 5.2m-37.5-46.4.2 3.5c.4 7.3 2.6 14.3 6.2 20.1 10.8 17.2 31.5 22.7 49.4 13.1 17.8-9.6 23.1-32.3 24.6-42-33.4 15.8-69.2 8.3-80.4 5.3"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M254.8 206.9c-1.3 0-2.5-1.1-2.5-2.4 0-1.4 1-2.5 2.4-2.6 32.8-.9 45.2-23 45.8-23.9.7-1.2 2.2-1.7 3.4-1s1.7 2.2 1 3.4c-.6 1-14.2 25.5-50.1 26.5M210 187.3h-.4c-1.4-.2-2.3-1.4-2.1-2.8.5-3.6 3.8-10.5 12.7-10.9 1.4-.1 2.6 1 2.6 2.4.1 1.4-1 2.6-2.4 2.6-6.8.3-7.9 6-8 6.6-.1 1.2-1.2 2.1-2.4 2.1m102.2-7.2c-1.2 0-2.2-.9-2.5-2.1-1.1-6.5-5.9-6.5-6.4-6.5-1.4.1-2.5-1-2.6-2.4s1-2.5 2.3-2.6c3.3-.2 10 1.8 11.6 10.6.2 1.4-.7 2.7-2 2.9-.1.1-.3.1-.4.1"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M140.7 397.7s10.4-4.9 13.2 5.2c0 0 5.6-11.8 13.2-2.8 4.1 4.9 0 15.5 6.3 11.1 0 0 2.8 10.8-12.2 15 0 0-17.7 18.6-27.3 2.6"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M144 436.9c-.5 0-.9 0-1.4-.1-4.1-.4-7.5-2.9-10.1-7.2-.4-.7-.2-1.6.5-2.1.7-.4 1.6-.2 2.1.5q3.15 5.25 7.8 5.7c8 .9 17.1-8.5 17.2-8.6.2-.2.4-.3.7-.4 9.7-2.7 11.2-8.2 11.3-11.2-.7.2-1.5.3-2.2-.1-1.7-.8-1.9-3-2.1-5.5-.2-2.3-.4-5.2-1.9-7-1.8-2.1-3.5-3-5.1-2.8-2.7.4-5 3.9-5.6 5.3-.3.6-.9.9-1.5.9-.6-.1-1.1-.5-1.3-1.1-.7-2.4-1.8-3.9-3.5-4.7-3.3-1.5-7.6.4-7.7.5-.8.3-1.6 0-2-.7-.3-.8 0-1.6.7-2 .2-.1 5.6-2.6 10.2-.5 1.7.8 3 2 3.9 3.7 1.4-1.8 3.5-4 6.3-4.3q4.05-.45 7.8 3.9c2.1 2.5 2.4 5.9 2.6 8.7.1 1 .2 2.4.4 2.9.2-.1.6-.3 1.3-.7.4-.3.9-.3 1.4-.2.5.2.8.6.9 1 0 .1 2.9 12.1-12.8 16.7-1.6 1.7-9.6 9.4-17.9 9.4"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M132.4 351.1c-7.4-17-24.7-25.8-38.5-19.7-13.3 5.9-22.5 24.2-16.1 40.6l3.8-.6s11.3 33.4 27.2 52.3c2.9 4 6.4 7.1 10.2 9.3 2.2 1.4 4.4 2.4 6.7 2.9 1 .2 1.9.4 2.8.4 3.8.5 7.7.1 11.2-1.5 12.5-5.5 5.4-5.7-1.3-21.1-2.2-5 2.9-15.2 0-19.2-5.7-7.8-3.4-18.3-2.8-23.4.7-6.4-.3-13.3-3.2-20"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M131.4 438c-1 0-2.1-.1-3.1-.2-.9 0-1.9-.2-3-.4-2.4-.5-4.8-1.6-7.2-3.1-4-2.3-7.7-5.7-10.6-9.7-14.3-17.1-24.8-45.3-27-51.5l-2.5.4c-.7.1-1.4-.3-1.6-.9-6.8-17.7 3.4-36.6 16.9-42.6 14.5-6.4 32.7 2.8 40.5 20.5 3 6.7 4.1 13.9 3.3 20.8-.1.6-.2 1.2-.3 1.9-.7 5.2-1.9 14 2.7 20.4 1.9 2.6 1.2 6.5.4 10.7-.6 3.3-1.2 6.7-.3 8.7 2 4.5 4 7.7 5.5 10.1 2 3.1 3.3 5.2 2.6 7.3-.7 2.2-3.2 3.7-7.6 5.6-2.7 1.3-5.6 2-8.7 2m-49.8-68.1c.6 0 1.2.4 1.4 1 .1.3 11.4 33.3 26.9 51.8 0 0 0 .1.1.1 2.7 3.7 6 6.8 9.7 8.9q3.3 2.1 6.3 2.7c.9.2 1.7.3 2.5.3h.2c3.7.5 7.2 0 10.4-1.4 2.6-1.1 5.6-2.6 5.9-3.7.3-.9-.9-2.6-2.3-4.9-1.5-2.4-3.7-5.8-5.7-10.5-1.2-2.8-.6-6.7.1-10.5.6-3.4 1.2-6.9.1-8.5-5.4-7.5-4.1-16.9-3.3-22.6.1-.7.2-1.3.2-1.9.8-6.3-.3-13-3-19.3-7.1-16.2-23.5-24.7-36.5-19-12 5.2-21.1 21.8-15.7 37.6l2.6-.4c-.1.3 0 .3.1.3"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M128.4 357.1c-7.4-17-24.7-25.8-38.5-19.7-13.3 5.9-18.6 23.5-12.2 39.9l-.1.1s11.3 33.4 27.2 52.3c2.9 4 6.4 7.1 10.2 9.3 2.2 1.4 4.4 2.4 6.7 2.9 1 .2 1.9.4 2.8.4 3.8.5 7.7.1 11.2-1.5 12.5-5.5 17.1-22.3 10.4-37.6-2.2-5-5.4-9.3-9.1-12.5-3.9-3.4-6-8.4-5.4-13.5.7-6.4-.3-13.4-3.2-20.1"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M127.4 444c-1 0-2.1-.1-3.1-.2-.9 0-1.9-.2-3-.4-2.4-.5-4.8-1.6-7.2-3.1-4-2.3-7.7-5.7-10.6-9.7-15.8-18.9-26.9-51.3-27.4-52.7-.1-.2-.1-.4-.1-.6-6.4-17.2-.6-35.2 13.2-41.3 14.5-6.4 32.7 2.8 40.5 20.5 3 6.7 4.1 13.9 3.3 20.8-.5 4.5 1.3 9.1 4.9 12.2 4 3.5 7.3 8 9.5 13.1 3.4 7.7 4.1 16.1 2.1 23.5-2.1 7.5-6.8 13.3-13.2 16.1-2.9 1.2-5.9 1.8-8.9 1.8m-48.2-66.6c1.5 4.3 12.3 34.1 26.7 51.3 0 0 0 .1.1.1 2.7 3.7 6 6.8 9.7 8.9q3.3 2.1 6.3 2.7c.9.2 1.7.3 2.5.3h.2c3.7.5 7.2 0 10.4-1.4 5.6-2.5 9.7-7.5 11.5-14.1 1.9-6.8 1.2-14.4-1.9-21.5-2-4.7-5.1-8.8-8.7-12-4.3-3.8-6.5-9.3-5.9-14.8.8-6.3-.3-13-3-19.3-7.1-16.2-23.5-24.7-36.5-19-12.5 5.5-17.6 22.2-11.4 38-.1.4 0 .6 0 .8m77.8 38.2c-.8 0-1.5-.6-1.5-1.4-.3-5.8-2.9-10.4-2.9-10.5-.4-.7-.2-1.6.6-2 .7-.4 1.6-.2 2 .6.1.2 3 5.3 3.3 11.8.1.7-.6 1.4-1.5 1.5.1 0 0 0 0 0"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M277.7 91.5c-9.4.2-17.3 9.1-20.8 21.6-4.1-12.4-12.4-20.8-21.8-20.6-13 .3-23.2 17.1-22.7 37.5s11.5 36.6 24.5 36.3c9.4-.2 17.3-9.1 20.8-21.6 4.1 12.4 12.4 20.8 21.8 20.6 13-.3 23.2-17.1 22.7-37.5s-11.4-36.6-24.5-36.3"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M236.6 168.8c-7 0-13.6-4.1-18.6-11.5-4.9-7.2-7.7-16.9-8-27.2-.5-21.7 10.7-39.7 25.1-40 8.7-.2 16.7 5.8 21.7 16 4.6-10.5 12.2-16.9 20.9-17.1 7.2-.2 14 3.9 19.1 11.5 4.9 7.2 7.7 16.9 8 27.2.5 21.7-10.7 39.7-25.1 40-8.7.2-16.7-5.8-21.7-16-4.6 10.5-12.2 16.9-20.9 17.1zM235.5 95h-.3c-11.6.3-20.7 15.9-20.2 34.9.2 9.4 2.8 18.1 7.1 24.6 4.1 6.1 9.4 9.4 14.8 9.3 7.9-.2 15.2-8 18.4-19.8.3-1.1 1.2-1.8 2.3-1.8s2.1.7 2.4 1.7c3.8 11.5 11.3 18.9 19.1 18.9h.3c11.6-.3 20.7-15.9 20.2-34.9-.2-9.4-2.8-18.1-7.1-24.6-4.1-6.1-9.4-9.4-14.8-9.3-7.9.2-15.2 8-18.4 19.8-.3 1.1-1.2 1.8-2.3 1.8-1.1.1-2.1-.7-2.4-1.7-3.8-11.5-11.3-18.9-19.1-18.9m42.2-3.5"
    />
    <ellipse
      transform="rotate(-1.41 235.42 129.13)"
      style={{
        fill: "#27aae1",
      }}
      cx={235.4}
      cy={129.1}
      rx={11.2}
      ry={16.6}
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M235.6 147.3c-3.4 0-6.6-1.9-9.1-5.3-2.4-3.3-3.7-7.8-3.8-12.5-.2-10 5.2-18.3 12.2-18.4 3.5 0 6.8 1.8 9.3 5.3 2.4 3.3 3.7 7.8 3.8 12.5s-1 9.2-3.2 12.7c-2.3 3.6-5.5 5.7-9 5.8 0-.1-.1-.1-.2-.1m-.4-33.3h-.2c-5.3.1-9.5 7-9.3 15.4.1 4.1 1.3 8 3.3 10.8 1.9 2.6 4.2 4 6.6 4h.2c2.5-.1 4.8-1.6 6.6-4.4 1.9-2.9 2.9-6.8 2.8-11-.1-4.1-1.3-8-3.3-10.8-1.9-2.6-4.3-4-6.7-4"
    />
    <ellipse
      transform="rotate(-1.41 235.27 129.137)"
      style={{
        fill: "#231f20",
      }}
      cx={235.3}
      cy={129.1}
      rx={6.7}
      ry={10}
    />
    <circle
      style={{
        fill: "#fff",
      }}
      cx={239.5}
      cy={120.9}
      r={2.7}
    />
    <ellipse
      transform="rotate(-1.41 278.038 128.082)"
      style={{
        fill: "#27aae1",
      }}
      cx={278}
      cy={128.1}
      rx={11.2}
      ry={16.6}
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M278.3 146.2c-6.9 0-12.7-7.9-12.9-17.8-.2-10 5.2-18.3 12.2-18.4h.2c6.9 0 12.7 7.9 12.9 17.8.1 4.7-1 9.2-3.2 12.7-2.3 3.6-5.5 5.7-9 5.8-.1-.1-.2-.1-.2-.1m-.5-33.2h-.2c-5.3.1-9.5 7-9.3 15.4.2 8.3 4.6 14.9 9.9 14.9h.2c2.5-.1 4.8-1.6 6.6-4.4 1.9-2.9 2.9-6.8 2.8-11-.3-8.3-4.7-14.9-10-14.9"
    />
    <ellipse
      transform="rotate(-1.41 277.887 128.088)"
      style={{
        fill: "#231f20",
      }}
      cx={277.9}
      cy={128.1}
      rx={6.7}
      ry={10}
    />
    <circle
      style={{
        fill: "#fff",
      }}
      cx={282.1}
      cy={119.8}
      r={2.7}
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M270.4 64.8s17.6 6.9 27.9 19.5c1.3 1.6-.4 3.8-2.3 3-5.7-2.3-14.5-5.7-21.9-7.6-3.9-1-6.2-4.9-5.3-8.8zm-25.2.6s-17.3 7.7-26.9 20.9c-1.2 1.6.6 3.7 2.4 2.9 5.6-2.6 14.2-6.4 21.5-8.7 3.8-1.2 6-5.2 4.8-9z"
    />
  </svg>
);
export default NumberEight;
