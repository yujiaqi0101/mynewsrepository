"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";

interface ArticleContentProps {
  slug: string;
  categoryId: string;
}

export default function ArticleContent({ slug, categoryId }: ArticleContentProps) {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/content/${categoryId}/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Article not found");
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch(() => {
        setContent("文章内容加载失败，请稍后再试。");
        setLoading(false);
      });
  }, [slug, categoryId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-gray-400">加载中...</div>
      </div>
    );
  }

  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
