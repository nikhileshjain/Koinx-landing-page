"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();

  const routes = [
    {
      href: `/tax`,
      label: "Cryto Taxes",
      active: pathname === `/tax`,
    },
    {
      href: `/tools`,
      label: "Free Tools",
      active: pathname === `/tools`,
    },
    {
      href: `/resources`,
      label: "Resource Center",
      active: pathname === `/resources`,
    }
  ];
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
        {routes.map((route)=>(
            <Link 
            key={route.href}
            href={route.href}
            className={cn(
                'text-sm font-medium transition-colors hover:text-black',
                route.active ? 'text-black' : 'text-neutral-500'
              )}
            >
            {route.label}
            </Link>
        ))}
    </nav>
  );
};
