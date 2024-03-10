import { data } from "@/app/data";
import { Blog } from "@/app/types/blog";
import Image from "next/image";

export default function BlogImage({ params }: { params: { id: number } }) {
  const [blog]: Blog[] = data.filter((blog) => blog.id == params.id);

  return (
    <>
      <h1>Blog {blog.id}</h1>
      <Image
        src={blog.imageUrl}
        alt={`Blog ${blog.id}`}
        width={500}
        height={300}
      />
    </>
  );
}
