import classNames from "classnames";
import React, { ReactElement, ReactNode, isValidElement } from "react";

export interface IAspectRatio {
  className?: string;
  children: ReactNode;
  ratio: "none" | "4/3" | "16/9" | "32/7";
}

export const AspectRatio: React.FC<IAspectRatio> = ({
  ratio = "none",
  className,
  children,
}) => {
  const child = React.Children.only(children) as ReactElement;

  if (!isValidElement(child)) {
    throw new Error("Child must be a valid ReactElement.");
  }

  if (ratio === "none") {
    return <>{children}</>;
  }

  return (
    <div
      className={classNames(
        "relative w-full p-0 overflow-hidden before:content before:block",
        {
          "before:pt-[21.875%]": ratio === "32/7",
          "before:pt-[56.25%]": ratio === "16/9",
          "before:pt-[75%]": ratio === "4/3",
        },
        className
      )}
    >
      <child.type
        {...(child.props as object)}
        role="none"
        className={classNames(
          (child?.props as any).className,
          "absolute inset-0 w-full h-full"
        )}
      />
    </div>
  );
};
