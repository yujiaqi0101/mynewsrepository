import Link from "next/link";
import { Article } from "@/lib/articles";
import { Category } from "@/lib/categories";
import ArticleCard from "./ArticleCard";

interface CategorySectionProps {
  category: Category;
  articles: Article[];
}

export default function CategorySection({ category, articles }: CategorySectionProps) {
  const hasArticles = articles.length > 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      {/* 标题栏 */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{category.icon}</span>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{category.name}</h2>
            <p className="text-sm text-gray-500">{category.description}</p>
          </div>
        </div>
        {hasArticles && (
          <Link
            href="/"
            className="text-sm text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap"
          >
            查看更多 →
          </Link>
        )}
      </div>

      {/* 内容区 */}
      {hasArticles ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} category={category} />
          ))}
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-200 rounded-lg p-12 text-center">
          <span className="text-4xl mb-4 block">{category.icon}</span>
          <h3 className="text-lg font-semibold text-gray-400 mb-2">{category.name}</h3>
          <p className="text-sm text-gray-400">即将上线，敬请期待</p>
          <p className="text-xs text-gray-300 mt-2">{category.description}</p>
        </div>
      )}
    </div>
  );
}
