export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    facebook: string;
    instagram: string;
  };
};

export interface NavItemType {
  id: string;
  name: string;
  href: string;
  targetBlank?: boolean;
  children?: NavItemType[];
  type?: "dropdown" | "megaMenu" | "none";
  isNew?: boolean;
}

export interface NavigationItemProps {
  menuItem: NavItemType;
}

export interface CustomLink {
  label: string;
  href: any;
  targetBlank?: boolean;
}

export interface SocialType {
  name: string;
  icon: string;
  href: string;
}

interface IFeaturedImageNode {
  sourceUrl: string
}

interface IAuthAvt {
  url: string
}

interface IAuthorNode {
  name: string
  firstName: string
  lastName: string
  avatar: IAuthAvt
}

interface IFeaturedImage {
  node: IFeaturedImageNode
}

interface IAuthor {
  node: IAuthorNode
}

export interface IPENode {
  id: number
  title: string
  excerpt: string
  date: string
  featuredImage: IFeaturedImage
  author: IAuthor
  slug: string
}

export interface IPEdges {
  node: IPENode
}

interface IPosts {
  edges: IPEdges[]
}

export interface IDataPosts {
  posts: IPosts
}

export interface IPrENode { }

interface IPrEdges {
  node: IPrENode
}

interface IProducts {
  edges: IPrEdges[]
}

export interface IDataProducts {
  products: IProducts
}
