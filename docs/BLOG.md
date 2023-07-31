# How blogs are loaded

1. Each blog located under `routes/blog/__posts` dir
2. The directory contains `posts.ts` and `dir` each blog.
   1. `posts.ts` return Array<{<locale>: MDXModule}>
   2. `dir` return { <locale>: MDXFile, <locale>: MDXFile, <locale>: MDXFile }
3. The first element in the export array of `posts.ts` is the top item.

# Localizaiton

Each `routes/blog/__posts/some-post` holds it's own localized version of the blog and
exports them via `index.ts` file.

**Examples**

```bash
# Directory structure
routes/blog/__posts/some-post/
|  en.mdx # English
|  sv.mdx # Swedish
|  bs.mxx # Bosnian
|  index.ts # exports all localized version of the blog
```

```typescript
// index.ts
export * as en from "./en.mdx";
export * as sv from "./sv.mdx";
export * as bs from "./bs.mdx";
```

# How to edit metadata (frontmatter)

To edit the title, description, date and tags of blogs edit the meta field of of each MDX file. For more info
https://mdxjs.com/guides/frontmatter/

# Where are the types (Typescript)

The types located under `app/typings/blog.ts`
