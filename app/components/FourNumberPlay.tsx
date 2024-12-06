"use client";

import { useCallback, useEffect, useState } from "react";
import sdk from "@farcaster/frame-sdk";
import {
    BaseError,
    useAccount,
    useChainId,
    useWaitForTransactionReceipt,
    useWriteContract,
} from "wagmi";
import { parseEther } from "viem";

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

const FourNumberContract = "0xFf54b30EC87a0e82814f214EEeDd258867374b4C" as `0x${string}`;

const FourNumberPlay = () => {
    const [isSDKLoaded, setIsSDKLoaded] = useState(false);
    const [userNumbers, setUserNumbers] = useState<number[]>([]);
    const [etherAmount, setTokenBetAmount] = useState('');

    const { isConnected } = useAccount();
    const chainId = useChainId();

    const parsedEther = etherAmount
        ? parseEther(etherAmount)
        : undefined;

    const { data: hash, error, isPending, writeContract } = useWriteContract()

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        })

    useEffect(() => {
        const load = async () => {
            sdk.actions.ready();
        };
        if (sdk && !isSDKLoaded) {
            setIsSDKLoaded(true);
            load();
        }
    }, [isSDKLoaded]);

    useEffect(() => {
        if (isConfirmed) {
            setTokenBetAmount("")
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

    if (!isSDKLoaded) {
        return <></>;
    }

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

                {/* Ether amount input */}
                <input
                    type="text"
                    id="etherAmount"
                    name="etherAmount"
                    className="border-none placeholder:opacity-25 p-3 w-full bg-[#1f1f1f] rounded-2xl text-gray-500 focus:outline-none"
                    placeholder="0.0004"
                    value={etherAmount}
                    disabled={userNumbers.length !== maxNumbers}
                    onChange={(e) => setTokenBetAmount(e.target.value)}
                />

                {/* Place Bet button */}
                <Button
                    className="mt-5"
                    disabled={!isConnected || chainId !== base.id || isPending || !etherAmount || !userNumbers}
                    onClick={() =>
                        writeContract({
                            abi,
                            chainId: base.id, //8453
                            address: FourNumberContract as `0x${string}`,
                            functionName: 'placeBet',
                            value: parsedEther,
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
                            Place your bet using minimum 0.0004 &#40;ETH&#41; to play this game
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
