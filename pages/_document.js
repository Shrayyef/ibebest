/** @format */

import Document, { Html, Head, Main, NextScript } from "next/document";
import { i18n } from "next-i18next";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    // locale is in ctx.locale

    return { ...initialProps, locale: ctx?.locale || "es" };
  }

  render = () => {
    const { locale } = this.props.__NEXT_DATA__;
    if (process.env.NODE_ENV !== "production") {
      i18n?.reloadResources(locale);
    }
    return (
      <Html
        dir={this.props.locale === "ar" ? "rtl" : "ltr"}
        lang={this.props.locale}
      >
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  };
}

export default MyDocument;
