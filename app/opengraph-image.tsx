import { ImageResponse } from "next/og";

export const alt = "Farcaster Frames V2 Demo";
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full text-white font-bold w-full flex flex-col justify-center items-center relative bg-orange">
        <h1 tw="text-6xl">Four Lucky</h1>
        <p tw="text-4xl">Get your lucky by FOUR Numbers.</p>
      </div>
    ),
    {
      ...size,
    }
  );
}