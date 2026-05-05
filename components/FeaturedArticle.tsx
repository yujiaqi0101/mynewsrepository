import Link from "next/link";
import { Article } from "@/lib/articles";
import { Category } from "@/lib/categories";

interface FeaturedArticleProps {
  article: Article;
  category?: Category;
}

export default function FeaturedArticle({ article, category }: FeaturedArticleProps) {
  return (
    <Link href={`/blog/${article.slug}`} className="block group">
      <article className="glass-card gradient-border overflow-hidden hover:-translate-y-1 transition-all duration-300">
        {/* 顶部极光渐变条 */}
        <div className="h-1.5 aurora-bg" />
        <div className="p-8">
          {category && (
            <span className="neon-tag inline-flex items-center mb-4">
              {category.icon} {category.name}
            </span>
          )}
          <h2 className="text-2xl font-bold text-gray-100 mb-3 group-hover:text-cyan-400 transition-colors">
            {article.title}
          </h2>
          <p className="text-gray-300 mb-4 line-clamp-3 text-lg">
            {article.excerpt}
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span className="font-medium text-gray-300">{article.author}</span>
            <span>&middot;</span>
            <span>{article.date}</span>
            <span>&middot;</span>
            <span className="text-cyan-400 group-hover:text-cyan-300 font-medium">阅读全文 &rarr;</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
