import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "./components/Provider";
import Navbar from "./components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const appUrl = process.env.NEXT_PUBLIC_BASE_URL;

const frame = {
  version: "next",
  imageUrl: `${appUrl}/og-image.png`,
  button: {
    title: "Get Your Lucky!",
    action: {
      type: "launch_frame",
      name: "Four Lucky",
      url: appUrl,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
    },
  },
};

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Four Lucky | Get your lucky by FOUR Numbers",
    description: "Four Number that can make your life better just if your lucky",
    keywords: 'Lottery, Decentralized Lottery, Gambling, Ethereum Gambling, Web3 Gambling',
    openGraph: {
      title: 'Four Lucky | Get your lucky by FOUR Numbers',
      description: 'Four Number that can make your life better just if your lucky',
      url: 'https://fourlucky.vercel.app',
      type: 'website',
      images: [
        {
          url: 'https://fourlucky.vercel.app/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Four Lucky',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Four Lucky | Get your lucky by FOUR Numbers',
      description: 'Four Number that can make your life better just if your lucky',
      images: ['https://fourlucky.vercel.app/og-image.png'],
    },
    icons: {
      icon: '/favicon.ico',
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        <Provider>
          <Navbar />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
