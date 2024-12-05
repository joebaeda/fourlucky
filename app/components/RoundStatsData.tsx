"use client";

import { abi } from "@/lib/contract";
import { useReadContract } from "wagmi";
import { formatEther } from "viem";
import Loading from "./Loading";

const FourNumberContract = process.env.NEXT_PUBLIC_FOURLUCKY_CONTRACT;

const RoundStatsData = () => {

    // Fetch the current round number
    const { data: currentRoundData } = useReadContract({
        abi,
        address: FourNumberContract as "0x{string}",
        functionName: "currentRound",
    });

    const currentRound = currentRoundData ? Number(currentRoundData) : null;
    
    const { data, isFetching, error } = useReadContract({
        abi,
        address: FourNumberContract as "0x{string}",
        functionName: "getRoundInfo",
        args: [BigInt(currentRound || 1)], // Convert roundNumber to BigInt for the contract
    });
    
    const totalPlayers = data?.[1] ? data[1].toString() : "N/A";
    const totalBetAmount = data?.[2] ? formatEther(data[2]) : "N/A";

    return (
        <div className="w-full my-8 flex flex-col sm:flex-row gap-4">

            {/* Display Info */}
            {isFetching ? (
                <Loading />
            ) : error ? (
                <Loading />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                        <h2 className="text-lg font-semibold text-gray-700">Total Players</h2>
                        <p className="text-xl font-bold text-gray-900">{totalPlayers}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                        <h2 className="text-lg font-semibold text-gray-700">Total Bet Amount</h2>
                        <p className="text-xl font-bold text-gray-900">{totalBetAmount} ETH</p>
                    </div>
                </div>
            )}

            {/* Decorative Effects */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-300 rounded-full blur-xl" />
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-400 rounded-full blur-2xl" />
            </div>
        </div>
    );
};

export default RoundStatsData;
