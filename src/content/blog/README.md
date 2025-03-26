# Blog Content Management

This directory contains your blog posts as Markdown files. Each blog post is stored as a separate `.md` file with frontmatter.

## Adding a New Blog Post

### Method 1: Using the Admin Form (Development Only)

The easiest way to add a new blog post is to use the admin form, which is only available in development mode:

1. Run your site locally with `npm run dev`
2. Navigate to `/blog/add`
3. Fill out the form and click "Save Post"
4. The blog post will be automatically added to:
   - This directory as a Markdown file (`[slug].md`)
   - The blog data file (`src/app/blog/data.ts`)

### Method 2: Manual Addition

You can also manually add blog posts:

1. Create a new `.md` file in this directory with the following frontmatter format:

```md
---
title: Your Blog Post Title
date: 2024-03-26
excerpt: A brief summary of your post
tags: ["Tag1", "Tag2", "Tag3"]
coverImage: /blog/your-image.jpg
author:
  name: Aslan Farboud
  image: /aslan-avatar.jpg
---

Your markdown content goes here...
```

2. Add the corresponding entry to `src/app/blog/data.ts`

## Deployment

After adding new blog posts (either method), commit the changes to your repository:

```bash
git add .
git commit -m "Add new blog post: [title]"
git push
```

Your changes will be deployed to Vercel automatically after pushing to your repository.

## File Structure

- `src/content/blog/`: Markdown files for each blog post
- `src/app/blog/data.ts`: Blog post data used by the application
- `public/blog/`: Directory for blog post images
