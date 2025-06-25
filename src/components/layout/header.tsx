import Link from "next/link";
import { MountainIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border/40">
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <MountainIcon className="h-6 w-6 text-primary" />
        <span className="ml-2 text-xl font-bold">VibeX Hub</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/hackup"
          className="text-sm font-medium hover:text-primary underline-offset-4 transition-colors"
          prefetch={false}
        >
          HackUp
        </Link>
        <Link
          href="/vconnect"
          className="text-sm font-medium hover:text-primary underline-offset-4 transition-colors"
          prefetch={false}
        >
          VConnect
        </Link>
        <Link
          href="/quiz"
          className="text-sm font-medium hover:text-primary underline-offset-4 transition-colors"
          prefetch={false}
        >
          Quiz
        </Link>
      </nav>
    </header>
  );
}
