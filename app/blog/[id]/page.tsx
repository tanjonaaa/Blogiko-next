import Link from "next/link";

export default function Blog({ params }: { params: { id: number } }) {
  return (
    <>
      <h1>Blog {params.id}</h1>
      <Link href={`/blog/${params.id}/image`}>Image</Link>
    </>
  );
}
