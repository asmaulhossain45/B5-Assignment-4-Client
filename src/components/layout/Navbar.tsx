import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { siteConfig } from "@/lib/siteConfig";
import ThemeToggle from "../common/ThemeToggle";
import { NavLink, useLocation } from "react-router";
import { dashNavLinks, navLinks } from "@/constants/links";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";

const Navbar = () => {
  const pathname = useLocation().pathname;
  const [open, setOpen] = useState(false);
  return (
    <nav className="border-b py-3">
      <div className="inner-container flex items-center justify-between gap-4">
        <NavLink to={"/"} className={"flex items-center gap-2"}>
          <img
            src={siteConfig.siteIcon}
            alt={`${siteConfig.name} Icon`}
            className={cn("object-contain", "w-8 h-8", "lg:w-10 lg:h-10")}
          />
          <h3 className="text-2xl lg:text-3xl font-bold">{siteConfig.name}</h3>
        </NavLink>

        <ul className="hidden md:flex items-center gap-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.href}
                className={cn("relative group font-medium cursor-pointer")}
              >
                <span>{link.label}</span>
                <div
                  className={`absolute left-1/2 -bottom-1 h-[2px] w-0 group-hover:w-full bg-foreground -translate-x-1/2 transition-all duration-300 ${
                    pathname === link.href && "w-full"
                  }`}
                />
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="icon" size={"icon"}>
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-2" align="end">
              <DropdownMenuGroup>
                {navLinks.map((link, index) => (
                  <DropdownMenuItem key={index}>
                    <NavLink
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className={"py-1 px-4"}
                    >
                      {link.label}
                    </NavLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {dashNavLinks.map((link, index) => (
                  <DropdownMenuItem key={index}>
                    <NavLink
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className={"py-1 px-4"}
                    >
                      {link.label}
                    </NavLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
