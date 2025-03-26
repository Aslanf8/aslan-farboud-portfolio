import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Aslan Farboud",
  description:
    "Thoughts, discoveries, and insights on software development, technology, and AI",
  openGraph: {
    title: "Blog | Aslan Farboud",
    description:
      "Thoughts, discoveries, and insights on software development, technology, and AI",
    type: "website",
    url: "https://aslanfarboud.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
