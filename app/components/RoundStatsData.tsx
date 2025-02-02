"use client";

import { abi } from "@/lib/contract";
import { useReadContract } from "wagmi";
import CountdownTimer from "./CountdownTimer";
import { formatEther } from "viem";

const FourNumberContract = "0xe25C578b2F087381B713F482Bf3AA954cff2125e" as `0x${string}`;

const RoundStatsData = () => {
    // Fetch the prize pool
    const { data: prizePoolData } = useReadContract({
        abi,
        address: FourNumberContract as `0x${string}`,
        functionName: "prizePool",
    });

    const prizePool = prizePoolData ? formatEther(prizePoolData) : null;

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
        functionName: "getRoundData",
        args: [BigInt(currentRound || 1)], // Convert round number to BigInt for the contract
    });

    const endTime = data?.[1] ? Number(data[1]) * 1000 : null; // Convert seconds to milliseconds
    const totalPlayers = data?.[4] ? data[4].toString() : "0";


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
                    <h2 className="text-lg font-semibold text-gray-700">Prize Pool</h2>
                    <p className="text-2xl font-bold text-white">{parseFloat(prizePool as string).toFixed(0)} $LUCKY</p>
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
