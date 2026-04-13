import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { GraduationCap, Mail, Star, CircleDot } from "lucide-react";
import { toast } from "sonner";

const mentors = [
  { name: "Dr. Ananya Iyer", role: "Professor, CS Dept", expertise: ["Machine Learning", "NLP", "Deep Learning"], rating: 4.9, available: true },
  { name: "Rohan Mehta", role: "Senior, CS (4th Year)", expertise: ["Full Stack", "React", "System Design"], rating: 4.7, available: true },
  { name: "Prof. Suresh Nair", role: "HOD, ECE Dept", expertise: ["IoT", "Embedded Systems", "VLSI"], rating: 4.8, available: false },
  { name: "Deepika Rao", role: "Senior, CS (4th Year)", expertise: ["Cloud", "DevOps", "AWS", "Docker"], rating: 4.6, available: true },
  { name: "Prof. Ramesh Gupta", role: "Professor, ME Dept", expertise: ["Robotics", "CAD", "3D Printing"], rating: 4.5, available: true },
  { name: "Neha Joshi", role: "Alumni, Software Engineer", expertise: ["Interview Prep", "DSA", "Career"], rating: 4.9, available: true },
];

export default function Mentorship() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Mentorship</h1>
          <p className="text-muted-foreground">Connect with experienced mentors and seniors</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mentors.map((m) => (
            <Card key={m.name} className="glass card-hover group">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                    <AvatarFallback className="gradient-primary text-primary-foreground font-semibold">
                      {m.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base truncate">{m.name}</CardTitle>
                    <CardDescription className="truncate flex items-center gap-1.5">
                      {m.available && <CircleDot className="h-3 w-3 text-success fill-success" />}
                      {m.role}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-warning fill-warning" />
                  <span className="text-sm font-medium text-foreground">{m.rating}</span>
                  <span className="text-xs text-muted-foreground">rating</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1.5">
                    <GraduationCap className="h-3.5 w-3.5 inline mr-1" />Expertise
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {m.expertise.map((e) => (
                      <Badge key={e} variant="secondary" className="text-xs">{e}</Badge>
                    ))}
                  </div>
                </div>
                <Button
                  variant={m.available ? "gradient" : "outline"}
                  size="sm"
                  className="w-full gap-1.5"
                  disabled={!m.available}
                  onClick={() => toast.success(`Mentor request sent to ${m.name}`)}
                >
                  <Mail className="h-3.5 w-3.5" />
                  {m.available ? "Request Mentor" : "Unavailable"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
