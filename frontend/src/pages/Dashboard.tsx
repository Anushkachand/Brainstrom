import { Link } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, Search, GraduationCap, Sparkles, ArrowRight, TrendingUp, Clock, Star } from "lucide-react";

const student = {
  name: "Alex Johnson",
  branch: "Computer Science",
  year: "3rd Year",
  skills: ["React", "Python", "Machine Learning", "Node.js"],
};

const suggestedProjects = [
  { title: "AI-Powered Study Planner", skills: ["Python", "ML", "React"], deadline: "May 2026", difficulty: "Intermediate" },
  { title: "Smart Campus Navigation", skills: ["React Native", "Maps API"], deadline: "Jun 2026", difficulty: "Advanced" },
  { title: "Peer Tutoring Platform", skills: ["Node.js", "React", "WebRTC"], deadline: "Apr 2026", difficulty: "Beginner" },
];

const quickLinks = [
  { to: "/teams", label: "Find Team", icon: Users, color: "bg-primary/10 text-primary", glow: "hover:shadow-primary/20" },
  { to: "/projects", label: "Browse Projects", icon: Briefcase, color: "bg-accent/10 text-accent", glow: "hover:shadow-accent/20" },
  { to: "/search", label: "Search Peers", icon: Search, color: "bg-success/10 text-success", glow: "hover:shadow-success/20" },
  { to: "/mentorship", label: "Find Mentor", icon: GraduationCap, color: "bg-warning/10 text-warning", glow: "hover:shadow-warning/20" },
];

const stats = [
  { label: "Active Projects", value: "12", icon: Briefcase, trend: "+3 this week" },
  { label: "Team Members", value: "48", icon: Users, trend: "+5 new" },
  { label: "Mentors Available", value: "8", icon: Star, trend: "2 online" },
];

export default function Dashboard() {
  return (
    <AppLayout>
      {/* Hero */}
      <div className="rounded-2xl gradient-hero animate-gradient p-6 md:p-8 mb-8 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Welcome back, {student.name}! 👋</h1>
            <p className="mt-1 opacity-80">{student.branch} • {student.year}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {student.skills.map((s) => (
                <Badge key={s} variant="secondary" className="bg-primary-foreground/15 text-primary-foreground border-0 backdrop-blur-sm">
                  {s}
                </Badge>
              ))}
            </div>
          </div>
          <Link to="/teams">
            <Button variant="secondary" size="lg" className="gap-2 shadow-lg bg-primary-foreground/15 text-primary-foreground border-0 backdrop-blur-sm hover:bg-primary-foreground/25">
              <Users className="h-4 w-4" /> Find Team
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="glass card-hover">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="text-xs text-success flex items-center gap-0.5 mt-0.5">
                    <TrendingUp className="h-3 w-3" />{stat.trend}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {quickLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link key={link.to} to={link.to}>
              <Card className={`glass card-hover cursor-pointer group ${link.glow} hover:shadow-xl`}>
                <CardContent className="flex flex-col items-center gap-3 p-6">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${link.color} transition-transform group-hover:scale-110`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Suggested Projects */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-5 w-5 text-accent" />
          <h2 className="text-xl font-semibold text-foreground">Suggested Projects</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {suggestedProjects.map((project) => (
            <Card key={project.title} className="glass card-hover group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                    {project.difficulty}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {project.deadline}
                  </div>
                </div>
                <CardTitle className="text-base mt-2">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.skills.map((s) => (
                    <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                  ))}
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
