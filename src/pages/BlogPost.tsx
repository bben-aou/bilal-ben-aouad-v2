import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Layout } from "@/components/layout/Layout";
import { getPostBySlug, getRelatedPosts, calculateReadingTime, getAllPosts } from "@/data/blog-posts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getPostBySlug(slug || "");

  if (!post) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const relatedPosts = getRelatedPosts(post.slug, post.tags);
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Extract headings for TOC
  const headings = post.content
    .split("\n")
    .filter((line) => line.startsWith("## ") || line.startsWith("### "))
    .map((line) => {
      const level = line.startsWith("### ") ? 3 : 2;
      const text = line.replace(/^#{2,3}\s/, "");
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      return { level, text, id };
    });

  return (
    <Layout>
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="py-20"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
            >
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/blog" className="hover:text-foreground transition-colors">
                Blog
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground truncate max-w-[200px]">{post.title}</span>
            </motion.nav>

            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">{post.summary}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {calculateReadingTime(post.content)} min read
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.header>

            <div className="flex gap-8">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex-1 min-w-0"
              >
                <div className="prose-custom max-w-none">
                  <ReactMarkdown
                    components={{
                      h2: ({ children }) => {
                        const text = String(children);
                        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                        return (
                          <h2 id={id} className="scroll-mt-24">
                            {children}
                          </h2>
                        );
                      },
                      h3: ({ children }) => {
                        const text = String(children);
                        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                        return (
                          <h3 id={id} className="scroll-mt-24">
                            {children}
                          </h3>
                        );
                      },
                      code: ({ className, children, ...props }) => {
                        const match = /language-(\w+)/.exec(className || "");
                        const isInline = !match;
                        return isInline ? (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        ) : (
                          <SyntaxHighlighter
                            style={oneDark}
                            language={match[1]}
                            PreTag="div"
                            customStyle={{
                              borderRadius: "0.75rem",
                              fontSize: "0.875rem",
                            }}
                          >
                            {String(children).replace(/\n$/, "")}
                          </SyntaxHighlighter>
                        );
                      },
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
              </motion.div>

              {/* Table of Contents - Desktop */}
              {headings.length > 0 && (
                <motion.aside
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="hidden lg:block w-64 flex-shrink-0"
                >
                  <div className="sticky top-24">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      On this page
                    </h4>
                    <nav className="space-y-2">
                      {headings.map((heading) => (
                        <a
                          key={heading.id}
                          href={`#${heading.id}`}
                          className={`block text-sm text-muted-foreground hover:text-foreground transition-colors ${
                            heading.level === 3 ? "pl-4" : ""
                          }`}
                        >
                          {heading.text}
                        </a>
                      ))}
                    </nav>
                  </div>
                </motion.aside>
              )}
            </div>

            {/* Post Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-16 pt-8 border-t border-border"
            >
              {prevPost ? (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="flex-1 group p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <ArrowLeft className="h-4 w-4" />
                    Previous
                  </div>
                  <p className="font-medium group-hover:text-primary transition-colors line-clamp-1">
                    {prevPost.title}
                  </p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {nextPost && (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="flex-1 group p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors text-right"
                >
                  <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  <p className="font-medium group-hover:text-primary transition-colors line-clamp-1">
                    {nextPost.title}
                  </p>
                </Link>
              )}
            </motion.nav>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-16"
              >
                <h3 className="text-xl font-bold mb-6">Related Posts</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      to={`/blog/${relatedPost.slug}`}
                      className="group p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
                    >
                      <h4 className="font-medium mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {relatedPost.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Back to Blog */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 text-center"
            >
              <Button asChild variant="outline">
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.article>
    </Layout>
  );
};

export default BlogPost;
