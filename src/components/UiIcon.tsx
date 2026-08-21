type UiIconName =
  | "arrow-up-right"
  | "arrow-down-right"
  | "flask"
  | "layers"
  | "shield"
  | "spark"
  | "signal"
  | "chip"
  | "gamepad"
  | "cube"
  | "code"
  | "orbit";

type UiIconProps = {
  name: UiIconName;
  size?: number;
  className?: string;
};

export function UiIcon({ name, size = 18, className }: UiIconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  if (name === "arrow-up-right") {
    return <svg {...common}><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>;
  }
  if (name === "arrow-down-right") {
    return <svg {...common}><path d="m7 7 10 10"/><path d="M8 17h9V8"/></svg>;
  }
  if (name === "flask") {
    return <svg {...common}><path d="M9 3h6"/><path d="M10 3v6l-5 8.5A2.3 2.3 0 0 0 7 21h10a2.3 2.3 0 0 0 2-3.5L14 9V3"/><path d="M8 15h8"/></svg>;
  }
  if (name === "layers") {
    return <svg {...common}><path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z"/><path d="m4 12 8 4.5 8-4.5"/><path d="m4 16.5 8 4.5 8-4.5"/></svg>;
  }
  if (name === "shield") {
    return <svg {...common}><path d="M12 3 19 6v5c0 4.6-2.9 8.2-7 10-4.1-1.8-7-5.4-7-10V6l7-3Z"/><path d="m9.4 12 1.7 1.7 3.7-4"/></svg>;
  }
  if (name === "spark") {
    return <svg {...common}><path d="m12 2 1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7L12 2Z"/><path d="m18 15 .8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z"/></svg>;
  }
  if (name === "signal") {
    return <svg {...common}><path d="M4 17V7"/><path d="M9 20V4"/><path d="M14 16V8"/><path d="M19 13v-2"/></svg>;
  }
  if (name === "chip") {
    return <svg {...common}><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>;
  }
  if (name === "gamepad") {
    return <svg {...common}><path d="M8.5 8h7a4 4 0 0 1 3.8 2.8l1.3 4.4A3 3 0 0 1 15.7 18l-1.5-1.5H9.8L8.3 18a3 3 0 0 1-4.9-2.8l1.3-4.4A4 4 0 0 1 8.5 8Z"/><path d="M8 11v4M6 13h4"/><path d="M16.2 12.2h.1M18 14h.1"/></svg>;
  }
  if (name === "cube") {
    return <svg {...common}><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/></svg>;
  }
  if (name === "code") {
    return <svg {...common}><path d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M14 5l-4 14"/></svg>;
  }
  return <svg {...common}><circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="9" ry="4.2" transform="rotate(25 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4.2" transform="rotate(-25 12 12)"/></svg>;
}
