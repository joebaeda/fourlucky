import { http, createConfig } from "wagmi";
import { base, mainnet, optimism } from "wagmi/chains";
import { metaMask, coinbaseWallet } from "wagmi/connectors";

export const config = createConfig({
  chains: [base, mainnet, optimism],
  ssr: true,
  connectors: [
    coinbaseWallet({
        appName: "Four Lucky", 
        appLogoUrl: "https://fourlucky.vercel.app/placeholder.webp",
        preference: "all",
    }),
    metaMask(),
  ],
  transports: {
    [base.id]: http(),
    [mainnet.id]: http(),
    [optimism.id]: http(),
  },
})