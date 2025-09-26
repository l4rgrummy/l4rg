import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { posts as allPosts, formatIsoDate } from "@/lib/blog/posts";
import { Streamdown } from "streamdown";

export const dynamic = "force-static";

type PageProps = {
  params: Promise<{ blogId: string }>;
};

export function generateStaticParams() {
  return allPosts.filter((p) => !!p.id).map((p) => ({ blogId: p.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { blogId } = await params;
  const post = allPosts.find((p) => p.id === blogId);
  if (!post) {
    return {
      title: "Post not found | L4RG Digital Plus LLC",
      description: "The blog post you're looking for could not be found.",
    };
  }

  const canonicalUrl = `https://l4rgdigitalplus.com/blog/${blogId}`;
  const ogImage = post.image?.src || "/tech-support-hero-pattern.png";

  return {
    title: `${post.title} | Blog | L4RG Digital Plus LLC`,
    description: post.description,
    keywords: post.tags || [
      "technology",
      "IT support",
      "business",
      "tech insights",
    ],
    robots: "index, follow",
    authors: [{ name: "L4RG Digital Plus LLC" }],
    creator: "L4RG Digital Plus LLC",
    publisher: "L4RG Digital Plus LLC",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: canonicalUrl,
      siteName: "L4RG Digital Plus LLC",
      title: `${post.title} | Blog | L4RG Digital Plus LLC`,
      description: post.description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      authors: ["L4RG Digital Plus LLC"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Blog | L4RG Digital Plus LLC`,
      description: post.description,
      creator: "@sureshdas1978",
      images: [ogImage],
    },
    other: {
      "theme-color": "#ffffff",
      "msapplication-TileColor": "#ffffff",
      copyright: "© 2024 L4RG Digital Plus LLC",
      "article:published_time": post.date,
      "article:author": "L4RG Digital Plus LLC",
      "article:section": "Technology",
      "article:tag": post.tags?.join(", ") || "technology",
    },
  };
}

function normalizeMarkdown(text: string): string {
  const lines = text.split("\n");
  while (lines.length > 0 && lines[0].trim() === "") {
    lines.shift();
  }
  while (lines.length > 0 && lines[lines.length - 1].trim() === "") {
    lines.pop();
  }
  const indentLengths = lines
    .filter((line) => line.trim().length > 0)
    .map((line) => line.match(/^(\s*)/)?.[1].length ?? 0);
  const minIndent = indentLengths.length > 0 ? Math.min(...indentLengths) : 0;
  return lines.map((line) => line.slice(minIndent)).join("\n");
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { blogId } = await params;
  const post = allPosts.find((p) => p.id === blogId);
  if (!post) return notFound();
  const content =
    typeof post.content === "string" ? normalizeMarkdown(post.content) : "";

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      {post.image?.src && (
        <div className="relative mb-8 aspect-[3/2] w-full overflow-hidden rounded-xl border border-muted/50">
          <Image
            src={post.image.src}
            alt={post.image.alt || post.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>
      )}
      <div className="mb-6">
        <Link href="/blog" className="text-sm text-primary hover:underline">
          ← Back to all posts
        </Link>
      </div>
      <article className="prose dark:prose-invert max-w-none">
        <h1 className="mb-3 text-3xl font-semibold">{post.title}</h1>
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="tabular-nums">{formatIsoDate(post.date)}</span>
          <span>•</span>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        <Card className="border-muted/50">
          <CardContent>
            <Streamdown>{content}</Streamdown>
          </CardContent>
        </Card>
      </article>

      <div className="mt-10">
        <Link href="/b2b-lead-generation">
          <Button size="lg">Book a strategy call</Button>
        </Link>
      </div>
    </main>
  );
}
