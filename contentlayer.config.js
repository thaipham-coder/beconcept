import { defineDocumentType, makeSource, defineNestedType } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

/** @type {import('contentlayer/source-files').ComputedFields} */

const getLocale = (path) => {
  const pathArray = path.split('.')
  return pathArray.length > 2 ? pathArray.slice(-2)[0] : 'en'
}

const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
  locale: {
    type: 'string',
    resolve: (doc) => {
      return getLocale(doc._raw.sourceFilePath)
    },
  },
}

export const Category = defineNestedType(() => ({
  name: 'Category',
  filePathPattern: 'categories/**/*.mdx',
  contentType: "mdx",
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: "string",
      required: true
    },
  },
  computedFields
}))

export const ActualWorks = defineDocumentType(() => ({
  name: 'ActualWorks',
  filePathPattern: 'actualworks/**/*.mdx',
  contentType: "mdx",
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    acreage: {
      type: "number",
      required: true
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    image: {
      type: "string",
      required: true,
    },
    fakeViewCount: {
      type: "number",
      required: true
    },
    typeOfConstruction: {
      type: 'enum',
      options: ['apartment', 'townhouse', 'villa', 'duplex', 'other'],
      default: 'other',
    }
  },
  computedFields
}))

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    image: {
      type: "string",
      required: true,
    },
    authors: {
      // Reference types are not embedded.
      // Until this is fixed, we can use a simple list.
      // type: "reference",
      // of: Author,
      type: "list",
      of: { type: "string" },
      required: true,
    },
    category: {
      type: 'string',
      of: Category,
    },
  },
  computedFields,
}))

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}))

export const Author = defineDocumentType(() => ({
  name: "Author",
  filePathPattern: `authors/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    avatar: {
      type: "string",
      required: true,
    },
    twitter: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Page, Post, Author, Category, ActualWorks],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted")
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"]
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
})