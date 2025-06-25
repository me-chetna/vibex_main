import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const LogoIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-primary"
  >
    <path
      d="M9.87868 7.43934L11.2929 6.02513L16.2678 11L11.2929 15.9749L9.87868 14.5607L13.4393 11L9.87868 7.43934Z"
      fill="currentColor"
    />
    <path
      d="M5.29289 7.43934L6.70711 6.02513L11.6819 11L6.70711 15.9749L5.29289 14.5607L8.85355 11L5.29289 7.43934Z"
      fill="currentColor"
    />
  </svg>
);

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between rounded-full border-2 border-primary/40 bg-card/80 px-6 backdrop-blur-sm shadow-[0_0_25px_theme(colors.primary/0.2)]">
      <Link
        href="/"
        className="flex items-center justify-center gap-2"
        prefetch={false}
      >
        <LogoIcon />
        <span className="text-xl font-bold">VibeX</span>
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link
          href="/hackup"
          className="text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors"
          prefetch={false}
        >
          HackUp
        </Link>
        <Link
          href="/vconnect"
          className="text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors"
          prefetch={false}
        >
          VConnect
        </Link>
        <Link
          href="/quiz"
          className="text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors"
          prefetch={false}
        >
          Quiz
        </Link>
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            className="rounded-full font-semibold px-4 py-2 text-sm"
          >
            Chetna Jain
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
