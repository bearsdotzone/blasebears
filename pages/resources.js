import Head from "next/head";
import HeaderComponent from "../components/common/Header/header";
import FooterComponent from "../components/common/Footer/footer";
import { getPostData } from "../lib/pages";

export default function Resources({ meta, content }) {
  return (
    <div>
      <Head>
        <title>Internet League Blaseball Fans Web Ring</title>
        <meta
          name="description"
          content="Link your favorite quaint web Blaseball fan sites together!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderComponent></HeaderComponent>

      <main>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>

      <FooterComponent></FooterComponent>
    </div>
  );
}

export async function getStaticProps(context) {
  return getPostData("resources.md");
}
