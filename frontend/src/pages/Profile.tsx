import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save, Award, Plus, X, User, Code2, Heart, FolderGit2 } from "lucide-react";
import { toast } from "sonner";

export default function Profile() {
  const [name, setName] = useState("Alex Johnson");
  const [branch, setBranch] = useState("cs");
  const [year, setYear] = useState("3");
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState(["React", "Python", "Machine Learning"]);
  const [interests, setInterests] = useState("AI, Web Development, IoT");
  const [pastProjects, setPastProjects] = useState("Built a weather prediction app using ML\nDeveloped a task management web app");
  const [achievements, setAchievements] = useState("Won Smart India Hackathon 2025\nPublished paper on NLP");

  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const removeSkill = (s: string) => setSkills(skills.filter((sk) => sk !== s));
  const handleSave = () => toast.success("Profile saved successfully!");

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Profile Header */}
        <div className="rounded-2xl gradient-primary p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="relative flex items-center gap-4">
            <div className="h-16 w-16 rounded-2xl bg-primary-foreground/15 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20">
              <User className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary-foreground">{name}</h1>
              <p className="text-primary-foreground/70 text-sm">Computer Science • 3rd Year</p>
              <div className="flex gap-2 mt-2">
                {skills.slice(0, 3).map((s) => (
                  <Badge key={s} className="bg-primary-foreground/15 text-primary-foreground border-0 text-xs">{s}</Badge>
                ))}
                {skills.length > 3 && (
                  <Badge className="bg-primary-foreground/15 text-primary-foreground border-0 text-xs">+{skills.length - 3}</Badge>
                )}
              </div>
            </div>
          </div>
        </div>

        <Card className="glass card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <User className="h-4 w-4 text-primary" />
              </div>
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} className="bg-muted/50 border-border/50" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Branch</Label>
                <Select value={branch} onValueChange={setBranch}>
                  <SelectTrigger className="bg-muted/50 border-border/50"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="ece">Electronics</SelectItem>
                    <SelectItem value="me">Mechanical</SelectItem>
                    <SelectItem value="ce">Civil</SelectItem>
                    <SelectItem value="ee">Electrical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Year</Label>
                <Select value={year} onValueChange={setYear}>
                  <SelectTrigger className="bg-muted/50 border-border/50"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1st Year</SelectItem>
                    <SelectItem value="2">2nd Year</SelectItem>
                    <SelectItem value="3">3rd Year</SelectItem>
                    <SelectItem value="4">4th Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Code2 className="h-4 w-4 text-accent" />
              </div>
              Skills & Interests
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Technical Skills</Label>
              <div className="flex gap-2">
                <Input
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  placeholder="Add a skill"
                  className="bg-muted/50 border-border/50"
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                />
                <Button type="button" size="icon" variant="outline" onClick={addSkill} className="border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {skills.map((s) => (
                  <Badge key={s} variant="secondary" className="gap-1 px-3 py-1">
                    {s}
                    <button onClick={() => removeSkill(s)} className="hover:text-destructive transition-colors"><X className="h-3 w-3" /></button>
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-1.5"><Heart className="h-3.5 w-3.5 text-destructive" /> Interests</Label>
              <Input value={interests} onChange={(e) => setInterests(e.target.value)} className="bg-muted/50 border-border/50" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-success/10 flex items-center justify-center">
                <FolderGit2 className="h-4 w-4 text-success" />
              </div>
              Past Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea rows={4} value={pastProjects} onChange={(e) => setPastProjects(e.target.value)} className="bg-muted/50 border-border/50" />
          </CardContent>
        </Card>

        <Card className="glass card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-warning/10 flex items-center justify-center">
                <Award className="h-4 w-4 text-warning" />
              </div>
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea rows={3} value={achievements} onChange={(e) => setAchievements(e.target.value)} className="bg-muted/50 border-border/50" />
          </CardContent>
        </Card>

        <Button variant="gradient" size="lg" className="w-full gap-2 shadow-lg shadow-primary/25" onClick={handleSave}>
          <Save className="h-4 w-4" /> Save Profile
        </Button>
      </div>
    </AppLayout>
  );
}
