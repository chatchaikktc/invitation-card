import { twMerge } from "@/lib/twMerge";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = React.forwardRef<HTMLInputElement, ContainerProps>(
  ({ children, className }, ref) => {
    const classNames = twMerge(
      "tw-mx-auto tw-w-full tw-max-w-[1440px] tw-px-5 lg:tw-px-5 xl:tw-px-20",
      className
    );

    return (
      <div ref={ref} className={classNames}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
