import Image from "next/image";
import { ICONS } from "./registry";

export default function AppIcon({ name, size = 96, alt, className }) {
  const src = ICONS[name];
  if (!src) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`AppIcon: icon not found for key "${name}"`);
    }
    return null;
  }
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
