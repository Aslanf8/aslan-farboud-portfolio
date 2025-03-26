import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { BlogPost } from '@/app/blog/data';

export async function POST(request: NextRequest) {
  // Only allow in development mode
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json(
      { error: 'Adding blog posts is only available in development mode' },
      { status: 403 }
    );
  }

  try {
    const blogPost: BlogPost = await request.json();

    // Validate the blog post
    if (!blogPost.title || !blogPost.content || !blogPost.slug) {
      return NextResponse.json(
        { error: 'Title, content, and slug are required' },
        { status: 400 }
      );
    }

    // Create the content directory if it doesn't exist
    const contentDir = path.join(process.cwd(), 'src', 'content', 'blog');
    if (!fs.existsSync(contentDir)) {
      fs.mkdirSync(contentDir, { recursive: true });
    }

    // Create the Markdown file
    const markdownContent = `---
title: ${blogPost.title}
date: ${blogPost.date}
excerpt: ${blogPost.excerpt}
tags: [${blogPost.tags.map(tag => `"${tag}"`).join(', ')}]
coverImage: ${blogPost.coverImage || ''}
author:
  name: ${blogPost.author.name}
  image: ${blogPost.author.image || ''}
---

${blogPost.content}
`;

    const filePath = path.join(contentDir, `${blogPost.slug}.md`);
    fs.writeFileSync(filePath, markdownContent);

    // Now update the data.ts file to include this new post
    // First, read the current file
    const dataFilePath = path.join(process.cwd(), 'src', 'app', 'blog', 'data.ts');
    const currentContent = fs.readFileSync(dataFilePath, 'utf8');

    // Extract the existing blog posts array
    const blogPostsMatch = currentContent.match(/export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];/);
    if (!blogPostsMatch) {
      throw new Error('Could not find blogPosts array in data.ts');
    }

    // Create the new blog post entry
    const newBlogPostEntry = `  {
    slug: "${blogPost.slug}",
    title: "${blogPost.title.replace(/"/g, '\\"')}",
    date: "${blogPost.date}",
    excerpt: "${blogPost.excerpt.replace(/"/g, '\\"')}",
    content: \`${blogPost.content.replace(/`/g, '\\`')}\`,
    tags: [${blogPost.tags.map(tag => `"${tag}"`).join(', ')}],
    ${blogPost.coverImage ? `coverImage: "${blogPost.coverImage}",` : ''}
    author: {
      name: "${blogPost.author.name}",
      ${blogPost.author.image ? `image: "${blogPost.author.image}"` : ''}
    }
  },`;

    // Insert the new blog post at the beginning of the array
    const updatedContent = currentContent.replace(
      /export const blogPosts: BlogPost\[\] = \[/,
      `export const blogPosts: BlogPost[] = [\n${newBlogPostEntry}`
    );

    // Write the updated content back to the file
    fs.writeFileSync(dataFilePath, updatedContent, 'utf8');

    return NextResponse.json({ success: true, slug: blogPost.slug });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
} 