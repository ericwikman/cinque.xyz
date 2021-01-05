const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Cinque Documentation",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "ericwikman/cinque.xyz",
    editLinks: true,
    docsDir: "docs/src",
    editLinkText: "",
    lastUpdated: false,
    sidebarDepth: 2,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Shoulders of Giants",
        link: "/giant/",
      },
      {
        text: "Features",
        link: "/feature/",
      },
      {
        text: "Functions",
        link: "/function/",
      },
      {
        text: "Shortcuts",
        link: "/shortcut/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: ["", "roadmap"],
        },
      ],
      "/giant/": [
        {
          title: "Shoulders of Giants",
          collapsable: false,
          children: ["", "visicalc", "lotus", "supercalc"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],

  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-task-lists"));
    },
  },
};
