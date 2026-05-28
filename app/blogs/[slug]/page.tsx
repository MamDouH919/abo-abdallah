import { notFound } from "next/navigation"
import type { Metadata } from "next"
import blogPosts from "@/data/blog"
import { Clock, Calendar, ArrowLeft } from "lucide-react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import { ArticleSection, BackLink, ClampedText, HeroSection, HoverCard, MaxWidthBox, MetaItem, PaddedCardContent, PostLink, ProseContent, RelatedSection } from "@/lib/styles"
import { Card, CardContent, Grid } from "@mui/material"
import Navbar from "@/components/layouts/Navbar"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return { title: "مقال غير موجود" }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords.join(", "),
    alternates: {
      canonical: `https://sabaghelkuwait.com/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      locale: "ar_AR",
      url: `https://sabaghelkuwait.com/blog/${slug}`,
      title: post.title,
      description: post.description,
      siteName: "صباغ الكويت",
      publishedTime: post.date,
      images: [{ url: "https://sabaghelkuwait.com/logo.webp", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: "https://sabaghelkuwait.com/logo.webp",
    },
  }
}



export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "خدمات الكويت",
      url: "https://sabaghelkuwait.com",
    },
    publisher: {
      "@type": "Organization",
      name: "خدمات الكويت",
      url: "https://sabaghelkuwait.com",
    },
    inLanguage: "ar",
    url: `https://sabaghelkuwait.com/blog/${slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Navbar />

        <HeroSection>
          <Container maxWidth="lg">
            <MaxWidthBox>
              <Box display="flex" alignItems="center" gap={1.5} mb={2} flexWrap="wrap">
                <Chip label={post.category} color="primary" size="small" variant="outlined" />
                <MetaItem>
                  <Clock size={16} />
                  <Typography variant="body2" color="text.secondary" component="span">
                    {post.readTime} دقائق للقراءة
                  </Typography>
                </MetaItem>
                <MetaItem>
                  <Calendar size={16} />
                  <Typography variant="body2" color="text.secondary" component="span">
                    {new Date(post.date).toLocaleDateString("ar-KW", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Typography>
                </MetaItem>
              </Box>
              <Typography variant="h1" fontWeight="bold" mb={2} lineHeight={1.3} fontSize={{ xs: "2rem", md: "3rem" }}>
                {post.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                {post.description}
              </Typography>
            </MaxWidthBox>
          </Container>
        </HeroSection>

        <ArticleSection>
          <Container maxWidth="lg">
            <MaxWidthBox>
              <Card>
                <PaddedCardContent>
                  <ProseContent dangerouslySetInnerHTML={{ __html: post.content }} />
                </PaddedCardContent>
              </Card>

              <Box mt={4}>
                <BackLink href="/blogs">
                  <ArrowLeft size={16} />
                  العودة إلى جميع المقالات
                </BackLink>
              </Box>
            </MaxWidthBox>
          </Container>
        </ArticleSection>

        {relatedPosts.length > 0 && (
          <RelatedSection>
            <Container maxWidth="lg">
              <MaxWidthBox>
                <Typography variant="h2" fontWeight="bold" mb={3}>
                  مقالات ذات صلة
                </Typography>
                <Grid container spacing={2}>
                  {relatedPosts.map((related) => (
                    <Grid item xs={12} md={4} key={related.slug}>
                      <HoverCard>
                        <CardContent>
                          <Chip label={related.category} color="primary" size="small" variant="outlined" />
                          <Typography variant="subtitle1" fontWeight="bold" mt={1.5} mb={1} lineHeight={1.4}>
                            <PostLink href={`/blog/${related.slug}`}>{related.title}</PostLink>
                          </Typography>
                          <ClampedText variant="body2" color="text.secondary" lineHeight={1.8}>
                            {related.description}
                          </ClampedText>
                        </CardContent>
                      </HoverCard>
                    </Grid>
                  ))}
                </Grid>
              </MaxWidthBox>
            </Container>
          </RelatedSection>
        )}

        {/* <Footer /> */}
      </Box>
    </>
  )
}
