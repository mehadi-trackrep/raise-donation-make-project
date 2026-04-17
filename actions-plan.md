# Actions Plan

## Task: Support Google Drive image URLs from Google Sheets data

---

## Problem

When a project's `coverImage` or `galleryImages` column in Google Sheets contains a
Google Drive sharing URL (e.g. `https://drive.google.com/file/d/{ID}/view?usp=sharing`),
the image fails to load because:

1. `next/image` only allows `images.unsplash.com` as a remote pattern (no Drive host allowed).
2. Google Drive share URLs are not direct image URLs — they require conversion to the
   CDN-served URL: `https://lh3.googleusercontent.com/d/{FILE_ID}`.

---

## Supported Google Drive URL formats to detect

| Input format | Example |
|---|---|
| File view link | `https://drive.google.com/file/d/ABC123/view?usp=sharing` |
| Open link | `https://drive.google.com/open?id=ABC123` |
| Already a direct uc link | `https://drive.google.com/uc?id=ABC123` |

All three should be converted to: `https://lh3.googleusercontent.com/d/ABC123`

---

## Changes (3 files)

### 1. `src/lib/utils.ts` — add `normalizeImageUrl()`

New helper function:
- If the URL is a Google Drive URL, extract the file ID and return
  `https://lh3.googleusercontent.com/d/{FILE_ID}`.
- Otherwise return the URL unchanged.

```ts
export function normalizeImageUrl(url: string): string {
  if (!url) return url;

  // Match: /file/d/{ID}
  const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch) return `https://lh3.googleusercontent.com/d/${fileMatch[1]}`;

  // Match: ?id={ID} or &id={ID}  (open or uc links)
  if (url.includes("drive.google.com")) {
    const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (idMatch) return `https://lh3.googleusercontent.com/d/${idMatch[1]}`;
  }

  return url;
}
```

### 2. `src/lib/googleSheets.ts` — apply `normalizeImageUrl()` in `rowToProject()`

- Import `normalizeImageUrl` from `@/lib/utils`
- Apply it to `coverImage`
- Apply it to each item in `galleryImages`

```ts
coverImage: normalizeImageUrl(row.coverImage ?? ""),
galleryImages: toStringArray(row.galleryImages).map(normalizeImageUrl),
```

### 3. `next.config.ts` — allow `lh3.googleusercontent.com`

Add a new entry to `images.remotePatterns`:

```ts
{
  protocol: "https",
  hostname: "lh3.googleusercontent.com",
  pathname: "/**",
},
```

---

## Summary

| File | Change |
|---|---|
| `src/lib/utils.ts` | Add `normalizeImageUrl()` |
| `src/lib/googleSheets.ts` | Apply `normalizeImageUrl` to `coverImage` + `galleryImages` in `rowToProject()` |
| `next.config.ts` | Allow `lh3.googleusercontent.com` as an image remote pattern |
