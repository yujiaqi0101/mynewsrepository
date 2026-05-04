import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import AdBanner from "@/components/AdBanner";
import { getAllCategories } from "@/lib/categories";
import { getArticlesByCategory } from "@/lib/articles";

export default function HomePage() {
  const categories = getAllCategories();

  return (
    <div>
      {/* Hero 横幅 */}
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 广告位 */}
        <div className="mb-8">
          <AdBanner slot="banner-home-top" />
        </div>

        {/* 专栏第一行 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {categories.slice(0, 2).map((cat) => (
            <CategorySection
              key={cat.id}
              category={cat}
              articles={getArticlesByCategory(cat.id)}
            />
          ))}
        </div>

        {/* 广告位 */}
        <div className="mb-8">
          <AdBanner slot="banner-home-mid" />
        </div>

        {/* 专栏第二行 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {categories.slice(2, 4).map((cat) => (
            <CategorySection
              key={cat.id}
              category={cat}
              articles={getArticlesByCategory(cat.id)}
            />
          ))}
        </div>

        {/* 专栏第三行 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {categories.slice(4, 6).map((cat) => (
            <CategorySection
              key={cat.id}
              category={cat}
              articles={getArticlesByCategory(cat.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
