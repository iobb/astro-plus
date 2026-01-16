import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string,
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
  homepage: PostFilter;
  search?: boolean;
}

export const siteConfig: SiteConfig = {
  site: "https://blog.nll.de5.net/", // 您的网站 URL
  title: "BG - Blog's",
  slogan: "红尘滚滚,天机渺渺.",
  description: "blog.nn.de5.net",
  social: {
    // 原版集成的一些联系方式, 不需要则留空
    github: "https://github.com/username",
    email: "your@email.com",
    // linkedin: "https://www.linkedin.com/in/username",
  },
  homepage: {
    maxPosts: 5, // 主页显示的最大文章数量
    tags: [], // 仅显示包含这些标签的文章
    excludeTags: [], // 排除包含这些标签的文章
  },
  search: true, // 启用本地搜索
};
