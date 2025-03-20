import * as React from "react";
import { cn } from "../../lib/utils";

const Menubar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-10 items-center space-x-1 rounded-md bg-white p-1 shadow-sm",
      className
    )}
    {...props}
  />
));
Menubar.displayName = "Menubar";

const MenubarItem = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-gray-100",
      "hover:bg-gray-100 hover:text-gray-900",
      className
    )}
    {...props}
  />
));
MenubarItem.displayName = "MenubarItem";

export { Menubar, MenubarItem }; 