import { HTMLProps, ReactNode } from "react";
import styles from "./loader.module.scss";

export interface LoaderProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

/**
 * dummy component
 *
 * @example
 * ```tsx
 * <Loader />
 * ```
 *
 * @source - Source code
 */
export const Loader = ({ children, ...props }: LoaderProps) => {
  const className = [props.className, styles["loader"]].filter(Boolean).join(" ");
  return (
    <div {...props} className={className} data-testid="loader">
      Example loaders
    </div>
  );
};
