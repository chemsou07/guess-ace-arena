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
    <div className="glass-morphism rounded-2xl p-6 text-center space-y-4">
      <h3 className="text-xl font-semibold">المؤقت</h3>
      <div className={`text-7xl font-bold ${getTimerColor()} neon-text transition-colors duration-300`}>
        {seconds}
      </div>
      <div className="flex gap-3 justify-center">
        <Button
          onClick={toggleTimer}
          size="icon"
          className="rounded-full w-12 h-12"
          variant={isRunning ? "destructive" : "default"}
        >
          {isRunning ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </Button>
        <Button
          onClick={reset}
          size="icon"
          variant="outline"
          className="rounded-full w-12 h-12"
        >
          <RotateCcw className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};
