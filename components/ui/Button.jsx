export default function Button({ as:Tag="button", variant="primary", size="md", className="", ...props }) {
  const base = "inline-flex items-center justify-center rounded-2xl border transition focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]";
  const sizes = { sm:"px-3 py-1.5 text-sm", md:"px-4 py-2", lg:"px-5 py-2.5 text-lg" };
  const variants = {
    primary: "bg-[color:var(--brand)] border-transparent text-white hover:opacity-90",
    secondary: "bg-[#121a31] border-[color:var(--border)] text-white hover:bg-[#0f1423]",
    ghost: "bg-transparent border-transparent text-[color:var(--text)] hover:bg-[#121a31]"
  };
  return <Tag className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props} />;
}
