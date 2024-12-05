"use client";

import { useEffect } from "react";
import { useAccount, useChainId, useSwitchChain } from "wagmi";
import { Button } from "./Button";
import Image from "next/image";
import { truncateAddress } from "@/lib/truncateAddress";
import { config } from "./Provider";

const Navbar = () => {
    const { address, isConnected } = useAccount();
    const chainId = useChainId();

    const { switchChain } = useSwitchChain();

    // Ensure the user is on the Base network
    useEffect(() => {
        if (isConnected && chainId !== config.chains[0].id) {
            switchChain({ chainId: config.chains[0].id });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isConnected, chainId]);

    return (
        <header className="flex flex-row justify-between items-center p-4">
            <div className="items-center">
                <Image src={"/splash.png"} priority width={60} height={60} alt="Four Lucky" />
            </div>
            <div className="items-center -mt-5">
                <Button
                    disabled={!isConnected}
                >
                    {isConnected ? truncateAddress(address as string) : "Open in Warpcast"}
                </Button>
            </div>
        </header>
    );
};

export default Navbar;
