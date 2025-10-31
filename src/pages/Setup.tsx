import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

const Setup = () => {
  const [team1Name, setTeam1Name] = useState("");
  const [team2Name, setTeam2Name] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (team1Name.trim() && team2Name.trim()) {
      localStorage.setItem("team1Name", team1Name);
      localStorage.setItem("team2Name", team2Name);
      navigate("/game");
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <Card className="glass-morphism p-8 max-w-2xl w-full animate-fade-in">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 neon-text">🎮 مسابقة ديسكورد</h1>
          <p className="text-xl text-muted-foreground">أدخل أسماء الفرق للبدء</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="team1" className="text-xl font-semibold flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-team1"></span>
              الفريق الأول
            </Label>
            <Input
              id="team1"
              value={team1Name}
              onChange={(e) => setTeam1Name(e.target.value)}
              placeholder="أدخل اسم الفريق الأول"
              className="text-lg h-14"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="team2" className="text-xl font-semibold flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-team2"></span>
              الفريق الثاني
            </Label>
            <Input
              id="team2"
              value={team2Name}
              onChange={(e) => setTeam2Name(e.target.value)}
              placeholder="أدخل اسم الفريق الثاني"
              className="text-lg h-14"
            />
          </div>

          <Button
            onClick={handleStart}
            disabled={!team1Name.trim() || !team2Name.trim()}
            className="w-full h-16 text-xl font-bold rounded-xl mt-8"
            size="lg"
          >
            ابدأ المسابقة 🎯
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Setup;
