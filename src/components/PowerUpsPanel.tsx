import { Button } from "@/components/ui/button";
import { PowerUp } from "@/types/powerups";
import { toast } from "sonner";

interface PowerUpsPanelProps {
  teamName: string;
  powerUps: PowerUp[];
  onUsePowerUp: (powerUpId: string) => void;
  teamColor: string;
}

export const PowerUpsPanel = ({
  teamName,
  powerUps,
  onUsePowerUp,
  teamColor,
}: PowerUpsPanelProps) => {
  const handleUsePowerUp = (powerUp: PowerUp) => {
    if (!powerUp.used) {
      onUsePowerUp(powerUp.id);
      toast.success(`${teamName} استخدم ${powerUp.name}!`, {
        description: powerUp.description,
      });
    }
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-muted-foreground text-center">
        كروت المساعدة
      </h3>
      <div className="space-y-2">
        {powerUps.map((powerUp) => (
          <Button
            key={powerUp.id}
            onClick={() => handleUsePowerUp(powerUp)}
            disabled={powerUp.used}
            variant="outline"
            className={`w-full h-auto py-3 flex flex-col items-center gap-1 ${
              powerUp.used ? "opacity-40" : "hover:scale-105"
            } transition-all`}
            style={{
              borderColor: powerUp.used ? "var(--border)" : `hsl(var(${teamColor}))`,
            }}
          >
            <span className="text-2xl">{powerUp.icon}</span>
            <span className="text-xs font-medium">{powerUp.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
