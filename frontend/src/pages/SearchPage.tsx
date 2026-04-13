import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const allStudents = [
  { name: "Priya Sharma", branch: "CS", year: "3", skills: ["React", "UI/UX", "Figma"] },
  { name: "Rahul Verma", branch: "ECE", year: "3", skills: ["Python", "IoT", "Arduino"] },
  { name: "Sneha Patel", branch: "CS", year: "2", skills: ["Node.js", "MongoDB", "AWS"] },
  { name: "Arjun Kumar", branch: "ME", year: "4", skills: ["Python", "ML", "Data Science"] },
  { name: "Kavya Reddy", branch: "CS", year: "3", skills: ["Flutter", "Firebase", "Dart"] },
  { name: "Vikram Singh", branch: "EE", year: "2", skills: ["C++", "Embedded", "MATLAB"] },
  { name: "Anita Desai", branch: "CS", year: "4", skills: ["Java", "Spring Boot", "Docker"] },
  { name: "Mohammed Ali", branch: "ECE", year: "3", skills: ["VHDL", "FPGA", "Signal Processing"] },
];

const avatarColors = [
  "gradient-primary",
  "bg-accent text-accent-foreground",
  "bg-success text-success-foreground",
  "bg-warning text-warning-foreground",
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [branch, setBranch] = useState("all");
  const [year, setYear] = useState("all");
  const [skill, setSkill] = useState("all");

  const allSkills = [...new Set(allStudents.flatMap((s) => s.skills))].sort();

  const filtered = allStudents.filter((s) => {
    if (query && !s.name.toLowerCase().includes(query.toLowerCase()) && !s.skills.some((sk) => sk.toLowerCase().includes(query.toLowerCase()))) return false;
    if (branch !== "all" && s.branch !== branch) return false;
    if (year !== "all" && s.year !== year) return false;
    if (skill !== "all" && !s.skills.includes(skill)) return false;
    return true;
  });

  return (
    <AppLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <SlidersHorizontal className="h-6 w-6 text-primary" /> Search & Filters
        </h1>

        <Card className="glass glow-primary">
          <CardContent className="p-5 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or skill..."
                className="pl-10 bg-muted/50 border-border/50 h-11"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">Branch</Label>
                <Select value={branch} onValueChange={setBranch}>
                  <SelectTrigger className="bg-muted/50 border-border/50"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Branches</SelectItem>
                    <SelectItem value="CS">Computer Science</SelectItem>
                    <SelectItem value="ECE">Electronics</SelectItem>
                    <SelectItem value="ME">Mechanical</SelectItem>
                    <SelectItem value="EE">Electrical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">Year</Label>
                <Select value={year} onValueChange={setYear}>
                  <SelectTrigger className="bg-muted/50 border-border/50"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="1">1st Year</SelectItem>
                    <SelectItem value="2">2nd Year</SelectItem>
                    <SelectItem value="3">3rd Year</SelectItem>
                    <SelectItem value="4">4th Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">Skill</Label>
                <Select value={skill} onValueChange={setSkill}>
                  <SelectTrigger className="bg-muted/50 border-border/50"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Skills</SelectItem>
                    {allSkills.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-sm text-muted-foreground">
          <span className="text-foreground font-semibold">{filtered.length}</span> results found
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((s, i) => (
            <Card key={s.name} className="glass card-hover group">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-11 w-11 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                    <AvatarFallback className={`${avatarColors[i % avatarColors.length]} text-sm font-semibold`}>
                      {s.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{s.name}</CardTitle>
                    <CardDescription>{s.branch} • {s.year}{s.year === "1" ? "st" : s.year === "2" ? "nd" : s.year === "3" ? "rd" : "th"} Year</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {s.skills.map((sk) => (
                    <Badge key={sk} variant="secondary" className="text-xs">{sk}</Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full gap-1.5 border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all" onClick={() => toast.success(`Request sent to ${s.name}`)}>
                  <UserPlus className="h-3.5 w-3.5" /> Connect
                </Button>
              </CardContent>
            </Card>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No students found matching your filters.
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
