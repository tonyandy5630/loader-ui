import { HTMLProps, ReactNode } from "react";
import styles from "./my-component.module.scss";

export interface MyComponentProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

/**
 * Demo
 *
 * @example
 * ```tsx
 * <MyComponent />
 * ```
 *
 * @source - Source code
 */
export const MyComponent = ({ children, ...props }: MyComponentProps) => {
  const className = [props.className, styles["my-component"]].filter(Boolean).join(" ");
  return (
    <div {...props} className={className} data-testid="my-component">
      Udemy Demo
    </div>
  );
};
