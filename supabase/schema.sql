-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  content TEXT NOT NULL,
  featured_image VARCHAR(255),
  author VARCHAR(100),
  published_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS blog_posts_slug_idx ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS blog_posts_published_at_idx ON blog_posts(published_at);

-- Disable RLS to make the content publicly accessible without authentication
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public blog posts are viewable by everyone" 
  ON blog_posts FOR SELECT USING (true);

-- Sample data (uncomment to add sample posts)

/*
INSERT INTO blog_posts (slug, title, description, content, featured_image, author, published_at)
VALUES 
  (
    'building-modern-web-applications', 
    'Building Modern Web Applications with Next.js and React', 
    'A comprehensive guide to creating fast, responsive, and beautiful web applications using Next.js, React, and modern UI techniques.', 
    '<p>Modern web development has evolved significantly over the past few years, with frameworks like Next.js leading the charge in creating better developer and user experiences. In this article, we''ll explore how to build a complete web application using Next.js and React.</p><h2>Why Next.js?</h2><p>Next.js offers several advantages over a traditional React application:</p><ul><li>Server-side rendering and static site generation</li><li>Automatic code splitting</li><li>Built-in API routes</li><li>Excellent developer experience</li><li>Great performance out of the box</li></ul><h2>Getting Started</h2><p>To create a new Next.js project, run the following command:</p><pre><code>npx create-next-app my-project</code></pre><p>This will set up a new Next.js project with all the essentials you need to get started.</p>', 
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'Aslan Farboud',
    NOW() - INTERVAL '3 days'
  ),
  (
    'modern-ui-design-principles', 
    'Modern UI Design Principles for Web Developers', 
    'Explore the key design principles that can elevate your web applications from good to great, with practical examples and tips.', 
    '<p>As web developers, we often focus heavily on functionality and code quality, but the visual design of our applications is equally important for creating successful products. In this article, we''ll explore modern UI design principles that can help developers create more beautiful and user-friendly interfaces.</p><h2>White Space is Your Friend</h2><p>One of the most important aspects of modern UI design is the effective use of white space (or negative space). Proper spacing between elements creates visual hierarchy, improves readability, and gives your UI a clean, uncluttered feel.</p>', 
    'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    'Aslan Farboud',
    NOW() - INTERVAL '5 days'
  ),
  (
    'getting-started-with-typescript', 
    'Getting Started with TypeScript: A Guide for JavaScript Developers', 
    'Learn how TypeScript can improve your development workflow with static typing, better tooling, and enhanced code quality.', 
    '<p>If you''re a JavaScript developer looking to level up your skills and improve code quality, TypeScript is an excellent next step. In this guide, we''ll cover the basics of TypeScript and how it can benefit your development workflow.</p><h2>What is TypeScript?</h2><p>TypeScript is a strongly typed programming language that builds on JavaScript. It was developed and is maintained by Microsoft. TypeScript adds optional static typing to JavaScript, which helps catch errors early during development rather than at runtime.</p>', 
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'Aslan Farboud',
    NOW() - INTERVAL '7 days'
  );
*/ 