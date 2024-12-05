import * as React from "react";
import { SVGProps } from "react";

const NumberFour = (props: SVGProps<SVGSVGElement>) => (
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
      d="M444.1 298.2c-.6-4.3-3.2-8.1-7.2-10.6-1.6-1-3.4-1.8-5.3-2.3 2.5-4.5 4.2-10.2 0-17.1-.1-.1-.1-.2-.2-.3-4.8-7.2-11.6-7.6-17.4-6.3.2-2.2.1-4.6-.7-7q-1.35-4.05-4.8-6.9-1.2-1.5-3-2.4c-7.7-4.3-17.7.5-24.2 7.2l-10 9.9c-.6-1.2-1.3-2.4-2.2-3.4.2-2 0-3.6-.1-4.6-.6-3.3-1.8-7.7-3.7-13.8-1.9-6.3-2.7-9.6-3.1-11.3-.3-1.7-.9-5.2-1.7-11.7-.7-5.9-1.3-10.3-1.9-13.3-1.2-6.1-4.6-9.4-7.3-11-2.5-1.5-6.6-3.1-12.5-2-4.3.8-10.2 2.4-17.5 4.7-1.3.4-2.6.8-3.7 1.1L304 127.6c-.6-3.1-1.5-9.5-2-21.7-.5-11.2-1.3-19.4-2.4-25.1-1.4-7.3-5.3-11.3-8.4-13.3-3-2-8.1-4-15.4-2.6-4.6.9-15.6 1.9-41.9 1.2-6.2-.1-11.4-.2-15.8-.3-2.4-2.2-5-4.1-7.6-5.7.5-.9.9-1.9 1.1-2.9 1.2-5.1-1.1-10.4-5.8-12.8-16.8-8.9-38.1-8.4-39-8.3-2.7.1-5.3 1.3-7 3.4s-2.5 4.8-2.1 7.5l1 6.4c.9 5.8 4.8 10.5 9.8 12.8-1.9 2.6-3.4 5.5-4.6 8.7-2.2-.9-4.4-1.5-6.6-1.9 2.6-5.8 2-12.8-2.4-18l-4.1-4.9c-1.8-2.1-4.3-3.3-7-3.4s-5.3 1-7.2 3c-.6.7-15 16.3-19.3 34.8-1.2 5 1.1 10.1 5.6 12.6-.3 1.4-.6 2.8-.8 4.2-1.5 10.7.5 22.7 5.6 34 2.8 6.2 6.4 11.7 10.5 16.4-11.1 21.2-15.8 29.6-17.6 32.6-8.6 13.9-23.3 33.4-43.7 57.9-6.9 8.3-9.5 16.1-8 23.8.8 4.3 2.2 10.6 3.9 18.8 1.8 8.3 3.1 14.3 3.8 18.3 1.6 8.2 6.8 14.3 14.6 17.2 5.9 2.2 13.2 2.3 22.3.6 2.4-.5 5.2-1 8.2-1.6 1.3 1.4 2.8 3.1 4.5 4.8 9.1 9.2 20.6 14.3 32.1 14.3 2.2 0 4.3-.2 6.4-.5 0 0 .1 0 .1.1 3.6 2.4 7.8 3.7 12.2 3.7 6.8 0 13.7-3 19.1-8.1 1.4-.4 2.9-.8 4.3-1.3 4.1-1.5 7.7-3.7 10.9-6.2 0 .3.1.6.1.8.6 3 3.1 10 13.1 12.4l-1.5 25.1c-5.4 1.1-10.4 3-14.1 6.3-3.6 3.3-5.4 7.8-5 12.3.2 2.1.9 4.1 1.9 6.1-9.9 5.6-28.9 17.7-38.6 33.2 0 0 0 .1-.1.1-.4.6-.7 1.2-1.1 1.8-.2.3-.3.6-.5.9l-.6 1.2c-.2.4-.4.9-.6 1.3-.1.3-.3.6-.4.9-.1.4-.3.7-.4 1.1-.2.4-.3.9-.5 1.3-.1.3-.2.7-.3 1l-.3 1.2c-.1.4-.2.7-.3 1.1v.1c0 .1 0 .2-.1.2v.1c-.1.2-.1.5-.1.7-.1.3-.1.6-.2.9v.1c0 .2-.1.4-.1.5 0 .3-.1.6-.1.9 0 .2 0 .4-.1.6v.5c0 .4-.1.9-.1 1.3v3.6c.2 2 .7 5.4 2.3 9.2 0 .1.1.2.1.2l.6 1.2c0 .1.1.2.1.2.2.4.4.8.7 1.2.1.2.3.4.4.7.2.3.3.6.5.8 0 .1.1.1.1.2 1.2 1.9 2.7 3.8 4.6 5.6 7.1 6.7 17.2 10.1 30 10.1 1.4 0 2.8 0 4.3-.1 22.5-.7 37.3-14.8 45.7-26.5 4.9-6.8 8.5-14 10.9-20.7 2.4 6.7 6 13.9 10.9 20.7 8.5 11.7 23.3 25.8 45.7 26.5h.1c1.5.1 2.9.1 4.3.1 12.8 0 22.9-3.4 30-10.1 2.4-2.3 4.2-4.7 5.6-7.1 0 0 0-.1.1-.1v-.1c0-.1.1-.1.1-.2l.3-.6c.1-.2.2-.3.2-.5v-.1c.2-.5.4-.9.6-1.4v-.1c1.9-4.3 2.3-8 2.4-9.9v-3c0-.6-.1-1.2-.1-1.8 0-.2 0-.4-.1-.6 0-.3-.1-.7-.1-1 0-.1 0-.3-.1-.4v-.2c0-.3-.1-.5-.1-.8-.1-.3-.1-.5-.2-.8v-.1c0-.1 0-.1-.1-.2v-.1c-.1-.3-.1-.6-.2-.9-.1-.4-.3-.9-.4-1.3-.1-.3-.2-.6-.3-1-.2-.5-.3-.9-.5-1.4-.1-.3-.3-.7-.4-1s-.3-.7-.4-1l-.6-1.2-.6-1.2c-.2-.3-.3-.6-.5-.8-.3-.6-.7-1.2-1.1-1.8 0 0 0-.1-.1-.1-9.7-15.5-28.7-27.6-38.6-33.2 1.1-1.9 1.7-4 1.9-6.1.4-4.6-1.4-9.1-5-12.3-3.7-3.4-8.8-5.3-14.3-6.4l-2.7-36.2c5.2-1 10.8-2.1 16.9-3.3 5.3 7.3 12.4 13.9 21.7 17.4 1.4.5 2.8 1 4.3 1.3 3.2 3.1 7 5.4 11 6.8 2.7.9 5.4 1.3 8 1.3 4.4 0 8.6-1.3 12.2-3.7 0 0 .1 0 .1-.1 2.1.3 4.3.5 6.4.5 11.6 0 23-5.1 32.1-14.3 3.3-3.3 5.8-6.3 7.2-8.1l13-7.9c.2-.1.3-.2.5-.3l.2-.1c1.3-.9 4.4-2.9 7.9-6.9 1.5-.4 6.2-5.8 5.3-12.4M271 365.8q-5.55 1.65-9 4.2c-2.4-1.8-5.5-3.3-9.2-4.3l1.8-29.4c4-.7 8.6-1.5 14.1-2.5zm62.5-88.6h.3c-.1.2-.1.4-.2.7 0-.3 0-.5-.1-.7"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M186.1 325.3c-9.3 0-19.5-4.1-30.3-12.1-2-1.5-2.4-4.3-.9-6.3s4.3-2.4 6.3-.9c12.6 9.4 23.5 12.4 32.6 8.9 18-6.8 24.4-36.2 24.5-36.5.5-2.4 2.9-4 5.3-3.5s4 2.9 3.5 5.3c-.3 1.4-7.5 34.5-30.1 43.1-3.5 1.3-7.1 2-10.9 2m164.8 10.1c-3.8 0-7.4-.7-10.9-2-22.6-8.5-29.8-41.7-30.1-43.1-.5-2.4 1-4.8 3.5-5.3 2.4-.5 4.8 1 5.3 3.5.1.3 6.5 29.8 24.5 36.5 9.1 3.4 20.1.4 32.6-8.9 2-1.5 4.8-1.1 6.3.9s1.1 4.8-.9 6.3c-10.8 8-20.9 12.1-30.3 12.1"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M217.6 395.2s-1.8-4.2 2.4-6.9c0 0-8.2-5.1-3.6-9.3 8.3-7.5 38.5-4.7 40.4 1.6 1.2 4-4.2 6.5-4.2 6.5s2.2 7.7.6 10.1c-1.6 2.3-26.7 12.2-35.6-2"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M233.5 404.2h-.5c-7.6-.1-13.4-3-16.7-8.2 0-.1-.1-.1-.1-.2-.7-1.6-1.1-4.8 1.3-7.4-1.6-1.3-3.8-3.5-4.1-6.1-.1-1.1.1-2.8 1.9-4.4 6.7-6 24.7-5.8 34.8-3 4.7 1.3 7.4 3.1 8.1 5.3 1.1 3.5-1.6 6.3-3.8 7.7.7 2.7 1.6 7.9.1 10.2-1.5 2-11.8 6.1-21 6.1m-14.6-9.7c2.5 3.9 6.6 6.1 12.2 6.6 9.4.8 19.8-3.6 20.9-4.8.7-1 .1-5.4-.8-8.8-.2-.7.1-1.4.8-1.8 0 0 4.2-2.1 3.4-4.7-.2-.8-2-2.1-6-3.3-10.2-2.8-26.7-2.4-31.9 2.4-.9.8-1 1.5-.9 1.9.2 2 3.2 4.3 4.3 5 .4.3.7.7.7 1.3 0 .5-.2 1-.7 1.3-2.9 1.7-2.2 4.3-2 4.9"
    />
    <path
      style={{
        fill: "#f15a29",
      }}
      d="M215.8 396.4s-44.7 22.8-43.3 45.9c0 0-.6 20.8 32.3 20S255 422.9 255 407c0-12.3-1.8-14.4-1.8-14.4s-6.2 6.3-15.3 6.9c-2.4.2-4.8-.3-7-1.3-3.6-1.5-10.6-3.8-15.1-1.8"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M202.9 463.8c-11.8 0-20.6-2.8-26.1-8.4-5.7-5.7-5.8-12.3-5.8-13.1-1.4-23.8 42.3-46.3 44.2-47.3h.1c5-2.2 12.4.2 16.3 1.9 2.1.9 4.3 1.3 6.3 1.1 8.5-.6 14.3-6.4 14.4-6.5.3-.3.7-.5 1.1-.5s.8.2 1.1.5c.5.6 2.1 3.5 2.1 15.4 0 7.7-4.1 21.7-13.1 34.1-7.3 10.1-19.9 22.1-38.6 22.6-.8.2-1.4.2-2 .2m13.5-66.1c-1.5.8-43.8 22.8-42.5 44.5v.1c0 .1-.1 6 5 11 5.2 5.2 13.9 7.7 25.7 7.4 31.7-.8 48.8-38.5 48.8-53.7 0-6.6-.5-10.1-.9-11.9-2.5 2-7.8 5.4-14.6 5.9-2.5.2-5.1-.3-7.7-1.4-2.7-1.1-9.6-3.7-13.8-1.9"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M227.5 441.5c-4.6-25.9-34.5-26.7-38.9-26.7-9.1 8-16.8 17.7-16.2 27.5 0 0-.1 3.8 2.4 8.2 13.6 7.9 57.2 16.3 52.7-9"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M207.6 459.9c-12.3 0-26.6-4.2-33.5-8.2-.2-.1-.4-.3-.5-.5-2.5-4.3-2.6-8.3-2.6-8.9-.5-8.9 5.1-18.5 16.7-28.7.3-.3.6-.4 1.1-.4 3.9 0 35.5.9 40.3 28 1.5 8.2-2 12.6-5.2 14.8-4.2 2.8-10 3.9-16.3 3.9m-31.7-10.6c10.3 5.8 35.8 11.4 46.1 4.3 3.7-2.5 5-6.4 4-11.8-4.2-23.6-30.2-25.4-36.8-25.5-10.6 9.4-15.7 18.1-15.2 25.9v.1c-.1 0-.1 3.3 1.9 7"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M255 407v-.5c-12.6 35.4-45.6 45.4-62.7 44-15-1.2-19.6-9.7-19.3-13.6-.4 1.8-.6 3.5-.5 5.3 0 0 0 21.8 32.3 20 32.7-1.7 50.2-39.3 50.2-55.2"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M201 463.9c-10.3 0-18.2-2.5-23.5-7.6-6.5-6.1-6.6-13.7-6.6-14-.1-1.8.1-3.7.5-5.7.2-.8.9-1.3 1.7-1.2s1.3.8 1.3 1.6c-.2 3.3 4 10.9 18 12 17.3 1.4 49.1-9.1 61.2-43 .2-.7.9-1.1 1.7-1 .7.1 1.2.7 1.2 1.5v.5c0 16.1-17.6 54.8-51.7 56.7-1.3.1-2.5.2-3.8.2m-26.8-19.8c.4 2.4 1.7 6.5 5.5 10.1 5.3 5 13.7 7.2 25 6.6 17.6-1 29.5-12.4 36.3-21.7 5.2-7.2 8.8-14.8 10.7-21.3-14.9 27.1-43.4 35.7-59.5 34.4-9.5-.9-15.1-4.4-18-8.1m62.5-52.2c-8.9 0-16.6-2.1-17.2-2.2-.8-.2-1.3-1-1.1-1.8s1-1.3 1.8-1.1c.2.1 20 5.3 31.5-1.1.7-.4 1.6-.1 2 .6s.1 1.6-.6 2c-4.7 2.8-10.8 3.6-16.4 3.6m-1.4-7.1c-2 0-11.8-.2-11.8-4.1 0-.8.7-1.5 1.5-1.5.7 0 1.3.5 1.5 1.2.7.5 3.8 1.5 8.8 1.5s8.2-.9 8.8-1.5c.2-.7.7-1.2 1.5-1.2s1.5.7 1.5 1.5c0 3.9-9.8 4.1-11.8 4.1m-8.8-4.1"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="m235.9 309.8-4.4 73.1c3.1.3 7.4.4 10.8-.4l4.3-72.6-.3.3z"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M306.5 395.2s1.8-4.2-2.4-6.9c0 0 8.2-5.1 3.6-9.3-8.3-7.5-38.5-4.7-40.4 1.6-1.2 4 4.2 6.5 4.2 6.5s-2.2 7.7-.6 10.1c1.5 2.3 26.7 12.2 35.6-2"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M290.6 404.2c-9.2 0-19.5-4.1-21-6.2-1.6-2.3-.6-7.5.1-10.2-2.3-1.4-4.9-4.2-3.8-7.7.7-2.2 3.4-4 8.1-5.3 10-2.8 28.1-3 34.8 3 1.8 1.6 2 3.3 1.9 4.4-.2 2.6-2.4 4.8-4.1 6.1 2.4 2.6 2 5.9 1.3 7.4 0 .1-.1.1-.1.2-3.3 5.3-9.1 8.1-16.7 8.2-.2.1-.4.1-.5.1m-1.5-28.3c-5.1 0-10.3.6-14.4 1.8-4 1.1-5.8 2.5-6 3.3-.8 2.7 3.3 4.7 3.4 4.8.7.3 1 1.1.8 1.8-1 3.4-1.5 7.8-.8 8.9 1.1 1.2 11.4 5.6 20.8 4.8 5.6-.5 9.7-2.7 12.2-6.6.2-.6.9-3.2-1.9-5-.4-.3-.7-.8-.7-1.3s.3-1 .7-1.3c1.1-.7 4.1-3 4.3-5 0-.4 0-1.1-.9-1.9-3-3-10.1-4.3-17.5-4.3m17.4 19.3"
    />
    <path
      style={{
        fill: "#f15a29",
      }}
      d="M308.3 396.4s44.7 22.8 43.3 45.9c0 0 .6 20.8-32.3 20S269 422.9 269 407.1c0-12.3 1.8-14.4 1.8-14.4s6.2 6.3 15.3 6.9c2.4.2 4.8-.3 7-1.3 3.7-1.6 10.6-3.9 15.2-1.9"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M321.2 463.8h-1.9c-18.8-.5-31.4-12.5-38.6-22.6-9-12.5-13.1-26.4-13.1-34.1 0-11.9 1.6-14.8 2.1-15.4.3-.3.7-.5 1.1-.5s.8.1 1.1.5c.1.1 5.9 5.9 14.4 6.5 2 .1 4.2-.2 6.3-1.1 3.9-1.7 11.3-4.1 16.3-1.9h.1c1.9.9 45.5 23.4 44.2 47.3 0 .8-.1 7.4-5.8 13.1-5.6 5.4-14.4 8.2-26.2 8.2m-49.7-68.6c-.4 1.8-.9 5.3-.9 11.9 0 15.3 17.1 53 48.8 53.7 11.8.3 20.5-2.2 25.7-7.4 5.1-5 5-11 5-11v-.1c1.3-21.6-41-43.7-42.5-44.5-4.1-1.8-11.1.8-13.9 1.9-2.6 1.1-5.2 1.5-7.7 1.4-6.7-.5-11.9-3.9-14.5-5.9"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M296.6 441.5c4.6-25.9 34.5-26.7 38.9-26.7 9.1 8 16.8 17.7 16.2 27.5 0 0 .1 3.8-2.4 8.2-13.7 7.9-57.2 16.3-52.7-9"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M316.5 459.9c-6.3 0-12.1-1.1-16.1-3.9-3.2-2.2-6.7-6.6-5.2-14.8 4.8-27.1 36.4-28 40.3-28 .4 0 .8.1 1.1.4 11.6 10.2 17.2 19.8 16.7 28.7 0 .6-.1 4.5-2.6 8.9-.1.2-.3.4-.5.5-7.1 4.1-21.4 8.2-33.7 8.2m18.4-43.6c-6.6.1-32.6 1.9-36.8 25.5-1 5.4.3 9.3 4 11.8 10.3 7.2 35.8 1.6 46.1-4.3 2-3.7 2-7 2-7v-.1c.4-7.8-4.7-16.5-15.3-25.9m-38.3 25.2"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M269.1 407v-.5c12.6 35.4 45.6 45.4 62.7 44 15-1.2 19.6-9.7 19.3-13.6.4 1.8.6 3.5.5 5.3 0 0 0 21.8-32.3 20-32.8-1.7-50.2-39.3-50.2-55.2"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M323 463.9c-1.2 0-2.5 0-3.8-.1-34.1-1.9-51.7-40.6-51.7-56.7v-.5c0-.7.5-1.4 1.2-1.5s1.4.3 1.7 1c12.1 33.9 44 44.4 61.2 43 14-1.1 18.2-8.7 18-12-.1-.8.5-1.5 1.3-1.6s1.5.4 1.7 1.2c.4 1.9.6 3.9.5 5.7 0 .2-.1 7.8-6.6 14-5.3 4.9-13.2 7.5-23.5 7.5m-50.6-46.2c1.9 6.5 5.4 14.1 10.7 21.3 6.8 9.4 18.7 20.8 36.3 21.7 11.3.6 19.7-1.6 25-6.6 3.8-3.5 5-7.7 5.5-10.1-2.9 3.7-8.5 7.2-18 8-16.1 1.4-44.5-7.2-59.5-34.3m14.9-25.8c-5.6 0-11.7-.8-16.6-3.5-.7-.4-1-1.3-.6-2s1.3-1 2-.6c11.6 6.4 31.3 1.1 31.5 1.1.8-.2 1.6.3 1.8 1.1s-.3 1.6-1.1 1.8c-.3 0-8.1 2.1-17 2.1m1.5-7.1c-2 0-11.8-.2-11.8-4.1 0-.8.7-1.5 1.5-1.5.7 0 1.3.5 1.5 1.2.7.5 3.8 1.5 8.8 1.5s8.2-.9 8.8-1.5c.2-.7.7-1.2 1.5-1.2s1.5.7 1.5 1.5c0 3.9-9.9 4.1-11.8 4.1m-8.8-4.1"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="m287.2 309.8 5.4 73.1c-3.1.3-7.4.4-10.8-.4l-5.4-72.6v-.1z"
    />
    <path
      style={{
        fill: "#f15a29",
      }}
      d="M353.8 244c-1.7-5.5-2.8-9.7-3.4-12.6s-1.2-7-1.8-12.6c-.6-5.5-1.2-9.7-1.8-12.4-.6-3-2.5-4.2-5.7-3.5-3.9.8-9.3 2.2-16.3 4.4-7.8 2.3-13.3 3.8-16.6 4.5l-16-81.9c-1-5.2-1.8-13-2.2-23.5-.5-10.5-1.2-18.2-2.2-23.3-1-5.3-4.3-7.4-9.7-6.4-7.6 1.5-22.4 2-44.5 1.4-22-.5-35.1-.4-39.1.4-2.7.5-5 2.1-7 4.8-7.1 12.2-12.1 21.6-15 28.4-23.6 45.8-37.5 72.2-41.8 79.1-9 14.4-23.8 34.2-44.6 59.2-4.4 5.3-6.2 9.9-5.5 13.8.8 4.2 2.1 10.3 3.9 18.5s3.1 14.4 3.9 18.5c1.6 8.2 9.2 10.9 22.7 8.3 11.4-2.2 28.3-5.8 50.8-10.8s39.5-8.5 50.8-10.8c6.3-1.2 9.8.3 10.7 4.6.7 3.5.7 9.3.1 17.4s-.7 13.1-.4 15q.45 2.55 5.4 3.3c3.3.5 34.1-5 92.6-16.4 5.3-1 7.4-3.8 6.5-8.4-.6-3.1-1.8-7.8-3.5-14s-2.9-10.8-3.5-14c-1-5 1.8-8.2 8.2-9.5-.4.1 2.9-.3 10-1.4 5.5-.8 9.7-1.7 12.7-2.7 4.1-1.5 6-3.2 5.6-5.1-.5-2.6-1.6-6.8-3.3-12.3"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M229.2 330.4c-.5 0-.8 0-1-.1-4.4-.7-6.9-2.5-7.5-5.3-.3-1.4-.5-4.5.3-15.7.6-7.8.6-13.4-.1-16.7-.3-1.3-.8-4-7.7-2.6-11.2 2.2-28.3 5.8-50.8 10.8-22.4 4.9-39.6 8.6-50.9 10.8-7.3 1.4-12.9 1.4-17.2-.2-4.6-1.7-7.5-5.1-8.5-10.1-.8-4.1-2.1-10.1-3.9-18.5-1.8-8.1-3.1-14.4-3.9-18.6-.9-4.7 1-9.9 6-15.9 20.6-24.9 35.6-44.7 44.4-59 4.2-6.8 18.2-33.3 41.6-78.8 2.9-6.8 8-16.4 15.1-28.6 0-.1.1-.1.1-.2 2.3-3.2 5.2-5.1 8.5-5.8 4.3-.8 17.3-1 39.7-.4 21.7.5 36.5.1 43.9-1.4 6.7-1.3 11.3 1.7 12.6 8.4 1 5.2 1.8 13.1 2.2 23.7.5 10.3 1.2 18.1 2.2 23.1l15.6 79.4c3.2-.8 7.9-2.1 13.9-3.9 7-2.2 12.6-3.7 16.5-4.5 2.2-.4 4.1-.2 5.6.7q2.4 1.5 3 4.8c.5 2.8 1.1 6.9 1.8 12.6.6 5.4 1.2 9.6 1.8 12.4.5 2.8 1.7 6.9 3.3 12.3 1.7 5.7 2.9 9.9 3.5 12.8.7 3.3-1.8 6-7.2 8-3.2 1.1-7.6 2-13.2 2.8-3.3.5-5.8.8-7.5 1.1-.9.1-1.7.2-2.3.3-7.3 1.5-6.6 4.9-6.3 6.6.6 3 1.8 7.7 3.5 13.8 1.8 6.2 3 11 3.6 14.1 1.2 5.9-2 10-8.5 11.3-75.8 14.9-89 16.5-92.2 16.5m-12.6-45.7c6.8 0 8.8 4.2 9.4 7 .7 3.8.8 9.7.1 18-.8 10.2-.6 13.4-.4 14.3 0 .2.7.9 3.3 1.3 1.9.2 16.5-1.7 91.7-16.4 5-1 5-3.3 4.6-5.4-.6-3-1.8-7.7-3.5-13.8-1.8-6.3-2.9-11-3.6-14.1-.7-3.7-.4-10.3 10.2-12.4.2 0 .4 0 .6-.1.6-.1 2.8-.4 9.6-1.3 5.3-.8 9.4-1.6 12.2-2.6 3.6-1.3 3.9-2.3 3.9-2.3-.5-2.7-1.7-6.9-3.3-12.3-1.7-5.5-2.9-9.9-3.5-12.8s-1.2-7.2-1.8-12.8c-.6-5.5-1.2-9.6-1.7-12.2-.1-.5-.3-1.2-.7-1.5-.4-.2-1.1-.3-2-.1-3.8.7-9.2 2.2-16 4.3-8 2.4-13.5 3.9-16.8 4.5-1.4.3-2.7-.6-2.9-2l-16-81.9c-1-5.3-1.8-13.3-2.3-23.9-.5-10.3-1.2-18-2.1-22.9-.8-4-2.7-5.2-6.8-4.4-7.9 1.5-22.6 2-45 1.5-27.2-.4-36.1.1-38.8.6-2.1.4-3.8 1.6-5.4 3.7-7 12-12 21.4-14.8 28 0 .1 0 .1-.1.2-23.8 46.3-37.5 72.2-41.9 79.3-9 14.4-24.1 34.5-44.8 59.5-3.9 4.7-5.6 8.6-5 11.7.8 4.2 2.1 10.4 3.9 18.5 1.8 8.4 3.1 14.5 3.9 18.6.6 3.2 2.3 5.2 5.3 6.3 3.3 1.2 8.2 1.2 14.5 0 11.3-2.2 28.4-5.8 50.8-10.8 22.5-4.9 39.6-8.6 50.9-10.8 1.6-.3 3-.5 4.3-.5"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M184.9 67.9c-8.8 4-12.7 15.5-11 28.8C165.1 86.6 153.8 82 145 86c-12.2 5.5-15 25.5-6.4 44.5 8.7 19.1 25.6 30 37.7 24.5 8.8-4 12.7-15.5 11-28.8 8.8 10.1 20.1 14.7 28.9 10.7 12.2-5.5 15-25.5 6.4-44.5s-25.5-30.1-37.7-24.5"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M169.7 158.9c-12.1 0-25.8-10.7-33.4-27.4-4.4-9.6-6.1-19.8-4.8-28.7 1.3-9.3 5.8-16.1 12.4-19.1 8.1-3.7 18.1-1.2 27 6.5.1-11.8 4.7-20.9 12.9-24.6 13.4-6.1 31.8 5.4 41.1 25.7 4.4 9.6 6.1 19.8 4.8 28.7-1.3 9.3-5.8 16.1-12.4 19.1-8.1 3.7-18.1 1.2-27-6.5-.1 11.8-4.7 20.9-12.9 24.6-2.4 1.2-5 1.7-7.7 1.7m-17.9-71.8q-3 0-5.7 1.2c-5.1 2.3-8.5 7.7-9.6 15.3-1.1 7.9.4 17.2 4.4 25.9 8.1 17.8 23.5 28.2 34.4 23.2 7.5-3.4 11.2-13.7 9.5-26.2-.1-1.1.4-2.1 1.4-2.6s2.2-.2 2.9.6c8.3 9.5 18.5 13.4 26 10 5.1-2.3 8.5-7.7 9.6-15.3 1.1-7.9-.4-17.2-4.4-25.9-8.1-17.8-23.5-28.2-34.4-23.2-7.5 3.4-11.2 13.7-9.5 26.2.1 1.1-.4 2.1-1.4 2.6s-2.2.2-2.9-.6c-6.4-7.2-13.8-11.2-20.3-11.2m33.1-19.2"
    />
    <ellipse
      transform="rotate(-24.433 160.047 120.49)"
      style={{
        fill: "#27aae1",
      }}
      cx={160}
      cy={120.5}
      rx={11.5}
      ry={17.1}
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M163.8 138.2c-5.8 0-12.2-4.8-15.6-12.4-4.2-9.3-2.4-19.3 4.1-22.3s15.3 2.2 19.5 11.5c2 4.4 2.7 9.1 2 13.3-.7 4.3-2.9 7.6-6.2 9-1.1.7-2.5.9-3.8.9m-7.4-32.5c-1 0-1.9.2-2.8.6-5 2.3-6.2 10.5-2.7 18.3s10.5 12.3 15.5 10.1c2.3-1.1 3.9-3.5 4.5-6.8.6-3.5-.1-7.6-1.8-11.5-2.9-6.5-8.2-10.7-12.7-10.7"
    />
    <ellipse
      transform="rotate(-24.433 159.906 120.555)"
      style={{
        fill: "#231f20",
      }}
      cx={159.9}
      cy={120.5}
      rx={6.9}
      ry={10.3}
    />
    <circle
      style={{
        fill: "#fff",
      }}
      cx={160.5}
      cy={111}
      r={2.8}
    />
    <ellipse
      transform="rotate(-24.433 199.935 102.367)"
      style={{
        fill: "#27aae1",
      }}
      cx={199.9}
      cy={102.4}
      rx={11.5}
      ry={17.1}
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M203.6 120.1c-2.2 0-4.6-.7-6.9-2.1-3.6-2.2-6.6-5.8-8.6-10.3-4.2-9.3-2.4-19.3 4.1-22.3 3.3-1.5 7.1-1 10.9 1.3 3.6 2.2 6.6 5.8 8.6 10.3 2 4.4 2.7 9.1 2 13.3-.7 4.3-2.9 7.6-6.2 9-1.2.6-2.5.8-3.9.8m-7.4-32.5c-1 0-1.9.2-2.8.6-5 2.3-6.2 10.5-2.7 18.3 1.8 3.9 4.4 7.1 7.5 9 2.9 1.8 5.7 2.2 8.1 1.1 2.3-1.1 3.9-3.5 4.5-6.8.6-3.5-.1-7.6-1.8-11.5-1.8-3.9-4.4-7.1-7.5-9-1.8-1.1-3.6-1.7-5.3-1.7"
    />
    <ellipse
      transform="rotate(-24.433 199.793 102.431)"
      style={{
        fill: "#231f20",
      }}
      cx={199.8}
      cy={102.4}
      rx={6.9}
      ry={10.3}
    />
    <circle
      style={{
        fill: "#fff",
      }}
      cx={200.4}
      cy={92.9}
      r={2.8}
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M167.2 45.6s19.4-.6 34.2 7.2c1.8 1 1.1 3.7-.9 3.8-6.3.1-16 .4-23.8 1.6-4.1.6-7.9-2.1-8.5-6.2zm-23.5 10.7s-13.2 14.2-17 30.5c-.5 2 2.1 3.3 3.4 1.8 4.2-4.7 10.9-11.8 16.8-16.9 3.1-2.7 3.6-7.3.9-10.5z"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M182.8 178.9s43.3-11.1 63.5-47.5c0 0 15.9 28.5 3.6 50.6-12.1 21.7-45.5 26.5-60.1 6.4z"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M216.1 203.7c-11.7 0-21.9-4.9-28.3-13.8l-6.9-9.5c-.5-.7-.6-1.5-.3-2.3s.9-1.4 1.7-1.6c.4-.1 42.6-11.3 61.9-46.3.4-.8 1.3-1.3 2.2-1.3s1.7.5 2.2 1.3c.7 1.2 16.4 30 3.6 53-6.5 11.7-19.3 19.5-33.5 20.4-1 .1-1.8.1-2.6.1m-29.2-23.4 4.8 6.7c5.9 8.1 15.5 12.3 26.5 11.7 12.4-.8 23.7-7.6 29.4-17.8 8.8-15.9 2-35.7-1.6-44.1-17.7 28.2-48.7 40.2-59.1 43.5"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M221.6 180.6c-.8 0-1.6-.4-2.1-1.1-.8-1.1-.5-2.7.7-3.5 24.8-16.9 23.5-40 23.5-40.9-.1-1.4.9-2.6 2.3-2.7s2.6.9 2.7 2.3c.1 1.1 1.7 26.8-25.6 45.4-.6.3-1.1.5-1.5.5m36.1-49.9c-1 0-2-.7-2.4-1.7-.5-1.6-2.2-6.5-9.4-5.7-1.4.2-2.6-.8-2.8-2.2s.8-2.6 2.2-2.8c7.1-.8 12.5 2.5 14.7 9.1.4 1.3-.3 2.7-1.6 3.2-.2.1-.5.1-.7.1m-83.8 57.1c-.7 0-1.3-.3-1.8-.8-.4-.4-3.6-4.1-3.3-8.8.2-2.6 1.5-5 3.8-6.9 1.1-.9 2.6-.7 3.5.3.9 1.1.7 2.6-.3 3.5-1.3 1-1.9 2.2-2 3.4-.2 2.2 1.4 4.4 2 5.1.9 1 .8 2.6-.2 3.5-.5.4-1.1.7-1.7.7"
    />
    <ellipse
      transform="rotate(-33.919 356.458 324.667)"
      style={{
        fill: "#fff",
      }}
      cx={356.4}
      cy={324.7}
      rx={13.2}
      ry={17.3}
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M360 342.3c-1.6 0-3.3-.3-5-.9-4.2-1.4-8-4.5-10.8-8.6s-4.1-8.8-3.8-13.2c.3-4.6 2.3-8.3 5.6-10.6 6.7-4.5 16.9-1.2 22.7 7.3 5.8 8.6 5 19.3-1.8 23.8-2 1.5-4.4 2.2-6.9 2.2m-7.1-32.3c-1.9 0-3.7.5-5.3 1.5-2.5 1.7-4.1 4.6-4.3 8.3-.2 3.8 1 7.8 3.3 11.4 2.4 3.6 5.7 6.2 9.3 7.4 3.4 1.2 6.7.9 9.3-.9 5.4-3.6 5.8-12.4.9-19.6-3.4-5.1-8.5-8.1-13.2-8.1"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M347 314.9s-12.4-26.8 4.2-48c4-5.1 9.2-4.1 10.9 2.2 1.1 3.9 1.4 9.5.2 17.6l26.6-26.6c4.1-4.3 9.3-6.3 11-5.3l-.2.3c5.3 2.5 2.8 7.6.3 12.6l-8.5 16.8 18.4-10c6.5-2.8 9.9-3.8 12.1-.5 1.9 3.2.8 4.7-2.6 9.8l-13.8 15.6 17.5-3.3c4.7-1.5 9.5 1.1 9.9 3.8.2 1.4-1.4 3.7-1.6 3.9-3 3.4-5.3 4.7-6.2 5.3l-14.7 9s-2.9 3.9-7.6 8.7c-12.8 12.9-30.7 15.1-44.4 3.3-3.4-3.4-10.1-10.5-11.5-15.2"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M378.8 339.1c-7.4 0-14.7-2.7-21.1-8.2-3.3-2.8-10.4-10.2-12.1-15.5-.8-1.9-12-28.4 4.5-49.4 2.3-2.9 5.1-4.3 7.8-3.7 2.7.5 4.8 2.9 5.7 6.4 1 3.6 1.3 8.3.8 13.9L388 259c4.4-4.5 10.2-7 12.8-5.5.3.2.6.5.7.8q1.95 1.2 2.7 3.3c1.1 3.4-.9 7.3-2.7 10.8l-6.3 12.5 14.1-7.7s.1 0 .1-.1c5.8-2.5 10.9-4.6 13.9 0 2.4 4 .9 6.1-2.2 10.9l-.4.6c0 .1-.1.1-.1.2l-10.9 12.3 13.1-2.5c2.9-.9 6.3-.5 8.9 1.1 1.7 1 2.7 2.4 2.9 3.9.3 2.2-2 5-2 5.1-2.7 3.1-5 4.6-6.1 5.3-.1.1-.3.2-.4.3l-14.5 8.9c-.7.9-3.4 4.5-7.5 8.6-7.5 7.4-16.5 11.3-25.3 11.3m-22.1-73.9c-1.4 0-2.9 1-4.3 2.7-15.8 20.2-4.2 46.2-4.1 46.4 0 .1.1.1.1.2 1.2 4 7.2 10.8 11.2 14.1 12.7 10.9 29.7 9.6 42.4-3.2 4.6-4.6 7.4-8.5 7.4-8.5.1-.2.3-.3.4-.4l14.7-9 .4-.2c1.1-.7 3-2 5.5-4.8.5-.6 1.3-2.2 1.3-2.7-.1-.4-.5-1.1-1.5-1.8-1.4-.9-3.9-1.6-6.4-.8h-.2l-17.5 3.3c-.6.1-1.3-.2-1.6-.7-.3-.6-.2-1.3.2-1.7l13.7-15.5.3-.5c3.1-4.7 3.5-5.4 2.2-7.6-1.3-2-3.3-1.8-10.2 1.1l-18.3 10c-.6.3-1.3.2-1.8-.2-.5-.5-.6-1.2-.3-1.8l8.5-16.8c1.4-2.8 3.2-6.3 2.5-8.5q-.45-1.2-2.1-2.1c-.2-.1-.4-.2-.5-.4-1.5.1-5.1 1.5-8.6 5.1l-26.7 26.6c-.5.5-1.2.6-1.7.3-.6-.3-.9-.9-.8-1.6 1-7.1.9-12.8-.2-16.9-.7-2.4-1.9-4-3.4-4.3-.2.2-.4.2-.6.2"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M362.4 286.6s11.9 17.2.7 32.2"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M363.1 320.4q-.45 0-.9-.3c-.7-.5-.8-1.4-.3-2.1 10.4-14-.2-29.8-.7-30.5s-.3-1.6.4-2.1 1.6-.3 2.1.4c.1.2 12.4 18.2.6 34q-.45.6-1.2.6"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="m405.8 299.2-6.3 3.8"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M399.5 304.5c-.5 0-1-.3-1.3-.7-.4-.7-.2-1.6.5-2.1l6.3-3.8c.7-.4 1.6-.2 2.1.5.4.7.2 1.6-.5 2.1l-6.3 3.8c-.3.1-.6.2-.8.2"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="m391.7 284.4-5.5 6.5"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M386.2 292.4c-.3 0-.7-.1-1-.4-.6-.5-.7-1.5-.2-2.1l5.5-6.5c.5-.6 1.5-.7 2.1-.2s.7 1.5.2 2.1l-5.5 6.5c-.3.4-.7.6-1.1.6"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M405.4 312.3s-15.5-22.3-29.9-24.9"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M405.4 313.8q-.75 0-1.2-.6c-.2-.2-15.3-21.8-28.9-24.3-.8-.1-1.4-.9-1.2-1.7.1-.8.9-1.4 1.7-1.2 14.8 2.7 30.2 24.6 30.9 25.5.5.7.3 1.6-.4 2.1-.3.1-.6.2-.9.2"
    />
    <ellipse
      transform="rotate(-56.081 180.625 314.556)"
      style={{
        fill: "#fff",
      }}
      cx={180.6}
      cy={314.5}
      rx={17.3}
      ry={13.2}
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M177 332.2c-2.5 0-4.8-.7-6.9-2-6.7-4.5-7.5-15.2-1.8-23.8 5.8-8.6 16-11.9 22.7-7.3 6.7 4.5 7.5 15.2 1.8 23.8-4 5.8-10.1 9.3-15.8 9.3m7.1-32.3c-4.6 0-9.8 3-13.3 8.1-4.9 7.2-4.4 16 .9 19.6 5.4 3.6 13.7.7 18.5-6.5 4.9-7.2 4.4-16-.9-19.6-1.4-1.1-3.3-1.6-5.2-1.6"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M190 304.8s12.4-26.8-4.2-48c-4-5.1-9.2-4.1-10.9 2.2-1.1 3.9-1.4 9.5-.2 17.6L148 249.9c-4.1-4.3-9.3-6.3-11-5.3l.2.3c-5.3 2.5-2.8 7.6-.3 12.6l8.5 16.8-18.4-10c-6.5-2.8-9.9-3.8-12.1-.5-1.9 3.2-.8 4.7 2.6 9.8l13.8 15.6-17.5-3.3c-4.7-1.5-9.5 1.1-9.9 3.8-.2 1.4 1.4 3.7 1.6 3.9 3 3.4 5.3 4.7 6.2 5.3l14.7 9s2.9 3.9 7.6 8.7c12.8 12.9 30.7 15.1 44.4 3.3 3.5-3.3 10.2-10.5 11.6-15.1"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M158.3 329c-8.9 0-17.8-3.9-25.4-11.5-4.1-4.2-6.8-7.7-7.5-8.6L111 300c-.2-.1-.3-.2-.5-.3-1.1-.7-3.4-2.2-6.1-5.3 0 0-2.3-2.9-2-5.1.2-1.5 1.2-2.8 2.9-3.9 2.5-1.6 5.9-2 8.9-1.1l13.1 2.5-10.9-12.3c0-.1-.1-.1-.1-.2l-.4-.6c-3.2-4.7-4.6-6.9-2.3-10.8 3.1-4.7 8.2-2.6 14-.1 0 0 .1 0 .1.1l14.1 7.7-6.3-12.5c-1.8-3.5-3.8-7.5-2.7-10.8q.6-1.95 2.7-3.3c.1-.3.4-.6.7-.8 2.7-1.5 8.4 1 12.8 5.6l23.6 23.6c-.5-5.6-.2-10.2.8-13.9 1-3.5 3.1-5.9 5.7-6.4 2.7-.5 5.5.8 7.8 3.7 16.4 21 5.3 47.5 4.5 49.4-1.6 5.2-8.8 12.7-12.1 15.5-6.3 5.6-13.6 8.3-21 8.3M111 286.9c-1.6 0-3.1.5-4.1 1.1q-1.5 1.05-1.5 1.8c-.1.5.8 2 1.3 2.7 2.5 2.8 4.4 4.1 5.5 4.8.2.1.3.2.4.3l14.6 8.9c.2.1.3.2.4.4 0 0 2.9 3.9 7.4 8.5 12.7 12.8 29.7 14.1 42.4 3.2 3.9-3.4 10-10.2 11.2-14.1 0-.1 0-.1.1-.2.1-.3 11.8-26.2-4.1-46.4-1.5-2-3.3-2.9-4.8-2.6s-2.8 1.9-3.4 4.3c-1.1 4.1-1.2 9.8-.2 16.9.1.6-.2 1.3-.8 1.6s-1.3.2-1.7-.3L146.9 251c-3.5-3.6-7.1-5-8.6-5.1-.1.2-.3.3-.5.4q-1.65.75-2.1 2.1c-.7 2.2 1.1 5.7 2.5 8.5l8.5 16.8c.3.6.2 1.3-.3 1.8s-1.2.6-1.8.2l-18.3-10c-6.9-2.9-8.8-3.1-10.2-1.1-1.3 2.1-.9 2.8 2.2 7.6l.3.5 13.7 15.5c.4.5.5 1.2.2 1.7-.3.6-1 .9-1.6.7l-17.5-3.3h-.2c-.7-.3-1.4-.4-2.2-.4"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M174.6 276.5s-11.9 17.2-.7 32.2"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M174 310.2q-.75 0-1.2-.6c-11.8-15.7.5-33.8.6-34 .5-.7 1.4-.9 2.1-.4s.9 1.4.4 2.1-11.2 16.5-.7 30.5c.5.7.4 1.6-.3 2.1-.3.3-.6.3-.9.3"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="m131.3 289.1 6.3 3.8"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M137.6 294.4c-.3 0-.5-.1-.8-.2l-6.3-3.8c-.7-.4-.9-1.4-.5-2.1s1.4-.9 2.1-.5l6.3 3.8c.7.4.9 1.4.5 2.1-.3.4-.8.7-1.3.7"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="m145.4 274.3 5.5 6.5"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M150.9 282.3c-.4 0-.8-.2-1.1-.5l-5.5-6.5c-.5-.6-.5-1.6.2-2.1.6-.5 1.6-.5 2.1.2l5.5 6.5c.5.6.5 1.6-.2 2.1-.3.2-.7.3-1 .3"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M131.7 302.2s15.5-22.3 29.9-24.9"
    />
    <path
      style={{
        fill: "#231f20",
      }}
      d="M131.7 303.7q-.45 0-.9-.3c-.7-.5-.8-1.4-.4-2.1.6-.9 16-22.8 30.9-25.5.8-.1 1.6.4 1.7 1.2s-.4 1.6-1.2 1.7c-13.6 2.5-28.8 24.1-28.9 24.3-.3.5-.7.7-1.2.7"
    />
  </svg>
);
export default NumberFour;
