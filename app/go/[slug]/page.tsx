import { redirect } from 'next/navigation';

export default async function GoPage({ params }: { params: { slug: string } }) {
  // In mock, we can’t read MAP on the server (stateless). For demo UX, send to a fallback page.
  // Later: move MAP to Redis/DB and redirect server-side.
  redirect(`/r/${params.slug}`);
}
