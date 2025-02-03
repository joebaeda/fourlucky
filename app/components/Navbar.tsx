"use client";

import { useState } from "react";
import { useAccount, useBalance, useDisconnect } from "wagmi";
import { Button } from "./Button";
import { WalletOptions } from "./WalletOptions";
import { truncateAddress } from "@/lib/truncateAddress";
import { formatEther } from "viem";

const Navbar = () => {
    const { address, isConnected, chain } = useAccount();
    const { disconnect } = useDisconnect();
    const balance = useBalance({ address })
    const [isConnectWalletOpen, setConnectWalletOpen] = useState(false);
    const [isAccountOpen, setAccountOpen] = useState(false);

    return (
        <header className="flex justify-between items-center p-4">
            {/* Logo */}
            <div className="flex items-center">
                <h1 className="text-blue-400 font-extrabold text-5xl">FOUR.</h1>
            </div>

            {/* Connect/Disconnect Button */}
            <div className="flex items-center">
                {isConnected ? (
                    <div className="flex flex-row gap-2 items-center">
                        <Button onClick={() => setAccountOpen(true)} className="bg-blue-600 hover:bg-blue-500">
                            {truncateAddress(address as `0x${string}`)}
                        </Button>
                    </div>
                ) : (
                    <Button onClick={() => setConnectWalletOpen(true)} className="bg-blue-600 hover:bg-blue-500">
                        Login
                    </Button>
                )}
            </div>

            {/* Wallet Options Modal */}
            {isConnectWalletOpen && (
                <div className="fixed p-4 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#1f1f1f] rounded-2xl p-6 w-full max-w-md shadow-lg">
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

            {/* Account Modal */}
            {isAccountOpen && address && (
                <div className="fixed p-4 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#1f1f1f] rounded-2xl p-6 w-full max-w-md shadow-lg">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl text-gray-500 font-semibold">Account: {truncateAddress(address)}</h2>
                            <button
                                onClick={() => setAccountOpen(false)}
                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                            >
                                ✕
                            </button>
                        </div>
                        <p className="text-xl text-gray-500 mb-3 font-semibold">Network: {chain?.name}</p>
                        <p className="text-xl text-gray-500 mb-4 font-semibold">Balance: {parseFloat(formatEther(balance.data?.value as bigint)).toFixed(3)} {balance.data?.symbol}</p>
                        <Button onClick={() => disconnect()}>
                            Disconnect
                        </Button>
                    </div>
                </div>
            )}

        </header>
    );
};

export default Navbar;
