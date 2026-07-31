"use client";

import {
  type ButtonHTMLAttributes,
  type FC,
  type CSSProperties,
  type ReactNode,
} from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  href?: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  style,
  ...props
}) => {
  const baseStyles =
    "relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "cursor-pointer rounded-[6px] border border-white/10 font-medium text-[var(--text-headline)] transition-transform duration-300 ease-out",
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
    backgroundColor: variant === "primary" ? "#190c40" : undefined,
    boxShadow: variant === "primary"
      ? "0 2px 4px rgba(115,82,221,0.13)"
      : undefined,
    backdropFilter: variant === "primary" ? "blur(1.5px)" : undefined,
    ...style,
  };

  const composedClassName = `group ${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const inner = (
    <>
      {variant === "primary" && (
        <>
          {/* Hover Layer: Vibrant Glow (Shows on hover) */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              backgroundImage:
                "linear-gradient(315deg, var(--accent-primary) 10%, #190c40 30%)",
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

          {/* Permanent: gradient border (top-lit) + inner purple glow */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.50), inset 0 -1px 0 rgba(255,255,255,0.08), inset 1px 0 0 rgba(255,255,255,0.12), inset -1px 0 0 rgba(255,255,255,0.12), inset 0 0 8px rgba(115,82,221,0.43), inset 0 0 14px rgba(88,42,255,0.32)",
            }}
          />
        </>
      )}

      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={composedClassName}
        style={primaryStyle}
        onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      className={composedClassName}
      style={primaryStyle}
      {...props}
    >
      {inner}
    </button>
  );
};

export default Button;
