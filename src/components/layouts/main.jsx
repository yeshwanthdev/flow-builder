import { AppSidebar } from "@/components/global/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

import { Outlet } from "react-router-dom";
import { ModeToggle } from "@/components/global/mode-toggel";

export default function Main({ children }) {
  return (
    // <SidebarProvider>
    //   <SidebarInset>
    //     <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
    //       <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
    //         <h2 className="text-lg font-semibold">Flow Builder</h2>
    //       </div>
    //       <Button variant="secondary">Save</Button>
    //       <ModeToggle />
    //       {/* <SidebarTrigger className="-mr-1 ml-auto rotate-180" /> */}
    //     </header>

    //     <Separator />
    //     <Outlet />
    //   </SidebarInset>
    //   {/* <AppSidebar side="right" /> */}
    // </SidebarProvider>

    <>
      <Outlet />
    </>
  );
}
