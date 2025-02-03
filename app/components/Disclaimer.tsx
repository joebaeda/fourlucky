import { ReactNode } from "react";

interface DisclaimerProps {
    children: ReactNode;
}

const Disclaimer: React.FC<DisclaimerProps> = ({ children }) => {
    return (
        <div className="fixed inset-0 mx-auto overflow-hidden flex justify-center items-center flex-col w-full max-w-2xl font-mono dark:text-white text-gray-500">
            <div className="relative overflow-y-auto custom-scroll bg-gray-50 dark:bg-[#3c3c3c] min-h-96 m-4 p-4 rounded-2xl custom-scroll">
                <h2 className="text-2xl font-extrabold text-center mx-auto mb-4">Disclaimer</h2>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <span className="mr-2 text-green-500">
                            &#10003;
                        </span> This game operates on the $LUCKY Token and is subject to the terms of the protocol, including betting requirements, prize distribution, and protocol fees.
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-green-500">
                            &#10003;
                        </span> Players must hold a minimum amount of LUCKY tokens to participate.
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-green-500">
                            &#10003;
                        </span> By engaging in this game, users acknowledge that the outcomes are generated through a random number mechanism, and there are risks associated with betting, including the possibility of losing tokens.
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-green-500">
                            &#10003;
                        </span> The protocol fee will be deducted from the prize pool as specified in the terms.
                    </li>
                </ul>
                <p className="font-bold my-4">
                    By using this app, you agree to all terms and conditions set forth by the platform.
                </p>
                {children}
            </div>
        </div>
    )
}

export default Disclaimer;