"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  download,
}: ButtonProps) {
  const baseClasses = variant === "primary" ? "primary-button" : "secondary-button";
  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`} download={download}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
}
