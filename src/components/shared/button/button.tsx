"use client";

import {
  type ButtonHTMLAttributes,
  type FC,
  type CSSProperties,
  type ReactNode,
} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  style,
  ...props
}) => {
  const baseStyles =
    "relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "cursor-pointer rounded-[4px] border border-[var(--text-headline)] font-medium text-[var(--text-headline)] shadow-none transition-transform duration-300 ease-out",
    secondary:
      "bg-[var(--white)]/10 text-[var(--text-headline)] backdrop-blur-md hover:bg-[var(--white)]/20 border border-[var(--white)]/10 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
    outline:
      "border border-[var(--accent-primary)]/30 text-[var(--text-headline)] hover:bg-[var(--accent-primary)]/10 hover:border-[var(--accent-primary)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
    ghost:
      "text-[var(--white)] hover:bg-[var(--white)]/5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
  };

  const sizes = {
    xs: "px-4 py-1.5 text-xs leading-none",
    sm: "h-[40px] px-4 py-[10px] text-base leading-[16px]",
    md: "h-[44px] px-7 py-2.5 text-base",
    lg: "px-9 py-3.5 text-lg tracking-tight",
    xl: "px-11 py-4 text-xl tracking-tight",
  };

  const primaryStyle: CSSProperties = {
    fontFamily: "var(--font-jakarta)",
    backgroundColor: variant === "primary" ? "var(--bg-surface)" : undefined,
    ...style,
  };

  return (
    <button
      className={`group ${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      style={primaryStyle}
      {...props}
    >
      {variant === "primary" && (
        <>
          {/* Base Layer: Shimmer Streak (Hides on hover) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-500 group-hover:opacity-0"
            style={{
              backgroundImage:
                "linear-gradient(137.03deg, var(--bg-surface) 25.862%, var(--bg-surface) 35.9%, var(--accent-primary) 45.092%, var(--bg-surface) 60.3%, var(--bg-surface) 67.588%)",
              backgroundSize: "160% 160%",
              backgroundPosition: "50% 50%",
            }}
          />

          {/* Hover Layer: Vibrant Glow (Shows on hover) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              backgroundImage:
                "linear-gradient(315deg, var(--accent-primary) 10%, var(--bg-surface) 30%)",
            }}
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] backdrop-blur-[0.75px]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-[-1px] rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              boxShadow:
                "inset 0 0 0 1px var(--white-alpha-22), inset 0 6px 8px var(--white-alpha-4)",
            }}
          />
        </>
      )}

      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
