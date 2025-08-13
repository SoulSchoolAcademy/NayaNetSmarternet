export default function Input({ as:Tag="input", className="", ...props }) {
  const base = "input";
  return <Tag className={`${base} ${className}`} {...props} />;
}
