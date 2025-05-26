"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname();
  
  // Don't show breadcrumb on homepage
  if (pathname === "/") return null;
  
  // Split the path into segments and create breadcrumb items
  const segments = pathname.split("/").filter(Boolean);
  
  // Create breadcrumb items with proper paths and labels
  const breadcrumbItems = segments.map((segment, index) => {
    // Build the path for this breadcrumb item
    const path = `/${segments.slice(0, index + 1).join("/")}`;
    
    // Format the label (capitalize first letter, replace hyphens with spaces)
    const label = segment
      .replace(/-/g, " ")
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    
    return { path, label };
  });
  
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-3 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <nav className="flex items-center text-sm">
          <Link 
            href="/" 
            className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-secondary flex items-center"
          >
            <Home size={16} className="mr-1" />
            <span>Home</span>
          </Link>
          
          {breadcrumbItems.map((item, index) => (
            <div key={item.path} className="flex items-center">
              <ChevronRight size={14} className="mx-2 text-gray-400" />
              
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-primary dark:text-secondary font-medium">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.path}
                  className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-secondary"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
} 