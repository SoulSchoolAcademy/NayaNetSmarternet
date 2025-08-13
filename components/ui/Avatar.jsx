export default function Avatar({ src="/avatar.svg", size=40, alt="avatar" }) {
  return <img src={src} alt={alt} width={size} height={size} className="rounded-full border border-[color:var(--border)] bg-[#101626] object-cover" />;
}
