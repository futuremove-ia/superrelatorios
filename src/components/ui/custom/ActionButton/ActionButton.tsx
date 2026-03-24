import React from "react";
import styles from "./Button.module.css";

export interface ActionButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  action: string; // Never generic "OK" or "Confirm"
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
  testId?: string;
  type?: "button" | "submit" | "reset";
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  variant = "primary",
  size = "md",
  action,
  onClick,
  disabled = false,
  loading = false,
  className,
  children,
  testId,
  type = "button",
  ...props
}) => {
  const baseClasses = styles.btn;
  const variantClasses = styles[`btn-${variant}`];
  const sizeClasses = styles[`btn-${size}`];
  const stateClasses = disabled ? styles["btn-disabled"] : "";
  const loadingClasses = loading ? styles["btn-loading"] : "";

  const classes = [
    baseClasses,
    variantClasses,
    sizeClasses,
    stateClasses,
    loadingClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      data-testid={testId}
      {...props}
    >
      {loading && <div className={styles.spinner} />}
      {children || action}
    </button>
  );
};

export default ActionButton;
