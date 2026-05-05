import Link from "next/link";
import { Article } from "@/lib/articles";
import { Category } from "@/lib/categories";

interface ArticleCardProps {
  article: Article;
  category?: Category;
}

export default function ArticleCard({ article, category }: ArticleCardProps) {
  return (
    <Link href={`/blog/${article.slug}`} className="block group">
      <article className="glass-card overflow-hidden hover:-translate-y-1 transition-all duration-300">
        {/* 顶部渐变色带 */}
        <div className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500" />
        <div className="p-6">
          {/* 分类标签 */}
          {category && (
            <span className="neon-tag inline-flex items-center mb-3">
              {category.icon} {category.name}
            </span>
          )}

          {/* 标题 */}
          <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* 摘要 */}
          <p className="text-sm text-gray-400 mb-4 line-clamp-3">
            {article.excerpt}
          </p>

          {/* 底部信息 */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-3">
              <span>{article.author}</span>
              <span>{article.date}</span>
            </div>
            <div className="flex space-x-1">
              {article.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="neon-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
