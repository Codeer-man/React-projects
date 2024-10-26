import { ReactNode } from "react";

export default function TaskContext({ children }: {children: ReactNode})  {
  return (
    <div>
      {children}
    </div>
  )
}
