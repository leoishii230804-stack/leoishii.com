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
// slug       — used in the post URL (commentary-post.html?slug=...).
//              Must be unique and URL-safe (lowercase, hyphens, no spaces).
// date       — "YYYY-MM-DD".
// readTime   — optional, e.g. "4 min read". Shown next to the date.
// sourceLink — optional URL to a motivating news article. Shown as a
//              plain link on the full post page only (not in previews).
// code       — optional. The full text of an analysis script (e.g. a
//              Stata .do file) to publish alongside the post. Shown
//              on its own page (commentary-code.html?slug=...) so
//              readers can read it in the browser, no download or
//              software needed. Omit if there's no code for the post.
// codeLabel  — optional label for the code, e.g. "Stata do-file".
//              Defaults to "Analysis code" if code is set but this isn't.
// body       — either:
//                (a) a plain string with paragraphs separated by a
//                    blank line (\n\n), or
//                (b) an array of blocks for posts with images mixed
//                    into the text, in reading order:
//                      { type: "text", text: "..." }
//                      { type: "image", src: "commentary-images/...png",
//                        alt: "...", caption: "optional caption" }
//              The first text block/paragraph is used as the preview
//              excerpt on the home page and the commentary feed —
//              images never appear in previews, only on the full post.
// ---------------------------------------------------------------
const COMMENTARY = [
  // {
  //   slug: "boj-exit-negative-rates",
  //   title: "On the BOJ's exit from negative rates",
  //   date: "2026-03-15",
  //   readTime: "3 min read",
  //   body: "First paragraph.\n\nSecond paragraph.",
  // },
  {
    slug: "jgb10-drivers-ust10-boj-policy",
    title: "Analysing the Drivers of the 10 Year JGB Yield Increases",
    date: "2026-09-24",
    readTime: "4 min read",
    sourceLink: "https://www.bloomberg.com/news/articles/2026-09-24/japan-10-year-bond-yield-jumps-10-basis-points-amid-global-rout",
    codeLabel: "Stata do-file",
    code: `import excel using "/Users/leoishii/Downloads/Commentary Sep 24.xlsx", sheet("Master") firstrow clear

* Make sure the date format is correct
gen mdate = mofd(Date)
format mdate %tm
tsset mdate

* Creating the differences for each variable
gen d_jgb10 = D.jgb10
gen d_ust10 = D.ust10
gen d_usdjpy = D.USDJPY
gen d_VIX = D.VIX
gen d_BrentOil = D.BrentOil
gen d_BOJPolicyRate = D.BOJPolicyRate


* Creating a line chart
twoway (line jgb10 Date) (line ust10 Date), title("10 Year JGB Yield vs 10 Year U.S. T-Bill Yield (Monthly, 2015 - 2026)") ytitle("Percent") xtitle("Date")

* Baseline Regressions
reg d_jgb10 d_ust10, r
reg d_jgb10 d_ust10 d_usdjpy d_VIX d_BrentOil d_BOJPolicyRate,r

* Regressions with Structural Break in between
reg d_jgb10 d_ust10 if mdate < tm(2020m7), r
reg d_jgb10 d_ust10 if mdate >= tm(2020m7), r
reg d_jgb10 d_ust10 d_usdjpy d_VIX d_BrentOil d_BOJPolicyRate if mdate < tm(2020m7),r
reg d_jgb10 d_ust10 d_usdjpy d_VIX d_BrentOil d_BOJPolicyRate if mdate >= tm(2020m7),r

* Creating an Interaction Term to compare pre and post break
gen post2020 = mdate >= tm(2020m7)
gen ust10_post = d_ust10 * post2020
reg d_jgb10 d_ust10 post2020 ust10_post d_usdjpy d_VIX d_BrentOil d_BOJPolicyRate, r
`,
    body: [
      { type: "text", text: "As the 10 Year JGB Yields (hereby JGB10) climb to multi-decade highs, this analysis looks into the drivers of the JGB10 from January 2015 to August 2026." },
      { type: "image", src: "commentary-images/2026-09-24-jgb10-ust10-chart.png", alt: "Line chart of the 10 Year JGB Yield vs 10 Year U.S. T-Bill Yield, monthly, 2015 to 2026", caption: "Image 1" },
      { type: "text", text: "Image 1 was created as the U.S. currently faces multi-year decade high long-term yields. The image suggests a similar growth pattern between the JGB10 and the 10 Year U.S. T-Bill Yield (hereby UST10) from 2015 to 2026." },
      { type: "image", src: "commentary-images/2026-09-24-regression-1.png", alt: "Regression 1 output table", caption: "Regression 1" },
      { type: "text", text: "Regression 1 regresses the monthly change in JGB10 and UST10. The analysis supports the graphs, where a 1 bp increase in UST10 is associated to a 0.16 bp increase in the JGB10. The result is statistically significant, however, the R-squared value show that UST10 does not tell the full story in driving the JGB10." },
      { type: "text", text: "Regression 2 adds multiple other relevant variables such as USDJPY, CBOE VIX, Brent Oil prices (as an indicator for inflation), and current BOJ Policy Rate. The new regression shows that UST10 and the BOJ Policy Rate are the only statistically significant variables at the 5% level. A 1bp increase in UST10 is associated with a 0.135bp increase in JGB10, and a 1bp increase in BOJ Policy Rate is associated with an increase in JGB10 at 0.40bp holding other factors constant. The change of levels in USDJPY, VIX, and Brent Oil Price were statistically insignificant in this specification." },
      { type: "image", src: "commentary-images/2026-09-24-regression-2.png", alt: "Regression 2 output table", caption: "Regression 2" },
      { type: "image", src: "commentary-images/2026-09-24-regression-3.png", alt: "Regression 3 output table", caption: "Regression 3" },
      { type: "image", src: "commentary-images/2026-09-24-regression-4.png", alt: "Regression 4 output table", caption: "Regression 4" },
      { type: "text", text: "Regression 3 and 4 treats July 2022 as a structural break. This structural break was selected purely from observing the point at which the UST10 rebounded (Image 1), therefore, it should not be interpreted as a proper structural break. Regression 5 further adds and interaction term between UST10 and the structural break in order to investigate whether the relationship between JGB10 and UST10 changed across the structural break." },
      { type: "text", text: "These three regressions show an interesting story. Pre-July 2022 shows that JGB10 movements may be dominated by domestic policy rates, however, post-July 2022, JGB10 movements appear to be influenced by both domestic policy rates and global factors, namely UST10. However, the insignificant results in Regression 5 show that the relationship between JGB10 and UST10 may have not changed across the structural break." },
      { type: "image", src: "commentary-images/2026-09-24-regression-5.png", alt: "Regression 5 output table", caption: "Regression 5" },
      { type: "text", text: "This analysis suggests that across the full sample, both BOJ policy rate and UST10 played a statistically significant role in driving JGB10. A deeper investigation found that pre-July 2022 JGB10 movements may have been more domestically influenced compared to post-July 2022. However, the relationship across the break did not structurally change." },
    ],
  },
];
