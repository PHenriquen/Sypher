type IdentityMarkProps = {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
};

export function IdentityMark({ src, alt, size = "md" }: IdentityMarkProps) {
  return <img className={`identity-mark ${size}`} src={src} alt={alt} />;
}
