/** @format */

const { i18n } = require("./next-i18next.config");

module.exports = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ["picsum.photos", "i-be-best-api.projects-dev.net"],
  },
  async headers() {
    return [
      {
        source: "/with-locale", // automatically handles all locales
        headers: [
          {
            key: "x-hello",
            value: "world",
          },
        ],
      },
    ];
  },
};
