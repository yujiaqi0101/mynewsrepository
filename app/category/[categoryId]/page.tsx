import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCategories, getCategoryById } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import { getCategoryIcon } from "@/components/Icons";

interface Props {
  params: Promise<{ categoryId: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({
    categoryId: cat.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId } = await params;
  const category = getCategoryById(categoryId);
  if (!category) {
    return { title: "分类不存在" };
  }
  return {
    title: `${category.name} - AI趋势观察`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { categoryId } = await params;
  const category = getCategoryById(categoryId);

  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(categoryId);
  const Icon = getCategoryIcon(categoryId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 面包屑导航 */}
      <nav className="mb-6 text-sm">
        <span className="text-gray-500">首页</span>
        <span className="mx-2 text-gray-600">/</span>
        <span className="text-cyan-400">{category.name}</span>
      </nav>

      {/* 分类标题 */}
      <div className="glass-card p-6 mb-8">
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
            <Icon size={32} />
          </div>
          <div>
            <h1 className="text-2xl font-bold neon-text-cyan">{category.name}</h1>
            <p className="text-gray-400 mt-1">{category.description}</p>
          </div>
        </div>
      </div>

      {/* 文章列表 */}
      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} category={category} />
          ))}
        </div>
      ) : (
        <div className="placeholder-card p-16 text-center">
          <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10 inline-block mb-4">
            <Icon size={48} />
          </div>
          <h3 className="text-xl font-semibold text-gray-400 mb-2">暂无文章</h3>
          <p className="text-gray-500">该分类下还没有文章，敬请期待</p>
        </div>
      )}
    </div>
  );
}
