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
import { slugifyTag, getAllTags } from "@/lib/blog/tags";

export const metadata = {
  title: "Tech Insights & Resources | L4RG Digital Plus LLC",
  description:
    "Stay updated with the latest in IT support, cybersecurity, cloud solutions, and technology best practices for modern businesses. Expert insights from L4RG Digital Plus LLC.",
  keywords: [
    "tech blog",
    "IT support",
    "cybersecurity",
    "cloud solutions",
    "technology insights",
    "business technology",
    "tech resources",
    "IT best practices",
    "technology articles",
  ],
  robots: "index, follow",
  authors: [{ name: "L4RG Digital Plus LLC" }],
  creator: "L4RG Digital Plus LLC",
  publisher: "L4RG Digital Plus LLC",
  alternates: {
    canonical: "https://l4rgdigitalplus.com/blog",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://l4rgdigitalplus.com/blog",
    siteName: "L4RG Digital Plus LLC",
    title: "Tech Insights & Resources | L4RG Digital Plus LLC",
    description:
      "Stay updated with the latest in IT support, cybersecurity, cloud solutions, and technology best practices for modern businesses. Expert insights from L4RG Digital Plus LLC.",
    images: [
      {
        url: "/tech-support-hero-pattern.png",
        width: 1200,
        height: 630,
        alt: "Tech Insights & Resources Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Insights & Resources | L4RG Digital Plus LLC",
    description:
      "Stay updated with the latest in IT support, cybersecurity, cloud solutions, and technology best practices for modern businesses.",
    creator: "@sureshdas1978",
    images: ["/tech-support-hero-pattern.png"],
  },
  other: {
    "theme-color": "#ffffff",
    "msapplication-TileColor": "#ffffff",
    copyright: "© 2024 L4RG Digital Plus LLC",
  },
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const posts = sortPostsByDateDescending(allPosts);
  const allTags = getAllTags(posts);
  // Blog index now shows all posts; tag selection navigates to /tag/[slug]
  const filteredPosts = posts;
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 md:px-6 py-12">
      {/* Header Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Tech Insights & Resources
        </h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Stay updated with the latest in IT support, cybersecurity, cloud
          solutions, and technology best practices for modern businesses.
        </p>
      </section>

      {/* Tag Filters */}
      <section className="mb-8" aria-labelledby="tag-filters-heading">
        <h2 id="tag-filters-heading" className="sr-only">
          Filter by tags
        </h2>
        <div
          className="flex flex-wrap items-center gap-2"
          role="listbox"
          aria-label="Tags"
        >
          {allTags.map((tag) => (
            <Link
              key={tag}
              href={`/tag/${slugifyTag(tag)}`}
              scroll={false}
              aria-label={`View posts tagged ${tag}`}
            >
              <Badge
                variant="outline"
                className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {tag}
              </Badge>
            </Link>
          ))}
        </div>
        {/* No selected tags on index; selection navigates to /tag/[slug] */}
      </section>

      {/* Regular Posts */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-muted-foreground rounded-full"></span>
          All Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
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
            No articles match the selected tags.
          </div>
        )}
      </section>
    </main>
  );
}
