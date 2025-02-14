import * as React from "react";
import { SVGProps } from "react";

const ZeroNumber = (props: SVGProps<SVGSVGElement>) => (
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
      d="M383.7 223.9c0-39.6-11.7-74.1-34.8-102.5-11.1-13.7-23.5-24.2-37.1-31.7-1.8-6.1-4.5-11.6-7.9-16.2.8-.6 1.6-1.4 2.3-2.3 3.1-4.2 3-10-.3-14.1-12-14.9-31.9-22.7-32.7-23-2.5-1-5.4-.8-7.8.4s-4.2 3.5-4.9 6.1l-1.6 6.3c-1.5 5.8.3 11.6 4.1 15.7q-4.2 2.55-7.8 6.3c-1.7-1.7-3.5-3.1-5.4-4.4 4.7-4.3 6.9-11.1 4.9-17.5l-1.9-6.2c-.8-2.6-2.7-4.7-5.1-5.9a9.63 9.63 0 0 0-7.8 0c-.8.4-20.3 9.2-31.6 24.6-3 4.1-2.9 9.8.2 13.8-.8 1.1-1.7 2.3-2.4 3.6-2.7 4.4-4.7 9.5-6.1 14.9-12.1 7.3-23.2 17.1-33.2 29.5-23.1 28.3-34.8 62.8-34.8 102.6q0 18.15 3.3 34.8c-3.7 10.3-6.4 23.6-3.6 37.2 3 14.8 11.8 26.9 26 35.9 7 4.4 14.8 7.8 23.3 10.2 12.3 11.5 25.9 19.7 40.9 24.7l-.7 11.3c-4.6 1-8.9 2.8-12.1 5.7-3.5 3.1-5.2 7.5-4.8 11.9.1 1.6.6 3.1 1.2 4.6-8.1 4.6-21.6 13.5-30.3 24.8-.1.1-.2.2-.2.3l-.9 1.2c-.4.5-.7 1.1-1.1 1.6 0 0 0 .1-.1.1-2.6 3.9-4.3 7.8-5.2 11.7 0 .1 0 .1-.1.2 0 .2-.1.4-.1.5-.1.4-.2.7-.2 1.1 0 .2-.1.4-.1.6s-.1.5-.1.7-.1.4-.1.6v.5c0 .4-.1.8-.1 1.1v2.8c.1 1.8.4 3.9 1.1 6.1.1.3.2.5.3.8v.1c.4 1.3 1 2.6 1.7 4l.3.6c0 .1.1.1.1.2 1.3 2.2 2.9 4.5 5.2 6.7 6.5 6.1 15.7 9.3 27.2 9.3 1.2 0 2.5 0 3.8-.1h.2c24.8-.9 41.7-20.4 49.4-38.7 7.7 18.3 24.5 37.8 49.4 38.7h.2c1.3.1 2.6.1 3.8.1 11.6 0 20.7-3.1 27.2-9.3 2.1-2 3.7-4.1 4.9-6.1 3.4-5.5 3.9-10.8 3.9-12.9v-2.2c0-.5 0-.9-.1-1.4v-.2c0-.2 0-.4-.1-.6 0-.3-.1-.5-.1-.8 0-.2 0-.3-.1-.5-.1-.4-.1-.7-.2-1.1 0-.1 0-.2-.1-.3 0-.1 0-.2-.1-.3 0-.1 0-.1-.1-.2-.9-3.9-2.6-7.8-5.2-11.6-.1-.1-.1-.2-.2-.3-.3-.5-.6-.9-.9-1.4-.4-.5-.7-1-1.1-1.5 0 0 0-.1-.1-.1-8.7-11.4-22.3-20.3-30.3-24.9.7-1.5 1.1-3 1.2-4.6.4-4.5-1.3-8.8-4.8-11.9-3.3-2.9-7.6-4.7-12.4-5.7l-.8-10.2c14-4.2 27-11.1 38.8-20.9 5.2-1.3 10.2-3.1 14.9-5.3 17.3-8 28.3-19.8 32.8-35.2 2.9-10 2.9-21.3-.1-33 4.9-15.4 7.2-31.9 7.2-49.4"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M217.5 406.1s-1.6-3.6 2.1-6.1c0 0-7.2-4.4-3.1-8.1 7.3-6.6 33.7-4.1 35.4 1.4 1 3.5-3.6 5.7-3.6 5.7s1.9 6.8.5 8.8c-1.5 2.1-23.5 10.8-31.3-1.7"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M231.4 414.2h-.4c-6.8-.1-11.9-2.6-14.8-7.3 0-.1-.1-.1-.1-.2-.6-1.4-.9-4.2 1.1-6.5-1.4-1.2-3.3-3.1-3.5-5.3-.1-1 .1-2.6 1.7-4 5.9-5.3 21.8-5.1 30.6-2.7q6.3 1.8 7.2 4.8c.9 3.1-1.3 5.6-3.3 6.9.6 2.4 1.4 6.9 0 8.9-1.2 1.7-10 5.4-18.5 5.4m-12.6-8.8c2.1 3.3 5.6 5.2 10.3 5.7 8.3.8 17.3-3 18.4-4.2.5-.8 0-4.7-.8-7.5-.2-.7.1-1.4.8-1.8 0 0 3.5-1.8 2.9-3.9-.2-.5-1.4-1.7-5.1-2.7-8.8-2.5-23.2-2.1-27.8 2-.7.7-.8 1.2-.8 1.5.1 1.5 2.3 3.4 3.7 4.2.4.3.7.7.7 1.3 0 .5-.2 1-.7 1.3-2.3 1.5-1.8 3.6-1.6 4.1"
    />
    <path
      style={{
        fill: "#f15a29",
      }}
      d="M215.9 407.1s-39.2 19.9-38 40.2c0 0-.5 18.2 28.3 17.5s44-34.5 44-48.4c0-10.8-1.6-12.7-1.6-12.7s-5.4 5.5-13.4 6.1c-2.1.1-4.2-.3-6.1-1.1-3.1-1.2-9.2-3.3-13.2-1.6"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M204.6 466.4c-10.4 0-18.1-2.5-23-7.4-5-5-5.2-10.8-5.1-11.6-1.2-21 37.2-40.8 38.8-41.6h.1c4.5-2 10.9.2 14.4 1.7 1.8.8 3.7 1.1 5.4 1 7.3-.5 12.4-5.6 12.5-5.6.3-.3.7-.5 1.1-.4.4 0 .8.2 1.1.5.4.5 1.9 3.1 1.9 13.6 0 14.6-15.5 49.1-45.5 49.9-.6-.1-1.2-.1-1.7-.1m12-57.9c-1.4.7-38.2 20-37.1 38.8v.1c0 .2-.1 5.2 4.3 9.5 4.5 4.5 12.1 6.7 22.4 6.4 27.7-.7 42.6-33.6 42.6-46.9 0-5.4-.4-8.5-.7-10.1-2.3 1.8-6.8 4.6-12.6 5-2.2.1-4.5-.3-6.8-1.2-5.3-2.1-9.6-2.7-12.1-1.6"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M226.1 446.7c-4-22.7-30.2-23.4-34-23.4-7.9 7-14.7 15.5-14.2 24.1 0 0-.1 3.4 2.1 7.1 11.9 7 50.1 14.3 46.1-7.8"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M208.7 463c-10.8 0-23.4-3.7-29.5-7.2-.2-.1-.4-.3-.5-.5-2.2-3.8-2.3-7.3-2.3-7.9-.4-7.8 4.5-16.3 14.7-25.3.3-.3.6-.4 1-.4 3.5 0 31.2.8 35.5 24.6 1.3 7.3-1.8 11.2-4.7 13.2-3.5 2.5-8.6 3.5-14.2 3.5m-27.6-9.6c9 5.1 31.1 9.9 40.1 3.7 3.1-2.2 4.3-5.5 3.4-10.2-3.6-20.4-26.1-22.1-32-22.2-9.2 8.2-13.6 15.8-13.2 22.5v.1c0 .1 0 2.9 1.7 6.1"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M250.2 416.5v-.4c-11.1 31-39.9 39.7-55 38.5-13.2-1.1-17.2-8.5-16.9-11.9-.3 1.5-.5 3.1-.4 4.7 0 0 0 19.1 28.3 17.5 28.7-1.6 44-34.5 44-48.4"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M203 466.5c-9.1 0-16-2.2-20.7-6.7-5.8-5.4-5.8-12.2-5.8-12.4-.1-1.6.1-3.3.4-5 .2-.8.9-1.3 1.7-1.2s1.3.8 1.3 1.6c-.2 2.8 3.5 9.4 15.6 10.3 15 1.2 42.8-7.9 53.4-37.5.2-.7.9-1.1 1.7-1 .7.1 1.2.7 1.2 1.5v.4c0 14.2-15.5 48.2-45.4 49.9-1.2 0-2.3.1-3.4.1m-23.2-16.9c.5 2.1 1.7 5.3 4.6 8 4.6 4.3 11.9 6.3 21.7 5.7 21.4-1.2 35.2-20.9 40.4-35.7-13.4 22.5-37.4 29.6-51.3 28.5-7.9-.6-12.7-3.4-15.4-6.5m54.4-46.2c-7.8 0-14.6-1.8-15.1-1.9-.8-.2-1.3-1-1.1-1.8s1-1.3 1.8-1.1c.2 0 17.4 4.6 27.5-.9.7-.4 1.6-.1 2 .6s.1 1.6-.6 2c-4.2 2.4-9.5 3.1-14.5 3.1m-1.2-6.2c-2.5 0-10.5-.3-10.5-3.8 0-.8.7-1.5 1.5-1.5.7 0 1.3.5 1.4 1.1.7.5 3.3 1.2 7.6 1.2s6.9-.7 7.6-1.2c.2-.6.8-1.1 1.4-1.1.8 0 1.5.7 1.5 1.5 0 3.5-8 3.8-10.5 3.8"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="m233.5 331.3-3.8 64c2.7.2 6.5.4 9.4-.3l3.8-63.6s-.3.3-.3.2z"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M295.3 406.1s1.6-3.6-2.1-6.1c0 0 7.2-4.4 3.1-8.1-7.3-6.6-33.7-4.1-35.4 1.4-1 3.5 3.6 5.7 3.6 5.7s-1.9 6.8-.5 8.8c1.5 2.1 23.5 10.8 31.3-1.7"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M281.4 414.2c-8.4 0-17.2-3.6-18.5-5.5-1.4-2.1-.6-6.5 0-8.9-2-1.3-4.3-3.8-3.3-6.9q.9-3 7.2-4.8c8.8-2.5 24.7-2.6 30.6 2.7 1.6 1.5 1.8 3 1.7 4-.2 2.2-2.1 4.2-3.5 5.3 2 2.3 1.7 5.2 1.1 6.5 0 .1-.1.1-.1.2-2.9 4.7-8 7.2-14.8 7.3-.1.1-.3.1-.4.1m-1.2-24.8c-4.4 0-9 .5-12.6 1.5-3.7 1-5 2.2-5.1 2.7-.6 2.2 2.8 3.9 2.9 3.9.7.3 1 1.1.8 1.8-.8 2.9-1.3 6.7-.7 7.6 1 1.1 10.1 4.9 18.3 4.1 4.7-.5 8.2-2.4 10.3-5.7.2-.5.7-2.6-1.6-4.1-.4-.3-.7-.8-.7-1.3s.3-1 .7-1.3c1.3-.8 3.5-2.7 3.7-4.2 0-.3 0-.9-.8-1.5-2.7-2.4-8.9-3.5-15.2-3.5m15.1 16.7"
    />
    <path
      style={{
        fill: "#f15a29",
      }}
      d="M296.9 407.1s39.2 19.9 38 40.2c0 0 .5 18.2-28.3 17.5s-44-34.5-44-48.4c0-10.8 1.6-12.7 1.6-12.7s5.4 5.5 13.4 6.1c2.1.1 4.2-.3 6.1-1.1 3.1-1.2 9.2-3.3 13.2-1.6"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M308.2 466.4h-1.6c-30-.7-45.5-35.3-45.5-49.9 0-10.5 1.5-13.1 1.9-13.6.3-.3.7-.5 1.1-.5s.8.1 1.1.5c0 0 5.1 5.1 12.5 5.6 1.8.1 3.6-.2 5.4-1 3.5-1.5 9.9-3.6 14.4-1.7h.1c1.6.8 40 20.6 38.8 41.6 0 .8-.1 6.6-5.1 11.6-5 4.9-12.7 7.4-23.1 7.4m-43.4-60c-.4 1.6-.7 4.7-.7 10.1 0 13.3 14.9 46.2 42.6 46.9 10.3.3 17.9-1.9 22.4-6.4 4.4-4.4 4.3-9.3 4.3-9.5v-.1c1.1-18.8-35.7-38-37.1-38.8-2.5-1.1-6.9-.5-12 1.7-2.3 1-4.6 1.4-6.8 1.2-5.9-.5-10.3-3.3-12.7-5.1"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M286.7 446.7c4-22.7 30.2-23.4 34-23.4 7.9 7 14.7 15.5 14.2 24.1 0 0 .1 3.4-2.1 7.1-11.9 7-50.1 14.3-46.1-7.8"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M304.1 463c-5.6 0-10.7-1-14.2-3.4-2.8-2-6-5.9-4.7-13.2 4.2-23.9 32-24.6 35.5-24.6.4 0 .8.1 1 .4 10.2 8.9 15.1 17.4 14.7 25.3 0 .6-.1 4-2.3 7.9-.1.2-.3.4-.5.5-6.1 3.4-18.7 7.1-29.5 7.1m-16-16.1c-.8 4.7.3 8 3.4 10.2 9 6.2 31.1 1.4 40.1-3.7 1.7-3.2 1.7-6 1.7-6v-.1q.6-10.2-13.2-22.5c-5.8 0-28.3 1.7-32 22.1"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M262.6 416.5v-.4c11.1 31 39.9 39.7 55 38.5 13.2-1.1 17.2-8.5 16.9-11.9.3 1.5.5 3.1.4 4.7 0 0 0 19.1-28.3 17.5-28.7-1.6-44-34.5-44-48.4"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M309.8 466.5c-1.1 0-2.2 0-3.3-.1-30-1.7-45.4-35.7-45.4-49.9v-.4c0-.7.5-1.3 1.2-1.5.7-.1 1.4.3 1.7 1 10.6 29.6 38.4 38.8 53.4 37.5 12.1-1 15.7-7.5 15.6-10.3-.1-.8.5-1.5 1.3-1.6s1.5.4 1.7 1.2c.4 1.7.5 3.4.4 5.1 0 .2-.1 6.9-5.8 12.3-4.7 4.4-11.7 6.7-20.8 6.7m-43.5-38.9c5.1 14.8 18.9 34.5 40.4 35.7 9.8.6 17.1-1.4 21.7-5.7 2.9-2.7 4.1-5.9 4.6-8-2.7 3.1-7.5 5.9-15.4 6.5-13.8 1.2-37.9-6-51.3-28.5m12.3-24.2c-5 0-10.3-.7-14.6-3.1-.7-.4-1-1.3-.6-2s1.3-1 2-.6c10.1 5.5 27.3 1 27.5.9.8-.2 1.6.3 1.8 1.1s-.3 1.6-1.1 1.8c-.4.1-7.2 1.9-15 1.9m1.2-6.2c-2.5 0-10.5-.3-10.5-3.8 0-.8.7-1.5 1.5-1.5.7 0 1.3.5 1.4 1.1.7.5 3.3 1.2 7.6 1.2s6.9-.7 7.6-1.2c.2-.6.8-1.1 1.4-1.1.8 0 1.5.7 1.5 1.5.1 3.5-8 3.8-10.5 3.8m-7.5-3.8"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="m278.4 331.3 4.7 64c-2.7.2-6.5.4-9.4-.3l-4.7-63.6v-.1z"
    />
    <path
      style={{
        fill: "#f15a29",
      }}
      d="M371.7 223.9c0 37-10.6 68.7-31.9 95.2-22 27.5-49.3 41.3-81.9 41.3s-59.8-13.8-81.7-41.3c-21.4-26.5-32.1-58.2-32.1-95.2 0-37.1 10.7-68.8 32.1-95 21.9-27.1 49.1-40.6 81.7-40.6s59.8 13.5 81.7 40.6c21.4 26.4 32.1 58.1 32.1 95m-70.8 0c0-14.8-3.8-27.6-11.5-38.5-8.1-11.6-18.7-17.4-31.5-17.4-13.1 0-23.7 5.7-31.7 17.2-7.5 10.6-11.3 23.5-11.3 38.7 0 14.9 3.8 27.9 11.3 38.9 8.1 11.9 18.7 16.9 31.7 16.9 12.5 0 22.9-5.2 31.3-17.4q11.7-16.65 11.7-38.4"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M257.9 362.9c-33.2 0-61.4-14.2-83.7-42.2-21.6-26.8-32.6-59.4-32.6-96.8 0-37.5 11-70 32.6-96.6 22.3-27.6 50.4-41.5 83.7-41.5 33.2 0 61.4 14 83.7 41.5 21.7 26.7 32.6 59.2 32.6 96.6s-10.9 69.9-32.4 96.8c-22.5 28-50.7 42.2-83.9 42.2m0-272.1c-31.7 0-58.5 13.4-79.8 39.7-20.9 25.6-31.5 57.1-31.5 93.4 0 36.2 10.6 67.7 31.5 93.6 21.3 26.8 48.2 40.3 79.8 40.3s58.6-13.6 80-40.3c20.8-25.9 31.3-57.4 31.3-93.6s-10.6-67.6-31.5-93.4c-21.3-26.3-48.2-39.7-79.8-39.7m0 191.4c-14.4 0-25.5-5.9-33.8-18-7.8-11.4-11.7-25-11.7-40.3 0-15.6 3.9-29.1 11.7-40.1 8.5-12.1 19.8-18.2 33.7-18.2 13.7 0 25 6.2 33.6 18.5 7.9 11.3 11.9 24.7 11.9 39.9 0 14.9-4.1 28.3-12.1 39.9-8.5 12.3-19.4 18.3-33.3 18.3m0-111.7c-12.4 0-22.1 5.3-29.7 16.1-7.2 10.1-10.8 22.7-10.8 37.2 0 14.3 3.6 26.9 10.8 37.5 7.4 10.8 16.8 15.8 29.6 15.8 12.1 0 21.7-5.3 29.3-16.3 7.4-10.7 11.2-23.2 11.2-37 0-14.2-3.7-26.6-11-37-7.7-10.9-17.3-16.3-29.4-16.3"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M277.4 70.5c-9.7.2-17.9 9.3-21.5 22.3-4.2-12.8-12.8-21.5-22.5-21.2-13.4.3-23.9 17.6-23.4 38.7.5 21 11.8 37.8 25.3 37.5 9.7-.2 17.9-9.3 21.5-22.3 4.2 12.8 12.8 21.5 22.5 21.2 13.4-.3 23.9-17.6 23.4-38.7s-11.9-37.8-25.3-37.5"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M234.9 150.2c-7.2 0-14-4.2-19.2-11.8-5-7.5-8-17.4-8.2-28.1-.3-10.6 2.2-20.7 6.8-28.4 4.9-8.1 11.6-12.6 19-12.8 9-.2 17.2 6 22.4 16.7 4.7-10.9 12.6-17.5 21.6-17.7h.4c14.6 0 26.8 17.8 27.4 39.9.6 22.4-11 40.9-25.8 41.2-9 .3-17.2-6-22.4-16.7-4.7 10.9-12.6 17.5-21.6 17.7zm-1.1-76.1h-.3c-5.6.1-10.9 3.8-14.9 10.4-4.2 6.9-6.3 16-6.1 25.7s2.9 18.7 7.4 25.4c4.3 6.3 9.7 9.8 15.3 9.6 8.2-.2 15.7-8.2 19.1-20.5.3-1.1 1.2-1.8 2.3-1.8 1.1-.1 2.1.7 2.4 1.7 3.9 11.9 11.7 19.5 19.8 19.5h.3c12-.3 21.4-16.5 21-36.1-.5-19.6-10.7-35.3-22.7-35-8.2.2-15.7 8.2-19.1 20.5-.3 1.1-1.2 1.8-2.3 1.8s-2.1-.7-2.4-1.7c-4-11.9-11.7-19.5-19.8-19.5"
    />
    <ellipse
      transform="rotate(-1.41 233.72 109.348)"
      style={{
        fill: "#27aae1",
      }}
      cx={233.7}
      cy={109.3}
      rx={11.5}
      ry={17.2}
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M233.9 128c-3.5 0-6.8-1.9-9.3-5.5-2.4-3.4-3.8-8-4-12.9-.3-10.3 5.4-18.8 12.6-19h.2c7.1 0 13 8.2 13.3 18.3.1 4.9-1.1 9.5-3.3 13.1-2.4 3.7-5.7 5.8-9.3 5.9 0 .1-.1.1-.2.1m-.4-34.3h-.2c-5.5.1-9.9 7.3-9.7 15.9.1 4.3 1.3 8.3 3.4 11.2 2 2.8 4.5 4.3 7 4.2 2.6-.1 5-1.7 6.8-4.5 1.9-3 3-7.1 2.8-11.4 0-8.5-4.6-15.4-10.1-15.4"
    />
    <ellipse
      transform="rotate(-1.41 233.566 109.355)"
      style={{
        fill: "#231f20",
      }}
      cx={233.6}
      cy={109.4}
      rx={6.9}
      ry={10.3}
    />
    <circle
      style={{
        fill: "#fff",
      }}
      cx={237.9}
      cy={100.8}
      r={2.8}
    />
    <ellipse
      transform="rotate(-1.41 277.712 108.268)"
      style={{
        fill: "#27aae1",
      }}
      cx={277.7}
      cy={108.3}
      rx={11.5}
      ry={17.2}
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M277.9 126.9c-7.1 0-13-8.2-13.3-18.3-.3-10.3 5.4-18.8 12.6-19 3.6-.1 7 1.8 9.5 5.5 2.4 3.4 3.8 8 4 12.9.3 10.3-5.4 18.8-12.6 19 0-.1-.1-.1-.2-.1m-.4-34.3h-.2c-5.5.1-9.9 7.3-9.7 15.9s4.8 15.4 10.3 15.4h.2c5.5-.1 9.9-7.3 9.7-15.9-.1-4.3-1.3-8.3-3.4-11.2-2-2.7-4.4-4.2-6.9-4.2"
    />
    <ellipse
      transform="rotate(-1.41 277.554 108.27)"
      style={{
        fill: "#231f20",
      }}
      cx={277.6}
      cy={108.3}
      rx={6.9}
      ry={10.3}
    />
    <circle
      style={{
        fill: "#fff",
      }}
      cx={281.9}
      cy={99.7}
      r={2.8}
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M269.8 42.9S288 50 298.6 63c1.3 1.6-.4 3.9-2.3 3.1-5.9-2.4-15-5.9-22.6-7.9-4-1-6.4-5.1-5.4-9.1zm-25.9.7s-17.8 8-27.8 21.5c-1.2 1.7.6 3.9 2.5 3 5.8-2.7 14.7-6.6 22.2-9 3.9-1.2 6.2-5.4 5-9.3z"
    />
    <path
      style={{
        fill: "#f15a29",
      }}
      d="M308.8 181.5c0 17.4-23.5 31.5-52.4 31.5S204 198.9 204 181.5"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M256.4 215.5c-30.3 0-54.9-15.3-54.9-34 0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 16 22.4 29 49.9 29s49.9-13 49.9-29c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 18.8-24.6 34-54.9 34"
    />
    <ellipse
      style={{
        fill: "#f15a29",
      }}
      cx={258.4}
      cy={177.6}
      rx={40.1}
      ry={16.1}
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M197.1 182.7c-.3 0-.6 0-.8-.2-1.3-.5-2-1.9-1.5-3.2 1.1-3.2 5.5-8.4 14.4-5.7 1.3.4 2.1 1.8 1.7 3.1s-1.8 2.1-3.1 1.7c-6.2-1.9-7.9 1.8-8.2 2.6-.5 1-1.4 1.7-2.5 1.7m118.3-.1c-1 0-2-.6-2.4-1.6-.3-.8-2.1-4.5-8.2-2.6-1.3.4-2.7-.3-3.1-1.7-.4-1.3.3-2.7 1.7-3.1 8.9-2.7 13.3 2.5 14.4 5.7.5 1.3-.2 2.7-1.5 3.2-.4.1-.6.1-.9.1m-23.3 132c-.9-2.1-3.3-3-5.3-2.1-.8.3-75.8 32.4-119.7 4.5-10-6.4-16.1-14.6-18.2-24.6-1.6-7.6-.6-15.3 1.2-22.1-1.4-5.1-2.5-10.3-3.4-14.6-4.3 9.5-8.8 23.8-5.8 38.3 2.5 12.2 9.8 22.2 21.8 29.8 14.9 9.5 32.7 12.8 50.1 12.8 38.2 0 74.9-15.7 77.1-16.7 2.2-.8 3.1-3.2 2.2-5.3"
    />
    <ellipse
      transform="rotate(-17.83 273.957 320.68)"
      style={{
        fill: "#fff",
      }}
      cx={273.9}
      cy={320.6}
      rx={9.5}
      ry={17.1}
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M277.5 338.7c-2.4 0-4.9-1.2-7.2-3.4-2.9-2.7-5.3-6.7-6.7-11.3-3.2-9.9-1.1-19.2 4.7-21 2.9-.9 6.3.1 9.4 3 2.9 2.7 5.3 6.7 6.7 11.3 1.5 4.6 1.9 9.2 1.1 13.1-.8 4.2-2.9 7-5.9 7.9-.7.3-1.4.4-2.1.4m-7.1-33.1c-.4 0-.8.1-1.2.2-4.1 1.3-5.4 9.2-2.8 17.3 1.3 4.1 3.4 7.7 5.9 10 2.3 2.1 4.6 3 6.4 2.4 1.9-.6 3.2-2.6 3.8-5.7.7-3.4.3-7.5-1-11.6s-3.4-7.7-5.9-10c-1.8-1.7-3.6-2.6-5.2-2.6"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M276.2 324.5c2.5 4.8 7.7 7.5 13.1 7.3 11.5-.5 33.2-1.8 37-4.9 5.3-4.4 2-12.7 2-12.7s2.5-8.6 1-12.5c-1.4-3.8-5.6-7.2-5.6-7.2s4.7-4.4 2.7-9.4c-.8-2-2.3-4.8-4.4-5.5-3.1-1-7.4-.1-10.6.9l-7.1 2.5s-3.1-3.5-11.9-2.7c-8.9.7-22 23.4-20.1 31.7 0 0 .5 6.1 3.9 12.5"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M288.7 333.3c-5.8 0-11.2-3.1-13.8-8.1-3.3-6.2-4-12.1-4.1-13-1.2-5.8 3.6-16.5 8.8-23.6 2.6-3.5 7.6-9.4 12.6-9.8 7.1-.6 10.9 1.4 12.4 2.5l6.3-2.2c5-1.5 8.8-1.8 11.5-.9 2.6.9 4.3 3.9 5.3 6.3 1.8 4.3-.5 8-1.9 9.9 1.4 1.4 3.8 4 4.9 6.8 1.5 3.9-.3 11-.8 13 .7 2 2.7 9.5-2.6 13.9-3.2 2.6-15.9 4.4-37.9 5.3-.2-.1-.4-.1-.7-.1m-11.1-9.5c2.2 4.2 6.8 6.7 11.7 6.5 20.1-.8 33.6-2.5 36.2-4.6 4.4-3.6 1.6-10.9 1.6-11-.1-.3-.1-.7 0-1 .7-2.2 2.1-8.7 1-11.6-1.3-3.4-5.1-6.5-5.2-6.6-.3-.3-.5-.7-.6-1.1 0-.4.2-.9.5-1.1 0 0 3.9-3.8 2.3-7.7-1-2.5-2.3-4.2-3.5-4.6-1.5-.5-4.3-.7-9.6.9l-7.1 2.5c-.6.2-1.2 0-1.6-.4 0 0-2.9-2.9-10.7-2.2-2.8.2-6.7 3.5-10.5 8.6-5.5 7.6-9.2 17.1-8.3 21.3v.2s.6 5.9 3.8 11.9"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M292.2 290.7c-.5 0-1.1-.3-1.3-.8-.4-.7-.1-1.6.6-2l12.2-6.3c.7-.4 1.6-.1 2 .6s.1 1.6-.6 2l-12.2 6.3c-.3.2-.5.2-.7.2m27.1 5.7c-.8 0-1.4-.6-1.5-1.4s.5-1.6 1.4-1.6l4.4-.4c.8-.1 1.6.5 1.6 1.4.1.8-.5 1.6-1.4 1.6l-4.4.4z"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M365.9 269.6c-1 3.9-2.5 8.9-4.8 14.3.8 5.6.8 11.7-.9 17.5-3 10.3-10.9 18.4-23.3 24.2-10.8 5-22.8 7-34.9 7-46.3 0-95.3-29-95.9-29.3-1.9-1.2-4.4-.5-5.6 1.4s-.5 4.4 1.4 5.6c.8.5 20.6 12.3 47.6 21.1 18.9 6.2 36.5 9.3 52.3 9.3 14.4 0 27.3-2.6 38.5-7.7 14.7-6.8 24-16.6 27.7-29.3 3.6-12.2 1.1-24.7-2.1-34.1"
    />
    <ellipse
      transform="rotate(-72.17 243.851 325.898)"
      style={{
        fill: "#fff",
      }}
      cx={243.9}
      cy={325.9}
      rx={17.1}
      ry={9.5}
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M240.3 343.9q-1.05 0-2.1-.3c-5.9-1.9-7.9-11.1-4.7-21s10.3-16.2 16.1-14.3c5.9 1.9 7.9 11.1 4.7 21-2.8 8.7-8.6 14.6-14 14.6m7.1-33c-3.9 0-8.8 5.3-11.1 12.6-2.6 8-1.3 15.9 2.8 17.3 4.1 1.3 9.8-4.4 12.4-12.4s1.3-15.9-2.8-17.3c-.5-.1-.9-.2-1.3-.2M234.9 323"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M241.5 329.8c-2.5 4.8-7.7 7.5-13.1 7.3-11.5-.5-33.2-1.8-37-4.9-5.3-4.4-2-12.7-2-12.7s-2.5-8.6-1-12.5c1.4-3.8 5.6-7.2 5.6-7.2s-4.7-4.4-2.7-9.4c.8-2 2.3-4.8 4.4-5.5 3.1-1 7.4-.1 10.6.9l7.1 2.5s3.1-3.5 11.9-2.7c8.9.7 22 23.4 20.1 31.7 0-.1-.5 6.1-3.9 12.5"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M229 338.6h-.6c-22-.9-34.8-2.7-37.9-5.3-5.4-4.4-3.3-11.9-2.6-13.9-.6-2-2.3-9.1-.8-13 1.1-2.8 3.5-5.4 4.9-6.8-1.5-1.9-3.7-5.6-1.9-9.9 1-2.4 2.7-5.5 5.3-6.3 2.7-.9 6.6-.6 11.5.9l6.4 2.2c1.5-1.1 5.3-3.1 12.4-2.5 5 .4 10.1 6.3 12.6 9.8 5.2 7.1 10 17.8 8.8 23.6-.1.9-.8 6.8-4.1 13-2.8 5.1-8.2 8.2-14 8.2m-30.1-52.7c-1.2 0-2 .2-2.6.4-1.1.4-2.4 2.1-3.5 4.6-1.7 4 2.3 7.7 2.3 7.7.3.3.5.7.5 1.1s-.2.8-.5 1.1c0 0-3.9 3.2-5.2 6.6-1.1 2.9.4 9.3 1 11.6.1.3.1.7 0 1 0 .1-2.8 7.4 1.6 11 2.5 2.1 16 3.8 36.2 4.6 4.9.2 9.5-2.4 11.7-6.5 3.2-6 3.7-11.9 3.7-11.9v-.2c1-4.2-2.8-13.7-8.3-21.3-3.8-5.2-7.7-8.4-10.5-8.6-7.8-.7-10.7 2.2-10.7 2.2-.4.4-1 .6-1.6.4l-7.1-2.5c-3.2-1-5.4-1.3-7-1.3m42.6 43.9"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M225.6 296c-.2 0-.5-.1-.7-.2l-12.2-6.3c-.7-.4-1-1.3-.6-2s1.3-1 2-.6l12.2 6.3c.7.4 1 1.3.6 2-.2.5-.7.8-1.3.8m-27.2 5.6h-.1l-4.4-.4c-.8-.1-1.4-.8-1.4-1.6s.8-1.4 1.6-1.4l4.4.4c.8.1 1.4.8 1.4 1.6s-.7 1.4-1.5 1.4m17.3-72.2s40.4 26.6 84.4-1c0 0 .5 17.9-13.3 36.8 0 0-26.6-10.7-58.3-2 0 0-11.8-6.2-12.8-33.8"
    />
  </svg>
);
export default ZeroNumber;
