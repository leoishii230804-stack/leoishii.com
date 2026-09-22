// ---------------------------------------------------------------
// Market & Economic Commentary — single source of truth for every
// commentary post. Shared by index.html, commentary.html, and
// commentary-post.html.
//
// This is the ONLY way to publish a post: add an entry below, then
// commit and push to GitHub. There is no form or admin page on the
// site, so visitors have no way to add, edit, or delete entries —
// only whoever can push to this repo can.
//
// slug — used in the post URL (commentary-post.html?slug=...). Must
//        be unique and URL-safe (lowercase, hyphens, no spaces).
// date — "YYYY-MM-DD".
// body — may contain multiple paragraphs separated by a blank line
//        (\n\n). The first paragraph is used as the preview excerpt
//        on the home page and the commentary feed.
// ---------------------------------------------------------------
const COMMENTARY = [
  // {
  //   slug: "boj-exit-negative-rates",
  //   title: "On the BOJ's exit from negative rates",
  //   date: "2026-03-15",
  //   body: "First paragraph.\n\nSecond paragraph.",
  // },
];
