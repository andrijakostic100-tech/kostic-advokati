import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date string
  category: string;
  author?: string;
  keywords?: string[];
  cover?: string;
};

export type Post = PostMeta & {
  content: string; // raw markdown
  html: string; // rendered HTML
  readingMinutes: number;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function ensureDir() {
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }
}

function listFiles(): string[] {
  ensureDir();
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
}

function fileToSlug(file: string): string {
  return file.replace(/\.(md|mdx)$/i, "");
}

function readPost(file: string): Post {
  const full = path.join(CONTENT_DIR, file);
  const raw = fs.readFileSync(full, "utf8");
  const parsed = matter(raw);
  const data = parsed.data as Partial<PostMeta>;
  const content = parsed.content;
  const html = marked.parse(content, { async: false }) as string;
  const words = content.split(/\s+/).filter(Boolean).length;
  const readingMinutes = Math.max(1, Math.round(words / 220));

  return {
    slug: data.slug || fileToSlug(file),
    title: data.title || "Bez naslova",
    description: data.description || "",
    date: data.date || new Date().toISOString().slice(0, 10),
    category: data.category || "Pravni saveti",
    author: data.author,
    keywords: data.keywords,
    cover: data.cover,
    content,
    html,
    readingMinutes,
  };
}

export function getAllPosts(): Post[] {
  return listFiles()
    .map(readPost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostsMeta(): PostMeta[] {
  return getAllPosts().map(({ content, html, ...meta }) => {
    void content;
    void html;
    return meta;
  });
}

export function getPostBySlug(slug: string): Post | null {
  const files = listFiles();
  const file = files.find((f) => fileToSlug(f) === slug);
  if (!file) return null;
  return readPost(file);
}

export function getAllSlugs(): string[] {
  return listFiles().map(fileToSlug);
}

export function getCategories(): { name: string; count: number }[] {
  const posts = getAllPostsMeta();
  const map = new Map<string, number>();
  for (const p of posts) {
    map.set(p.category, (map.get(p.category) || 0) + 1);
  }
  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function formatDate(iso: string, locale = "sr-Latn-RS"): string {
  try {
    return new Date(iso).toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}
