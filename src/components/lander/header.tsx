import { X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 max-w-7xl mx-auto">
        <div className="font-black text-lg tracking-tighter">Frederick James</div>
        
        <nav className="flex items-center space-x-6 ml-auto">
          <Link
            href="https://x.com/_frederickjames"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
