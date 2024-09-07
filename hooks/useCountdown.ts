import { useState, useEffect, useCallback } from "react";

const formatNumber = (num: number) => num.toString().padStart(2, "0");

const useCountdown = (targetDate: Date) => {
  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    let timeLeft = {
      days: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: formatNumber(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ),
      minutes: formatNumber(
        Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      ),
      seconds: formatNumber(Math.floor((difference % (1000 * 60)) / 1000)),
    };

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return timeLeft;
};

export default useCountdown;
