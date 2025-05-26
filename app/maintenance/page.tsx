import MaintenanceMode from "@/app/components/shared/MaintenanceMode";
import { siteConfig } from "@/app/config/site";
import { redirect } from "next/navigation";

export default function MaintenancePage() {
  // If maintenance mode is disabled, redirect to home page
  if (!siteConfig.maintenance.enabled) {
    redirect("/");
  }
  
  return <MaintenanceMode />;
} 