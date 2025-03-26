"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="text-sm"
      onClick={scrollToTop}
    >
      <ArrowUp size={14} className="mr-2" />
      Back to top
    </Button>
  );
}
