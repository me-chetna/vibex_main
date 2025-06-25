import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code2, Users, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 text-center">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
          Welcome to
          <span className="ml-4 bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
            VibeX Hub
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Your central hub for innovation, connection, and challenge. Dive into
          the future of collaboration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full">
          <Card className="flex flex-col border-primary/20 hover:border-primary/60 transition-colors duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/80">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Code2 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle>HackUp</CardTitle>
              <CardDescription>
                Collaborate on projects, join hackathons, and bring your ideas
                to life.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow"></CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild variant="outline">
                <Link href="/hackup">Explore Hackathons</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border-primary/20 hover:border-primary/60 transition-colors duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/80">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle>VConnect</CardTitle>
              <CardDescription>
                Network with peers, find mentors, and build your professional
                circle.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow"></CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild variant="outline">
                <Link href="/vconnect">Start Connecting</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border-primary/20 hover:border-primary/60 transition-colors duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/80">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle>Quiz</CardTitle>
              <CardDescription>
                Test your knowledge, challenge friends, and climb the
                leaderboards.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow"></CardContent>
            <CardFooter className="flex justify-center">
              <Button asChild variant="outline">
                <Link href="/quiz">Take a Quiz</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
