import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[48px] rounded-md border border-white/10 bordervert font-light bg-[#1c1C22] px-4 py-5 text-sm placeholder:text-white/60 outline-none",
        className
      )}
      {...props} />
  );
}

export { Input }
