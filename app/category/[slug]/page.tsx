import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, Clock } from "lucide-react";
import {
  posts as allPosts,
  sortPostsByDateDescending,
  getRelativeTimeFromNow,
} from "@/lib/blog/posts";
import { slugifyTag } from "@/lib/blog/tags";

export async function generateStaticParams() {
  const posts = sortPostsByDateDescending(allPosts);
  const tags = Array.from(new Set(posts.flatMap((p) => p.tags)));
  return tags.map((tag) => ({ slug: slugifyTag(tag) }));
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = sortPostsByDateDescending(allPosts);
  const tagFromSlug = posts
    .flatMap((p) => p.tags)
    .find((t) => slugifyTag(t) === slug);

  const filteredPosts = tagFromSlug
    ? posts.filter((p) => p.tags.includes(tagFromSlug))
    : [];

  return (
    <main className="mx-auto w-full max-w-6xl px-4 md:px-6 py-12">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          {tagFromSlug ? tagFromSlug : "Tag"}
        </h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          {tagFromSlug
            ? `Articles tagged with ${tagFromSlug}`
            : "No matching tag found."}
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group">
              <Card className="h-full transition-all duration-300 group-hover:shadow-lg group-hover:border-primary/50 overflow-hidden">
                {post.image?.src && (
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={post.image.src}
                      alt={post.image.alt || post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                      priority={post.featured === true}
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CalendarDays className="w-3 h-3" />
                      <span>{getRelativeTimeFromNow(post.date)}</span>
                    </div>
                    {post.readTime && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs px-2 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs px-2 py-1">
                        +{post.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <div className="mt-8 text-center text-sm text-muted-foreground">
            No articles found for this tag.
          </div>
        )}
      </section>
    </main>
  );
}
