/** @format */

// import Head from "next/head";
// import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { login } from "../app/reducers/app";
import { wrapper } from "../app/store";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeBanner from "../components/Home/Banner";
import BigBanner from "../components/Home/BigBanner";
import ForYou from "../components/Home/ForYou";
import GreatOffers from "../components/Home/GreatOffers";
import MostWanted from "../components/Home/MostWanted";
import SmallBanner from "../components/Home/SmallBanner";
import TopRatings from "../components/Home/TopRatings";
import TopBar from "../components/TopBar";
import WrapperComponent from "../components/Wrapper";
import { BASE_URL } from "../hooks/useFetch";

const Home = ({
  pageProps: { mostWanted, topRating, greatOffers, forYou },
}) => {
  return (
    <WrapperComponent>
      <TopBar />
      <Header />
      <HomeBanner product={mostWanted?.data[0]} />
      <MostWanted data={mostWanted?.data || []} />
      <TopRatings data={topRating?.data || []} />
      <BigBanner />
      <GreatOffers data={greatOffers?.data || []} />
      <SmallBanner />
      <ForYou data={forYou?.data || []} />
      <Footer />
    </WrapperComponent>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ locale, req, params }) => {
      const { token } = req.cookies;
      let me = {};

      if (token) {
        const authJson = await fetch(`${BASE_URL}/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
            contentType: "application/json",
            Accept: "application/json",
          },
        });

        const res = await authJson.json();
        me = res;
        store.dispatch(login({ token, user: res }));
      }
      store.dispatch(login({ token: "asdasd", user: {} }));

      console.log("State on server", store.getState());

      try {
        const promiseAll = await Promise.all([
          fetch(`${BASE_URL}/product/most_wanted`, {
            method: "POST",
          }),
          fetch(`${BASE_URL}/product/top_rating`, {
            method: "POST",
          }),
          fetch(`${BASE_URL}/product/great_offers`, {
            method: "POST",
          }),
          fetch(`${BASE_URL}/categories/for_you`, {
            method: "POST",
          }),
        ]);
        const [mostWanted, topRating, greatOffers, forYou] = await Promise.all(
          promiseAll.map((res) => res.json())
        );

        return {
          props: {
            mostWanted,
            topRating,
            greatOffers,
            forYou,
            me,
            token: token ? token : "",
            ...(await serverSideTranslations(locale, ["common"])),
          },
        };
      } catch (err) {
        console.log(err);
        return { props: {} };
      }
    }
);

export default Home;
