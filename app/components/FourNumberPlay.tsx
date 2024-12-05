"use client";

import { useCallback, useEffect, useState } from "react";
import sdk from "@farcaster/frame-sdk";
import {
    BaseError,
    useAccount,
    useWaitForTransactionReceipt,
    useWriteContract,
} from "wagmi";
import { parseEther } from "viem";

import { Button } from "./Button";
import { abi } from "@/lib/contract";
import Loading from "./Loading";

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
import Image from "next/image";

const FourNumberContract = process.env.NEXT_PUBLIC_FOURLUCKY_CONTRACT;

const FourNumberPlay = () => {
    const [isSDKLoaded, setIsSDKLoaded] = useState(false);
    const [userNumbers, setUserNumbers] = useState<number[]>([]);
    const [etherAmount, setTokenBetAmount] = useState('');

    const { isConnected } = useAccount();

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
        return <Loading />;
    }

    return (
        <div className="w-full flex flex-col sm:flex-row gap-4">
            {/* Selected Numbers */}
            <div className="basis-1/2 grid grid-cols-2 gap-4 bg-gray-50 rounded-2xl p-4">
    {Array.from({ length: 4 }).map((_, index) => {
        const number = userNumbers[index]; // Get the number if it exists
        return (
            <div
                key={index}
                className="flex justify-center items-center bg-gray-200 rounded-xl"
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
                    <Image
                        src="/placeholder.webp"
                        width={220}
                        height={200}
                        priority
                        alt="Placeholder"
                        className="object-contain rounded-xl"
                    />
                )}
            </div>
        );
    })}
</div>



            {/* Number selection */}
            <div className="basis-1/2 flex flex-col">
                <div className="grid grid-cols-5 gap-4 bg-gray-50 p-4 rounded-2xl">
                    {availableNumbers.map((number) => (
                        <div
                            key={number}
                            className={`w-12 h-12 flex justify-center items-center m-auto rounded-full cursor-pointer ${userNumbers.includes(number) ? 'bg-orange-400' : 'bg-gray-200'
                                }`}
                            onClick={() => handleNumberSelect(number)}
                        >
                            <span className={`text-2xl font-bold ${userNumbers.includes(number) ? 'text-white' : 'text-black'}`}>
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
                    className="border placeholder:opacity-25 p-3 w-full mt-4 rounded-2xl bg-gray-50 text-gray-700 focus:outline-none"
                    placeholder="0.0004"
                    value={etherAmount}
                    disabled={userNumbers.length !== maxNumbers}
                    onChange={(e) => setTokenBetAmount(e.target.value)}
                />

                {/* Place Bet button */}
                <Button
                    disabled={!isConnected || isPending}
                    onClick={() =>
                        writeContract({
                            abi,
                            address: FourNumberContract as '0x{string}',
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
                        <p className="my-2 text-xl text-green-600 font-extrabold">
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

                <div className="w-full mt-10 rounded-2xl bg-gray-50 p-4 text-gray-500">
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
