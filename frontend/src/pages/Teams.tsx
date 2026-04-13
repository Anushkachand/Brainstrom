import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, UserPlus, Sparkles, Zap } from "lucide-react";
import { toast } from "sonner";

const teammates = [
  { name: "Priya Sharma", branch: "CS", year: "3rd", skills: ["React", "UI/UX", "Figma"], interests: "Web Dev, Design", match: 92 },
  { name: "Rahul Verma", branch: "ECE", year: "3rd", skills: ["Python", "IoT", "Arduino"], interests: "Embedded, AI", match: 87 },
  { name: "Sneha Patel", branch: "CS", year: "2nd", skills: ["Node.js", "MongoDB", "AWS"], interests: "Backend, Cloud", match: 84 },
  { name: "Arjun Kumar", branch: "ME", year: "4th", skills: ["Python", "ML", "Data Science"], interests: "AI, Robotics", match: 78 },
  { name: "Kavya Reddy", branch: "CS", year: "3rd", skills: ["Flutter", "Firebase", "Dart"], interests: "Mobile Dev", match: 75 },
  { name: "Vikram Singh", branch: "EE", year: "2nd", skills: ["C++", "Embedded", "MATLAB"], interests: "Automation", match: 71 },
];

function getMatchColor(match: number) {
  if (match >= 90) return "text-success border-success/30 bg-success/10";
  if (match >= 80) return "text-primary border-primary/30 bg-primary/10";
  return "text-warning border-warning/30 bg-warning/10";
}

export default function Teams() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" /> Team Matching
            </h1>
            <p className="text-muted-foreground">Find the perfect teammates for your next project</p>
          </div>
          <Button variant="gradient" size="lg" className="gap-2 shadow-lg shadow-primary/25" onClick={() => toast.success("Searching for teams...")}>
            <Users className="h-4 w-4" /> Find Team
          </Button>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5 text-accent" />
          <h2 className="text-lg font-semibold text-foreground">Suggested Teammates</h2>
          <Badge variant="secondary" className="ml-auto">{teammates.length} found</Badge>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teammates.map((t) => (
            <Card key={t.name} className="glass card-hover group">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-11 w-11 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                    <AvatarFallback className="gradient-primary text-primary-foreground text-sm font-semibold">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base truncate">{t.name}</CardTitle>
                    <CardDescription>{t.branch} • {t.year} Year</CardDescription>
                  </div>
                  <Badge className={`shrink-0 font-bold ${getMatchColor(t.match)}`}>
                    {t.match}%
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1.5">Skills</p>
                  <div className="flex flex-wrap gap-1.5">
                    {t.skills.map((s) => (
                      <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1">Interests</p>
                  <p className="text-sm text-foreground">{t.interests}</p>
                </div>
                <Button variant="outline" size="sm" className="w-full gap-1.5 border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all" onClick={() => toast.success(`Request sent to ${t.name}`)}>
                  <UserPlus className="h-3.5 w-3.5" /> Connect
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
