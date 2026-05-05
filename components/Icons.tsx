// SVG 图标组件 - 替代 Emoji，更精致的视觉效果
// 使用 Lucide 风格的线性图标，配合霓虹渐变色

interface IconProps {
  className?: string;
  size?: number;
}

// Logo 图标 - 抽象的 AI 大脑/信号波
export function LogoIcon({ className = "", size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <circle cx="14" cy="14" r="12" stroke="url(#logo-gradient)" strokeWidth="1.5" fill="none" />
      <circle cx="14" cy="14" r="6" stroke="url(#logo-gradient)" strokeWidth="1.5" fill="none" />
      <circle cx="14" cy="14" r="2" fill="url(#logo-gradient)" />
      <line x1="14" y1="2" x2="14" y2="8" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="20" x2="14" y2="26" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2" y1="14" x2="8" y2="14" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="14" x2="26" y2="14" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// AI大模型 - 神经网络节点图标
export function LLMIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="5" r="2.5" stroke="#22d3ee" strokeWidth="1.5" fill="none" />
      <circle cx="5" cy="12" r="2.5" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
      <circle cx="19" cy="12" r="2.5" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="19" r="2.5" stroke="#a855f7" strokeWidth="1.5" fill="none" />
      <line x1="12" y1="7.5" x2="6.5" y2="10" stroke="#22d3ee" strokeWidth="1" opacity="0.6" />
      <line x1="12" y1="7.5" x2="17.5" y2="10" stroke="#22d3ee" strokeWidth="1" opacity="0.6" />
      <line x1="6.5" y1="14.5" x2="10" y2="17" stroke="#3b82f6" strokeWidth="1" opacity="0.6" />
      <line x1="17.5" y1="14.5" x2="14" y2="17" stroke="#3b82f6" strokeWidth="1" opacity="0.6" />
      <line x1="7.5" y1="12" x2="16.5" y2="12" stroke="#8b5cf6" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

// AI Agent - 机器人头部图标
export function AgentIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="6" width="14" height="12" rx="3" stroke="#22d3ee" strokeWidth="1.5" fill="none" />
      <circle cx="9" cy="11" r="1.5" fill="#22d3ee" />
      <circle cx="15" cy="11" r="1.5" fill="#22d3ee" />
      <path d="M9 15.5C9 15.5 10.5 14 12 14C13.5 14 15 15.5 15 15.5" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="2" x2="12" y2="6" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="2" r="1" fill="#a855f7" />
      <line x1="3" y1="11" x2="5" y2="11" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="19" y1="11" x2="21" y2="11" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 多模态 - 多层叠加图标（图像+音频+视频）
export function MultimodalIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="12" height="12" rx="2" stroke="#22d3ee" strokeWidth="1.5" fill="none" />
      <circle cx="7" cy="8" r="1.5" fill="#22d3ee" />
      <path d="M3 13L8 9L11 11L15 7" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="9" y="9" width="12" height="12" rx="2" stroke="#a855f7" strokeWidth="1.5" fill="rgba(10,10,26,0.8)" />
      <path d="M13 15L15 17L19 13" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 行业动态 - 闪电/趋势图标
export function NewsIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13 2L4 14H12L11 22L20 10H12L13 2Z" stroke="#22d3ee" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M13 2L4 14H12L11 22L20 10H12L13 2Z" fill="url(#news-gradient)" opacity="0.15" />
      <defs>
        <linearGradient id="news-gradient" x1="4" y1="2" x2="20" y2="22">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 前沿科技 - 火箭图标
export function FrontierIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C12 2 8 6 8 12C8 16 10 19 12 22C14 19 16 16 16 12C16 6 12 2 12 2Z" stroke="#22d3ee" strokeWidth="1.5" fill="none" />
      <path d="M12 2C12 2 8 6 8 12C8 16 10 19 12 22C14 19 16 16 16 12C16 6 12 2 12 2Z" fill="url(#rocket-gradient)" opacity="0.1" />
      <circle cx="12" cy="11" r="2" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
      <path d="M8 14L5 17" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 14L19 17" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 18L9 22" stroke="#22d3ee" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M14 18L15 22" stroke="#22d3ee" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <defs>
        <linearGradient id="rocket-gradient" x1="8" y1="2" x2="16" y2="22">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 深度报告 - 图表/柱状图图标
export function ReportIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#22d3ee" strokeWidth="1.5" fill="none" />
      <rect x="6" y="13" width="3" height="5" rx="0.5" fill="#22d3ee" opacity="0.8" />
      <rect x="10.5" y="9" width="3" height="9" rx="0.5" fill="#3b82f6" opacity="0.8" />
      <rect x="15" y="6" width="3" height="12" rx="0.5" fill="#a855f7" opacity="0.8" />
      <path d="M6 7L9 5L12 8L15 4L18 6" stroke="#22d3ee" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
    </svg>
  );
}

// 图标映射表
export const categoryIcons: Record<string, React.FC<IconProps>> = {
  llm: LLMIcon,
  agent: AgentIcon,
  multimodal: MultimodalIcon,
  news: NewsIcon,
  frontier: FrontierIcon,
  reports: ReportIcon,
};

// 获取分类图标组件
export function getCategoryIcon(categoryId: string): React.FC<IconProps> {
  return categoryIcons[categoryId] || LLMIcon;
}
