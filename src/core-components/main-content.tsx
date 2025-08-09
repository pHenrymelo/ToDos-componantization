import { cx } from "class-variance-authority";
import type React from "react";

interface MainContenetProps extends React.ComponentProps<"main"> {}

export function MainContenet({
  children,
  className,
  ...props
}: MainContenetProps) {
  return (
    <main className={cx("mt-4 md:mt-8", className)} {...props}>
      {" "}
      {children}{" "}
    </main>
  );
}
