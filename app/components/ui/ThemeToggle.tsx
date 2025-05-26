"use client";

import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button 
          aria-label="Toggle theme" 
          className="p-2 rounded-md bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors shadow-sm border border-gray-200 dark:border-gray-700"
        >
          {theme === "dark" ? (
            <Moon className="h-5 w-5 text-yellow-400" />
          ) : theme === "light" ? (
            <Sun className="h-5 w-5 text-amber-500" />
          ) : (
            <Laptop className="h-5 w-5 text-primary dark:text-blue-400" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-2 min-w-[8rem] z-50 mt-1"
      >
        <DropdownMenuItem 
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-900 dark:text-gray-100 transition-colors"
          onClick={() => setTheme("light")}
        >
          <Sun className="h-4 w-4 text-amber-500" />
          <span>Light</span>
          {theme === "light" && (
            <span className="ml-auto h-2 w-2 rounded-full bg-green-500"></span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-900 dark:text-gray-100 transition-colors"
          onClick={() => setTheme("dark")}
        >
          <Moon className="h-4 w-4 text-yellow-400" />
          <span>Dark</span>
          {theme === "dark" && (
            <span className="ml-auto h-2 w-2 rounded-full bg-green-500"></span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-900 dark:text-gray-100 transition-colors"
          onClick={() => setTheme("system")}
        >
          <Laptop className="h-4 w-4 text-blue-500" />
          <span>System</span>
          {theme === "system" && (
            <span className="ml-auto h-2 w-2 rounded-full bg-green-500"></span>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 