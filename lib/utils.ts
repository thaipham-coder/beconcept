// import { Product } from "./wordpress/types";

/**
 * @type string
 * @param path
 */
export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function ncNanoId(prefix = "nc_") {
  return (
    prefix + Date.now() + "_" + Math.floor(Math.random() * 999999999999999)
  );
}

/**
 * @type boolean
 * @param hasRing
 */
export function twFocusClass(hasRing = false) {
  if (!hasRing) {
    return "focus:outline-none";
  }
  return "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0";
}

/**
 * Filters products that are on sale in the returned data
 * @param {Product[]} products - The array of products to filter
 * @returns {Product[]} - The filtered array of products that are on sale
 */
// export function sortProductsOnSale(products: Product[]): Product[] {
//   return products
//     .slice(0, 8)
//     .filter(product => {
//       return product.onSale;
//     });
// }

/**
 * Filter products by tag in the returned data
 * @param {Product[]} products - The array of products to filter
 * @param {string} tagId - The name of the tag to filter by
 * @returns {Product[]} - The filtered array of products
 */
// export function sortProductsByTag(products: Product[], tagId: string): Product[] {
//   const filteredProducts = products
//     .filter(product => {
//       const tag = product
//         .productTags
//         .find(t => t?.id === tagId);
//       return tag !== undefined;
//     });

//   return filteredProducts.slice(0, 8);
// }

/**
 * Filter products by category ID (encoded in base64)
 * @param {Product[]} products - The array of products to filter
 * @param {string} categoryId - The ID of the category to filter by (encoded in base64)
 * @returns {Product[]} - The filtered array of products
 */
// export function sortProductsByCategory(products: Product[], categoryId: string): Product[] {
//   const filteredProducts = products
//     .filter(product => {
//       return product.productCategories.some(c => c?.id === categoryId);
//     });

//   return filteredProducts.slice(0, 8);
// }

/**
 * Add empty character after currency symbol
 * @param {string} price
 * @param {string} symbol
 */
export const paddedPrice = (price: string, symbol: string) => {
  if (!price) {
    return '';
  }
  return price.split(symbol).join(' ');
}

export const variants = (x = 1000, opacity = 0) => ({
  enter: (direction: number) => {
    return {
      x: direction > 0 ? x : -x,
      opacity,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? x : -x,
      opacity,
    };
  },
});

export function formatDate(dateString: string): string {
  const date = new Date(dateString.replace(' ', 'T'));
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${day}-${month}-${year}`;
}
