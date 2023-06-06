import { ncNanoId } from "@/lib/utils";
import { NavItemType } from "@/types";

export const SHOP_TEMPLATES: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/#",
    name: "Home Page",
    children: [
      { id: ncNanoId(), href: "/", name: "Home  1" },
      { id: ncNanoId(), href: "/home-2", name: "Home  2", isNew: true },
      { id: ncNanoId(), href: "/", name: "Header  1" },
      { id: ncNanoId(), href: "/home-2", name: "Header  2", isNew: true },
      { id: ncNanoId(), href: "/", name: "Coming Soon" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Shop Pages",
    children: [
      { id: ncNanoId(), href: "/collection", name: "Category Page 1" },
      { id: ncNanoId(), href: "/collection-2", name: "Category Page 2" },
      { id: ncNanoId(), href: "/product-detail", name: "Product Page 1" },
      { id: ncNanoId(), href: "/product-detail-2", name: "Product Page 2" },
      { id: ncNanoId(), href: "/cart", name: "Cart Page" },
      { id: ncNanoId(), href: "/checkout", name: "Checkout Page" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Other Pages",
    children: [
      { id: ncNanoId(), href: "/checkout", name: "Checkout Page" },
      { id: ncNanoId(), href: "/search", name: "Search Page" },
      { id: ncNanoId(), href: "/cart", name: "Cart Page" },
      { id: ncNanoId(), href: "/account", name: "Accout Page" },
      { id: ncNanoId(), href: "/account-order", name: "Order Page" },
      { id: ncNanoId(), href: "/subscription", name: "Subscription" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Blog Page",
    children: [
      { id: ncNanoId(), href: "/blog", name: "Blog Page" },
      { id: ncNanoId(), href: "/blog-single", name: "Blog Single" },
      { id: ncNanoId(), href: "/about", name: "About Page" },
      { id: ncNanoId(), href: "/contact", name: "Contact Page" },
      { id: ncNanoId(), href: "/login", name: "Login" },
      { id: ncNanoId(), href: "/signup", name: "Signup" },
    ],
  },
];

export const SERVICES_TEMPLATE: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/#",
    name: "Thiết kế nội thất",
    children: [
      { id: ncNanoId(), href: "/", name: "Home  1" },
      { id: ncNanoId(), href: "/home-2", name: "Home  2", isNew: true },
      { id: ncNanoId(), href: "/", name: "Header  1" },
      { id: ncNanoId(), href: "/home-2", name: "Header  2", isNew: true },
      { id: ncNanoId(), href: "/", name: "Coming Soon" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Shop Pages",
    children: [
      { id: ncNanoId(), href: "/collection", name: "Category Page 1" },
      { id: ncNanoId(), href: "/collection-2", name: "Category Page 2" },
      { id: ncNanoId(), href: "/product-detail", name: "Product Page 1" },
      { id: ncNanoId(), href: "/product-detail-2", name: "Product Page 2" },
      { id: ncNanoId(), href: "/cart", name: "Cart Page" },
      { id: ncNanoId(), href: "/checkout", name: "Checkout Page" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Other Pages",
    children: [
      { id: ncNanoId(), href: "/checkout", name: "Checkout Page" },
      { id: ncNanoId(), href: "/search", name: "Search Page" },
      { id: ncNanoId(), href: "/cart", name: "Cart Page" },
      { id: ncNanoId(), href: "/account", name: "Accout Page" },
      { id: ncNanoId(), href: "/account-order", name: "Order Page" },
      { id: ncNanoId(), href: "/subscription", name: "Subscription" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Blog Page",
    children: [
      { id: ncNanoId(), href: "/blog", name: "Blog Page" },
      { id: ncNanoId(), href: "/blog-single", name: "Blog Single" },
      { id: ncNanoId(), href: "/about", name: "About Page" },
      { id: ncNanoId(), href: "/contact", name: "Contact Page" },
      { id: ncNanoId(), href: "/login", name: "Login" },
      { id: ncNanoId(), href: "/signup", name: "Signup" },
    ],
  },
];

const IDIA_TEMPLATE: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Công trình thực tế",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Mẫu thiết kế",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Thư viện ảnh",
  },
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Kiến thức",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Thiết kế 3D",
  },
];

export const NAVIGATION_EN: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "About Us",
  },
  {
    id: ncNanoId(),
    href: "/en/work",
    name: "Works",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Innovation",
  },
  {
    id: ncNanoId(),
    href: "/en/blog",
    name: "Blog",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Contact",
  },
];

export const NAVIGATION_VI: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Về chúng tôi",
  },
  {
    id: ncNanoId(),
    href: "/vi/work",
    name: "Dự án",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Sáng tạo từ BEC",
  },
  {
    id: ncNanoId(),
    href: "/vi/blog",
    name: "Blog",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Liên hệ",
  },
];
