import { useEffect, useState } from "react";

interface CountdownTimerProps {
    targetDate: string; // Format: 'YYYY-MM-DDTHH:mm:ss'
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date().getTime();
            const target = new Date(targetDate).getTime();
            const difference = target - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const timer = setInterval(updateTimer, 1000);

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, [targetDate]);

    return (
        <div className="flex justify-center items-center space-x-4 text-center">
            <div className="flex flex-col">
                <span className="text-2xl font-bold">{timeLeft.days}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-2xl font-bold">{timeLeft.hours}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-2xl font-bold">{timeLeft.minutes}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-2xl font-bold">{timeLeft.seconds}</span>
            </div>
        </div>
    );
};

export default CountdownTimer;
