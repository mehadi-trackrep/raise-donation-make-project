# Actions Plan

## Task: Fix "How to Donate" section mobile styles on `/donate` page

---

## Root Cause

Each `<li>` in the steps list uses `flex gap-3` but is missing `items-start`.

Without `items-start`, flexbox defaults to `items-stretch` / centres the number badge vertically against the text block. On steps 3 and 4 — which have long multi-line text on narrow screens — the number badge floats to the vertical middle of the text instead of staying pinned to the first line. This causes the badge/text to look misaligned and "messed up".

Additionally, the text content in each `<li>` is a bare anonymous text node (mixed with inline elements like `<strong>` and `<a>`) directly inside the flex container. Wrapping it in a `<span>` makes it a proper flex item and ensures clean wrapping on narrow screens.

---

## Fix (single file: `src/app/donate/page.tsx`)

**All 4 `<li>` elements in the "How to Donate" `<ol>`:**

1. Add `items-start` to `flex gap-3` → `flex items-start gap-3`
2. Wrap each step's text content in a `<span>` for clean flex-item text wrapping

---

## Changes

**File: `src/app/donate/page.tsx`**

Step 1:
```jsx
<li className="flex items-start gap-3">
  <span ...>1</span>
  <span>Choose the bank account below and set up your transfer.</span>
</li>
```

Step 2:
```jsx
<li className="flex items-start gap-3">
  <span ...>2</span>
  <span>Set up a bank transfer from your online banking or branch using the details provided.</span>
</li>
```

Step 3:
```jsx
<li className="flex items-start gap-3">
  <span ...>3</span>
  <span>In the <strong>payment reference</strong>, write the project name (e.g. &ldquo;Community Food Bank&rdquo;) or &ldquo;GENERAL&rdquo; if donating to the overall fund.</span>
</li>
```

Step 4:
```jsx
<li className="flex items-start gap-3">
  <span ...>4</span>
  <span>Optionally email us at <a ...>donations@hoperaise.org</a> with your name and reference so we can send a thank-you receipt.</span>
</li>
```

---

## Summary

| Issue | Fix |
|-------|-----|
| Number badge drifts to vertical centre of long text | `items-start` on all `<li>` |
| Text node / inline elements not a clean flex item | Wrap text in `<span>` |
