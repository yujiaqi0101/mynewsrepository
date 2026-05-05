import Link from "next/link";
import { getFeaturedArticles } from "@/lib/articles";
import { getCategoryById } from "@/lib/categories";

export default function HeroSection() {
  const featuredArticles = getFeaturedArticles();
  const featured = featuredArticles[0];

  if (!featured) {
    return (
      <section className="relative aurora-bg text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-text">AI趋势观察</h1>
          <p className="text-xl md:text-2xl text-cyan-100/80 mb-8">
            探索人工智能前沿，解读技术变革
          </p>
          <p className="text-white/70 max-w-2xl mx-auto">
            聚焦大模型、AI Agent、多模态等核心方向，为你带来最专业的AI领域深度内容
          </p>
        </div>
      </section>
    );
  }

  const category = getCategoryById(featured.categoryId);

  return (
    <section className="relative aurora-bg text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          {category && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white mb-4">
              {category.icon} {category.name}
            </span>
          )}
          <Link href={`/blog/${featured.slug}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 neon-text hover:opacity-80 transition-opacity leading-tight">
              {featured.title}
            </h1>
          </Link>
          <p className="text-lg md:text-xl text-cyan-100/80 mb-6 line-clamp-3">
            {featured.excerpt}
          </p>
          <div className="flex items-center space-x-4 text-sm text-white/70">
            <span>{featured.author}</span>
            <span>&middot;</span>
            <span>{featured.date}</span>
            <span>&middot;</span>
            <div className="flex space-x-2">
              {featured.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="neon-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
