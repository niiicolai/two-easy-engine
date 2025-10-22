import { h } from "vue";
import DefaultTheme from "vitepress/theme";

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "nav-bar-content-after": () =>
        h(
          "a",
          {
            style:
              "border-left: 1px solid var(--vp-c-divider); display: flex; gap: 0.5em; text-align: center; align-items: center; padding-left: 1em; margin-left: 1em; font-size: 0.8em;",
            href: "https://www.npmjs.com/package/two-easy-engine",
            target: "_blank",
          },
          [
            h("span", {}, "Latest: "),
            h("img", {
              src: "https://img.shields.io/npm/v/two-easy-engine.svg",
              alt: "npm version",
              style: "margin-right: 8px; height: 20px;",
            }),
          ]
        ),
    });
  },
};
