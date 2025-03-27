import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format blog content with basic markdown-like rules
 * - Converts line breaks to <br> tags
 * - Converts **text** to <strong>text</strong> (bold)
 * - Converts *text* to <em>text</em> (italics)
 * - Converts `code` to <code>code</code> (inline code)
 * - Converts > text to blockquotes
 * - Preserves HTML that was already in the content
 */
export function formatBlogContent(content: string): string {
  if (!content) return '';
  
  // Process content with various formatting rules
  let formattedContent = content
    // Handle existing HTML
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    
    // Bold: **text** to <strong>text</strong>
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    
    // Italic: *text* to <em>text</em> (but not if it's part of **)
    .replace(/(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)/g, '<em>$1</em>')
    
    // Inline code: `code` to <code>code</code>
    .replace(/`(.*?)`/g, '<code>$1</code>')
    
    // Blockquotes: > text to <blockquote>text</blockquote>
    .replace(/^&gt;\s*(.*?)$/gm, '<blockquote>$1</blockquote>')
    
    // Convert line breaks to <br> tags
    .replace(/\n/g, '<br>');
  
  return formattedContent;
}
