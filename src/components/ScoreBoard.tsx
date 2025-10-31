import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { PowerUpsPanel } from "./PowerUpsPanel";
import { PowerUp, initialPowerUps } from "@/types/powerups";
import { toast } from "sonner";

interface ScoreBoardProps {
  onPowerUpUsed?: (team: 1 | 2, powerUpId: string) => void;
}

export const ScoreBoard = ({ onPowerUpUsed }: ScoreBoardProps) => {
  const [team1Name, setTeam1Name] = useState("الفريق الأول");
  const [team2Name, setTeam2Name] = useState("الفريق الثاني");
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [team1PowerUps, setTeam1PowerUps] = useState<PowerUp[]>(initialPowerUps);
  const [team2PowerUps, setTeam2PowerUps] = useState<PowerUp[]>(initialPowerUps);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const savedTeam1 = localStorage.getItem("team1Name");
    const savedTeam2 = localStorage.getItem("team2Name");
    if (savedTeam1) setTeam1Name(savedTeam1);
    if (savedTeam2) setTeam2Name(savedTeam2);
  }, []);

  useEffect(() => {
    if (team1Score >= 10 && !gameOver) {
      setGameOver(true);
      toast.success(`مبروك! ${team1Name} فاز بالمسابقة!`, {
        description: "وصل الفريق إلى 10 نقاط",
        duration: 10000,
      });
    } else if (team2Score >= 10 && !gameOver) {
      setGameOver(true);
      toast.success(`مبروك! ${team2Name} فاز بالمسابقة!`, {
        description: "وصل الفريق إلى 10 نقاط",
        duration: 10000,
      });
    }
  }, [team1Score, team2Score, gameOver, team1Name, team2Name]);

  const adjustScore = (team: 1 | 2, amount: number) => {
    if (gameOver) {
      toast.error("اللعبة انتهت! الرجاء إعادة تشغيل المسابقة");
      return;
    }

    if (team === 1) {
      setTeam1Score(Math.max(0, team1Score + amount));
    } else {
      setTeam2Score(Math.max(0, team2Score + amount));
    }
  };

  const handleUsePowerUp = (team: 1 | 2, powerUpId: string) => {
    if (team === 1) {
      setTeam1PowerUps((prev) =>
        prev.map((p) => (p.id === powerUpId ? { ...p, used: true } : p))
      );
    } else {
      setTeam2PowerUps((prev) =>
        prev.map((p) => (p.id === powerUpId ? { ...p, used: true } : p))
      );
    }
    onPowerUpUsed?.(team, powerUpId);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Team 1 - Right Side */}
      <div className="glass-morphism rounded-2xl p-6 animate-slide-up order-1 lg:order-1">
        <div className="space-y-4">
          <div className="text-center pb-4 border-b border-team1/30">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-full bg-team1 animate-glow-pulse"></span>
              <h3 className="text-xl font-bold text-team1">{team1Name}</h3>
            </div>
            <div className="text-6xl font-bold text-team1 neon-text my-4">
              {team1Score}
            </div>
            <div className="flex gap-2 justify-center">
              <Button
                onClick={() => adjustScore(1, -1)}
                variant="outline"
                size="icon"
                className="rounded-full border-team1/50 hover:bg-team1/10"
              >
                <Minus className="h-5 w-5" />
              </Button>
              <Button
                onClick={() => adjustScore(1, 1)}
                size="icon"
                className="rounded-full bg-team1 hover:bg-team1/90"
              >
                <Plus className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <PowerUpsPanel
            teamName={team1Name}
            powerUps={team1PowerUps}
            onUsePowerUp={(id) => handleUsePowerUp(1, id)}
            teamColor="--team1"
          />
        </div>
      </div>

      {/* Center Score Display */}
      <div className="glass-morphism rounded-2xl p-6 flex items-center justify-center animate-fade-in order-3 lg:order-2">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-gold neon-text">لوحة النقاط</h2>
          <div className="flex items-center justify-center gap-6 text-4xl font-bold">
            <span className="text-team1">{team1Score}</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-team2">{team2Score}</span>
          </div>
          {gameOver && (
            <div className="mt-4 text-lg text-gold animate-glow-pulse">
              انتهت المسابقة!
            </div>
          )}
          {!gameOver && (
            <div className="mt-4 text-sm text-muted-foreground">
              الفوز عند 10 نقاط
            </div>
          )}
        </div>
      </div>

      {/* Team 2 - Left Side */}
      <div className="glass-morphism rounded-2xl p-6 animate-slide-up order-2 lg:order-3">
        <div className="space-y-4">
          <div className="text-center pb-4 border-b border-team2/30">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-full bg-team2 animate-glow-pulse"></span>
              <h3 className="text-xl font-bold text-team2">{team2Name}</h3>
            </div>
            <div className="text-6xl font-bold text-team2 neon-text my-4">
              {team2Score}
            </div>
            <div className="flex gap-2 justify-center">
              <Button
                onClick={() => adjustScore(2, -1)}
                variant="outline"
                size="icon"
                className="rounded-full border-team2/50 hover:bg-team2/10"
              >
                <Minus className="h-5 w-5" />
              </Button>
              <Button
                onClick={() => adjustScore(2, 1)}
                size="icon"
                className="rounded-full bg-team2 hover:bg-team2/90"
              >
                <Plus className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <PowerUpsPanel
            teamName={team2Name}
            powerUps={team2PowerUps}
            onUsePowerUp={(id) => handleUsePowerUp(2, id)}
            teamColor="--team2"
          />
        </div>
      </div>
    </div>
  );
};
