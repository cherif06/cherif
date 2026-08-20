"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props} />
  );
}

function TabsList({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex h-auto rounded-md p-1 text-primary",
        className
      )}
      {...props} />
  );
}

function TabsTrigger({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex items-center w-full justify-center whitespace-nowrap rounded-2xl p-4 text-base font-medium ring-offset-background transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 btnresume bg-[#16161c]/40 backdrop-blur-xl border border-white/10 text-white/80 hover:text-white hover:border-[#00ff99]/40 data-[state=active]:bg-accent data-[state=active]:text-primary data-[state=active]:font-bold data-[state=active]:border-accent data-[state=active]:shadow-[0_0_25px_rgba(0,255,153,0.35)]",
        className
      )}
      {...props} />
  );
}

function TabsContent({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300", className)}
      {...props} />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
