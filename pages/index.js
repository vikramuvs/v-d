import Head from "next/head";
import NewHome from "../components/NewHome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home({ latestNews, latestEvents }) {
  return (
    <>
      <Head>
        <title>Ramaiah Institute of Technology, Bengaluru - 54</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link> */}
      </Head>
      <div className="font-body">
        <NewHome latestNews={latestNews} latestEvents={latestEvents} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const l_e = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/latest_events/"
  );
  const l_eJson = await l_e.json();

  const l_n = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/latest_news/"
  );
  const l_nJson = await l_n.json();

  return {
    props: {
      latestNews: l_nJson,
      latestEvents: l_eJson,
    }, // will be passed to the page component as props
  };
}
