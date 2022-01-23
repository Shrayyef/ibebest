/** @format */

import "../styles/main.scss";
import { wrapper } from "../app/store";
import { Provider } from "react-redux";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getDirection } from "../utils";
import { ConfigProvider } from "antd";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, ...rest }) {
  const router = useRouter();
  const dir = getDirection(router.locale);

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <ConfigProvider direction={dir}>
        <ThemeProvider>
          <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
            <Component {...props} />
          </AnimatePresence>
        </ThemeProvider>
      </ConfigProvider>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
