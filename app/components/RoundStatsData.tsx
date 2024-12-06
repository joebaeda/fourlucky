"use client";

import { abi } from "@/lib/contract";
import { useReadContract } from "wagmi";
import { formatEther } from "viem";
import CountdownTimer from "./CountdownTimer";

const FourNumberContract = process.env.NEXT_PUBLIC_FOURLUCKY_CONTRACT as `0x${string}`;

const RoundStatsData = () => {
    // Fetch the current round number
    const { data: currentRoundData } = useReadContract({
        abi,
        address: FourNumberContract as `0x${string}`,
        functionName: "currentRound",
    });

    const currentRound = currentRoundData ? Number(currentRoundData) : null;

    // Fetch the current round information
    const { data } = useReadContract({
        abi,
        address: FourNumberContract as `0x${string}`,
        functionName: "getRoundInfo",
        args: [BigInt(currentRound || 1)], // Convert round number to BigInt for the contract
    });

    const endTime = data?.[0] ? Number(data[0]) * 1000 : null; // Convert seconds to milliseconds
    const totalPlayers = data?.[1] ? data[1].toString() : "0";
    const totalBetAmount = data?.[2] ? formatEther(data[2]) : "0";


    return (
        <div className="w-full my-8 flex flex-col sm:flex-row gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                <div className="bg-gradient-to-r border-orange-500 from-red-200 to-yellow-200 p-4 rounded-2xl shadow-md text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Remaining Time</h2>
                    {endTime && endTime > Date.now() ? (
                        <CountdownTimer targetDate={new Date(endTime).toISOString()} />
                    ) : (
                        <p>Round Expired</p>
                    )}
                </div>
                <div className="bg-gradient-to-r from-red-200 to-yellow-200 p-4 rounded-2xl shadow-md text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Total Players</h2>
                    <p className="text-2xl font-bold text-white">{totalPlayers}</p>
                </div>
                <div className="bg-gradient-to-r from-red-200 to-yellow-200 p-4 rounded-2xl shadow-md text-center">
                    <h2 className="text-lg font-semibold text-gray-700">Total Bet Amount</h2>
                    <p className="text-2xl font-bold text-white">{totalBetAmount} ETH</p>
                </div>
            </div>

            {/* Decorative Effects */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-300 rounded-full blur-xl" />
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-400 rounded-full blur-2xl" />
            </div>
        </div>
    );
};

export default RoundStatsData;
