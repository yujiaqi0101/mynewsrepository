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
      <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        {/* 顶部色带 */}
        <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500" />
        <div className="p-6">
          {/* 分类标签 */}
          {category && (
            <span className="inline-flex items-center text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full mb-3">
              {category.icon} {category.name}
            </span>
          )}

          {/* 标题 */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* 摘要 */}
          <p className="text-sm text-gray-500 mb-4 line-clamp-3">
            {article.excerpt}
          </p>

          {/* 底部信息 */}
          <div className="flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center space-x-3">
              <span>{article.author}</span>
              <span>{article.date}</span>
            </div>
            <div className="flex space-x-1">
              {article.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded">
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
