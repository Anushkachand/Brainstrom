import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Calendar, Briefcase, ArrowRight, Users } from "lucide-react";
import { toast } from "sonner";

const initialProjects = [
  { title: "AI Study Planner", desc: "An intelligent planner that uses ML to optimize study schedules", skills: ["Python", "ML", "React"], deadline: "2026-05-15", members: 3 },
  { title: "Campus Navigator", desc: "AR-based indoor navigation system for university buildings", skills: ["React Native", "ARKit", "Node.js"], deadline: "2026-06-01", members: 4 },
  { title: "Green Energy Monitor", desc: "IoT dashboard to monitor solar panels on campus", skills: ["IoT", "Python", "Dashboard"], deadline: "2026-04-30", members: 2 },
  { title: "Peer Review System", desc: "Anonymous peer review platform for student assignments", skills: ["React", "Node.js", "PostgreSQL"], deadline: "2026-05-20", members: 5 },
];

export default function Projects() {
  const [projects, setProjects] = useState(initialProjects);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [skills, setSkills] = useState("");
  const [deadline, setDeadline] = useState("");
  const [open, setOpen] = useState(false);

  const handlePost = () => {
    if (!title.trim()) return toast.error("Title is required");
    setProjects([{ title, desc, skills: skills.split(",").map((s) => s.trim()).filter(Boolean), deadline, members: 1 }, ...projects]);
    setTitle(""); setDesc(""); setSkills(""); setDeadline("");
    setOpen(false);
    toast.success("Project posted!");
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Projects & Opportunities</h1>
            <p className="text-muted-foreground">Discover or post project ideas</p>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="gradient" size="lg" className="gap-2 shadow-lg shadow-primary/25">
                <Plus className="h-4 w-4" /> Post Project
              </Button>
            </DialogTrigger>
            <DialogContent className="glass border-border/30">
              <DialogHeader><DialogTitle>Post a New Project</DialogTitle></DialogHeader>
              <div className="space-y-4 mt-2">
                <div className="space-y-2">
                  <Label>Project Title</Label>
                  <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Smart Attendance System" className="bg-muted/50 border-border/50" />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea value={desc} onChange={(e) => setDesc(e.target.value)} rows={3} placeholder="Describe your project idea..." className="bg-muted/50 border-border/50" />
                </div>
                <div className="space-y-2">
                  <Label>Required Skills (comma-separated)</Label>
                  <Input value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="React, Python, ML" className="bg-muted/50 border-border/50" />
                </div>
                <div className="space-y-2">
                  <Label>Deadline</Label>
                  <Input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} className="bg-muted/50 border-border/50" />
                </div>
                <Button variant="gradient" className="w-full shadow-lg shadow-primary/25" onClick={handlePost}>Post Project</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <Card key={i} className="glass card-hover group">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base">{p.title}</CardTitle>
                    <CardDescription className="line-clamp-2 mt-1">{p.desc}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {p.skills.map((s) => (
                    <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {p.deadline ? new Date(p.deadline).toLocaleDateString() : "No deadline"}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    {p.members} member{p.members > 1 ? "s" : ""}
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="gap-1 p-0 text-primary group-hover:translate-x-1 transition-transform">
                  View Details <ArrowRight className="h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
