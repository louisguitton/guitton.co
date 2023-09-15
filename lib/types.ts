// API types
export type PostView = {
  page: string;
  views: number;
  since: string;
};
export type FeaturedPostsData = PostView[];

export type SitePageViewsData = {
  pageViews: number;
  since: string;
};
