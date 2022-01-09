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

// CMS types
export type BlogFrontMatter = {
  /** appears as the tail of the output URL. A value specified in front matter will override the segment of the URL based on the filename. */
  slug: string;
  /** the title for the content. Used for SEO */
  title: string;
  /** the datetime assigned to this page. Used to sort posts by publish time. */
  date: string;
  /** the datetime at which the content was last modified. Used for SEO. */
  lastmod: string;
  /** text used when providing a summary of the article in the .Summary page variable; details available in the content-summaries section. Used for SEO. */
  summary: string;
  /** a categorization that can be used to classify content. */
  categories: string[] | undefined;
  /** an array of series this page belongs to, as a subset of the series taxonomy; used by the opengraph internal template to populate og:see_also. */
  series: string[] | undefined;
  /** featured image of the post for SEO. */
  image: string;
  /** if true, the content will not be rendered unless the --buildDrafts flag is passed to the hugo command. */
  draft: boolean | undefined;
};

export interface Blog extends BlogFrontMatter {
  id: string
  content: string
}

export interface Post extends BlogFrontMatter {
  views: number;
}
