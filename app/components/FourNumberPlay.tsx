"use client";

import { useCallback, useEffect, useState } from "react";
import sdk from "@farcaster/frame-sdk";
import {
    BaseError,
    useAccount,
    useChainId,
    useReadContract,
    useWaitForTransactionReceipt,
    useWriteContract,
} from "wagmi";

import { Button } from "./Button";
import { abi } from "@/lib/contract";

import ZeroNumber from '../number/Zero';
import NumberTwo from '../number/Two';
import NumberOne from '../number/One';
import NumberThree from '../number/Three';
import NumberFour from '../number/Four';
import NumberFive from '../number/Five';
import NumberSix from '../number/Six';
import NumberSeven from '../number/Seven';
import NumberEight from '../number/Eight';
import NumberNine from '../number/Nine';
import { base } from "wagmi/chains";

const FourNumberContract = "0xe25C578b2F087381B713F482Bf3AA954cff2125e" as `0x${string}`;

const FourNumberPlay = () => {
    const [userNumbers, setUserNumbers] = useState<number[]>([]);

    const { isConnected } = useAccount();
    const chainId = useChainId();

    const { data: hash, error, isPending, writeContract } = useWriteContract()

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        })

    useEffect(() => {
        if (isConfirmed) {
            setUserNumbers([]);
        }
    }, [isConfirmed])

    const linkToBaseScan = useCallback((hash?: string) => {
        if (hash) {
            sdk.actions.openUrl(`https://basescan.org/tx/${hash}`);
        }
    }, []);

    const availableNumbers = Array.from({ length: 10 }, (_, i) => i); // Numbers from 0 to 9
    const maxNumbers = 4; // Max allowed numbers to select

    const handleNumberSelect = (number: number) => {
        if (userNumbers.includes(number)) {
            setUserNumbers(userNumbers.filter((num) => num !== number));
        } else if (userNumbers.length < maxNumbers) {
            setUserNumbers([...userNumbers, number]);
        }
    };

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

    return (
        <div className="w-full flex flex-col sm:flex-row gap-4">
            {/* Selected Numbers */}
            <div className="basis-1/2 grid grid-cols-2 gap-4 bg-[#282828] rounded-2xl p-4">
                {Array.from({ length: 4 }).map((_, index) => {
                    const number = userNumbers[index]; // Get the number if it exists
                    return (
                        <div
                            key={index}
                            className="flex justify-center items-center rounded-xl"
                        >
                            {number !== undefined ? (
                                // Render the appropriate number component
                                number === 0 ? (
                                    <ZeroNumber />
                                ) : number === 1 ? (
                                    <NumberOne />
                                ) : number === 2 ? (
                                    <NumberTwo />
                                ) : number === 3 ? (
                                    <NumberThree />
                                ) : number === 4 ? (
                                    <NumberFour />
                                ) : number === 5 ? (
                                    <NumberFive />
                                ) : number === 6 ? (
                                    <NumberSix />
                                ) : number === 7 ? (
                                    <NumberSeven />
                                ) : number === 8 ? (
                                    <NumberEight />
                                ) : (
                                    <NumberNine />
                                )
                            ) : (
                                // Render a placeholder for unselected numbers
                                <ZeroNumber />
                            )}
                        </div>
                    );
                })}
            </div>



            {/* Number selection */}
            <div className="basis-1/2 flex flex-col p-4 bg-[#282828] rounded-2xl">
                <div className="grid grid-cols-5 gap-4 mb-4">
                    {availableNumbers.map((number) => (
                        <div
                            key={number}
                            className={`w-12 h-12 flex justify-center items-center m-auto rounded-full cursor-pointer ${userNumbers.includes(number) ? 'bg-orange-600' : 'bg-[#1f1f1f]'
                                }`}
                            onClick={() => handleNumberSelect(number)}
                        >
                            <span className={`text-2xl font-bold ${userNumbers.includes(number) ? 'text-white' : 'text-orange-600'}`}>
                                {number}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Place Bet button */}
                {endTime && endTime > Date.now() ? (
                    <Button
                        className="mt-5"
                        disabled={!isConnected || chainId !== base.id || isPending || !userNumbers}
                        onClick={() =>
                            writeContract({
                                abi,
                                chainId: base.id, //8453
                                address: FourNumberContract as `0x${string}`,
                                functionName: 'placeBet',
                                args: [userNumbers as [number, number, number, number]],
                            })
                        }
                    >
                        {isPending
                            ? "Confirming..."
                            : isConfirming
                                ? "Waiting for confirmation..."
                                : "Lock and Bet"}
                    </Button>
                ) : (
                    <Button
                        className="mt-5"
                        disabled={!isConnected || chainId !== base.id || isPending}
                        onClick={() =>
                            writeContract({
                                abi,
                                chainId: base.id, //8453
                                address: FourNumberContract as `0x${string}`,
                                functionName: 'draw',
                            })
                        }
                    >
                        {isPending
                            ? "Confirming..."
                            : isConfirming
                                ? "Waiting for confirmation..."
                                : "Draw"}
                    </Button>
                )}

                {isConfirmed && (
                    <>
                        <p className="my-5 text-md text-green-600 font-extrabold">
                            🎉 Transaction Confirmed!
                        </p>
                        <Button
                            onClick={() => linkToBaseScan(hash)}
                        >
                            View on Basescan
                        </Button>
                    </>
                )}
                {error && (
                    <div>Error: {(error as BaseError).shortMessage || error.message}</div>
                )}

                <div className="w-full mt-10 rounded-2xl p-4 text-gray-500">
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span className="mr-2 text-green-500">
                                &#10003;
                            </span>
                            Select 4 lucky numbers between 0-9 &#40;e.g., 1234&#41;
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 text-green-500">
                                &#10003;
                            </span>
                            Each round there will only be one winner and they will be entitled to 60% of the total prize
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 text-green-500">
                                &#10003;
                            </span>
                            This game is Free but you have to hold 500K $LUCKY to be able to play and get prizes
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 text-green-500">
                                &#10003;
                            </span>
                            Prizes Pool will continue to increase and will return to 100K after finding a winner
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 text-green-500">
                                &#10003;
                            </span>
                            Click the button and wait for the round to end to see the result
                        </li>
                    </ul>
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

export default FourNumberPlay;
