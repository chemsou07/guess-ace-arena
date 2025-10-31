import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ScoreBoard = () => {
  const [team1Name, setTeam1Name] = useState("الفريق الأول");
  const [team2Name, setTeam2Name] = useState("الفريق الثاني");
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const adjustScore = (team: 1 | 2, amount: number) => {
    if (team === 1) {
      setTeam1Score(Math.max(0, team1Score + amount));
    } else {
      setTeam2Score(Math.max(0, team2Score + amount));
    }
  };

  return (
    <div className="glass-morphism rounded-2xl p-6 mb-8 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold neon-text">لوحة النقاط</h2>
        <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full">
              <Settings className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="glass-morphism">
            <DialogHeader>
              <DialogTitle>إعدادات الفرق</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label htmlFor="team1">اسم الفريق الأول</Label>
                <Input
                  id="team1"
                  value={team1Name}
                  onChange={(e) => setTeam1Name(e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="team2">اسم الفريق الثاني</Label>
                <Input
                  id="team2"
                  value={team2Name}
                  onChange={(e) => setTeam2Name(e.target.value)}
                  className="mt-2"
                />
              </div>
              <Button
                onClick={() => setIsSettingsOpen(false)}
                className="w-full"
              >
                حفظ
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Team 1 */}
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">{team1Name}</h3>
            <div className="text-6xl font-bold text-primary neon-text animate-glow-pulse">
              {team1Score}
            </div>
          </div>
          <div className="flex gap-2 justify-center">
            <Button
              onClick={() => adjustScore(1, -1)}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <Minus className="h-5 w-5" />
            </Button>
            <Button
              onClick={() => adjustScore(1, 1)}
              size="icon"
              className="rounded-full bg-primary hover:bg-primary/90"
            >
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Team 2 */}
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">{team2Name}</h3>
            <div className="text-6xl font-bold text-secondary neon-text animate-glow-pulse">
              {team2Score}
            </div>
          </div>
          <div className="flex gap-2 justify-center">
            <Button
              onClick={() => adjustScore(2, -1)}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <Minus className="h-5 w-5" />
            </Button>
            <Button
              onClick={() => adjustScore(2, 1)}
              size="icon"
              className="rounded-full bg-secondary hover:bg-secondary/90"
            >
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
