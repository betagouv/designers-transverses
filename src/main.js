// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "@gouvfr/dsfr/dist/css/dsfr.min.css";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set language to french
  head.htmlAttrs = { lang: "fr" };

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
