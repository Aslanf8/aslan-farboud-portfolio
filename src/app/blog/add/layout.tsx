import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add New Blog Post",
  description: "Create a new blog post for your portfolio",
  // This page should not be indexed by search engines
  robots: {
    index: false,
    follow: false,
  },
};

export default function AddBlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
