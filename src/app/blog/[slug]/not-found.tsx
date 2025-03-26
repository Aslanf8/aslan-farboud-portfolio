import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchX } from "lucide-react";

export default function BlogNotFound() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
      <div className="rounded-full bg-primary/10 p-6 mb-6">
        <SearchX size={48} className="text-primary" />
      </div>

      <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>

      <p className="text-xl text-muted-foreground max-w-[500px] mb-8">
        The blog post you're looking for doesn't exist or has been removed.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild variant="default" size="lg">
          <Link href="/blog">Browse All Posts</Link>
        </Button>

        <Button asChild variant="outline" size="lg">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
