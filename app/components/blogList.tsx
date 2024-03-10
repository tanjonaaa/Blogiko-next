import Link from "next/link";
import { data } from "../data";

export default function BlogList() {
  return (
    <ul>
      <ul>
        {data.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>Blog {blog.id}</Link>
          </li>
        ))}
      </ul>
    </ul>
  );
}
