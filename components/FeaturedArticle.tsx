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
      <article className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500" />
        <div className="p-8">
          {category && (
            <span className="inline-flex items-center text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
              {category.icon} {category.name}
            </span>
          )}
          <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {article.title}
          </h2>
          <p className="text-gray-500 mb-4 line-clamp-3 text-lg">
            {article.excerpt}
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span className="font-medium text-gray-600">{article.author}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span className="text-blue-500 group-hover:text-blue-600 font-medium">阅读全文 →</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
