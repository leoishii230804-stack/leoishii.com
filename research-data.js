// ---------------------------------------------------------------
// Past Research — single source of truth for every paper listed in
// the Past Research section. Shared by index.html and
// research-post.html.
//
// slug     — used in the paper's URL (research-post.html?slug=...).
//            Must be unique and URL-safe (lowercase, hyphens, no spaces).
// title    — paper title, shown on the home page and the paper page.
// subtitle — optional one-line subtitle (e.g. a thesis's date range or
//            focus). Omit or leave as null if not needed.
// tag      — optional short label shown next to the title (e.g. "thesis").
// abstract — full abstract text. Leave as null to show "Abstract coming
//            soon." until you have the text ready.
// ---------------------------------------------------------------
const RESEARCH = [
  {
    slug: "boj-etf-purchases",
    title: "How the BOJ's ETF Purchases Impacted the Japanese Stock Market",
    subtitle: "Professor Schlegl's Macroeconomics Seminar Research Paper - January 2024",
    tag: null,
    abstract: "This paper looks at the impact the Bank of Japan (BOJ) had on the Japanese stock market through their purchases of exchange-traded funds (ETF). In order to find the impact, this paper examines two main methods that are used by past research which are the panel data analysis and difference in differences (DiD) method. These methods are used to address different unique challenges such as the endogeneity problem and the counterfactual problem. This paper will evaluate the problem and then the panel data method addresses the endogeneity problem and how the counterfactual problem is addressed by the DiD method. This paper will then see the potential weaknesses, namely how it is a generalization, therefore, does not take different stock's elasticity into consideration and does not take into account the implications of the differing levels of visibility levels of both Nikkei 225 and TOPIX. This paper will then give a potential solution to this problem.",
  },
  {
    slug: "empirical-bubble-detection-methods",
    title: "Analysis of Empirical Bubble Detection Methods",
    subtitle: "Professor Schlegl's Macroeconomics Seminar Research Paper (Co-Authored) - January 2026",
    tag: null,
    abstract: "My section of the paper looks at the empirical methods used to detect overheating in the Japanese economy by the Bank of Japan (BOJ) in their financial systems report. Through analysing the FAIX and Financial Gap methods, we find that these give a general macro overview of the economy. However, we also find that it is important to delve into the microstructures that back the macro overview as these give an explanation and context to the macro indicators.\n\nI also evaluate the cointegration/integration method by Diba and Grossman (1988) and discuss how this method's never bursting bubble idea allows researchers to empirically detect bubbles. I further looked into the critque by Evans (1991) which demonstrated that Diba and Grossman's tests fail to detect periodically collapsing rational bubbles as it can mimic a series close to the fundamentals of the asset price movement. I come to a conclusion that using this methodology, even if the data suggests no bubbles, it is wrong to state that a bubble does not exist.",
  },
  {
    slug: "carry-trades-currency-crashes",
    title: "Empirical Analysis of Carry Trades and Currency Crashes",
    subtitle: "Bachelor's Thesis - June 2026",
    tag: null,
    abstract: "This thesis empirically explores the carry trades and currency crash risk dynamics for JPY-funded G10 pairs over 2000 to 2025. The paper is motivated by Brunnermeier, Nagel, Pedersen (2009), where we explore the forward premium puzzle, as well as the systematic crash risk and the external stress triggers. The paper then further examines whether this dynamic is regime dynamic by exploring pre-Abenomics and post-Abenomics regimes. This paper further uses the Bai-Perron method to create data-based regimes as a robustness check.\n\nWe first establish that the JPY-funded carry trades deliver positive excess returns with negative skewness that persists across portfolios, indicating that crash risk is systematic and undiversifiable. We further find that speculator positioning creates crowding in high-yield carry pairs which significantly predicts crash risk, consistent with the crash risk mechanism documented in the literature.\n\nWe then test four external stress variables, VIX, TED Spread, OAS, and a modern reconstruction of the TED Spread as triggers to currency crash. We find shocks in VIX and OAS to be the strongest triggers for carry losses and position unwinding. TED Spread shows limited predictive power, suggesting interbank funding conditions alone are insufficient to trigger JPY-funded carry crashes.\n\nApplying the Abenomics regimes show pre-Abenomics to be a more favorable carry environment, characterized by stronger returns and deeper negative skewness, as well as a stronger transmission channel. The post-Abenomics period shows a deterioration in this transmission channel as unconventional and ultra-loose policies added noise and carry returns were driven by idiosyncratic exchange rate movements during a persistently compressed interest rate differential period.",
  },
];
