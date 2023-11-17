/** @type {import('@remix-run/dev').AppConfig} */
export default {
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ["**/.*"],
  server: "./server.ts",
  serverBuildPath: "functions/[[path]].js",
  serverConditions: ["workerd", "worker", "browser"],
  serverDependenciesToBundle: "all",
  serverMainFields: ["browser", "module", "main"],
  serverMinify: true,
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  future: {
    v2_dev: true,
    v2_errorBoundary: false,
    v2_headers: true,
    v2_meta: false,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  routes: (defineRoutes) => {
    return defineRoutes((route) => {
      route("blog/posts", "views/Posts/index.tsx", () => {
        route("hello-world", "blogs/hello-world.mdx");
        route("react-native-modules", "blogs/react-native-modules.mdx");
        // route("spm-publish", "blogs/spm-publish.mdx");
      });
    });
  },
};
