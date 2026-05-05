import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/articles";
import { getCategoryById } from "@/lib/categories";
import ArticleContent from "@/components/ArticleContent";
import AdBanner from "@/components/AdBanner";
import AdSidebar from "@/components/AdSidebar";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "文章未找到" };
  return {
    title: `${article.title} - AI趋势观察`,
    description: article.excerpt,
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const category = getCategoryById(article.categoryId);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 面包屑导航 */}
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300">首页</Link>
          <span className="mx-2">/</span>
          {category && (
            <>
              <span>{category.icon} {category.name}</span>
              <span className="mx-2">/</span>
            </>
          )}
          <span className="text-gray-100">{article.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* 主内容区 */}
          <article className="flex-1 max-w-4xl">
            {/* 顶部广告 */}
            <div className="mb-6">
              <AdBanner slot="banner-article-top" />
            </div>

            {/* 文章头部 */}
            <header className="glass-card p-8 mb-6">
              {category && (
                <span className="inline-flex items-center text-sm font-medium text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full mb-4">
                  {category.icon} {category.name}
                </span>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 leading-tight">
                {article.title}
              </h1>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="font-medium text-gray-400">{article.author}</span>
                <span>·</span>
                <span>{article.date}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {article.tags.map((tag) => (
                  <span key={tag} className="neon-tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </header>

            {/* 文章内容 */}
            <div className="glass-card p-8 mb-6">
              <ArticleContent slug={article.slug} categoryId={article.categoryId} />
            </div>

            {/* 文中广告 */}
            <div className="mb-6">
              <AdBanner slot="banner-article-mid" />
            </div>

            {/* 底部广告 */}
            <div className="mb-6">
              <AdBanner slot="banner-article-bottom" />
            </div>
          </article>

          {/* 侧边栏 */}
          <aside className="w-full lg:w-80 space-y-6">
            {/* 侧边栏广告 */}
            <AdSidebar slot="sidebar-article-1" />
            <AdSidebar slot="sidebar-article-2" />

            {/* 相关推荐 */}
            <div className="glass-card p-6">
              <h3 className="font-bold text-gray-100 mb-4">📌 更多文章</h3>
              <p className="text-sm text-gray-500">更多精彩内容即将上线，敬请期待！</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
