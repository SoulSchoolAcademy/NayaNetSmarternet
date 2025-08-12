export default function FeedPost({ post }){
  const ts = new Date(post.ts).toLocaleString();
  return (
    <article className="card">
      <div className="text-sm text-[color:var(--muted)] mb-1">{post.user} • {ts}</div>
      <div>{post.text}</div>
      <div className="flex gap-2 mt-3">
        <button className="btn btn-secondary px-3 py-1 text-xs">Like</button>
        <button className="btn btn-secondary px-3 py-1 text-xs">Comment</button>
        <button className="btn btn-secondary px-3 py-1 text-xs">Share</button>
      </div>
    </article>
  );
}
