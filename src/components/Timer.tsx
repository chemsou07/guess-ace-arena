import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";

interface TimerProps {
  onTimeUp?: () => void;
}

export const Timer = ({ onTimeUp }: TimerProps) => {
  const [seconds, setSeconds] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            onTimeUp?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds, onTimeUp]);

  const reset = () => {
    setSeconds(30);
    setIsRunning(false);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const getTimerColor = () => {
    if (seconds <= 5) return "text-accent";
    if (seconds <= 10) return "text-warning";
    return "text-primary";
  };

  return (
    <div className="fixed bottom-6 left-6 glass-morphism rounded-2xl p-4 text-center space-y-3 z-50 shadow-2xl">
      <h3 className="text-lg font-semibold">المؤقت</h3>
      <div className={`text-5xl font-bold ${getTimerColor()} neon-text transition-colors duration-300`}>
        {seconds}
      </div>
      <div className="flex gap-2 justify-center">
        <Button
          onClick={toggleTimer}
          size="icon"
          className="rounded-full w-10 h-10"
          variant={isRunning ? "secondary" : "default"}
        >
          {isRunning ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>
        <Button
          onClick={reset}
          size="icon"
          variant="outline"
          className="rounded-full w-10 h-10"
        >
          <RotateCcw className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
