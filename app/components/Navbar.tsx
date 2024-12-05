"use client";

import { useState } from "react";
import { useAccount, useDisconnect, useSwitchChain } from "wagmi";
import { Button } from "./Button";
import Image from "next/image";
import { WalletOptions } from "./WalletOptions";

const Navbar = () => {
    const { isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    const [isConnectWalletOpen, setConnectWalletOpen] = useState(false);
    const [isSwitchChainOpen, setSwitchChainOpen] = useState(false);

    const { chains, switchChain } = useSwitchChain()

    return (
        <header className="flex justify-between items-center p-4 bg-gray-50 shadow-sm">
            {/* Logo */}
            <div className="flex items-center">
                <Image src="/splash.png" priority width={60} height={60} alt="Four Lucky" />
            </div>

            {/* Connect/Disconnect Button */}
            <div className="flex items-center -mt-5">
                {isConnected ? (
                    <div className="flex flex-row gap-2 items-center">
                        <Button onClick={() => disconnect()} className="bg-[#f15a29] hover:bg-red-500">
                            Logout
                        </Button>
                        <Button onClick={() => setSwitchChainOpen(true)} className="bg-[#2293af] hover:bg-blue-500">
                            Switch
                        </Button>
                    </div>
                ) : (
                    <Button onClick={() => setConnectWalletOpen(true)} className="bg-blue-500 hover:bg-blue-600">
                        Login
                    </Button>
                )}
            </div>

            {/* Wallet Options Modal */}
            {isConnectWalletOpen && (
                <div className="fixed p-4 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl text-gray-500 font-semibold">Login</h2>
                            <button
                                onClick={() => setConnectWalletOpen(false)}
                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Wallet Options */}
                        <WalletOptions onConnect={() => setConnectWalletOpen(false)} />
                    </div>
                </div>
            )}

            {/* SwitchChain Modal */}
            {isSwitchChainOpen && (
                <div className="fixed p-4 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl text-gray-500 font-semibold">Switch Chain</h2>
                            <button
                                onClick={() => setSwitchChainOpen(false)}
                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                            >
                                ✕
                            </button>
                        </div>
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {chains.map((chain: any) => (
                            <Button key={chain.id} onClick={() => switchChain({ chainId: chain.id })}>
                                {chain.name}
                            </Button>
                        ))}
                    </div>
                </div>
            )}

        </header>
    );
};

export default Navbar;
