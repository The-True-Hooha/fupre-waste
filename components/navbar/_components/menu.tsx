"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  PiBookOpenTextLight,
  PiFileThin,
  PiSparkleLight,
  PiTargetLight,
} from "react-icons/pi";

import { MdManageHistory } from "react-icons/md";
import { SiMicrosoftacademic } from "react-icons/si";

export const components: { title: string; href: string; description: string }[] = [
  {
    title: "Reduce",
    href: "/docs/primitives/alert-dialog",
    description:
      "Minimize the amount of waste produced through efficient processes and resource management. Implementing recycling initiatives to decrease the overall waste output.",
  },
  {
    title: "Reuse",
    href: "/docs/primitives/hover-card",
    description:
      "Promote the use of reusable materials to cut down on single-use products and packaging.",
  },
  {
    title: "Recycle",
    href: "/docs/primitives/progress",
    description:
      "Establish recycling programmes for materials such as paper, plastic, glass, and metal.",
  }
];

export function Menu() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex">
              <ul className="grid  p-2 md:w-[400px]  lg:w-[250px] hover:cursor-pointer ">
                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm border-b-2">
                  <MdManageHistory className="text-[35px] mr-2 mb-6 text-black" />
                  <div className="">
                    <a className="tex-[25px]">Waste Management</a>
                    <p className="text-gray-400 text-sm font-light">
                      comprehensive waste collection and disposal services
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <SiMicrosoftacademic className="text-[75px] mr-2" />
                  <div className="">
                    <a>Academic Development</a>
                    <p className="text-gray-400 text-sm font-light">
                      Comprehensive innovative curriculum for Postgraduate
                      Programs, Certificate programs, Short courses
                    </p>
                  </div>
                </div>
              </ul>
              <div>
                <ul className="grid p-2 md:w-[400px]  lg:w-[250px] hover:cursor-pointer border-r">
                  <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm border-b-2">
                    <div>
                      <a className="">Sustainable Resources</a>
                      <p className="text-gray-400 text-sm font-light">
                        development and implementation of sustainable energy and
                        resource management strategies for businesses and
                        communities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                    <div>
                      <a>Research and Development</a>
                      <p className="text-gray-400 text-sm font-light">
                        Innovating new technologies and processes for waste
                        reduction and sustainable resource utilization
                      </p>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Waste Management</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <Link href="/news-events" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              News and Events
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
