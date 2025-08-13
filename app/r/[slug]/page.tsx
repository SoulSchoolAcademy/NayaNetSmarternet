'use client';
import { useEffect } from 'react';

export default function Resolve({ params }: { params: { slug: string } }) {
  useEffect(() => {
    fetch('/api/short?slug=' + params.slug).then(async r=>{
      const { target } = await r.json();
      if (target) window.location.href = target;
      else window.location.href = '/404';
    });
  }, [params.slug]);
  return <p>Resolving…</p>;
}
