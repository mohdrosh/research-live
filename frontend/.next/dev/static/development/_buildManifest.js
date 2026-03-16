self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/_error": [
    "static/chunks/pages/_error.js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [
      {
        "source": "/research/research/api/:path*"
      },
      {
        "source": "/research/api/:path*"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/api/analyze-pdf"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()