import BlogList from "@/app/components/blogList";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <aside>
        <BlogList />
      </aside>
      <main>{children}</main>
    </>
  );
}
