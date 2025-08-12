import Image from "next/image";
import { ICONS } from "./registry";

export default function AppIcon({ name, size = 56, alt, className }) {
  const src = ICONS[name] || "/logo.svg";
  return (
    <Image
      src={src}
      alt={alt ?? name}
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}

