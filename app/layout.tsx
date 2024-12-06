import type { Metadata } from "next";
import "./globals.css";
import Provider from "./components/Provider";
import Navbar from "./components/Navbar";

const appUrl = "https://fourlucky.vercel.app";

const frame = {
  version: "next",
  imageUrl: `${appUrl}/og-image.jpg`,
  button: {
    title: "Get Your Lucky!",
    action: {
      type: "launch_frame",
      name: "Four Lucky",
      url: appUrl,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#1f1f1f",
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
          url: 'https://fourlucky.vercel.app/og-image.jpg',
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
      images: ['https://fourlucky.vercel.app/og-image.jpg'],
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
      <body>
        <Provider>
          <Navbar />
          <main className="bg-[#1f1f1f] rounded-t-2xl">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
