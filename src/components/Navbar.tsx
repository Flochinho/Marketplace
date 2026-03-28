import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { NotificationCenter } from "./NotificationCenter";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-black flex items-center justify-center">
              <span className="text-white font-bold text-xl italic">N</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Nexus</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link to="/search?category=templates" className="hover:text-black transition-colors">Templates</Link>
            <Link to="/search?category=ui-kits" className="hover:text-black transition-colors">UI Kits</Link>
            <Link to="/search?category=icons" className="hover:text-black transition-colors">Icons</Link>
            <Link to="/search?category=fonts" className="hover:text-black transition-colors">Fonts</Link>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center px-8 max-w-md hidden lg:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Search assets..." 
              className="pl-10 bg-gray-50 border-none focus-visible:ring-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <NotificationCenter />
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
                0
              </span>
            </Button>
          </Link>
          
          <div className="hidden md:flex items-center gap-2">
            <Link to="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Link to="/auth">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link to="/auth?mode=signup">
              <Button>Get Started</Button>
            </Link>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
